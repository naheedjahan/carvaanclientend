import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Alert, Dimensions } from 'react-native';
import { Icon, Avatar, Image, Input, Button } from 'react-native-elements';
import { map, size, filter } from 'lodash';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import uuid from 'random-uuid-v4';
import Modal from '../Modal';

import { firebaseApp } from '../../utils/firebase';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
const db = firebase.firestore(firebaseApp);

const widthScreen = Dimensions.get('window').width;

export default function AddRestaurantForm(props) {
  const { toastRef, setIsLoading, navigation } = props;
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantAddress, setRestaurantAddress] = useState('');
  const [restaurantDescription, setRestaurantDescription] = useState('');
  const [imagesSelected, setImagesSelected] = useState([]);
  const [isVisibleMap, setIsVisibleMap] = useState(false);
  const [locationRestaurant, setLocationRestaurant] = useState(null);

  const addRestaurant = () => {
    if (!restaurantName || !restaurantAddress || !restaurantDescription) {
      toastRef.current.show('Every field of the form is obligatory');
    } else if (size(imagesSelected) === 0) {
      toastRef.current.show('The restaurant must have at least one photo');
    } else if (!locationRestaurant) {
      toastRef.current.show('You have to locate the restaurant on the map');
    } else {
      setIsLoading(true);
      uploadImageStorage().then((response) => {
        db.collection('restaurants')
          .add({
            name: restaurantName,
            address: restaurantAddress,
            description: restaurantDescription,
            location: locationRestaurant,
            images: response,
            rating: 0,
            ratingTotal: 0,
            quantityVoting: 0,
            createAt: new Date(),
            createBy: firebase.auth().currentUser.uid,
          })
          .then(() => {
            setIsLoading(false);
            navigation.navigate('restaurants');
          })
          .catch(() => {
            setIsLoading(false);
            toastRef.current.show(
              'Failed to upload restaurant, please try later'
            );
          });
      });
    }
  };

  const uploadImageStorage = async () => {
    const imageBlob = [];

    await Promise.all(
      map(imagesSelected, async (image) => {
        const response = await fetch(image);
        const blob = await response.blob();
        const ref = firebase.storage().ref('restaurants').child(uuid());
        await ref.put(blob).then(async (result) => {
          await firebase
            .storage()
            .ref(`restaurants/${result.metadata.name}`)
            .getDownloadURL()
            .then((photoUrl) => {
              imageBlob.push(photoUrl);
            });
        });
      })
    );

    return imageBlob;
  };

  return (
    <ScrollView style={styles.scrollView}>
      <ImageRestaurant imagenRestaurant={imagesSelected[0]} />
      <FormAdd
        setRestaurantName={setRestaurantName}
        setRestaurantAddress={setRestaurantAddress}
        setRestaurantDescription={setRestaurantDescription}
        setIsVisibleMap={setIsVisibleMap}
        locationRestaurant={locationRestaurant}
      />
      <UploadImage
        toastRef={toastRef}
        imagesSelected={imagesSelected}
        setImagesSelected={setImagesSelected}
      />
      <Button
        title='Create Restaurant'
        onPress={addRestaurant}
        buttonStyle={styles.btnAddRestaurant}
      />
      <Map
        isVisibleMap={isVisibleMap}
        setIsVisibleMap={setIsVisibleMap}
        setLocationRestaurant={setLocationRestaurant}
        toastRef={toastRef}
      />
    </ScrollView>
  );
}

function ImageRestaurant(props) {
  const { imagenRestaurant } = props;

  return (
    <View style={styles.viewPhoto}>
      <Image
        source={
          imagenRestaurant
            ? { uri: imagenRestaurant }
            : require('../../../assets/img/no-image.png')
        }
        style={{ width: widthScreen, height: 200 }}
      />
    </View>
  );
}

function FormAdd(props) {
  const {
    setRestaurantName,
    setRestaurantAddress,
    setRestaurantDescription,
    setIsVisibleMap,
    locationRestaurant,
  } = props;

  return (
    <View style={styles.viewForm}>
      <Input
        placeholder='Name of the restaurant'
        containerStyle={styles.input}
        onChange={(e) => setRestaurantName(e.nativeEvent.text)}
      />
      <Input
        placeholder='Address'
        containerStyle={styles.input}
        onChange={(e) => setRestaurantAddress(e.nativeEvent.text)}
        rightIcon={{
          type: 'material-community',
          name: 'google-maps',
          color: locationRestaurant ? '#00a680' : '#c2c2c2',
          onPress: () => setIsVisibleMap(true),
        }}
      />
      <Input
        placeholder='Restaurant description'
        multiline={true}
        inputContainerStyle={styles.textArea}
        onChange={(e) => setRestaurantDescription(e.nativeEvent.text)}
      />
    </View>
  );
}

function Map(props) {
  const {
    isVisibleMap,
    setIsVisibleMap,
    setLocationRestaurant,
    toastRef,
  } = props;
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const resultPermissions = await Permissions.askAsync(
        Permissions.LOCATION
      );
      const statusPermissions = resultPermissions.permissions.location.status;

      if (statusPermissions !== 'granted') {
        toastRef.current.show(
          'You have to accept the location permits to create a restaurant',
          3000
        );
      } else {
        const loc = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        });
      }
    })();
  }, []);

  const confirmLocation = () => {
    setLocationRestaurant(location);
    toastRef.current.show('Location saved correctly');
    setIsVisibleMap(false);
  };

  return (
    <Modal isVisible={isVisibleMap} setIsVisible={setIsVisibleMap}>
      <View>
        {location && (
          <MapView
            style={styles.mapStyle}
            initialRegion={location}
            showsUserLocation={true}
            onRegionChange={(region) => setLocation(region)}
          >
            <MapView.Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              draggable
            />
          </MapView>
        )}
        <View style={styles.viewMapBtn}>
          <Button
            title='Save Location'
            containerStyle={styles.viewMapBtnContainerSave}
            buttonStyle={styles.viewMapBtnSave}
            onPress={confirmLocation}
          />
          <Button
            title='Cancel Location'
            containerStyle={styles.viewMapBtnContainerCancel}
            buttonStyle={styles.viewMapBtnCancel}
            onPress={() => setIsVisibleMap(false)}
          />
        </View>
      </View>
    </Modal>
  );
}

function UploadImage(props) {
  const { toastRef, imagesSelected, setImagesSelected } = props;

  const imageSelect = async () => {
    const resultPermissions = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (resultPermissions === 'denied') {
      toastRef.current.show(
        'It is necessary to accept the permissions of the gallery, if you have rejected them you have to go to settings and activate them manually.',
        3000
      );
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (result.cancelled) {
        toastRef.current.show(
          'You have closed the gallery without selecting any image',
          2000
        );
      } else {
        setImagesSelected([...imagesSelected, result.uri]);
      }
    }
  };

  const removeImage = (image) => {
    Alert.alert(
      'Delete image',
      'Are you sure you want to delete the image?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: () => {
            setImagesSelected(
              filter(imagesSelected, (imageUrl) => imageUrl !== image)
            );
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.viewImages}>
      {size(imagesSelected) < 4 && (
        <Icon
          type='material-community'
          name='camera'
          color='#7a7a7a'
          containerStyle={styles.containerIcon}
          onPress={imageSelect}
        />
      )}
      {map(imagesSelected, (imageRestaurant, index) => (
        <Avatar
          key={index}
          style={styles.miniatureStyle}
          source={{ uri: imageRestaurant }}
          onPress={() => removeImage(imageRestaurant)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
  },
  viewForm: {
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    width: '100%',
    padding: 0,
    margin: 0,
  },
  btnAddRestaurant: {
    backgroundColor: '#00a680',
    margin: 20,
  },
  viewImages: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  containerIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    height: 70,
    width: 70,
    backgroundColor: '#e3e3e3',
  },
  miniatureStyle: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  viewPhoto: {
    alignItems: 'center',
    height: 200,
    marginBottom: 20,
  },
  mapStyle: {
    width: '100%',
    height: 550,
  },
  viewMapBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  viewMapBtnContainerCancel: {
    paddingLeft: 5,
  },
  viewMapBtnCancel: {
    backgroundColor: '#a60d0d',
  },
  viewMapBtnContainerSave: {
    paddingRight: 5,
  },
  viewMapBtnSave: {
    backgroundColor: '#00a680',
  },
});

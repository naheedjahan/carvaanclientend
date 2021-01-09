import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
  Platform,
  Picker,
  AsyncStorage,
  View,
  TextInput,
} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { Button, Select, Input, Header, Switch } from '../../components';
//import { Button } from "../components";
import { Images, argonTheme } from '../../constants';
import { HeaderHeight } from '../../constants/utils';
const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;
import { ButtonGroup } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';

import { baseUrl } from '../../baseUrl/baseUrl';
class Driver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fare: 0,
    };
  }

  openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    this.processImage(pickerResult.uri);
  };
  getImageFromCamera = async () => {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (
      cameraPermission.status === 'granted' &&
      cameraRollPermission.status === 'granted'
    ) {
      // Display the camera to the user and wait for them to take a photo or to cancel
      // the action
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!result.cancelled) {
        this.processImage(result.uri);
      }
    }
  };
  processImage = async (imageUri) => {
    let processedImage = await ImageManipulator.manipulateAsync(
      imageUri,
      [{ resize: { width: 400 } }],
      { format: 'png' }
    );
    console.log(processedImage);
    let localUri = processedImage.uri;
    let filename = localUri.split('/').pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    this.setState({ imageUrl: processedImage.uri });
    // Upload the image using the fetch and FormData APIs
    let img = {
      uri: localUri,
      name: filename,
      type,
    };
    this.setState({ imgserver: img });
  };
  handleRegister = async () => {
    const token = await AsyncStorage.getItem('DriverToken');
    console.log('yahan a raha');
    let formData = new FormData();

    formData.append('fare', this.state.fare);

    formData.append('image', this.state.imgserver);
    fetch(baseUrl + 'api/driver/addLicence', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-auth-token': token,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          if (!data.errors) {
            console.log('flag---> check');
            console.log(data);
          } else {
            data.errors.forEach((error) => alert(error.msg));
          }
        } catch (e) {
          console.log('error hai', e);
        }
      });
  };

  render() {
    const { navigation } = this.props;
    const buttons = ['Driver', 'Without Driver'];
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <Block style={{ marginBottom: theme.SIZES.BASE }}>
              <Header
                transparent
                white
                title='Profile'
                navigation={this.props.navigation}
              />
            </Block>
            <Block left style={styles.nameInfo}>
              {/* <Text bold size={28} color="white">
                      Jessica Jones, 27
                    </Text> */}
              <Text
                bold
                size={16}
                color='white'
                style={{ marginTop: 10, marginLeft: 10 }}
              >
                Enter Your Vehicle Details
              </Text>
            </Block>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '-20%', marginBottom: 60 }}
            >
              <Block flex style={styles.profileCard}>
                <KeyboardAvoidingView
                  style={{ flex: 1 }}
                  behavior='padding'
                  enabled
                >
                  <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                    <Input
                      right
                      placeholder='Fair Per Day'
                      iconContent={<Block />}
                      value={this.state.value}
                      onChangeText={(value) => this.setState({ fare: value })}
                    />
                  </Block>
                  <Block flex left style={{ marginLeft: 5 }}>
                    <Text bold color='#525F7F' size={15}>
                      Upload Your Driving Licence :
                    </Text>
                  </Block>
                  <Block row space='between'>
                    <Block middle>
                      <Image
                        source={{ uri: this.state.imageUrl }}
                        // loadingIndicatorSource={require('./images/logo.png')}
                        style={{
                          margin: 10,
                          width: 80,
                          height: 60,
                          backgroundColor: '#e3e3e3',
                        }}
                      />
                      <Text
                        bold
                        color='#525F7F'
                        size={15}
                        style={{ marginTop: 10 }}
                      >
                        Driving Licence
                      </Text>
                    </Block>
                    <Block middle>
                      <Icon
                        raised
                        reverse
                        name={'camera'}
                        type='font-awesome'
                        color={argonTheme.COLORS.SUCCESS}
                        onPress={this.getImageFromCamera}
                      />
                      <Text
                        bold
                        color='#525F7F'
                        size={15}
                        style={{ marginTop: 25 }}
                      >
                        Camera
                      </Text>
                    </Block>
                    <Block middle>
                      <Icon
                        raised
                        reverse
                        name={'picture-o'}
                        type='font-awesome'
                        color={argonTheme.COLORS.SUCCESS}
                        onPress={this.openImagePickerAsync}
                      />

                      <Text
                        bold
                        color='#525F7F'
                        size={15}
                        style={{ marginTop: 25 }}
                      >
                        Gallery
                      </Text>
                    </Block>
                  </Block>

                  <Block
                    middle
                    row
                    space='evenly'
                    style={{ paddingBottom: 14, marginTop: 50 }}
                  >
                    <Button
                      small
                      color='primary'
                      // style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
                    >
                      Cancel
                    </Button>
                    <Button
                      // onPress={this.handleSearch}
                      onPress={() => this.handleRegister()}
                      small
                      color='primary'
                      // style={{ backgroundColor: argonTheme.COLORS.PRIMARY }}
                    >
                      Upload
                    </Button>
                  </Block>
                </KeyboardAvoidingView>
              </Block>
            </ScrollView>
          </ImageBackground>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1,
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
    //  marginTop:100,
  },
  profileBackground: {
    width: width,
    height: height / 2,
  },
  nameInfo: {
    marginTop: 10,
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 100,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  info: {
    paddingHorizontal: 40,
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -80,
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0,
  },

  divider: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure,
  },
});

export default Driver;

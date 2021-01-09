import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
  AsyncStorage,
  TouchableWithoutFeedback,
} from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';
import React from 'react';
import { Component } from 'react';
import { Header, Switch, Button } from '../../components';
import { Block, theme } from 'galio-framework';
import PropTypes from 'prop-types';
import { Images, argonTheme } from '../../constants';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
const { width, height } = Dimensions.get('screen');
class Home extends Component {
  state = {
    expoPushToken: '',
    notification: {},
  };

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      let token = await Notifications.getExpoPushTokenAsync();
      console.log('ty' + token);
      console.log('coming here');
      this.setState({ expoPushToken: token });
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }
    this.handleRegister();
  };
  handleRegister = async () => {
    console.log('yahan ara hai');
    const token = await AsyncStorage.getItem('Ownertoken');
    console.log(token);
    console.log('yahan a raha');
    // localhost means your mobile cannot access this
    fetch('http://192.168.1.141:5000/api/owner/getOwner', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
      body: JSON.stringify({
        token: this.state.expoPushToken,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          if (!data.errors) {
            console.log('yahan ghga raha');
          } else {
            data.errors.forEach((error) => alert(error.msg));
          }
        } catch (e) {
          console.log('error hai', e);
        }
      });
  };
  componentDidMount() {
    this.registerForPushNotificationsAsync();
    // this._notificationSubscription = Notifications.addListener(
    //   this._handleNotification
    // );
  }

  _handleNotification = (notification) => {
    Vibration.vibrate();
    Alert.alert(' i will navigate it any screen');
    this.setState({ notification: notification });
    console.log(notification);
  };

  sendNotification = async () => {
    const message = {
      to: this.state.expoPushToken,
      sound: 'default',
      title: 'Original Title',
      body: 'And here is the body!',
      data: { data: 'now check if goes goes here' },
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  };
  // registerForPushNotificationsAsync = async () => {
  //   console.log('coming here');
  //   if (Constants.isDevice) {
  //     const { status: existingStatus } = await Permissions.getAsync(
  //       Permissions.NOTIFICATIONS
  //     );
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== 'granted') {
  //       const { status } = await Permissions.askAsync(
  //         Permissions.NOTIFICATIONS
  //       );
  //       finalStatus = status;
  //     }
  //     if (finalStatus !== 'granted') {
  //       alert('Failed to get push token for push notification!');
  //       return;
  //     }
  //     let token = await Notifications.getExpoPushTokenAsync();
  //     console.log(token);
  //     this.setState({ expoPushToken: token });
  //   } else {
  //     alert('Must use physical device for Push Notifications');
  //   }

  //   if (Platform.OS === 'android') {
  //     Notifications.createChannelAndroidAsync('default', {
  //       name: 'default',
  //       sound: true,
  //       priority: 'max',
  //       vibrate: [0, 250, 250, 250],
  //     });
  //   }
  //   await AsyncStorage.setItem('Ownertoken', data.token);
  //   const token = await AsyncStorage.getItem('Ownertoken');
  //   //----
  //   const response = await fetch(
  //     'http://192.168.1.141:5000/api/owner/getOwner',
  //     {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Accept-encoding': 'gzip, deflate',
  //         'Content-Type': 'application/json',
  //         'x-auth-token': token,
  //       },
  //       body: JSON.stringify({
  //         token: this.state.expoPushToken,
  //       }),
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then(async (data) => {
  //       try {
  //         if (!data.errors) {
  //           console.log(data);
  //         } else {
  //           data.errors.forEach((error) => alert(error.msg));
  //         }
  //       } catch (e) {
  //         console.log('error hai', e);
  //       }
  //     });

  // };
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.articles}
      >
        <Block style={{ marginBottom: theme.SIZES.BASE }}>
          <View
            style={{
              // position: 'absolute',
              // left: 0,
              //right: 0,
              //bottom: 0,
              // justifyContent: 'center',
              // marginBottom: 20,
              //alignItems: 'center',
              marginBottom: theme.SIZES.BASE,
              backgroundColor: theme.COLORS.WHITE,
              marginVertical: theme.SIZES.BASE,
              borderWidth: 0,
              minHeight: 114,
              marginBottom: 16,
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('TouristGuide')}
            >
              <View
                style={{
                  borderRadius: 3,
                  elevation: 1,
                  overflow: 'hidden',
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  marginRight: theme.SIZES.BASE,
                  marginLeft: theme.SIZES.BASE,
                  marginBottom: theme.SIZES.BASE,
                }}
              >
                <Image
                  style={{
                    height: 350,
                    width: 'auto',
                    opacity: 0.8,
                  }}
                  resizeMode='cover'
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=487&q=80',
                  }}
                />

                <Block
                  flex
                  space='between'
                  style={{ padding: theme.SIZES.BASE / 2 }}
                >
                  <Text
                    size={30}
                    style={{ flex: 1, flexWrap: 'wrap', paddingBottom: 6 }}
                  >
                    Become A Tourist Guide
                  </Text>
                </Block>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Block>
      </ScrollView>
    );
  }
}

export default Home;

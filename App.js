import React from 'react';
import { Image, Dimensions } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Block, GalioProvider } from 'galio-framework';
import { NavigationContainer } from '@react-navigation/native';
///-----------------------------
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Start from './screens/Onboarding';
import CarOwner from './SpScreens/CarOwner';
import login from './screens/login';
import loginSp from './SpScreens/Splogin';
import Register from './screens/Register';
import Screens from './navigation/Screens';
import CarOwnerMenu from './navigation/CarOwner';

//-----------------------------------

import { Icon, Header } from './components';
const { width } = Dimensions.get('screen');
//------------------------------------
// Before rendering any navigation stack
import { enableScreens } from 'react-native-screens';
enableScreens();

// ye navigation folder me jo screend hen
import { Images, articles, argonTheme } from './constants';

////====
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
////=====

// cache app images
const assetImages = [
  Images.Onboarding,
  Images.LogoOnboarding,
  Images.Logo,
  Images.Pro,
  Images.ArgonLogo,
  Images.iOSLogo,
  Images.androidLogo,
];

// cache product images
articles.map((article) => assetImages.push(article.image));

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };
  

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        // <Provider store={store}>
        <NavigationContainer>
          <Block flex>
            <Stack.Navigator mode='card' headerMode='none'>
              <Stack.Screen
                name='Onboarding'
                component={Start}
                option={{
                  headerTransparent: true,
                }}
              />
              <Stack.Screen name='login' component={login} />
              <Stack.Screen
                name='Account' //App
                component={Register} // i'm changing Home and Appstack from here
              />
              <Stack.Screen name='Screens' component={Screens} />
              <Stack.Screen
                name='loginSp'
                component={loginSp}
                options={{
                  headerTransparent: true,
                }}
              />
              <Stack.Screen
                name='CarOwner' //App
                component={CarOwner} // i'm changing Home and Appstack from here
              />
              <Stack.Screen
                name='CarOwnerMenu'
                component={CarOwnerMenu}
                options={{
                  headerTransparent: true,
                }}
              />
            </Stack.Navigator>
          </Block>
        </NavigationContainer>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([...cacheImages(assetImages)]);
  };

  _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
  
}
//---------------- test code
// import React from 'react';
// import { Text, View, Button, Vibration, Platform, Alert } from 'react-native';
// import { Notifications } from 'expo';
// import * as Permissions from 'expo-permissions';
// import Constants from 'expo-constants';

// export default class AppContainer extends React.Component {
//   state = {
//     expoPushToken: '',
//     notification: {},
//   };

//   registerForPushNotificationsAsync = async () => {
//     if (Constants.isDevice) {
//       const { status: existingStatus } = await Permissions.getAsync(
//         Permissions.NOTIFICATIONS
//       );
//       let finalStatus = existingStatus;
//       if (existingStatus !== 'granted') {
//         const { status } = await Permissions.askAsync(
//           Permissions.NOTIFICATIONS
//         );
//         finalStatus = status;
//       }
//       if (finalStatus !== 'granted') {
//         alert('Failed to get push token for push notification!');
//         return;
//       }
//       let token = await Notifications.getExpoPushTokenAsync();
//       console.log(token);
//       this.setState({ expoPushToken: token });
//     } else {
//       alert('Must use physical device for Push Notifications');
//     }

//     if (Platform.OS === 'android') {
//       Notifications.createChannelAndroidAsync('default', {
//         name: 'default',
//         sound: true,
//         priority: 'max',
//         vibrate: [0, 250, 250, 250],
//       });
//     }
//   };

//   componentDidMount() {
//     this.registerForPushNotificationsAsync();
//     this._notificationSubscription = Notifications.addListener(
//       this._handleNotification
//     );
//   }

//   _handleNotification = (notification) => {
//     Vibration.vibrate();
//     Alert.alert(' i will navigate it any screen');
//     this.setState({ notification: notification });
//     console.log(notification);
//   };

//   sendNotification = async () => {
//     const message = {
//       to: this.state.expoPushToken,
//       sound: 'default',
//       title: 'Original Title',
//       body: 'And here is the body!',
//       data: { data: 'now check if goes goes here' },
//     };

//     await fetch('https://exp.host/--/api/v2/push/send', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Accept-encoding': 'gzip, deflate',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(message),
//     });
//   };

//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           alignItems: 'center',
//           justifyContent: 'space-around',
//         }}>
//         <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//           <Text>Origin: {this.state.notification.origin}</Text>
//           <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
//         </View>
//         <Button
//           title={'Press to Send Notification'}
//           onPress={this.sendNotification}
//         />
//       </View>
//     );
//   }
// }

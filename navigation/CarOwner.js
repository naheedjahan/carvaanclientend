// import Home from '../SpScreens/SpHome';

// import Pro from '../SpScreens/Pro';
// import CarDetails from '../SpScreens/CarDetails';
// import Sp from '../SpScreens/Sp';
// import Driver from '../SpScreens/Driver';
// import AboutUs from '../screens/AboutUs';
// import ContactUs from '../screens/ContactUs';
// import Profile from '../SpScreens/OwnerProfile';
// import Reviews from '../screens/Reviews';
// import RegisterCar from '../SpScreens/RegisterCar';
// import MyBookings from '../SpScreens/MyBookings';
// import MyBookingsDetails from '../SpScreens/MyBookingDetails';                                                     
// import SignOut from '../SpScreens/SignOut';
// import React from 'react';
// import { Easing, Animated, Dimensions } from 'react-native';
// const { width } = Dimensions.get('screen');
// import {
//   View,
//   Platform,
//   Image,
//   StyleSheet,
//   Text,
//   // SafeAreaView,
//   ScrollView,
//   ToastAndroid,
// } from 'react-native';
// import {
//   createDrawerNavigator,
//   DrawerItem,
//   SafeAreaView,
//   DrawerItemList,
//   DrawerContentScrollView,
// } from '@react-navigation/drawer';
// import { Header } from '../components';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { Icon } from 'react-native-elements';
// import TouristGuide from '../SpScreens/TouristGuide';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// function FavoriteStack(props) {
//   return (
//     <Stack.Navigator initialRouteName='Menu'>
//       <Stack.Screen
//         name='SignOut'
//         component={SignOut}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               title=''
//               back
//               white
//               transparent
//               navigation={navigation}
//               scene={scene}
//             />
//           ),

//           headerLeft: () => (
//             <Icon
//               name='menu'
//               size={24}
//               color='white'
//               onPress={() => navigation.toggleDrawer()}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// function BookingStack(props) {
//   return (
//     <Stack.Navigator initialRouteName='Menu'>
//       <Stack.Screen
//         name='MyBookins'
//         component={MyBookings}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               title=''
//               back
//               white
//               transparent
//               navigation={navigation}
//               scene={scene}
//             />
//           ),

//           headerLeft: () => (
//             <Icon
//               name='menu'
//               size={24}
//               color='white'
//               onPress={() => navigation.toggleDrawer()}
//             />
//           ),
//         }}
//       />
//        <Stack.Screen
//         name='MyBookinsDetails'
//         component={MyBookingsDetails}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               title=''
//               back
//               white
//               transparent
//               navigation={navigation}
//               scene={scene}
//             />
//           ),

//           headerLeft: () => (
//             <Icon
//               name='menu'
//               size={24}
//               color='white'
//               onPress={() => navigation.toggleDrawer()}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// function ProfileStack(props) {
//   return (
//     <Stack.Navigator initialRouteName='Menu'>
//       <Stack.Screen
//         name='Profile'
//         component={Profile}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               title=''
//               back
//               white
//               transparent
//               navigation={navigation}
//               scene={scene}
//             />
//           ),

//           headerLeft: () => (
//             <Icon
//               name='menu'
//               size={24}
//               color='white'
//               onPress={() => navigation.toggleDrawer()}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// function MenuStack(props) {
//   return (
//     <Stack.Navigator initialRouteName='Menu'>
//       <Stack.Screen
//         name='Reviews'
//         component={Reviews}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               title=''
//               back
//               white
//               transparent
//               navigation={navigation}
//               scene={scene}
//             />
//           ),

//           headerLeft: () => (
//             <Icon
//               name='menu'
//               size={24}
//               color='white'
//               onPress={() => navigation.toggleDrawer()}
//             />
//           ),
//         }}
//       />
//       {/* <Stack.Screen
//         name='DishDetail'
//         component={DishDetail}
//         options={{
//           headerStyle: {
//             backgroundColor: '#512DA8',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             color: '#fff',
//           },
//         }}
//       /> */}
//     </Stack.Navigator>
//   );
// }
// function CarStack(props) {
//   return (
//     <Stack.Navigator initialRouteName='Pro'>
//       <Stack.Screen
//         name='Pro'
//         component={Pro}
//         options={{
         
//         }}
//       />
//        <Stack.Screen
//         name='CarDetails'
//         component={CarDetails}
//         options={{
         
//         }}
//       /> 
//     </Stack.Navigator>
//   );
// }
// function HomeStack(props) {
//   return (
//     <Stack.Navigator mode='card' >
//       <Stack.Screen
//         name='Home'
//         component={Home}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               title='Home'
//               search
//               options
//               navigation={navigation}
//               scene={scene}
//             />
//           ),
//           cardStyle: { backgroundColor: '#F8F9FE' },
//         }}
//       />

//       {/* <Stack.Screen
//         name='Sp'
//         component={Sp}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               tabs={tabs.categories}
//               search
//               title='Title'
//               navigation={navigation}
//               scene={scene}
//             />
//           ),
//           cardStyle: { backgroundColor: '#FFFFFF' },
//           headerTransparent: true,
//         }}
//       /> */}
//       <Stack.Screen
//         name='RegisterCar'
//         component={MyTabs}
//         options={{
//           headerShown: false
//         }}
//       />
     
//       <Stack.Screen
//         name='TouristGuide'
//         component={TouristGuide}
//         // options={{
//         //   header: ({ navigation, scene }) => (
//         //     <Header
//         //       back
//         //       //tabs={tabs.categories}
//         //       title='Title'
//         //       navigation={navigation}
//         //     />
//         //   ),
//         // }}
//       />
//       <Stack.Screen
//         name='Driver'
//         component={Driver}
//          options={{
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// function ReservationStack(props) {
//   return (
//     <Stack.Navigator initialRouteName='Menu'>
//       <Stack.Screen
//         name='Sp'
//         component={Sp}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               title=''
//               back
//               white
//               transparent
//               navigation={navigation}
//               scene={scene}
//             />
//           ),
//           headerLeft: () => (
//             <Icon
//               name='menu'
//               size={24}
//               color='white'
//               onPress={() => navigation.toggleDrawer()}
//             />
//           ),
//         }}
//       />
      
//     </Stack.Navigator>
//   );
// }
// function ContactStack(props) {
//   return (
//     <Stack.Navigator
//       initialRouteName='Menu'
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen
//         name='Contact Us'
//         component={ContactUs}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               title=''
//               back
//               white
//               transparent
//               navigation={navigation}
//               scene={scene}
//             />
//           ),

//           headerLeft: () => (
//             <Icon
//               name='menu'
//               size={24}
//               color='white'
//               onPress={() => navigation.toggleDrawer()}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// function AboutStack(props) {
//   return (
//     <Stack.Navigator initialRouteName='Menu' >
//       <Stack.Screen
//         name='About Us'
//         component={AboutUs}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               title=''
//               back
//               white
//               transparent
//               navigation={navigation}
//               scene={scene}
//             />
//           ),
//           headerTransparent: true,
//           headerLeft: () => (
//             <Icon
//               name='menu'
//               size={24}
//               color='white'
//               onPress={() => navigation.toggleDrawer()}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// // function LoginStack(props) {
// //   return (
// //     <Stack.Navigator initialRouteName='Menu'>
// //       <Stack.Screen
// //         name='Login'
// //         component={Login}
// //         options={{
// //           headerStyle: {
// //             backgroundColor: '#512DA8',
// //           },
// //           headerTintColor: '#fff',
// //           headerTitleStyle: {
// //             color: '#fff',
// //           },
// //           headerLeft: () => (
// //             <Icon
// //               name='menu'
// //               size={24}
// //               color='white'
// //               onPress={() => navigation.toggleDrawer()}
// //             />
// //           ),
// //         }}
// //       />
// //     </Stack.Navigator>
// //   );
// // }
// // function RegisterStack(props) {
// //   return (
// //     <Stack.Navigator initialRouteName='Menu'>
// //       <Stack.Screen
// //         name='Register'
// //         component={Register}
// //         options={{
// //           headerStyle: {
// //             backgroundColor: '#512DA8',
// //           },
// //           headerTintColor: '#fff',
// //           headerTitleStyle: {
// //             color: '#fff',
// //           },
// //           headerLeft: () => (
// //             <Icon
// //               name='menu'
// //               size={24}
// //               color='white'
// //               onPress={() => navigation.toggleDrawer()}
// //             />
// //           ),
// //         }}
// //       />
// //     </Stack.Navigator>
// //   );
// // }
// //---------
// function CustomDrawerContentComponent(props) {
//   return (
//     <DrawerContentScrollView {...props} style={styles.container}>
//       <View style={styles.drawerHeader}>
//         {/* <View style={{ flex: 1 }}>
//           <Image
//             source={require('./images/logo.png')}
//             style={styles.drawerImage}
//           />
//         </View> */}
//         <View style={{ flex: 2 }}>
//           <Text style={styles.drawerHeaderText}>CarVaan</Text>
//         </View>
//       </View>

//       <DrawerItemList {...props} />
//     </DrawerContentScrollView>
//   );
// }
// function MyDrawer() {
//   return (
//     <Drawer.Navigator
//       style={{ flex: 1 }}
//       drawerContent={(props) => <CustomDrawerContentComponent {...props} />}
//       drawerStyle={{
//         backgroundColor: 'white',
//         width: width * 0.8,
//       }}
//       drawerContentOptions={{
//         activeTintcolor: 'white',
//         inactiveTintColor: '#000',
//         activeBackgroundColor: 'transparent',
//         // itemStyle: {
//         //   width: width * 0.75,
//         //   backgroundColor: 'transparent',
//         //   paddingVertical: 16,
//         //   paddingHorizonal: 12,
//         //   justifyContent: 'center',
//         //   alignContent: 'center',
//         //   alignItems: 'center',
//         //   overflow: 'hidden',
//         // },
//         labelStyle: {
//           fontSize: 18,
//           marginLeft: 12,
//           fontWeight: 'normal',
//         },
//       }}
//     >
//       {/* <Drawer.Screen
//         name='Login'
//         component={MyTabs}
//         options={{
//           drawerIcon: ({ tintColor }) => (
//             <Icon
//               name='sign-in'
//               type='font-awesome'
//               size={24}
//               color={tintColor}
//             />
//           ),
//         }}
//       /> */}
//       <Drawer.Screen
//         name='Home'
//         component={HomeStack}
//         options={{
//           drawerIcon: ({ tintColor }) => (
//             <Icon name='home' type='font-awesome' size={24} color={tintColor} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name='Profile'
//         component={ProfileStack}
//         options={{
//           drawerIcon: ({ tintColor }) => (
//             <Icon
//               name='user'
//               type='font-awesome'
//               size={24}
//               color={tintColor}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name='My Bookings'
//         component={BookingStack}
//         options={{
//           drawerIcon: ({ tintColor }) => (
//             <Icon name='list' type='font-awesome' size={24} color={tintColor} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name='Contact Us'
//         component={ContactStack}
//         options={{
//           drawerIcon: ({ tintColor }) => (
//             <Icon
//               name='address-card'
//               type='font-awesome'
//               size={22}
//               color={tintColor}
//             />
//           ),
//         }}
//       />

//       <Drawer.Screen
//         name='option'
//         component={ReservationStack}
//         options={{
//           drawerIcon: ({ tintColor }) => (
//             <Icon
//               name='info-circle'
//               type='font-awesome'
//               size={22}
//               color={tintColor}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name='Sign Out'
//         component={FavoriteStack}
//         options={{
//           drawerIcon: ({ tintColor }) => (
//             <Icon
//               name='sign-out'
//               type='font-awesome'
//               size={22}
//               color={tintColor}
//             />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// }
// class CarOwner extends React.Component {
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           paddingTop:
//             Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,
//         }}
//       >
//         <MyDrawer />
//       </View>
//     );
//   }
// }

// function MyTabs() {
//   return (
//     <Tab.Navigator  >
//       <Tab.Screen
//         name='Register Car'
//         component={RegisterCar}
//         options={{
//           tabBarIcon: ({ tintColor, focused }) => (
//             <Icon
//               name='car'
//               type='font-awesome'
//               size={24}
//               iconStyle={{ color: tintColor }}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name='Car Details'
//         component={CarStack}
//         options={{
//           tabBarIcon: ({ tintColor, focused }) => (
//             <Icon
//               name='info-circle'
//               type='font-awesome'
//               size={24}
//               iconStyle={{ color: tintColor }}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   drawerHeader: {
//     backgroundColor: '#512DA8',
//     height: 140,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//     flexDirection: 'row',
//   },
//   drawerHeaderText: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   drawerImage: {
//     margin: 10,
//     width: 80,
//     height: 60,
//   },
// });
// export default CarOwner;
import React from 'react';
import { Easing, Animated, Dimensions } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../SpScreens/SpHome';
import Request from '../SpScreens/Requests';
import Pro from '../SpScreens/Pro';
import CarDetails from '../SpScreens/CarDetails';
import Sp from '../SpScreens/Sp';
import Driver from '../SpScreens/Driver';
import AboutUs from '../screens/AboutUs';
import ContactUs from '../screens/ContactUs';
import Profile from '../SpScreens/OwnerProfile';
import Reviews from '../screens/Reviews';
import RegisterCar from '../SpScreens/RegisterCar';
import MyBookings from '../SpScreens/MyBookings';
import MyBookingDetails from '../SpScreens/MyBookingDetails';                                                     
import SignOut from '../SpScreens/SignOut';
import TouristGuide from '../SpScreens/TouristGuide';
// drawer
import CustomDrawerContentOwner from './CarMenu'; //importing from menu ???

// header for screens
import { Icon, Header } from '../components';
import { argonTheme, tabs } from '../constants';

// add a stack screen here for spdashboard
const { width } = Dimensions.get('screen');

const Stack = createStackNavigator(); // create means assign names to screens here
const Drawer = createDrawerNavigator();
//const Tab = createBottomTabNavigator();
const Tab = createBottomTabNavigator();
//----
//======

//========
function FavoriteStack(props) {
  return (
    <Stack.Navigator initialRouteName='Menu'>
      <Stack.Screen
        name='SignOut'
        component={SignOut}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=''
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),

         
        }}
      />
    </Stack.Navigator>
  );
}
function RequestStack(props) {
  return (
    <Stack.Navigator initialRouteName='Menu'>
      <Stack.Screen
        name='Request'
        component={Request}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=''
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),

         
        }}
      />
    </Stack.Navigator>
  );
}
function BookingStack(props) {
  return (
    <Stack.Navigator initialRouteName='Menu'>
      <Stack.Screen
        name='MyBookins'
        component={MyBookings}
        options={{
          
          
        }}
      />
       <Stack.Screen
        name='MyBookingDetails'
        component={MyBookingDetails}
        options={{
         
        }}
      />
    </Stack.Navigator>
  );
}
function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName='Menu'>
      <Stack.Screen
        name='Profile'
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=''
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),

         
        }}
      />
    </Stack.Navigator>
  );
}
function MenuStack(props) {
  return (
    <Stack.Navigator initialRouteName='Menu'>
      <Stack.Screen
        name='Reviews'
        component={Reviews}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=''
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),

          headerLeft: () => (
            <Icon
              name='menu'
              size={24}
              color='white'
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        }}
      />
      {/* <Stack.Screen
        name='DishDetail'
        component={DishDetail}
        options={{
          headerStyle: {
            backgroundColor: '#512DA8',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#fff',
          },
        }}
      /> */}
    </Stack.Navigator>
  );
}
function CarStack(props) {
  return (
    <Stack.Navigator initialRouteName='Pro'>
      <Stack.Screen
        name='Pro'
        component={Pro}
        options={{
         
        }}
      />
       <Stack.Screen
        name='CarDetails'
        component={CarDetails}
        options={{
         
        }}
      /> 
    </Stack.Navigator>
  );
}
function HomeStack(props) {
  return (
    <Stack.Navigator mode='card' >
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title='Home'
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: '#F8F9FE' },
        }}
      />

      {/* <Stack.Screen
        name='Sp'
        component={Sp}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              tabs={tabs.categories}
              search
              title='Title'
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
          headerTransparent: true,
        }}
      /> */}
      <Stack.Screen
        name='RegisterCar'
        component={MyTabs}
        options={{
          headerShown: false
        }}
      />
     
      <Stack.Screen
        name='TouristGuide'
        component={TouristGuide}
        // options={{
        //   header: ({ navigation, scene }) => (
        //     <Header
        //       back
        //       //tabs={tabs.categories}
        //       title='Title'
        //       navigation={navigation}
        //     />
        //   ),
        // }}
      />
      <Stack.Screen
        name='Driver'
        component={Driver}
         options={{
        }}
      />
    </Stack.Navigator>
  );
}
function ReservationStack(props) {
  return (
    <Stack.Navigator initialRouteName='Menu'>
      <Stack.Screen
        name='Sp'
        component={Sp}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=''
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
         
        }}
      />
      
    </Stack.Navigator>
  );
}
function ContactStack(props) {
  return (
    <Stack.Navigator
      initialRouteName='Menu'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='Contact Us'
        component={ContactUs}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=''
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),

          headerLeft: () => (
            <Icon
              name='menu'
              size={24}
              color='white'
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function AboutStack(props) {
  return (
    <Stack.Navigator initialRouteName='Menu' >
      <Stack.Screen
        name='About Us'
        component={AboutUs}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=''
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
          headerLeft: () => (
            <Icon
              name='menu'
              size={24}
              color='white'
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode='card' headerMode='none'>
      <Stack.Screen
        name='App' // experiment kiya tha successful ho gya tha login likh k
        component={AppStack}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=''
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContentOwner {...props} />}
      drawerStyle={{
        backgroundColor: 'white',
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: 'white',
        inactiveTintColor: '#000',
        activeBackgroundColor: 'transparent',
        itemStyle: {
          width: width * 0.75,
          backgroundColor: 'transparent',
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: 'normal',
        },
      }}
      initialRouteName='Home' // i changed here Home into Account
    >
      <Drawer.Screen name='Home' component={HomeStack} />
      <Drawer.Screen name='Profile' component={ProfileStack} />
      <Drawer.Screen name='My Bookings' component={BookingStack} />
      <Drawer.Screen name='Request' component={RequestStack} />
      <Drawer.Screen name='option' component={ReservationStack} />
      <Drawer.Screen name='sign Out' component={FavoriteStack} />
    </Drawer.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator  >
      <Tab.Screen
        name='Register Car'
        component={RegisterCar}
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon
              name='car'
              type='font-awesome'
              size={24}
              iconStyle={{ color: tintColor }}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Car Details'
        component={CarStack}
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon
              name='info-circle'
              type='font-awesome'
              size={24}
              iconStyle={{ color: tintColor }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

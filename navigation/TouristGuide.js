import React from 'react';
import { Easing, Animated, Dimensions } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../SpScreens/TouristGuide/Home';
import Request from '../SpScreens/TouristGuide/Requests';

import Profile from '../SpScreens/TouristGuide/OwnerProfile';
import Reviews from '../screens/Reviews';

import MyBookings from '../SpScreens/TouristGuide/MyBookings';
import MyBookingDetails from '../SpScreens/TouristGuide/MyBookingDetails';
import SignOut from '../SpScreens/TouristGuide/SignOut';
import TouristGuide from '../SpScreens/TouristGuide/TouristGuide';
import requestDetails from '../SpScreens/TouristGuide/requestDetails';
import OwnerCurrentBookings from '../SpScreens/TouristGuide/myCurrentBookings';
import OwnerCurrentBookingsDetails from '../SpScreens/TouristGuide/myCurrentBookingDetails';
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
function SignOutStack(props) {
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
function CurrentBookingStack(props) {
  return (
    <Stack.Navigator initialRouteName='Menu'>
      <Stack.Screen
        name='OwnerCurrentBookings'
        component={OwnerCurrentBookings}
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
      <Stack.Screen
        name='OwnerCurrentBookingsDetails'
        component={OwnerCurrentBookingsDetails}
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
      <Stack.Screen
        name='requestDetails'
        component={requestDetails}
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
      <Stack.Screen name='MyBookins' component={MyBookings} options={{}} />
      <Stack.Screen
        name='MyBookingDetails'
        component={MyBookingDetails}
        options={{}}
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

function HomeStack(props) {
  return (
    <Stack.Navigator mode='card'>
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

      <Stack.Screen name='TouristGuide' component={TouristGuide} />
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
      <Drawer.Screen name='Current Booking' component={CurrentBookingStack} />
      <Drawer.Screen name='sign Out' component={SignOutStack} />
    </Drawer.Navigator>
  );
}

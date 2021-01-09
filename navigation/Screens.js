import React from 'react';
import { Easing, Animated, Dimensions } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Block } from 'galio-framework';
import Tabs from '../components/Tabs';
// screens
import Home from '../screens/Home';
import Onboarding from '../screens/Onboarding';
import BookingStatistics from '../screens/BookingStatistics';
import Profile from '../screens/Profile';
import UpdateProfile from '../screens/UpdateProfile';
import HireDT from '../screens/HireDT';
import Elements from '../screens/Elements';
import Articles from '../screens/Articles';
import AboutUs from '../screens/AboutUs';
import ContactUs from '../screens/ContactUs';
import HireBothDT from '../screens/HireBothDT';
import SpProfile from '../screens/SpProfile';
import SpCarRent from '../screens/SpCarRent';
import Reviews from '../screens/Reviews';
import RegisterDT from '../screens/RegisterDT';
import SignOut from '../screens/SignOut';

//====Car Rental screens
import Wdriver from '../screens/Wdriver';
import popUp from '../screens/popUp';
import EndVehicleBooking from '../screens/EndVehicleBooking';
import RentACar from '../screens/RentACar';
import RentBooking from '../screens/RentBooking';
import CarDetails from '../screens/CarDetails';
import CCFieldValidator from '../src/CCFieldValidator';

//======Tourist Guide Screens
import TouristBooking from '../screens/TouristGuide/TouristBooking';
import HireTouristGuide from '../screens/TouristGuide/HireTouristGuide';
import EndTouristBooking from '../screens/TouristGuide/EndTouristBooking';

//===== Trip screens
import PlanATrip from '../screens/PlanATrip';
import TouristPoints from '../screens/TouristPoints';
import CCInput from '../src/CCInput';

//======Drivers Screen
import HireDriver from '../screens/Driver/HireDriver';
import driverDetails from '../screens/Driver/driverDetails';
import Request from '../screens/Driver/Request';
import DriverBooking from '../screens/Driver/DriverBooking';
import DriverBookingStatistics from '../screens/Driver/BookingStatistics';
import EndDriverBooking from '../screens/Driver/EndDriverBooking';
import FullPayment from '../src/FullPayment';
//======Payment Screens
import CreditCardInput from '../src/CreditCardInput';

// drawer
import CustomDrawerContent from './Menu'; //importing from menu ???

// header for screens
import { Icon, Header } from '../components';
import { argonTheme, tabs } from '../constants';
const { width } = Dimensions.get('screen');

//====== Navigation Navigator
const Stack = createStackNavigator(); // create means assign names to screens here
const Drawer = createDrawerNavigator();
//const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
//----

//========
function ElementsStack(props) {
  return (
    <Stack.Navigator mode='card' headerMode='screen'>
      <Stack.Screen
        name='CCFieldValidator'
        component={CCFieldValidator}
        options={{
          cardStyle: { backgroundColor: '#FFFFFF' },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function SettingStack(props) {
  return (
    <Stack.Navigator mode='card' headerMode='screen'>
      <Stack.Screen
        name='Settings'
        component={UpdateProfile}
        options={{
          header: ({ navigation, scene }) => (
            <Header title='Articles' navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: '#F8F9FE' },
        }}
      />
    </Stack.Navigator>
  );
}
function ReviewStack(props) {
  return (
    <Stack.Navigator mode='card' headerMode='screen'>
      <Stack.Screen
        name='Reviews'
        component={Reviews}
        options={{
          cardStyle: { backgroundColor: '#FFFFFF' },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
function LogOutStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SignOut' component={SignOut} />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName='Profile' mode='card' headerMode='screen'>
      <Stack.Screen name='Profile' component={Profile} options={{}} />
    </Stack.Navigator>
  );
}
function HomeStack(props) {
  return (
    <Stack.Navigator mode='card' headerMode='screen'>
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
      <Stack.Screen
        name='RentACar' // experiment kiya tha successful ho gya tha login likh k
        component={RentalStack}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name='HireDT' // experiment kiya tha successful ho gya tha login likh k
        component={DTStack}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='About Us' // sxperiment kiya tha successful ho gya tha login likh k
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
        }}
      />
      <Stack.Screen
        name='Contact Us' // sxperiment kiya tha successful ho gya tha login likh k
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
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name='TripStack' // experiment kiya tha successful ho gya tha login likh k
        component={TripStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
function DTStack(props) {
  return (
    <Stack.Navigator mode='card' headerMode='screen'>
      <Stack.Screen
        name='HireDT' // experiment kiya tha successful ho gya tha login likh k
        component={HireDT}
      />
      <Stack.Screen
        name='HireDriver' // experiment kiya tha successful ho gya tha login likh k
        component={DriverStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='HireTouristGuide' // experiment kiya tha successful ho gya tha login likh k
        component={TouristGuideStack}
      />
    </Stack.Navigator>
  );
}
function DriverStack(props) {
  return (
    <Stack.Navigator mode='card' headerMode='screen'>
      <Stack.Screen
        name='HireDriver' // experiment kiya tha successful ho gya tha login likh k
        component={HireDriver}
      />
      <Stack.Screen
        name='driverDetails' // experiment kiya tha successful ho gya tha login likh k
        component={driverDetails}
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
      <Stack.Screen
        name='DriverBooking' // experiment kiya tha successful ho gya tha login likh k
        component={DriverBooking}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              //back
              title='Title'
              navigation={navigation}
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor='white'
              iconColor='white'
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name='DriverBookingStatistics' // experiment kiya tha successful ho gya tha login likh k
        component={DriverBookingStatistics}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              //back
              title='Title'
              navigation={navigation}
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor='white'
              iconColor='white'
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name='Request' // experiment kiya tha successful ho gya tha login likh k
        component={Request}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              //back
              title='Title'
              navigation={navigation}
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor='white'
              iconColor='white'
            />
          ),
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name='CreditCardInput'
        component={CreditCardInput}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              //back
              title='Title'
              navigation={navigation}
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor='white'
              iconColor='white'
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name='EndDriverBooking'
        component={EndDriverBooking}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              //back
              title='Title'
              navigation={navigation}
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor='white'
              iconColor='white'
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name='FullPayment'
        component={FullPayment}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              //back
              title='Title'
              navigation={navigation}
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor='white'
              iconColor='white'
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name='SpProfile' // experiment kiya tha successful ho gya tha login likh k
        component={SpProfile}
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
function TouristGuideStack(props) {
  return (
    <Stack.Navigator mode='card' headerMode='screen'>
      <Stack.Screen
        name='HireTouristGuide' // experiment kiya tha successful ho gya tha login likh k
        component={HireTouristGuide}
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
      <Stack.Screen
        name='TouristBooking' // experiment kiya tha successful ho gya tha login likh k
        component={TouristBooking}
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
      <Stack.Screen
        name='EndTouristBooking' // experiment kiya tha successful ho gya tha login likh k
        component={EndTouristBooking}
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

      <Stack.Screen
        name='SpProfile' // experiment kiya tha successful ho gya tha login likh k
        component={SpProfile}
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
function RentalStack(props) {
  return (
    <Stack.Navigator mode='card' headerMode='screen'>
      <Stack.Screen
        name='RentACar' // experiment kiya tha successful ho gya tha login likh k
        component={RentACar}
        options={{}}
      />
      <Stack.Screen
        name='Wdriver' // experiment kiya tha successful ho gya tha login likh k
        component={Wdriver}
        options={{}}
      />

      <Stack.Screen
        name='CarDetails' // experiment kiya tha successful ho gya tha login likh k
        component={CarDetails}
        options={{}}
      />
      <Stack.Screen
        name='RentBooking' // experiment kiya tha successful ho gya tha login likh k
        component={RentBooking}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              //back
              title='Booking Details'
              navigation={navigation}
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor='white'
              iconColor='white'
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name='BookingStatistics' // experiment kiya tha successful ho gya tha login likh k
        component={BookingStatistics}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              //back
              title='Title'
              navigation={navigation}
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor='white'
              iconColor='white'
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name='popUp' // experiment kiya tha successful ho gya tha login likh k
        component={popUp}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              //back
              title='Request Status'
              navigation={navigation}
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor='white'
              iconColor='white'
            />
          ),
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name='CreditCardInput'
        component={CreditCardInput}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              //back
              title='Title'
              navigation={navigation}
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor='white'
              iconColor='white'
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name='EndVehicleBooking' // experiment kiya tha successful ho gya tha login likh k
        component={EndVehicleBooking}
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
      <Stack.Screen
        name='FullPayment'
        component={FullPayment}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              //back
              title='Title'
              navigation={navigation}
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor='white'
              iconColor='white'
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function TripStack(props) {
  return (
    <Stack.Navigator mode='card' headerMode='screen'>
      <Stack.Screen
        name='PlanATrip' // experiment kiya tha successful ho gya tha login likh k
        component={PlanATrip}
      />
      <Stack.Screen
        name='TouristPoints'
        component={TouristPoints}
        options={{}}
      />
      <Stack.Screen
        name='CCInput'
        component={CCInput}
        options={{
          cardStyle: { backgroundColor: '#FFFFFF' },
          headerTransparent: true,
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
      drawerContent={(props) => <CustomDrawerContent {...props} />}
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
      <Drawer.Screen name='Review' component={ReviewStack} />
      <Drawer.Screen name='Location' component={ElementsStack} />
      <Drawer.Screen name='Settings' component={SettingStack} />
      <Drawer.Screen name='Log Out' component={LogOutStack} />
    </Drawer.Navigator>
  );
}

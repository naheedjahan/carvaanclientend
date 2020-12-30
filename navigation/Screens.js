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
import BookingStatistics from '../screens/BooingStatistics';
import Profile from '../screens/Profile';

import Elements from '../screens/Elements';
import Articles from '../screens/Articles';

import Wdriver from '../screens/Wdriver';

import UpdateProfile from '../screens/UpdateProfile';

import RentACar from '../screens/RentACar';
import RentBooking from '../screens/RentBooking';
import TouristBooking from '../screens/TouristBooking';
import popUp from '../screens/popUp';
import HireDT from '../screens/HireDT';
import HireDriver from '../screens/HireDriver';
import HireTouristGuide from '../screens/HireTouristGuide';
import HireBothDT from '../screens/HireBothDT';
import SpProfile from '../screens/SpProfile';
import AboutUs from '../screens/AboutUs';
import ContactUs from '../screens/ContactUs';
import SpCarRent from '../screens/SpCarRent';
import Reviews from '../screens/Reviews';
import PlanATrip from '../screens/PlanATrip';
import TouristPoints from '../screens/TouristPoints';
import RegisterDT from '../screens/RegisterDT';
import SignOut from '../screens/SignOut';
import EndVehicleBooking from '../screens/EndVehicleBooking';
import EndTouristBooking from '../screens/EndTouristBooking';
import CarDetails from '../screens/CarDetails';
//------------Resturants Screen
// import Resturants from '../screens/Restaurants/Restaurants';
// import Resturant from '../screens/Restaurants/Restaurant';

//card screens
import CardView from '../src/CardView';
import CCFieldFormatter from '../src/CCFieldFormatter';
import CCFieldValidator from '../src/CCFieldValidator';
import CCInput from '../src/CCInput';
import connectToState from '../src/connectToState';
import CreditCardInput from '../src/CreditCardInput';
import LiteCreditCardInput from '../src/LiteCreditCardInput';
// drawer
import CustomDrawerContent from './Menu'; //importing from menu ???

// header for screens
import { Icon, Header } from '../components';
import { argonTheme, tabs } from '../constants';

// add a stack screen here for spdashboard
const { width } = Dimensions.get('screen');

const Stack = createStackNavigator(); // create means assign names to screens here
const Drawer = createDrawerNavigator();
//const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
//----
//======

//========
function ElementsStack(props) {
  
  return (
    <Stack.Navigator mode='card' headerMode='screen'>
      <Stack.Screen
        name='Rate Our App'
        component={Elements}
        options={{
          header: ({ navigation, scene }) => (
            <Header title='Elements' navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: '#F8F9FE' },
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
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
         
        }}
      />
          
      
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
      headerShown:false
        }}
      />
     
      <Stack.Screen
        name='HireDT' // experiment kiya tha successful ho gya tha login likh k
        component={HireDT}
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
        name='HireDriver' // experiment kiya tha successful ho gya tha login likh k
        component={HireDriver}
      />
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
        name='HireBothDT' // experiment kiya tha successful ho gya tha login likh k
        component={HireBothDT}
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
        name='SpCarRent'
        component={SpCarRent}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title='Home'
              search
              check
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: '#F8F9FE' },
        }}
      />
      <Stack.Screen
        name='Reviews'
        component={Reviews}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title='Title'
              // search
              //check
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: '#F8F9FE' },
        }}
      />

      <Stack.Screen
        name='TripStack' // experiment kiya tha successful ho gya tha login likh k
        component={TripStack}
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
      {/* <Stack.Screen
        name='CreditCardInput' // experiment kiya tha successful ho gya tha login likh k
        component={CreditCardInput}
        
      /> */}
     
      {/* <Stack.Screen
        name='Articles'
        component={Articles}
        options={{
          header: ({ navigation, scene }) => (
            <Header title='Articles' navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: '#F8F9FE' },
        }}
      /> */}
      <Stack.Screen
        name='RegisterDT'
        component={RegisterDT}
        options={{
          header: ({ navigation, scene }) => (
            <Header title='Home' search navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: '#F8F9FE' },
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
        name='HireDriver' // experiment kiya tha successful ho gya tha login likh k
        component={HireDriver}
      />
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
        name='HireBothDT' // experiment kiya tha successful ho gya tha login likh k
        component={HireBothDT}
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
      

      <Stack.Screen
        name='SpCarRent'
        component={SpCarRent}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title='Home'
              search
              check
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: '#F8F9FE' },
        }}
      />
      <Stack.Screen
        name='Reviews'
        component={Reviews}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title='Title'
              // search
              //check
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: '#F8F9FE' },
        }}
      />

      <Stack.Screen
        name='TripStack' // experiment kiya tha successful ho gya tha login likh k
        component={TripStack}
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
      {/* <Stack.Screen
        name='CreditCardInput' // experiment kiya tha successful ho gya tha login likh k
        component={CreditCardInput}
        
      /> */}
     
      {/* <Stack.Screen
        name='Articles'
        component={Articles}
        options={{
          header: ({ navigation, scene }) => (
            <Header title='Articles' navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: '#F8F9FE' },
        }}
      /> */}
      <Stack.Screen
        name='RegisterDT'
        component={RegisterDT}
        options={{
          header: ({ navigation, scene }) => (
            <Header title='Home' search navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: '#F8F9FE' },
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
        options={{
      
        }}
      />
      <Stack.Screen
        name='Wdriver' // experiment kiya tha successful ho gya tha login likh k
        component={Wdriver}
        options={{
          
        }}
      />

<Stack.Screen
        name='CarDetails' // experiment kiya tha successful ho gya tha login likh k
        component={CarDetails}
        options={{
          
        }}
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
        name='CCFieldValidator'
        component={CCFieldValidator}
        options={{
          cardStyle: { backgroundColor: '#FFFFFF' },
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
    
     
    </Stack.Navigator>
  );
}

function TripStack(props) {
  return (
    <Stack.Navigator mode='card' headerMode='screen'>
      <Stack.Screen
        name='PlanATrip' // experiment kiya tha successful ho gya tha login likh k
        component={PlanATrip}
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
        name='TouristPoints'
        component={TouristPoints}
        options={{
         
        }}
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
      <Drawer.Screen name='Rate Our App' component={ElementsStack} />
      <Drawer.Screen name='Settings' component={SettingStack} />
      <Drawer.Screen name='Log Out' component={LogOutStack} />
    </Drawer.Navigator>
  );
}
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={ServiceProviderStack} />
    </Tab.Navigator>
  );
}

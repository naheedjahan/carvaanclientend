import React, { Component } from "react";
import { StyleSheet, View,AsyncStorage,Dimensions, SafeAreaView } from "react-native";
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import * as TaskManager from "expo-task-manager";
import PubNub from 'pubnub';
import { PubNubProvider } from "pubnub-react";
const LOCATION_TASK_NAME = "background-location-task";

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 33.618869;
const LONGITUDE = 73.0338449;
const LATITUDE_DELTA = 0.045;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
console.disableYellowBox = true;

class CCFieldValidator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      coordinate: new AnimatedRegion({
        latitude: null,
        longitude: null,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }),
    };

    // Replace "X" with your PubNub Keys
    this.pubnub = new PubNub({
        publishKey: "pub-c-1e7bf1f5-7bf7-4339-a8b1-9ef11c29723a",
        subscribeKey: "sub-c-099c491e-32f6-11eb-9713-12bae088af96"
    });
  }

  // code to receive messages sent in a channel
  componentDidMount() {
    this.subscribeToPubNub();
  }
  //c
  componentWillUnmount(){
    if(this.pubnub){
      this.pubnub.unsubscribe({
        channels: ['location']
       })
       var existingListener = {
          message: function() {
        }
      }
    
      pubnub.removeListener(existingListener)
    
    }
  }
  subscribeToPubNub = () => {
    this.pubnub.addListener({
      message: (msg) => {
        const { coordinate } = this.state;
        const { latitude, longitude } = msg.message;
        const newCoordinate = { latitude, longitude };
        console.log(newCoordinate);
        console.log(msg);
        if (Platform.OS === 'android') {
          if (this.marker) {
            //this.marker.coordinate.timing(newCoordinate).start();
           this.marker._component.animateMarkerToCoordinate(newCoordinate, 500);
          }
        } else {
          coordinate.timing(newCoordinate).start();
        }
  
        this.setState({
          latitude,
          longitude,
        });
      }
    });
   // this.pubnub.subscribe({ channels: ["location"] });
    this.pubnub.subscribe({
      channels: ['location'],
      withPresence: true,
    });
    
   
  };

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            showUserLocation
            followUserLocation
            loadingEnabled
            ref={c => (this.mapView = c)}
            region={this.state.latitude ? this.getMapRegion() : null}
          >
            <Marker.Animated
              ref={marker => {
                this.marker = marker;
              }}
              coordinate={this.state.coordinate}
            />
          </MapView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
import Test from './test';
//export default CCFieldValidator;
export default Test;
//--------------------------------------
// import React, { Component } from "react";
// import { StyleSheet, View,AsyncStorage,Dimensions } from "react-native";
// import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
// import * as Location from "expo-location";
// import * as Permissions from "expo-permissions";
// import * as TaskManager from "expo-task-manager";
// import PubNub from 'pubnub';
// import { PubNubProvider } from "pubnub-react";
// const LOCATION_TASK_NAME = "background-location-task";

// const { width, height } = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const LATITUDE = 37.78825;
// const LONGITUDE = -122.4324;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// export default class CCFieldValidator extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   region: null,
//     //   error: '',
//     // };
//     this.state = {
//       latitude: LATITUDE,
//       longitude: LONGITUDE,
//       coordinate: new AnimatedRegion({
//         latitude: null,
//         longitude: null,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA,
//       }),
//     };

//     this.pubnub = new PubNub({
//             publishKey: "pub-c-1e7bf1f5-7bf7-4339-a8b1-9ef11c29723a",
//             subscribeKey: "sub-c-099c491e-32f6-11eb-9713-12bae088af96"
//           });
//    }


//   subscribeToPubNub = () => {

//     this.pubnub.addListener({
//       message: (message) => {
//         console.log('check 2');
//         const { latitude, longitude } = message.message;
//         const newCoordinate = { latitude, longitude };
//         let region = {
//           latitude: newCoordinate.latitude,
//           longitude: newCoordinate.longitude,
//           latitudeDelta: 0.045,
//           longitudeDelta: 0.045
//         };
//         this.setState({ region: region });
//         console.log(message);
//         console.log(newCoordinate);
//         console.log('check 3');
//       }
//     });
//     this.pubnub.subscribe({ channels: ["location"] });
//     console.log('check 1');
    
   
//   };
//   async componentWillMount() {
//     // Asking for device location permission
//     const { status } = await Permissions.askAsync(Permissions.LOCATION);
    
//     if (status === "granted") {
//       this.subscribeToPubNub();
//     } else {
//       this.setState({ error: "Locations services needed" });
//     }
    
//   }
//   getMapRegion = () => ({
//     latitude: this.state.latitude,
//     longitude: this.state.longitude,
//     latitudeDelta: LATITUDE_DELTA,
//     longitudeDelta: LONGITUDE_DELTA,
//   });

//   render() {
//     return (
//       <PubNubProvider client={this.pubnub}>
//       <View style={styles.container}>
//         <MapView
//           initialRegion={this.state.region}
//           showsCompass={true}
//           showsUserLocation={true}
//           followsUserLocation={true}
//           rotateEnabled={true}
//           ref={map => {
//             this.map = map;
//           }}
//           style={{ flex: 1 }}
//         />
//       </View>
//     </PubNubProvider>

      
//     );
//   }
// }

// TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   if (data) {
//     const { locations } = data;
//     let lat = locations[0].coords.latitude;
//     let long = locations[0].coords.longitude;
//     userId = (await AsyncStorage.getItem("userId")) || "none";

    
//     console.log("Received new locations for user = ", userId, locations);
//   }
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff"
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });
// import React from 'react';
// import { StyleSheet, View, Dimensions, Platform, SafeAreaView } from 'react-native';
// import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
// //import PubNubReact from 'pubnub-react';
//  import PubNub from 'pubnub';
// // import { PubNubProvider } from "pubnub-react";
// const { width, height } = Dimensions.get('window');

// const ASPECT_RATIO = width / height;
// const LATITUDE = 37.78825;
// const LONGITUDE = -122.4324;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// console.disableYellowBox = true;

// class CCFieldValidator extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       latitude: LATITUDE,
//       longitude: LONGITUDE,
//       coordinate: new AnimatedRegion({
//         latitude: null,
//         longitude: null,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA,
//       }),
//     };

//     // Replace "X" with your PubNub Keys
//     this.pubnub = new PubNub({
//       publishKey: "pub-c-1e7bf1f5-7bf7-4339-a8b1-9ef11c29723a",
//      subscribeKey: "sub-c-099c491e-32f6-11eb-9713-12bae088af96"
//     });
    
//   }

//   // code to receive messages sent in a channel
//   componentDidMount() {
//     this.subscribeToPubNub();
//   }

//   subscribeToPubNub = () => {
  
//     // Add the listener to pubnub instance and subscribe to `chat` channel.
//     this.pubnub.addListener({
//       message: (message) => {
//         const { latitude, longitude } = message.message;
//         const newCoordinate = { latitude, longitude };
//         console.log(newCoordinate);
//       }
//     });
//     this.pubnub.subscribe({ channels: ["location"] });

//     // this.pubnub.subscribe({
//     //   channels: ['location'],
//     //   withPresence: true,
//     // });
//     // this.pubnub.getMessage('location', message => {
//     //   this.setState({message})
//     //   console.log(this.setState.message);
//    // })
//     // this.pubnub.getMessage('location', msg => {
//     //   const { coordinate } = this.state;
//     //   const { latitude, longitude } = msg.message;
//     //   const newCoordinate = { latitude, longitude };

//     //   if (Platform.OS === 'android') {
//     //     if (this.marker) {
//     //       this.marker._component.animateMarkerToCoordinate(newCoordinate, 500);
//     //     }
//     //   } else {
//     //     coordinate.timing(newCoordinate).start();
//     //   }

//     //   this.setState({
//     //     latitude,
//     //     longitude,
//     //   });
//     // });
//   };

//   getMapRegion = () => ({
//     latitude: this.state.latitude,
//     longitude: this.state.longitude,
//     latitudeDelta: LATITUDE_DELTA,
//     longitudeDelta: LONGITUDE_DELTA,
//   });

//   render() {
//     return (
//       <SafeAreaView style={{ flex: 1 }}>
//         <View style={styles.container}>
//           <MapView
//             style={styles.map}
//             showUserLocation
//             followUserLocation
//             loadingEnabled
//             ref={c => (this.mapView = c)}
//             region={this.state.latitude ? this.getMapRegion() : null}
//           >
//             <Marker.Animated
//               ref={marker => {
//                 this.marker = marker;
//               }}
//               coordinate={this.state.coordinate}
//             />
//           </MapView>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// export default CCFieldValidator;
// import React from 'react';
// import {
//   StyleSheet,
//   ImageBackground,
//   Dimensions,
//   StatusBar,
//   KeyboardAvoidingView,
//   View,
//   Image,
//   ScrollView,
// } from 'react-native';
// import { Block, Checkbox, Text, theme } from 'galio-framework';
// import Slider from 'react-native-slider';
// //import RangeSlider from 'react-native-range-slider'
// // import Slider from '@react-native-community/slider';
// import { Button, Icon, Input, Header } from '../components';
// import { Images, argonTheme } from '../constants';

//  const googleAPIKey2 = 'AIzaSyCfLjQYu6qYsrfJBt1nwgCKGCNqXWFhsfc';
//   const placeType = 'grocery_or_supermarket';

// // // Search within maximum 4 km radius.
//  let radius = 0.05 * 1000;

// //import {googleAPIKey, placeType} from '../../Helpers/GooglePlacesAPI';
// import * as Location from "expo-location";
// import * as Permissions from "expo-permissions";

// const { width, height } = Dimensions.get('screen');
// class PlanATrip extends React.Component {
//   constructor(props) {
//         super(props);
//         this.state = {
//           lat:0,
//           long:0,
//           error: '',
//         };

//   }
//   cafe=()=>{
//     const placeTypeC='cafe';
//    const url =
//    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
//    this.state.lat +
//    ',' +
//    this.state.long +
//    '&radius=' +
//    radius +
//   '&type=' +
//   placeTypeC +
//    '&key=' +
//    googleAPIKey2;

//  console.log('In Cafe Function');
//  fetch(url)
//  .then((response) => response.json())
//  .then((JsonResponse) => {
//    //console.log(JsonResponse);
//    this.props.navigation.navigate('TouristPoints', {
//      data: JsonResponse.results, info:'cafe'
//    });
//  })
//  .catch((error) => {
//      console.log(error);
//  });

//  }
//  pointofinterest=()=>{
//   const placeTypeC='point_of_interest';
//  const url =
//  'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
//  this.state.lat +
//  ',' +
//  this.state.long +
//  '&radius=' +
//  this.state.value +
// '&type=' +
// placeTypeC +
//  '&key=' +
//  googleAPIKey2;

// console.log('In Cafe Function');
// fetch(url)
// .then((response) => response.json())
// .then((JsonResponse) => {
//  //console.log(JsonResponse);
//  this.props.navigation.navigate('TouristPoints', {
//    data: JsonResponse.results, info:'cafe'
//  });
// })
// .catch((error) => {
//    console.log(error);
// });

// }
// establishment=()=>{
//   const placeTypeR='resturants';
//  const url =
//  'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
//  this.state.lat +
//  ',' +
//  this.state.long +
//  '&radius=' +
//  this.state.value+
// '&type=' +
// placeTypeR +
//  '&key=' +
//  googleAPIKey2;

// console.log('In Cafe Function');
// fetch(url)
// .then((response) => response.json())
// .then((JsonResponse) => {
//  //console.log(JsonResponse);
//  this.props.navigation.navigate('TouristPoints', {
//    data: JsonResponse.results, info:'cafe'
//  });
// })
// .catch((error) => {
//    console.log(error);
// });

// }
//      grocery=()=>{
//        console.log(this.state.lat);
//        console.log(this.state.long);
//        console.log('coming here');
//       const url =
//       'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
//       this.state.lat +
//       ',' +
//       this.state.long +
//       '&radius=' +
//       radius +
//      '&type=' +
//      placeType +
//       '&key=' +
//       googleAPIKey2;

//     console.log('fyppppppppppppppppp');
//     fetch(url)
//     .then((response) => response.json())
//     .then((JsonResponse) => {
//        //console.log(JsonResponse.results);
//       //let name = JsonResponse.results.name;
//       // let latitude = JsonResponse.results.geometry.location.lat;
//       // let longitude = JsonResponse.results.geometry.location.lng;
//     // console.log('These are names---'+name);
//     //  console.log('These are latitude---'+latitude);
//     //  console.log('These are longtitude---'+longitude);
//       this.props.navigation.navigate('TouristPoints', {
//         data: JsonResponse.results,
//       });
//         this.setState({
//           dataTry: JsonResponse,
//           loading:false,
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//     }
//     _getLocationAsync = async () => {
//       console.log('test');

//       // watchPositionAsync Return Lat & Long on Position Change
//       this.location = await Location.watchPositionAsync(
//         {
//           enableHighAccuracy: true,
//           distanceInterval: 1,
//           timeInterval: 10000
//         },
//         newLocation => {
//           let { coords } = newLocation;

//           // console.log(coords);
//           this.setState({ lat: coords.latitude });
//           this.setState({ long: coords.longitude });

//           //this.setState({ region: region });
//         },
//         error => console.log(error)
//       );

//       //this.naheed(this);
//       return this.location;
//     };
//   async componentDidMount() {
//       // Asking for device location permission
//       const { status } = await Permissions.askAsync(Permissions.LOCATION);
//     console.log(status);
//       if (status === "granted") {
//         //let isMounted = true; // note this flag denote mount status
//         this._getLocationAsync();
//         //.then(data => {
//         //   if (isMounted) setState(data);
//         // })
//         // return () => { isMounted = false };

//       } else {
//         this.setState({ error: "Locations services needed" });
//       }

//     }
//     getInitialState() {
//       return {
//         value: 0.05,
//       };
//     }
//   render() {
//     const { navigation } = this.props;
//     return (
//       <Block flex middle>
//         <StatusBar hidden />

//         <ImageBackground
//           source={Images.Background}
//           style={{ width, height, zIndex: 1 }}
//         >
//           <ScrollView
//             showsVerticalScrollIndicator={false}
//             style={{ width, marginTop: '25%' }}
//           >
//             <Block flex style={styles.profileCard}>
//               <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
//                 <Block style={styles.avatarContainer}>
//                   <Image
//                     source={{
//                       uri:
//                         'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=487&q=80',
//                     }}
//                     //borderRadius style will help us make the Round Shape Image
//                     style={styles.avatar}
//                   />
//                 </Block>
//                 <Block >
//                 <Slider
//                 style={{width:300}}
//                 minimumTrackTintColor={argonTheme.COLORS.INFO}
//                 maximumTrackTintColor={argonTheme.COLORS.ICON}
//                 minimumValue={0.05}
//                 maximumValue={15}
//           value={this.state.value}
//           onValueChange={(value) => this.setState({value})} />
//         <Text>Distance in kilometer: {this.state.value}</Text>
//                 </Block>

//                 <Block center style={{ marginTop: 70 }}>
//                   <Button
//                     onPress={()=>this.cafe()}
//                     color='primary'
//                     // textStyle={{ color: 'black', fontSize: 12, fontWeight: '700' }}
//                     style={styles.button}
//                   >
//                     Cafe
//                   </Button>
//                 </Block>
//                 <Block center style={{ marginTop: 30, marginBottom: 30 }}>
//                   <Button
//                     //onPress={() => navigation.navigate('TouristPoints')}
//                   //  onPress={() => this.handleLogin()}
//                     onPress={()=>this.grocery()}
//                     color='primary'
//                     //textStyle={{ color: 'black', fontSize: 12, fontWeight: '700' }}
//                     style={styles.button}
//                   >
//                     Grocery And Supermarket
//                   </Button>
//                 </Block>
//                 <Block center style={{ marginTop: 5, marginBottom: 10 }}>
//                   <Button
//                     //onPress={() => navigation.navigate('TouristPoints')}
//                   //  onPress={() => this.handleLogin()}
//                     onPress={()=>this.establishment()}
//                     color='primary'
//                     //textStyle={{ color: 'black', fontSize: 12, fontWeight: '700' }}
//                     style={styles.button}
//                   >
//                     Establishment
//                   </Button>
//                 </Block>
//                 <Block center style={{ marginTop: 20, marginBottom: 70 }}>
//                   <Button
//                     //onPress={() => navigation.navigate('TouristPoints')}
//                   //  onPress={() => this.handleLogin()}
//                     onPress={()=>this.pointofinterest()}
//                     color='primary'
//                     //textStyle={{ color: 'black', fontSize: 12, fontWeight: '700' }}
//                     style={styles.button}
//                   >
//                    Point Of Interest
//                   </Button>
//                 </Block>
//               </Block>
//             </Block>
//           </ScrollView>
//         </ImageBackground>
//       </Block>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   registerContainer: {
//     width: width * 0.9,
//     height: height * 0.78,
//     backgroundColor: '#F4F5F7',
//     borderRadius: 4,
//     shadowColor: argonTheme.COLORS.BLACK,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowRadius: 8,
//     shadowOpacity: 0.1,
//     elevation: 1,
//     overflow: 'hidden',
//   },
//   profileCard: {
//     // position: "relative",
//     padding: theme.SIZES.BASE,
//     marginHorizontal: theme.SIZES.BASE,
//     marginTop: 70,
//     borderTopLeftRadius: 6,
//     borderTopRightRadius: 6,
//     backgroundColor: theme.COLORS.WHITE,
//     shadowColor: 'black',
//     shadowOffset: { width: 0, height: 0 },
//     shadowRadius: 8,
//     shadowOpacity: 0.2,
//     zIndex: 2,
//     //marginBottom: 200,
//   },
//   socialConnect: {
//     backgroundColor: argonTheme.COLORS.WHITE,
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     borderColor: '#8898AA',
//   },
//   socialButtons: {
//     width: 120,
//     height: 40,
//     backgroundColor: '#fff',
//     shadowColor: argonTheme.COLORS.BLACK,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowRadius: 8,
//     shadowOpacity: 0.1,
//     elevation: 1,
//   },
//   socialTextButtons: {
//     color: argonTheme.COLORS.PRIMARY,
//     fontWeight: '800',
//     fontSize: 14,
//   },
//   inputIcons: {
//     marginRight: 12,
//   },
//   passwordCheck: {
//     paddingLeft: 15,
//     paddingTop: 13,
//     paddingBottom: 30,
//   },
//   createButton: {
//     width: width * 0.5,
//     marginTop: 25,
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginTop: -100,
//   },
//   avatar: {
//     width: 200,
//     height: 200,
//     borderRadius: 62,
//     borderWidth: 0,
//   },
// });

// export default PlanATrip;

import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
  Platform,
  StatusBar,
  View,
  Picker,
  AsyncStorage,
} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { Button, Select, Icon, Input, Header, Switch } from '../components/';
//import { Button } from "../components";
import { Images, argonTheme } from '../constants';
import { HeaderHeight } from '../constants/utils';
const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

import Slider from 'react-native-slider';
const googleAPIKey2 = 'AIzaSyCfLjQYu6qYsrfJBt1nwgCKGCNqXWFhsfc';
const placeType = 'grocery_or_supermarket';

// // Search within maximum 4 km radius.
//  let radius = 0.05 * 1000;

//import {googleAPIKey, placeType} from '../../Helpers/GooglePlacesAPI';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { baseUrl } from '../baseUrl/baseUrl';
class PlanATrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      long: 0,
      error: '',
    };
  }
  cafe = () => {
    const v = this.state.value;
    const radius = v * 1000;
    const placeTypeC = 'cafe';
    const url =
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
      this.state.lat +
      ',' +
      this.state.long +
      '&radius=' +
      radius +
      '&type=' +
      placeTypeC +
      '&key=' +
      googleAPIKey2;

    console.log('In Cafe Function');
    fetch(url)
      .then((response) => response.json())
      .then((JsonResponse) => {
        //console.log(JsonResponse);
        this.props.navigation.navigate('TouristPoints', {
          data: JsonResponse.results,
          info: 'cafe',
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  pointofinterest = () => {
    const v = this.state.value;
    const radius = v * 1000;
    const placeTypeC = 'point_of_interest';
    const url =
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
      this.state.lat +
      ',' +
      this.state.long +
      '&radius=' +
      radius +
      '&type=' +
      placeTypeC +
      '&key=' +
      googleAPIKey2;

    console.log('In Cafe Function');
    fetch(url)
      .then((response) => response.json())
      .then((JsonResponse) => {
        //console.log(JsonResponse);
        this.props.navigation.navigate('TouristPoints', {
          data: JsonResponse.results,
          info: 'cafe',
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  establishment = () => {
    const v = this.state.value;
    const radius = v * 1000;
    const placeTypeR = 'resturants';
    const url =
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
      this.state.lat +
      ',' +
      this.state.long +
      '&radius=' +
      radius +
      '&type=' +
      placeTypeR +
      '&key=' +
      googleAPIKey2;

    console.log('In Cafe Function');
    fetch(url)
      .then((response) => response.json())
      .then((JsonResponse) => {
        //console.log(JsonResponse);
        this.props.navigation.navigate('TouristPoints', {
          data: JsonResponse.results,
          info: 'cafe',
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  grocery = () => {
    const v = this.state.value;
    const radius = v * 1000;
    console.log('coming here');
    const url =
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
      this.state.lat +
      ',' +
      this.state.long +
      '&radius=' +
      radius +
      '&type=' +
      placeType +
      '&key=' +
      googleAPIKey2;

    console.log('fyppppppppppppppppp');
    fetch(url)
      .then((response) => response.json())
      .then((JsonResponse) => {
        this.props.navigation.navigate('TouristPoints', {
          data: JsonResponse.results,
        });
        this.setState({
          dataTry: JsonResponse,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  _getLocationAsync = async () => {
    console.log('test');

    // watchPositionAsync Return Lat & Long on Position Change
    this.location = await Location.watchPositionAsync(
      {
        enableHighAccuracy: true,
        distanceInterval: 0.5,
        timeInterval: 10000,
      },
      (newLocation) => {
        let { coords } = newLocation;

        // console.log(coords);
        this.setState({ lat: coords.latitude });
        this.setState({ long: coords.longitude });

        //this.setState({ region: region });
      },
      (error) => console.log(error)
    );

    //this.naheed(this);
    return this.location;
  };
  async componentDidMount() {
    // Asking for device location permission
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    console.log(status);
    if (status === 'granted') {
      //let isMounted = true; // note this flag denote mount status
      this._getLocationAsync();
      //.then(data => {
      //   if (isMounted) setState(data);
      // })
      // return () => { isMounted = false };
    } else {
      this.setState({ error: 'Locations services needed' });
    }
  }
  getInitialState() {
    return {
      value: 0.05,
    };
  }

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
                title='Search'
                navigation={this.props.navigation}
              />
            </Block>
            <Block left style={styles.nameInfo}>
              {/* <Text bold size={28} color="white">
                      Jessica Jones, 27
                    </Text> */}
              <Text bold size={16} color='white' style={{ marginLeft: 10 }}>
                Select Distance & View You Desired Locations
              </Text>
            </Block>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '-20%' }}
            >
              <Block flex style={styles.profileCard}>
                <KeyboardAvoidingView
                  style={{ flex: 1 }}
                  behavior='padding'
                  enabled
                >
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block>
                      <Image
                        source={{
                          uri:
                            'https://img.freepik.com/free-vector/taxi-driver-yellow-cab_81534-1299.jpg?size=338&ext=jpg',
                        }}
                        //borderRadius style will help us make the Round Shape Image
                        style={styles.avatar}
                      />
                    </Block>
                    <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                      <Text>Select Distance</Text>
                      <Slider
                        style={{ width: 300 }}
                        minimumTrackTintColor={argonTheme.COLORS.INFO}
                        maximumTrackTintColor={argonTheme.COLORS.ICON}
                        minimumValue={0.05}
                        maximumValue={15}
                        value={this.state.value}
                        onValueChange={(value) => this.setState({ value })}
                      />
                      <Text>Distance in kilometer: {this.state.value}</Text>
                    </Block>

                    <Block center style={{ marginTop: 70 }}>
                      <Button
                        onPress={() => this.cafe()}
                        color='primary'
                        // textStyle={{ color: 'black', fontSize: 12, fontWeight: '700' }}
                        style={styles.button}
                      >
                        Cafe
                      </Button>
                    </Block>
                    <Block center style={{ marginTop: 30, marginBottom: 30 }}>
                      <Button
                        //onPress={() => navigation.navigate('TouristPoints')}
                        //  onPress={() => this.handleLogin()}
                        onPress={() => this.grocery()}
                        color='primary'
                        //textStyle={{ color: 'black', fontSize: 12, fontWeight: '700' }}
                        style={styles.button}
                      >
                        Grocery And Supermarket
                      </Button>
                    </Block>
                    <Block center style={{ marginTop: 5, marginBottom: 10 }}>
                      <Button
                        //onPress={() => navigation.navigate('TouristPoints')}
                        //  onPress={() => this.handleLogin()}
                        onPress={() => this.establishment()}
                        color='primary'
                        //textStyle={{ color: 'black', fontSize: 12, fontWeight: '700' }}
                        style={styles.button}
                      >
                        Establishment
                      </Button>
                    </Block>
                    <Block center style={{ marginTop: 20, marginBottom: 70 }}>
                      <Button
                        //onPress={() => navigation.navigate('TouristPoints')}
                        //  onPress={() => this.handleLogin()}
                        onPress={() => this.pointofinterest()}
                        color='primary'
                        //textStyle={{ color: 'black', fontSize: 12, fontWeight: '700' }}
                        style={styles.button}
                      >
                        Point Of Interest
                      </Button>
                    </Block>
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
    marginTop: 20,
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
    width: 270,
    height: 150,
    borderWidth: 5,
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

export default PlanATrip;

// import React from 'react';
// import {
//   StyleSheet,
//   ImageBackground,
//   Dimensions,
//   StatusBar,
//   KeyboardAvoidingView,
//   Alert,
//   AsyncStorage,
// } from 'react-native';
// import { Block, Checkbox, Text, theme } from 'galio-framework';
// import DatePicker from 'react-native-datepicker';
// import Moment from 'moment';
// import { extendMoment } from 'moment-range';

// const moment = extendMoment(Moment);
// import { Button, Icon, Input, Select } from '../components';
// import { Images, argonTheme } from '../constants';
// import { Notifications } from 'expo';
// import * as Permissions from 'expo-permissions';
// import Constants from 'expo-constants';
// const { width, height } = Dimensions.get('screen');
// class RentBooking extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       startDate: new Date(),
//       endDate: new Date(),
//       days: '6',
//       address: '',
//       expoPushToken: 'ExponentPushToken[BSgVrWAgKDmf34h1s2_xlS]',
//       notification: {},
//     };
//     //set value in state for initial date
//   }
//   registerForPushNotificationsAsync = async () => {
//     if (Constants.sisDevice) {
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
//       console.log('ty'+token);
//       console.log('coming here');
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
//   this.handleRegister();
   
// };
// handleRegister = async () => {
// console.log('yahan ara hai');
// const token = await AsyncStorage.getItem('Ownertoken');
// console.log(token);
// console.log('yahan a raha');
// // localhost means your mobile cannot access this
// fetch('http://192.168.1.141:5000/api/owner/getOwner', {
// method: 'POST',
// headers: {
//   'Content-Type': 'application/json',
//     'x-auth-token': token,
// },
// body: JSON.stringify({
//   token: this.state.expoPushToken,
// }),
// })
// .then((res) => res.json())
// .then(async (data) => {
// try {
//   if (!data.errors) {
//     console.log('yahan ghga raha');
//   } else {
//     data.errors.forEach((error) => alert(error.msg));
//   }
// } catch (e) {
//   console.log('error hai', e);
// }
// });
// };
//   componentDidMount() {
//     this.registerForPushNotificationsAsync();
//     // this._notificationSubscription = Notifications.addListener(
//     //   this._handleNotification
//     // );
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
//   parseDate(str) {
//     var mdy = str.split('/');
//     return new Date(mdy[2], mdy[0] - 1, mdy[1]);
//   }
//   datediff() {
//     // Take the difference between the dates and divide by milliseconds per day.
//     // Round to nearest whole number to deal with DST.
//     return Math.round(
//       (this.state.endDate - this.state.startDate) / (1000 * 60 * 60 * 24)
//     );
//   }
//   sendNotification = async () => {
//         const message = {
//           to: this.state.expoPushToken,
//           sound: 'default',
//           title: 'Original Title',
//           body: 'And here is the body!',
//           data: { data: 'now check if goes goes here' },
//         };
    
//         await fetch('https://exp.host/--/api/v2/push/send', {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Accept-encoding': 'gzip, deflate',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(message),
//         });
//       };
//   handleRentProcess = async () => {
//     var d1 = new Date(this.state.startDate); //firstDate
//     var d2 = new Date(this.state.endDate); //SecondDate
//     // var diff = Math.abs(d2 - d1); //in milliseconds  ---> alternative way in javascript
//     const range = moment.range(d1, d2);
//     range.diff('months'); // 3
//     range.diff('days'); // 92
//     const diff = range.diff(); // 7945200000
//     const caldays = parseInt(diff / (1000 * 60 * 60 * 24));
//     console.log((this.state.days = caldays));

//     //-----------------------------------------------------------
//    const vehicleId = this.props.route.params.vehicleId;
//     console.log(vehicleId);
//     const token = await AsyncStorage.getItem('Customertoken');
//     fetch('http://192.168.1.141:5000/api/customer/book/' + vehicleId, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-auth-token': token,
//       },
//       body: JSON.stringify({
//         days: this.state.days,
//       }),
//     })
//       .then((res) => res.json())
//       .then(async (data) => {
//         try {
//           if (!data.errors) {
//             console.log('booking start');
//             console.log(data);
//             const id = data;
//             // this.props.navigation.navigate('login');
//             this.props.navigation.navigate('CreditCardInput');
//             // this.props.navigation.navigate('EndVehicleBooking', {
//             //   vehicleId: vehicleId,
//             //   bookingId: id,
//             // });
//           } else {
//             data.errors.forEach((error) => alert(error.msg));
//           }
//         } catch (e) {
//           console.log('error hai', e);
//         }
//       });
//   };

//   render() {
//    // const vehicleId = this.props.route.params.vehicleId;

//     console.log();
//     const createTwoButtonAlert = () =>
//       Alert.alert(
//         'Confirm Booking',
//         'Do You Really Want To Book This Car ?',
//         [
//           {
//             text: 'Cancel',
//             onPress: () => navigation.navigate('Home'),
//             style: 'cancel',
//           },
//           { text: 'Yes', onPress: () => navigation.navigate('Home') },
//         ],
//         { cancelable: false }
//       );
//     const { navigation } = this.props;
//     return (
//       <Block flex middle>
//         <StatusBar hidden />
//         <ImageBackground
//           source={Images.Background}
//           style={{ width, height, zIndex: 1 }}
//         >
//           <Block flex middle>
//             <Block
//               style={styles.registerContainer}
//               // code uraya hy yaha sy
//             >
//               <Block flex>
//                 <Block flex={0.17} middle>
//                   <Text color='#8898AA' size={14}>
//                     Schedule Your Booking
//                   </Text>
//                 </Block>
//                 <Block flex center>
//                   <KeyboardAvoidingView
//                     style={{ flex: 1 }}
//                     behavior='padding'
//                     enabled
//                   >
//                     <Block width={width * 0.8} style={{ marginBottom: 15 }}>
//                       <Block flex left>
//                         <Text
//                           color='#8898AA'
//                           size={14}
//                           style={{ marginTop: 15 }}
//                         >
//                           From
//                         </Text>
//                       </Block>
//                       <DatePicker
//                         style={{ width: 200, marginTop: 45 }}
//                         date={this.state.startDate} //initial date from state
//                         mode='date' //The enum of date, datetime and time
//                         placeholder='select date'
//                         format='YYYY/MM/DD'
//                         minDate={this.state.startDate}
//                         maxDate='2030/01/01'
//                         confirmBtnText='Confirm'
//                         cancelBtnText='Cancel'
//                         customStyles={{
//                           dateIcon: {
//                             position: 'absolute',
//                             left: 0,
//                             top: 4,
//                             marginLeft: 0,
//                           },
//                           dateInput: {
//                             marginLeft: 36,
//                           },
//                         }}
//                         onDateChange={(value) => {
//                           this.setState({ startDate: value });
//                         }}
//                       />
//                     </Block>
//                     <Block width={width * 0.8} style={{ marginBottom: 15 }}>
//                       <Block flex left>
//                         <Text
//                           color='#8898AA'
//                           size={14}
//                           style={{ marginTop: 15 }}
//                         >
//                           To
//                         </Text>
//                       </Block>
//                       <DatePicker
//                         style={{ width: 200, marginTop: 45 }}
//                         date={this.state.endDate} //initial date from state
//                         mode='date' //The enum of date, datetime and time
//                         placeholder='select date'
//                         format='YYYY/MM/DD'
//                         minDate={this.state.endDate}
//                         maxDate='2030/01/01'
//                         confirmBtnText='Confirm'
//                         cancelBtnText='Cancel'
//                         customStyles={{
//                           dateIcon: {
//                             position: 'absolute',
//                             left: 0,
//                             top: 4,
//                             marginLeft: 0,
//                           },
//                           dateInput: {
//                             marginLeft: 36,
//                           },
//                         }}
//                         onDateChange={(endDate) => {
//                           this.setState({ endDate: endDate });
//                         }}
//                       />
//                     </Block>

//                     <Block width={width * 0.8} style={{ marginBottom: 50 }}>
//                       <Text color='#8898AA' size={14} style={{ marginTop: 15 }}>
//                         Enter your localtion Here
//                       </Text>
//                       <Input
//                         borderless
//                         placeholder='Address e.g house#610 near railway hospital, westridge'
//                         onChangeText={(value) => this.setState({ days: value })}
//                       />
//                     </Block>

//                     <Block
//                       middle
//                       row
//                       space='evenly'
//                       style={{ paddingBottom: 14 }}
//                     >
//                       <Button
//                         //onPress={() => navigation.navigate('login')}
//                         small
//                         color='primary'
//                         // style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
//                       >
//                         Cancel
//                       </Button>
//                       <Button
//                        //onPress={() => navigation.navigate('EndVehicleBooking')}
//                         onPress={this.handleRentProcess}
//                         small
//                         color='primary'
//                         // style={{ backgroundColor: argonTheme.COLORS.PRIMARY }}
//                       >
//                         Confirm
//                       </Button>
//                     </Block>
//                   </KeyboardAvoidingView>
//                 </Block>
//               </Block>
//             </Block>
//           </Block>
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
// });

// export default RentBooking;
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  View,
  TouchableOpacity,
  AsyncStorage,
  KeyboardAvoidingView
} from 'react-native';
//galio
import { Block, Text, theme } from 'galio-framework';
import { Button, Input, Select } from '../components';
import { articles, Images, argonTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";
import { Card, Icon, Rating} from 'react-native-elements';
const { width, height } = Dimensions.get("screen");
import DatePicker from 'react-native-datepicker';
// import DateTimePicker from '@react-native-community/datetimepicker';
const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import Constants from 'expo-constants'; 
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

const moment = extendMoment(Moment);
class RentBooking extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          startDate: new Date(),
          endDate: new Date(),
          days: '6',
          address: '',
          expoPushToken: 'ExponentPushToken[BSgVrWAgKDmf34h1s2_xlS]',
          notification: {},
        };
        //set value in state for initial date
      }
      registerForPushNotificationsAsync = async () => {
        if (Constants.sisDevice) {
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
          console.log('ty'+token);
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
      parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0] - 1, mdy[1]);
      }
      datediff() {
        // Take the difference between the dates and divide by milliseconds per day.
        // Round to nearest whole number to deal with DST.
        return Math.round(
          (this.state.endDate - this.state.startDate) / (1000 * 60 * 60 * 24)
        );
      }
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
      handleRentProcess = async () => {
        var d1 = new Date(this.state.startDate); //firstDate
        var d2 = new Date(this.state.endDate); //SecondDate
        // var diff = Math.abs(d2 - d1); //in milliseconds  ---> alternative way in javascript
        const range = moment.range(d1, d2);
        range.diff('months'); // 3
        range.diff('days'); // 92
        const diff = range.diff(); // 7945200000
        const caldays = parseInt(diff / (1000 * 60 * 60 * 24));
        console.log((this.state.days = caldays));
    
        //-----------------------------------------------------------
       const vehicleId = this.props.route.params.vehicleId;
        console.log(vehicleId);
        const token = await AsyncStorage.getItem('Customertoken');
        fetch('http://192.168.1.153:5000/api/customer/book/' + vehicleId, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token,
          },
          body: JSON.stringify({
            days: this.state.days,
          }),
        })
          .then((res) => res.json())
          .then(async (data) => {
            try {
              if (!data.errors) {
                console.log('booking start');
                console.log(data);
                const id = data;
                // this.props.navigation.navigate('login');
                this.props.navigation.navigate('CreditCardInput');
                // this.props.navigation.navigate('EndVehicleBooking', {
                //   vehicleId: vehicleId,
                //   bookingId: id,
                // });
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
    return (
      <Block flex >
        <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('RentBooking')}>
     
     <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3gLAMkW3_Q8vTh-JkXBW0Q14OsfMS29Bqw&usqp=CAU'}}  style={{width:180, height:100,borderRadius:1}} />
      <View style={{alignItems:"center",flex:1}}>
        <Text style={{fontWeight:"bold",marginTop:10,backgroundColor: theme.COLORS.WHITE}}>Toyota Corola</Text>
        <Rating
              type='star'
              imageSize={15}
              readonly
              style={{ paddingRight: 10, marginTop:7 }}
              startingValue={4}
            />
            <Text style={{color:"green", marginTop:7}}>Rs. 5000</Text>
      </View>
    </TouchableOpacity> 
    <Block flex middle>
          <Block
              style={styles.registerContainer}
              // code uraya hy yaha sy
            >
              <Block flex>
                <Block flex={0.17} middle>
                  <Text color='#8898AA' size={19}>
                    Schedule Your Booking
                  </Text>
                </Block>
                <Block flex center>
             <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior='padding'
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Block flex left>
                        <Text
                          color='#8898AA'
                          size={17}
                          style={{ marginTop: 10 }}
                        >
                          From:
                        </Text>
                      </Block>
                 <DatePicker
                         style={{ width: 200, marginTop: 45 }}
                       date={this.state.startDate} //initial date from state
                       mode='datetime' //The enum of date, datetime and time
                        placeholder='select date'
                        format='YYYY/MM/DD'
                      minDate={this.state.startDate}
                        maxDate='2022/01/01'
                        confirmBtnText='Confirm'
                        cancelBtnText='Cancel'
                        customStyles={{
                          dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0,
                          },
                          dateInput: {
                            marginLeft: 36,
                          },
                        }}
                        onDateChange={(value) => {
                          this.setState({ startDate: value });
                        }}
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Block flex left>
                        <Text
                          color='#8898AA'
                          size={17}
                          style={{ marginTop: 10 }}
                        >
                          To:
                        </Text>
                      </Block>
                      <DatePicker
                        style={{ width: 200, marginTop: 45 }}
                        date={this.state.endDate} //initial date from state
                        mode='datetime' //The enum of date, datetime and time
                        placeholder='select date'
                        format='YYYY/MM/DD'
                       minDate={this.state.endDate}
                        maxDate='2022/01/01'
                        confirmBtnText='Confirm'
                        cancelBtnText='Cancel'
                        customStyles={{
                          dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0,
                          },
                          dateInput: {
                            marginLeft: 36,
                          },
                        }}
                        onDateChange={(endDate) => {
                          this.setState({ endDate: endDate });
                        }}
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 50 }}>
                      <Text color='#8898AA' size={14} style={{ marginTop: 15 }}>
                        Enter your localtion Here
                      </Text>
                      <Input
                        borderless
                        placeholder='Address e.g house#610 near railway hospital, westridge'
                        onChangeText={(value) => this.setState({ days: value })}
                      />
                    </Block>

                    <Block center >
              <Button
                style={styles.button}
                color='primary'
                onPress={this.handleRentProcess} 
                //onPress={() => navigation.navigate('BookingStatistics')} // pointing to next page here adding something here
                textStyle={{ color: argonTheme.COLORS.WHITE }}
              >
                Book
              </Button>
            </Block>
            <Block center style={{marginTop:10}} >
              <Button
                style={styles.button}
                color={argonTheme.COLORS.SECONDARY}
              //  onPress={this.KeepMelogIn} // pointing to next page here adding something here
                textStyle={{ color: argonTheme.COLORS.BLACK }}
              >
               Cancel
              </Button>
            </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight :0,
  // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  registerContainer: {
        width: width * 0.9,
        height: height * 0.78,
        marginBottom:6,
        backgroundColor: theme.COLORS.WHITE,
        borderRadius: 1,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
        overflow: 'hidden',
      },
      button: {
        width: width - theme.SIZES.BASE * 4,
        height: theme.SIZES.BASE * 3,
        shadowRadius: 0,
        shadowOpacity: 0,
      },
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER,
  },
  listItem:{
    margin:4,
  marginTop:100,
  marginBottom:15,
  backgroundColor: theme.COLORS.WHITE,
    width:"91%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:1,
    height:100,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
  //  marginTop:100,
  },
  group: {
    paddingTop: theme.SIZES.BASE,
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure,
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
  },
  categoryTitle: {
    height: '100%',
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBlock: {
    overflow: 'hidden',
    borderRadius: 4,
  },
  productItem: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
    marginTop: 50,
  },
  productImage: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3,
  },
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE,
    // paddingBottom: theme.SIZES.BASE * 2,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 62,
    borderWidth: 0,
  },
});

export default RentBooking;

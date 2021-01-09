// import React from 'react';
// import {
//   StyleSheet,
//   ImageBackground,
//   Dimensions,
//   StatusBar,
//   KeyboardAvoidingView,
//   Alert,
//   Picker,
//   AsyncStorage,
// } from 'react-native';
// import { Block, Checkbox, Text, theme } from 'galio-framework';
// import DatePicker from 'react-native-datepicker';

// import { ButtonGroup } from 'react-native-elements';
// import { Button, Icon, Input, Select } from '../components';
// import { Images, argonTheme } from '../constants';

// const { width, height } = Dimensions.get('screen');
// import {baseUrl} from '../baseUrl/baseUrl';
// class RentACar extends React.Component {

//   constructor(props) {
//         super(props);

//         this.state = {
//           selectedValueType: 'Car',
//           selectedValueSeating: 6,
//           selectedValueManufacturer: 'Honda',
//           selectedValueTransmission: 'Auto',
//           fare:0,
//           selectedIndex: 0,
//           //setSelectedValue: 'Car',
//         };
//         this.updateIndex = this.updateIndex.bind(this);
//       }
//       updateIndex(selectedIndex) {
//         this.setState({ selectedIndex });
//       }

//       handleSearch = async () => {
//         const type = this.state.selectedValueType;
//         const manufacturer = this.state.selectedValueManufacturer;
//         const seatingCapacity = this.state.selectedValueSeating;
//         const transmission = this.state.selectedValueTransmission;
//         const driver = 0;
//         console.log(type);
//         const token = await AsyncStorage.getItem('Customertoken');
//         const response = await fetch(
//           baseUrl+'api/customer/search/' + type+'/'+manufacturer+'/'+seatingCapacity+'/'+transmission +'/'+driver ,
//           {
//             method: 'GET',
//             headers: {
//               'Content-Type': 'application/json',
//               'x-auth-token': token,
//             },
//           }
//         )
//           .then((res) => res.json())
//           .then(async (data) => {
//             try {
//               if (!data.errors) {
//                 console.log(data);
//                 this.props.navigation.navigate('Wdriver', {
//                   vehicles: data,
//                 });
//               } else {
//                 data.errors.forEach((error) => alert(error.msg));
//               }
//             } catch (e) {
//               console.log('error hai', e);
//             }
//           });
//       };

//   render() {
//     const buttons = ['Driver', 'Without Driver'];

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
//                   <Text color='#8898AA' size={18}>
//                   Enter Search Details
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
//                           Select Vehicle Type
//                         </Text>
//                       </Block>
//                       <Picker
//                         selectedValue={this.state.selectedValueType}
//                         style={{
//                           width: 150,
//                           color: argonTheme.COLORS.DEFAULT,
//                           fontWeight: '600',
//                           marginLeft:150
//                         }}
//                         onValueChange={(itemValue, itemIndex) =>
//                           this.setState({ selectedValueType: itemValue })
//                          }
//                       >
//                         <Picker.Item label='Car' value='Car' />
//                         <Picker.Item label='Bike' value='bike' />
//                         <Picker.Item label='Family Van' value='familyVan' />
//                         <Picker.Item label='Cargo' value='cargo' />
//                       </Picker>
//                     </Block>
//                     <Block width={width * 0.8} style={{ marginBottom: 15 }}>
//                       <Block flex left>
//                         <Text
//                           color='#8898AA'
//                           size={14}
//                           style={{ marginTop: 15 }}
//                         >
//                          Select Manufacturer
//                         </Text>
//                       </Block>
//                       <Picker
//                         selectedValue={this.state.selectedValueManufacturer}
//                         style={{
//                           width: 150,
//                           color: argonTheme.COLORS.DEFAULT,
//                           fontWeight: '600',
//                           marginLeft:150
//                         }}
//                          onValueChange={(itemValue, itemIndex) =>
//                           this.setState({ selectedValueManufacturer: itemValue })
//                          }
//                       >
//                         <Picker.Item label='Honda' value='honda' />
//                         <Picker.Item label='Toyota' value='toyota' />
//                         <Picker.Item label='Suzuki' value='suzuki' />
//                       </Picker>
//                     </Block>
//                     <Block width={width * 0.8} style={{ marginBottom: 15 }}>
//                       <Block flex left>
//                         <Text
//                           color='#8898AA'
//                           size={14}
//                           style={{ marginTop: 15 }}
//                         >
//                           Select Seating capacity
//                         </Text>
//                       </Block>
//                       <Picker
//                        selectedValue={this.state.selectedValueSeating}
//                         style={{
//                           width: 150,
//                           color: argonTheme.COLORS.DEFAULT,
//                           fontWeight: '600',
//                           marginLeft:150
//                         }}
//                         onValueChange={(itemValue, itemIndex) =>
//                           this.setState({ selectedValueSeating: itemValue })
//                         }
//                       >
//                         <Picker.Item label='4' value='4' />
//                         <Picker.Item label='6' value='6' />
//                         <Picker.Item label='8' value='8' />
//                         <Picker.Item label='10' value='10' />
//                       </Picker>
//                     </Block>
//                     <Block width={width * 0.8} style={{ marginBottom: 15 }}>
//                       <Block flex left>
//                         <Text
//                           color='#8898AA'
//                           size={14}
//                           style={{ marginTop: 15 }}
//                         >
//                           Select Transmission
//                         </Text>
//                       </Block>
//                       <Picker
//                       selectedValue={this.state.selectedValueTransmission}
//                         style={{
//                           width: 150,
//                           color: argonTheme.COLORS.DEFAULT,
//                           fontWeight: '600',
//                           marginLeft:150
//                         }}
//                         onValueChange={(itemValue, itemIndex) =>
//                           this.setState({ selectedValueTransmission: itemValue })
//                         }
//                       >
//                         <Picker.Item label='Auto' value='auto' />
//                         <Picker.Item label='Manual' value='manual' />

//                       </Picker>
//                     </Block>
//                     <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
//                   <ButtonGroup
//                     onPress={this.updateIndex}
//                     selectedIndex={this.selectedIndex}
//                     buttons={buttons}
//                     // containerStyle={{ height: 20 }}
//                   />
//                 </Block>

//                     <Block
//                       middle
//                       row
//                       space='evenly'
//                       style={{ paddingBottom: 14 }}
//                     >
//                       <Button

//                         small
//                         color='primary'
//                         // style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
//                       >
//                         Cancel
//                       </Button>
//                       <Button
//                         onPress={this.handleSearch}
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

// export default RentACar;
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
} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { Button, Select, Icon, Input, Header, Switch } from '../components/';
//import { Button } from "../components";
import { Images, argonTheme } from '../constants';
import { HeaderHeight } from '../constants/utils';
const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;
import { ButtonGroup } from 'react-native-elements';

import { baseUrl } from '../baseUrl/baseUrl';
class RentACar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValueType: 'Car',
      selectedValueSeating: 2,
      selectedValueManufacturer: 'honda',
      selectedValueTransmission: 'manual',
      fare: 0,
      selectedIndex: 1,
      //setSelectedValue: 'Car',
    };
    this.updateIndex = this.updateIndex.bind(this);
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }
  componentDidMount() {
    // this.getScreen();
  }
  getScreen = async () => {
    const token = await AsyncStorage.getItem('Customertoken');
    const response = await fetch(baseUrl + 'api/customer/checkrequest', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          if (!data.errors) {
            console.log(data);
            var x = data.map(function (item) {
              return item['request'];
            });

            console.log(x);
            const lang = x.toString();
            console.log(lang);
            if (lang == 'false') {
              this.props.navigation.navigate('popUp');
            }
          } else {
            data.errors.forEach((error) => alert(error.msg));
          }
        } catch (e) {
          console.log('error hai', e);
        }
      });
  };
  handleSearch = async () => {
    const type = this.state.selectedValueType;
    const manufacturer = this.state.selectedValueManufacturer;
    const seatingCapacity = this.state.selectedValueSeating;
    const transmission = this.state.selectedValueTransmission;
    const driver = this.state.selectedIndex;
    console.log(type);
    const token = await AsyncStorage.getItem('Customertoken');
    const response = await fetch(
      baseUrl +
        'api/customer/search/' +
        type +
        '/' +
        manufacturer +
        '/' +
        seatingCapacity +
        '/' +
        transmission +
        '/' +
        driver,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      }
    )
      .then((res) => res.json())
      .then(async (data) => {
        try {
          if (!data.errors) {
            console.log(data);
            this.props.navigation.navigate('Wdriver', {
              data,
            });
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
                title='Search'
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
                Search Vehicle $ Book Now
              </Text>
            </Block>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '-15%' }}
            >
              <Block flex style={styles.profileCard}>
                <KeyboardAvoidingView
                  style={{ flex: 1 }}
                  behavior='padding'
                  enabled
                >
                  <Block
                    width={width * 0.8}
                    style={{ marginBottom: 15 }}
                    middle
                    row
                    space='evenly'
                  >
                    <Block flex left>
                      <Text color='#32325D' size={16}>
                        Select Vehicle Type
                      </Text>
                    </Block>
                    <Picker
                      selectedValue={this.state.selectedValueType}
                      style={{
                        width: 100,
                        color: argonTheme.COLORS.DEFAULT,
                        fontWeight: '400',
                        fontSize: 10,
                        marginLeft: 10,
                      }}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({ selectedValueType: itemValue })
                      }
                    >
                      <Picker.Item label='Car' value='Car' />
                      <Picker.Item label='Bike' value='bike' />
                      <Picker.Item label='Family Van' value='familyVan' />
                      <Picker.Item label='Cargo' value='cargo' />
                    </Picker>
                  </Block>
                  <Block
                    width={width * 0.8}
                    style={{ marginBottom: 15 }}
                    middle
                    row
                    space='evenly'
                  >
                    <Block flex left>
                      <Text color='#32325D' size={16}>
                        Select Manufacturer
                      </Text>
                    </Block>
                    <Picker
                      selectedValue={this.state.selectedValueManufacturer}
                      style={{
                        width: 120,
                        color: argonTheme.COLORS.DEFAULT,
                        fontWeight: '400',
                        fontSize: 10,
                        marginLeft: 10,
                      }}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({ selectedValueManufacturer: itemValue })
                      }
                    >
                      <Picker.Item label='Honda' value='honda' />
                      <Picker.Item label='Toyota' value='toyota' />
                      <Picker.Item label='Suzuki' value='suzuki' />
                    </Picker>
                  </Block>
                  {this.state.selectedValueType == 'bike' ? (
                    <Block
                      width={width * 0.8}
                      style={{ marginBottom: 15 }}
                      middle
                      row
                      space='evenly'
                    >
                      <Block flex left>
                        <Text color={argonTheme.COLORS.MUTED} size={16}>
                          Select Seating capacity
                        </Text>
                      </Block>
                      <Picker
                        selectedValue={this.state.selectedValueSeating}
                        style={{
                          width: 80,
                          color: argonTheme.COLORS.MUTED,
                          fontWeight: '400',
                          fontSize: 10,
                          marginLeft: 20,
                        }}
                        enabled={false}
                        onValueChange={(itemValue, itemIndex) =>
                          this.setState({ selectedValueSeating: itemValue })
                        }
                      >
                        <Picker.Item label='4' value='4' />
                        <Picker.Item label='6' value='6' />
                        <Picker.Item label='8' value='8' />
                        <Picker.Item label='10' value='10' />
                      </Picker>
                    </Block>
                  ) : (
                    <Block
                      width={width * 0.8}
                      style={{ marginBottom: 15 }}
                      middle
                      row
                      space='evenly'
                    >
                      <Block flex left>
                        <Text color='#32325D' size={16}>
                          Select Seating capacity
                        </Text>
                      </Block>
                      <Picker
                        selectedValue={this.state.selectedValueSeating}
                        style={{
                          width: 80,
                          color: argonTheme.COLORS.DEFAULT,
                          fontWeight: '400',
                          fontSize: 10,
                          marginLeft: 20,
                        }}
                        enabled={true}
                        onValueChange={(itemValue, itemIndex) =>
                          this.setState({ selectedValueSeating: itemValue })
                        }
                      >
                        <Picker.Item label='4' value='4' />
                        <Picker.Item label='6' value='6' />
                        <Picker.Item label='8' value='8' />
                        <Picker.Item label='10' value='10' />
                      </Picker>
                    </Block>
                  )}
                  <Block
                    width={width * 0.8}
                    style={{ marginBottom: 15 }}
                    middle
                    row
                    space='evenly'
                  >
                    <Block flex left>
                      <Text color='#32325D' size={16}>
                        Select Transmission
                      </Text>
                    </Block>
                    <Picker
                      selectedValue={this.state.selectedValueTransmission}
                      style={{
                        width: 120,
                        color: argonTheme.COLORS.DEFAULT,
                        fontWeight: '400',
                        fontSize: 10,
                        marginLeft: 10,
                      }}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({ selectedValueTransmission: itemValue })
                      }
                    >
                      <Picker.Item label='Auto' value='auto' />
                      <Picker.Item label='Manual' value='manual' />
                    </Picker>
                  </Block>
                  <Block
                    style={{
                      paddingHorizontal: theme.SIZES.BASE / 2,
                      marginRight: 35,
                    }}
                  >
                    <ButtonGroup
                      onPress={this.updateIndex}
                      selectedIndex={this.state.selectedIndex}
                      buttons={buttons}
                      // containerStyle={{ height: 30, width:250}}
                    />
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
                      onPress={this.handleSearch}
                      //  onPress={() => navigation.navigate('RentBooking')}
                      // onPress={() => navigation.navigate('EndVehicleBooking')}
                      small
                      color='primary'
                      // style={{ backgroundColor: argonTheme.COLORS.PRIMARY }}
                    >
                      Search
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

export default RentACar;

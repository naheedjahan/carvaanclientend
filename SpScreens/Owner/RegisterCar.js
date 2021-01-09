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
//   Alert,
//   AsyncStorage,
//   TextInput,
//   Picker,
// } from 'react-native';
// import { Block, Checkbox, Text, theme } from 'galio-framework';
// import { TouchableOpacity } from 'react-native';
// import { Button, Icon, Input, Select } from '../components';
// import { Images, argonTheme } from '../constants';
// import { HeaderHeight } from "../constants/utils";
// import { ButtonGroup } from 'react-native-elements';
// const { width, height } = Dimensions.get('screen');
// import * as Permissions from 'expo-permissions';
// import * as ImagePicker from 'expo-image-picker';
// import * as ImageManipulator from 'expo-image-manipulator';

// class RegisterCar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       type: 'car',
//       manufacturer: 'honda',
//       model: 'Bmw',
//       year: '2014',
//       seatingCapacity: '5',
//       transmission: 'manual',
//       fare: '86878',
//       selectedIndex: 0,
//       description: 'my',
//       selectedValue: 'Car',
//     };

//     this.updateIndex = this.updateIndex.bind(this);
//   }
//   //--------
//   updateIndex(selectedIndex) {
//     this.setState({ selectedIndex });
//   }
//   //-------
//   openImagePickerAsync = async () => {
//     let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

//     if (permissionResult.granted === false) {
//       alert('Permission to access camera roll is required!');
//       return;
//     }

//     let pickerResult = await ImagePicker.launchImageLibraryAsync();
//     console.log(pickerResult);
//     this.processImage(pickerResult.uri);
//   };
//   getImageFromCamera = async () => {
//     const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
//     const cameraRollPermission = await Permissions.askAsync(
//       Permissions.CAMERA_ROLL
//     );

//     if (
//       cameraPermission.status === 'granted' &&
//       cameraRollPermission.status === 'granted'
//     ) {
//       let capturedImage = await ImagePicker.launchCameraAsync({
//         allowsEditing: true,
//         aspect: [4, 3],
//       });
//       if (!capturedImage.cancelled) {
//         this.processImage(capturedImage.uri);
//       }
//     }
//   };
//   processImage = async (imageUri) => {
//     let processedImage = await ImageManipulator.manipulateAsync(
//       imageUri,
//       [{ resize: { width: 400 } }],
//       { format: 'png' }
//     );
//     console.log(processedImage);
//     this.setState({ imageUrl: processedImage.uri });
//   };
//   handleRegister = async () => {
//     console.log('yahan ara hai');

//     const token = await AsyncStorage.getItem('Ownertoken');
//     console.log(token);
//     console.log('yahan a raha');
//     // localhost means your mobile cannot access this
//     fetch('http://192.168.1.153:5000/api/vehicle/add', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-auth-token': token,
//       },
//       body: JSON.stringify({
//         type: this.state.selectedValue,
//         manufacturer: this.state.manufacturer,
//         model: this.state.model,
//         year: this.state.year,
//         seatingCapacity: this.state.seatingCapacity,
//         transmission: this.state.transmission,
//         fare: this.state.fare,
//         image: this.state.imageUrl,
//         driver: true,
//         description: this.state.description,
//       }),
//     })
//       .then((res) => res.json())
//       .then(async (data) => {
//         try {
//           if (!data.errors) {
//             console.log('flag---> check');
//             console.log(data);
//             //const token = await AsyncStorage.getItem('token');
//             //  console.log(token);
//             // this.props.navigation.navigate('login');
//           } else {
//             data.errors.forEach((error) => alert(error.msg));
//           }
//         } catch (e) {
//           console.log('error hai', e);
//         }
//       });
//   };
//   render() {
//     const buttons = ['Driver', 'Without Driver'];
//     const { selectedIndex } = this.state;
//     const createoneButtonAlert = () =>
//       Alert.alert(
//         'Confirm Booking',
//         'Profile is Updataed',
//         [
//           {
//             text: 'Ok',

//             style: 'ok',
//           },
//         ],
//         { cancelable: false }
//       );
//     const { navigation } = this.props; // is ki wja sy navigation wala error gya
//     return (

//           <ImageBackground
//             source={Images.ProfileBackground}
//             style={styles.profileContainer}
//             imageStyle={styles.profileBackground}
//           >
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.articles}
//       >
//         <Block flex middle>
//           <Block flex>
//             <Block flex center>
//               <KeyboardAvoidingView
//                 style={{ flex: 1 }}
//                 behavior='padding'
//                 enabled
//               >
//                  <Block row space="between">
//                     <Block middle >
//                     <Image
//                           source={{ uri: this.state.imageUrl }}
//                           // loadingIndicatorSource={require('./images/logo.png')}
//                           style={{ margin: 10, width: 80, height: 60,backgroundColor: '#e3e3e3' }}
//                         />
//                       <Text  bold
//                         color="#525F7F"
//                         size={15}
//                         style={{ marginTop:10 }}>Upload Picture</Text>
//                     </Block>
//                     <Block middle>
//                     <Icon
//               raised
//               reverse
//               name={'camera'}
//               type='font-awesome'
//               color={argonTheme.COLORS.SUCCESS}
//               onPress={this.getImageFromCamera}
//             />
//                     <Text
//                         bold
//                         color={argonTheme.COLORS.DEFAULT}
//                         size={15}
//                         style={ { marginTop: 25 }}
//                       >
//                         Camera
//                       </Text>
//                     </Block>
//                     <Block middle>
//                     <Icon
//               raised
//               reverse

//               name={'picture-o'}
//               type='font-awesome'
//               color={argonTheme.COLORS.SUCCESS}
//               onPress={this.openImagePickerAsync}
//             />

//                       <Text  bold
//                         color="#525F7F"
//                         size={15}
//                         style={{ marginTop: 25 }}>Upload</Text>
//                     </Block>
//                   </Block>

//                 <Block
//                   width={width * 0.8}
//                   style={{ paddingHorizontal: theme.SIZES.BASE }}
//                 >
//                   <Block flex left>
//                     <Picker
//                       selectedValue={this.state.selectedValue}
//                       style={{
//                         width: 150,
//                         color: argonTheme.COLORS.DEFAULT,
//                         fontWeight: '600',
//                       }}
//                       onValueChange={(itemValue, itemIndex) =>
//                         this.setState({ selectedValue: itemValue })
//                       }
//                     >
//                       <Picker.Item label='Car' value='Car' />
//                       <Picker.Item label='Bike' value='bike' />
//                       <Picker.Item label='Family Van' value='familyVan' />
//                     </Picker>
//                   </Block>
//                 </Block>
//                 <Block
//                   width={width * 0.8}
//                   style={{ paddingHorizontal: theme.SIZES.BASE }}
//                 >
//                   <Input
//                     right
//                     placeholder='Manufacturer'
//                     iconContent={<Block />}
//                     value={this.state.value}
//                     onChangeText={(value) =>
//                       this.setState({ manufacturer: value })
//                     }
//                   />
//                 </Block>
//                 <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
//                   <Input
//                     right
//                     placeholder='Model'
//                     iconContent={<Block />}
//                     value={this.state.value}
//                     onChangeText={(value) => this.setState({ model: value })}
//                   />
//                 </Block>

//                 <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
//                   <Input
//                     right
//                     placeholder='Year'
//                     iconContent={<Block />}
//                     value={this.state.value}
//                     onChangeText={(value) => this.setState({ year: value })}
//                   />
//                 </Block>

//                 <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
//                   <Input
//                     right
//                     placeholder='Seating Capacity'
//                     iconContent={<Block />}
//                     value={this.state.value}
//                     onChangeText={(value) =>
//                       this.setState({ seatingCapacity: value })
//                     }
//                   />
//                 </Block>
//                 <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
//                   <Input
//                     right
//                     placeholder='Transmission'
//                     iconContent={<Block />}
//                     value={this.state.value}
//                     onChangeText={(value) =>
//                       this.setState({ transmission: value })
//                     }
//                   />
//                 </Block>
//                 <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
//                   <Input
//                     right
//                     placeholder='Fair Per Day'
//                     iconContent={<Block />}
//                     value={this.state.value}
//                     onChangeText={(value) => this.setState({ fare: value })}
//                   />
//                 </Block>
//                 <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
//                   <ButtonGroup
//                     onPress={this.updateIndex}
//                     selectedIndex={selectedIndex}
//                     buttons={buttons}
//                     // containerStyle={{ height: 20 }}
//                   />
//                 </Block>

//                 <View
//                   style={{
//                     borderRadius: 4,
//                     borderColor: argonTheme.COLORS.BORDER,
//                     height: 150,
//                     width: 286,
//                     backgroundColor: '#FFFFFF',
//                     shadowColor: argonTheme.COLORS.BLACK,
//                     shadowOffset: { width: 0, height: 1 },
//                     shadowRadius: 2,
//                     shadowOpacity: 0.05,
//                     elevation: 2,
//                     marginBottom: 20,
//                     marginLeft: 20,
//                     paddingBottom: 100,
//                     paddingLeft: 20,
//                   }}
//                 >
//                   <TextInput
//                     style={{ width: 50, justifyContent: 'flex-start' }}
//                     underlineColorAndroid='transparent'
//                     placeholder=' Car Description'
//                     placeholderTextColor='#8898AA'
//                     numberOfLines={10}
//                     multiline={true}
//                     style={{}}
//                     value={this.state.value}
//                     onChangeText={(value) =>
//                       this.setState({ description: value })
//                     }
//                   />
//                 </View>

//                 <Block middle style={{ marginBottom: 8 }}>
//                   <Button
//                     color='primary'
//                     style={styles.createButton}
//                     onPress={() => this.handleRegister()}
//                   >
//                     <Text bold size={14} color={argonTheme.COLORS.WHITE}>
//                       REGISTER
//                     </Text>
//                   </Button>
//                 </Block>
//               </KeyboardAvoidingView>
//             </Block>
//           </Block>
//         </Block>
//       </ScrollView>
//       </ImageBackground>

//     );
//   }
// }

// const styles = StyleSheet.create({
//   profile: {
//     marginTop: Platform.OS === "android" ? -HeaderHeight :0,
//   // marginBottom: -HeaderHeight * 2,
//     flex: 1
//   },
//   profileContainer: {
//     width: width,
//     height: height,
//     padding: 0,
//     zIndex: 1,
//   //  marginTop:100,
//   },
//   profileBackground: {
//     width: width,
//     height: height / 2
//   },
//   registerContainer: {
//     // width: width * 0.9,
//     // height: height * 0.78,
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
//     //overflow: 'hidden',
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

// export default RegisterCar;
//************************************************ */
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
// import React from "react";
// import {
//   StyleSheet,
//   Dimensions,
//   ScrollView,
//   Image,
//   KeyboardAvoidingView,
//   ImageBackground,
//   Platform,
//   View,
//   TextInput,
//   Picker,
//   AsyncStorage
// } from "react-native";
// import { Block, Text, theme } from "galio-framework";
// import { Button, Select, Icon, Input, Header, Switch } from '../components/';
// //import { Button } from "../components";
// import { Images, argonTheme } from "../constants";
// import { HeaderHeight } from "../constants/utils";
// const { width, height } = Dimensions.get("screen");
// const thumbMeasure = (width - 48 - 32) / 3;
// import { ButtonGroup } from 'react-native-elements';

// import {baseUrl} from '../baseUrl/baseUrl';
// class RegisterCar extends React.Component {

//   constructor(props) {
//         super(props);

//         this.state = {
//           year: '2014',
//                 seatingCapacity: '5',
//                 transmission: 'manual',
//                 fare: '86878',
//                 selectedIndex: 0,
//                 description: 'my',
//           selectedValueType: 'Car',
//           selectedValueSeating: 6,
//           selectedValueManufacturer: 'Honda',
//           selectedValueTransmission: 'Auto',
//           selectedIndex: 1,
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
//     const { navigation } = this.props;
//     const buttons = ['Driver', 'Without Driver'];
//     return (

//       <Block flex style={styles.profile}>

//         <Block flex >
//           <ImageBackground
//             source={Images.ProfileBackground}
//             style={styles.profileContainer}
//             imageStyle={styles.profileBackground}
//           >
//               <Block style={{ marginBottom: theme.SIZES.BASE }}>
//             <Header
//                transparent
//                white
//                title="Title"
//                navigation={this.props.navigation}

//             />
//           </Block>
//           <Block left style={styles.nameInfo}>
//                     {/* <Text bold size={28} color="white">
//                       Jessica Jones, 27
//                     </Text> */}
//                     <Text bold size={16} color="white" style={{ marginTop: 10, marginLeft:10 }}>
//                      Search Vehicle $ Book Now
//                     </Text>
//                   </Block>

//             <ScrollView
//               showsVerticalScrollIndicator={false}
//               style={{ width, marginTop: '-15%' }}
//             >
//               <Block flex style={styles.profileCard}>
//               <KeyboardAvoidingView
//                     style={{ flex: 1 }}
//                     behavior='padding'
//                     enabled
//                   >
//                     <Block width={width * 0.8} style={{ marginBottom: 15 }} middle
//                     row
//                     space="evenly">
//                       <Block flex left >
//                         <Text
//                           color="#32325D"
//                           size={16}

//                         >
//                           Select Vehicle Type
//                         </Text>
//                         </Block>
//                       <Picker
//                         selectedValue={this.state.selectedValueType}
//                         style={{
//                           width: 100,
//                           color: argonTheme.COLORS.DEFAULT,
//                           fontWeight: '400',
//                           fontSize:10,
//                           marginLeft:10
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
//                     <Block width={width * 0.8} style={{ marginBottom: 15 }}  middle
//                     row
//                     space="evenly">
//                       <Block flex left>
//                         <Text
//                           color="#32325D"
//                           size={16}

//                         >
//                          Select Manufacturer
//                         </Text>
//                       </Block>
//                       <Picker
//                         selectedValue={this.state.selectedValueManufacturer}
//                         style={{
//                           width: 120,
//                           color: argonTheme.COLORS.DEFAULT,
//                           fontWeight: '400',
//                           fontSize:10,
//                           marginLeft:10
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
//                     <Block width={width * 0.8} style={{ marginBottom: 15 }} middle
//                     row
//                     space="evenly">
//                       <Block flex left>
//                         <Text
//                           color="#32325D"
//                           size={16}
//                         >
//                           Select Seating capacity
//                         </Text>
//                       </Block>
//                       <Picker
//                        selectedValue={this.state.selectedValueSeating}
//                         style={{
//                           width: 80,
//                           color: argonTheme.COLORS.DEFAULT,
//                           fontWeight: '400',
//                           fontSize:10,
//                           marginLeft:20
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
//                     <Block width={width * 0.8} style={{ marginBottom: 15 }} middle
//                     row
//                     space="evenly">
//                       <Block flex left>
//                         <Text
//                           color="#32325D"
//                           size={16}

//                         >
//                           Select Transmission
//                         </Text>
//                       </Block>
//                       <Picker
//                       selectedValue={this.state.selectedValueTransmission}
//                         style={{
//                           width: 100,
//                           color: argonTheme.COLORS.DEFAULT,
//                           fontWeight: '400',
//                           fontSize:10,
//                           marginLeft:10
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
//                   <Input
//                     right
//                     placeholder='Year'
//                     iconContent={<Block />}
//                     value={this.state.value}
//                     onChangeText={(value) => this.setState({ year: value })}
//                   />
//                 </Block>
//                 <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
//                   <Input
//                     right
//                     placeholder='Fair Per Day'
//                     iconContent={<Block />}
//                     value={this.state.value}
//                     onChangeText={(value) => this.setState({ fare: value })}
//                   />
//                 </Block>

//                 <View
//                   style={{
//                     borderRadius: 4,
//                     borderColor: argonTheme.COLORS.BORDER,
//                     height: 150,
//                     width: 286,
//                     backgroundColor: '#FFFFFF',
//                     shadowColor: argonTheme.COLORS.BLACK,
//                     shadowOffset: { width: 0, height: 1 },
//                     shadowRadius: 2,
//                     shadowOpacity: 0.05,
//                     elevation: 2,
//                     marginBottom: 20,
//                     marginLeft: 20,
//                     paddingBottom: 100,
//                     paddingLeft: 20,
//                   }}
//                 >
//                   <TextInput
//                     style={{ width: 50, justifyContent: 'flex-start' }}
//                     underlineColorAndroid='transparent'
//                     placeholder=' Car Description'
//                     placeholderTextColor='#8898AA'
//                     numberOfLines={10}
//                     multiline={true}
//                     style={{}}
//                     value={this.state.value}
//                     onChangeText={(value) =>
//                       this.setState({ description: value })
//                     }
//                   />
//                 </View>

//                     <Block  style={{ paddingHorizontal: theme.SIZES.BASE/2 , marginRight:35}}>
//                   <ButtonGroup
//                     onPress={this.updateIndex}
//                     selectedIndex={this.selectedIndex}
//                     buttons={buttons}
//                   // containerStyle={{ height: 30, width:250}}
//                   />
//                 </Block>

//                     <Block
//                       middle
//                       row
//                       space='evenly'
//                       style={{ paddingBottom: 14, marginTop:50 }}

//                     >
//                       <Button

//                         small
//                         color='primary'
//                         // style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
//                       >
//                         Cancel
//                       </Button>
//                       <Button
//                        // onPress={this.handleSearch}
//                         onPress={() => navigation.navigate('Wdriver')}
//                         small
//                         color='primary'
//                         // style={{ backgroundColor: argonTheme.COLORS.PRIMARY }}
//                       >
//                         Search
//                       </Button>
//                     </Block>
//                   </KeyboardAvoidingView>
//               </Block>
//             </ScrollView>
//           </ImageBackground>
//         </Block>

//       </Block>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   profile: {
//     marginTop: Platform.OS === "android" ? -HeaderHeight :0,
//   // marginBottom: -HeaderHeight * 2,
//     flex: 1
//   },
//   profileContainer: {
//     width: width,
//     height: height,
//     padding: 0,
//     zIndex: 1,
//   //  marginTop:100,
//   },
//   profileBackground: {
//     width: width,
//     height: height / 2
//   },
//   nameInfo: {
//     marginTop: 10
//   },
//   profileCard: {
//     // position: "relative",
//     padding: theme.SIZES.BASE,
//     marginHorizontal: theme.SIZES.BASE,
//     marginTop: 100,
//     borderTopLeftRadius: 6,
//     borderTopRightRadius: 6,
//     backgroundColor: theme.COLORS.WHITE,
//     shadowColor: "black",
//     shadowOffset: { width: 0, height: 0 },
//     shadowRadius: 8,
//     shadowOpacity: 0.2,
//     zIndex: 2
//   },
//   info: {
//     paddingHorizontal: 40
//   },
//   avatarContainer: {
//     position: "relative",
//     marginTop: -80
//   },
//   avatar: {
//     width: 124,
//     height: 124,
//     borderRadius: 62,
//     borderWidth: 0
//   },

//   divider: {
//     width: "90%",
//     borderWidth: 1,
//     borderColor: "#E9ECEF"
//   },
//   thumb: {
//     borderRadius: 4,
//     marginVertical: 4,
//     alignSelf: "center",
//     width: thumbMeasure,
//     height: thumbMeasure
//   }
// });

// export default RegisterCar;
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
  View,
  TextInput,
} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { Button, Select, Input, Header, Switch } from '../../components';
//import { Button } from "../components";
import { Images, argonTheme } from '../../constants';
import { HeaderHeight } from '../../constants/utils';
const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;
import { ButtonGroup } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import * as ImageManipulator from 'expo-image-manipulator';

import { baseUrl } from '../../baseUrl/baseUrl';
class RegisterCar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValueType: 'Car',
      selectedValueSeating: 6,
      selectedValueManufacturer: 'Honda',
      selectedValueTransmission: 'Auto',
      fare: 0,
      selectedIndex: 1,
      //setSelectedValue: 'Car',
      model: 'Bmw',
      year: '2014',
      fare: '86878',
      description: 'my',
    };
    this.updateIndex = this.updateIndex.bind(this);
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }
  openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    this.processImage(pickerResult.uri);
  };
  getImageFromCamera = async () => {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (
      cameraPermission.status === 'granted' &&
      cameraRollPermission.status === 'granted'
    ) {
      // Display the camera to the user and wait for them to take a photo or to cancel
      // the action
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!result.cancelled) {
        this.processImage(result.uri);
      }
    }
  };
  processImage = async (imageUri) => {
    let processedImage = await ImageManipulator.manipulateAsync(
      imageUri,
      [{ resize: { width: 400 } }],
      { format: 'png' }
    );
    console.log(processedImage);
    let localUri = processedImage.uri;
    let filename = localUri.split('/').pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    this.setState({ imageUrl: processedImage.uri });
    // Upload the image using the fetch and FormData APIs
    let img = {
      uri: localUri,
      name: filename,
      type,
    };
    this.setState({ imgserver: img });
  };
  handleRegister = async () => {
    const token = await AsyncStorage.getItem('Ownertoken');
    console.log('yahan a raha');
    let formData = new FormData();
    const driver = 0;

    formData.append('type', this.state.selectedValueType);
    formData.append('manufacturer', this.state.selectedValueManufacturer);
    formData.append('model', this.state.model);
    formData.append('year', this.state.year);
    formData.append('seatingCapacity', this.state.selectedValueSeating);
    formData.append('transmission', this.state.selectedValueTransmission);
    formData.append('fare', this.state.fare);
    formData.append('driver', this.state.selectedIndex);
    formData.append('description', this.state.description);
    formData.append('image', this.state.imgserver);
    fetch(baseUrl + 'api/vehicle/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-auth-token': token,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          if (!data.errors) {
            console.log('flag---> check');
            console.log(data);
            //const token = await AsyncStorage.getItem('token');
            //  console.log(token);
            // this.props.navigation.navigate('login');
          } else {
            data.errors.forEach((error) => alert(error.msg));
          }
        } catch (e) {
          console.log('error hai', e);
        }
      });
    //  fetch('http://192.168.1.153:5000/api/vehicle/add', {
    //   method: 'POST',
    //   body: formData,
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //     'x-auth-token': token,
    //   },
    // }). then((res) => res.json())
    //       .then(async (data) => {
    //         try {
    //           if (!data.errors) {
    //             console.log('flag---> check');
    //             console.log(data);
    //             //const token = await AsyncStorage.getItem('token');
    //             //  console.log(token);
    //             // this.props.navigation.navigate('login');
    //           } else {
    //             data.errors.forEach((error) => alert(error.msg));
    //           }
    //         } catch (e) {
    //           console.log('error hai', e);
    //         }
    //       });
    //   };
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
                title='Profile'
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
                Enter Your Vehicle Details
              </Text>
            </Block>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '-20%', marginBottom: 60 }}
            >
              <Block flex style={styles.profileCard}>
                <KeyboardAvoidingView
                  style={{ flex: 1 }}
                  behavior='padding'
                  enabled
                >
                  <Block row space='between'>
                    <Block middle>
                      <Image
                        source={{ uri: this.state.imageUrl }}
                        // loadingIndicatorSource={require('./images/logo.png')}
                        style={{
                          margin: 10,
                          width: 80,
                          height: 60,
                          backgroundColor: '#e3e3e3',
                        }}
                      />
                      <Text
                        bold
                        color='#525F7F'
                        size={15}
                        style={{ marginTop: 10 }}
                      >
                        Upload Picture
                      </Text>
                    </Block>
                    <Block middle>
                      <Icon
                        raised
                        reverse
                        name={'camera'}
                        type='font-awesome'
                        color={argonTheme.COLORS.SUCCESS}
                        onPress={this.getImageFromCamera}
                      />
                      <Text
                        bold
                        color='#525F7F'
                        size={15}
                        style={{ marginTop: 25 }}
                      >
                        Camera
                      </Text>
                    </Block>
                    <Block middle>
                      <Icon
                        raised
                        reverse
                        name={'picture-o'}
                        type='font-awesome'
                        color={argonTheme.COLORS.SUCCESS}
                        onPress={this.openImagePickerAsync}
                      />

                      <Text
                        bold
                        color='#525F7F'
                        size={15}
                        style={{ marginTop: 25 }}
                      >
                        Gallery
                      </Text>
                    </Block>
                  </Block>
                  <Block
                    width={width * 0.8}
                    style={{ marginBottom: 15, marginTop: 10 }}
                    middle
                    row
                    space='evenly'
                  >
                    <Block flex left style={{ marginLeft: 14 }}>
                      <Text color='#32325D' size={16}>
                        Vehicle Type
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
                    <Block flex left style={{ marginLeft: 14 }}>
                      <Text color='#32325D' size={16}>
                        Manufacturer
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
                  <Block
                    width={width * 0.8}
                    style={{ marginBottom: 15 }}
                    middle
                    row
                    space='evenly'
                  >
                    <Block flex left style={{ marginLeft: 14 }}>
                      <Text color='#32325D' size={16}>
                        Seating capacity
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
                  <Block
                    width={width * 0.8}
                    style={{ marginBottom: 15 }}
                    middle
                    row
                    space='evenly'
                  >
                    <Block flex left style={{ marginLeft: 14 }}>
                      <Text color='#32325D' size={16}>
                        Transmission
                      </Text>
                    </Block>
                    <Picker
                      selectedValue={this.state.selectedValueTransmission}
                      style={{
                        width: 100,
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
                  <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                    <Input
                      right
                      placeholder='Model'
                      iconContent={<Block />}
                      value={this.state.value}
                      onChangeText={(value) => this.setState({ model: value })}
                    />
                  </Block>

                  <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                    <Input
                      right
                      placeholder='Year'
                      iconContent={<Block />}
                      value={this.state.value}
                      onChangeText={(value) => this.setState({ year: value })}
                    />
                  </Block>
                  <Block
                    style={{ paddingHorizontal: theme.SIZES.BASE }}
                  ></Block>
                  <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                    <Input
                      right
                      placeholder='Fair Per Day'
                      iconContent={<Block />}
                      value={this.state.value}
                      onChangeText={(value) => this.setState({ fare: value })}
                    />
                  </Block>
                  <Block
                    style={{
                      paddingHorizontal: theme.SIZES.BASE,
                      width: 320,
                      marginLeft: -10,
                    }}
                  >
                    <ButtonGroup
                      onPress={this.updateIndex}
                      selectedIndex={this.state.selectedIndex}
                      buttons={buttons}
                      // containerStyle={{ height: 20 }}
                    />
                  </Block>

                  <View
                    style={{
                      borderRadius: 4,
                      borderColor: argonTheme.COLORS.BORDER,
                      height: 150,
                      width: 260,
                      backgroundColor: '#FFFFFF',
                      shadowColor: argonTheme.COLORS.BLACK,
                      shadowOffset: { width: 0, height: 1 },
                      shadowRadius: 2,
                      shadowOpacity: 0.05,
                      elevation: 2,
                      marginBottom: 20,
                      marginTop: 10,
                      marginLeft: 20,
                      paddingBottom: 100,
                      paddingLeft: 20,
                    }}
                  >
                    <TextInput
                      style={{ width: 50, justifyContent: 'flex-start' }}
                      underlineColorAndroid='transparent'
                      placeholder=' Car Description'
                      placeholderTextColor='#8898AA'
                      numberOfLines={10}
                      multiline={true}
                      style={{}}
                      value={this.state.value}
                      onChangeText={(value) =>
                        this.setState({ description: value })
                      }
                    />
                  </View>

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
                      // onPress={this.handleSearch}
                      onPress={() => this.handleRegister()}
                      small
                      color='primary'
                      // style={{ backgroundColor: argonTheme.COLORS.PRIMARY }}
                    >
                      Submit
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

export default RegisterCar;

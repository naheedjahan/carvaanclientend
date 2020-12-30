// import React, { Component } from 'react';
// import {
//   View,
//   TextInput,
//   Button,
//   StyleSheet,
//   ImageBackground,
//   Dimensions,
//   StatusBar,
//   ScrollView,
// } from 'react-native';
// import { ButtonGroup } from 'react-native-elements';
// import { Block, Checkbox, Text, theme } from 'galio-framework';
// import { Images, argonTheme } from '../constants';
// const { width, height } = Dimensions.get('screen');
// class TouristGuide extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       textInput: [],
//       inputData: [],
//       selectedIndex: 0,
//     };
//     this.updateIndex = this.updateIndex.bind(this);
//   }
//   updateIndex(selectedIndex) {
//     this.setState({ selectedIndex });
//   }
//   //function to add TextInput dynamically
//   addTextInput = (index) => {
//     let textInput = this.state.textInput;
//     textInput.push(
//       <View style={styles.row}>
//         <TextInput
//           style={{
//             paddingHorizontal: 15,
//             width: '100%',
//             height: 50,
//             fontSize: 16,
//             backgroundColor: '#f3f3f3',
//           }}
//           onChangeText={(text) => this.addValues(text, index)}
//         />
//         <Button title='Remove' onPress={() => this.removeTextInput(index)} />
//       </View>
//     );
//     this.setState({ textInput });
//   };

//   //function to remove TextInput dynamically
//   removeTextInput = (index) => {
//     this.state.textInput.splice(index, 1);
//     this.setState({ textInput: this.state.textInput });
//   };
//   removeTextInput2 = (index) => {
//     this.state.inputData.splice(index, 1);
//     this.setState({ inputData: this.state.inputData });
//   };
//   //function to add text from TextInputs into single array
//   addValues = () => {
//     this.setState({
//       textInput: [...this.state.textInput, { meta_name: 'value' }],
//     });

//     // let dataArray = this.state.inputData;
//     // let checkBool = false;
//     // if (dataArray.length !== 0) {
//     //   dataArray.forEach((element) => {
//     //     if (element.index === index) {
//     //       element.text = text;
//     //       checkBool = true;
//     //     }
//     //   });
//     // }
//     // if (checkBool) {
//     //   this.setState({
//     //     inputData: dataArray,
//     //   });
//     // } else {
//     //   dataArray.push({ text: text, index: index });
//     //   this.setState({
//     //     inputData: dataArray,
//     //   });
//     // }
//   };
//   addValuesthis = () => {
//     this.setState({
//       inputData: [...this.state.inputData, { meta_place: 'value' }],
//     });
//   };
//   //function to console the output
//   getValues = () => {
//     const str = this.state.textInput;
//     const check = str.toString();
//     console.log('Languages', check);
//     console.log('Places', str);
//   };
//   updateValues = (value, index) => {
//     this.state.textInput[index].meta_name = value;
//     this.setState({ textInput: this.state.textInput });
//   };

//   updateValues2 = (value, index) => {
//     this.state.inputData[index].meta_place = value;
//     this.setState({ inputData: this.state.inputData });
//   };

//   render() {
//     const buttons = ['Driver', 'Without Driver'];
//     const { selectedIndex } = this.state;
//     return (
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         // contentContainerStyle={styles.articles}
//       >
//         <Block flex middle>
//           <StatusBar hidden />
//           <ImageBackground
//             source={Images.Background}
//             style={{ width, height, zIndex: 1 }}
//           >
//             <Block flex middle>
//               <Block
//                 style={styles.registerContainer}
//                 // code uraya hy yaha sy
//               >
//                 <Block
//                   style={{ marginTop: 16, paddingHorizontal: theme.SIZES.BASE }}
//                 >
//                   <ButtonGroup
//                     onPress={this.updateIndex}
//                     selectedIndex={selectedIndex}
//                     buttons={buttons}
//                     // containerStyle={{ height: 20 }}
//                   />
//                 </Block>
//                 <Block flex center>
//                   <View style={{ marginTop: 8, marginLeft: 40, width: 200 }}>
//                     <Text style={{ fontSize: 18 }}>Add Languages</Text>
//                     {this.state.textInput.map((customInput, key) => {
//                       return (
//                         <View
//                           key={key}
//                           style={{ flexDirection: 'row', padding: 15 }}
//                         >
//                           <View
//                             style={{ width: '40%', flex: 1, marginRight: 10 }}
//                           >
//                             <TextInput
//                               style={{
//                                 paddingHorizontal: 15,
//                                 width: '100%',
//                                 height: 35,
//                                 fontSize: 16,
//                                 marginRight: 40,
//                                 backgroundColor: 'white',
//                               }}
//                               value={customInput.key}
//                               onChangeText={(name) =>
//                                 this.updateValues(name, key)
//                               }
//                             />
//                           </View>
//                           <View style={{ width: 50 }}>
//                             <Button
//                               // style={{ marginLeft: }}
//                               color='red'
//                               title='-'
//                               onPress={() => this.removeTextInput(key)}
//                             />
//                           </View>
//                         </View>
//                       );
//                     })}
//                     <View
//                       style={{
//                         // margin: 10,
//                         // paddingLeft: 100,
//                         paddingRight: 100,
//                         marginTop: 10,
//                       }}
//                     >
//                       <Button
//                         title='Add'
//                         style={{ width: 50 }}
//                         onPress={() => this.addValues()}
//                       />
//                     </View>
//                   </View>
//                   <View style={{ marginTop: 20, marginLeft: 40, width: 200 }}>
//                     <Text style={{ fontSize: 18 }}>Add Places</Text>
//                     {this.state.inputData.map((customInput, key) => {
//                       return (
//                         <View
//                           key={key}
//                           style={{ flexDirection: 'row', padding: 15 }}
//                         >
//                           <View
//                             style={{ width: '40%', flex: 1, marginRight: 10 }}
//                           >
//                             <TextInput
//                               style={{
//                                 paddingHorizontal: 15,
//                                 width: '100%',
//                                 height: 35,
//                                 fontSize: 16,
//                                 marginRight: 40,
//                                 backgroundColor: 'white',
//                               }}
//                               value={customInput.key}
//                               onChangeText={(Place) =>
//                                 this.updateValues2(Place, key)
//                               }
//                             />
//                           </View>
//                           <View style={{ width: 50 }}>
//                             <Button
//                               // style={{ marginLeft: }}
//                               color='red'
//                               title='-'
//                               onPress={() => this.removeTextInput2(key)}
//                             />
//                           </View>
//                         </View>
//                       );
//                     })}
//                     <View
//                       style={{
//                         // margin: 10,
//                         // paddingLeft: 100,
//                         paddingRight: 100,
//                         marginTop: 10,
//                       }}
//                     >
//                       <Button
//                         title='Add'
//                         style={{ width: 50 }}
//                         onPress={() => this.addValuesthis()}
//                       />
//                     </View>
//                   </View>
//                 </Block>
//                 <Button
//                   title='Submit'
//                   //style={{ paddingHorizontal: 100 }}
//                   onPress={() => this.getValues()}
//                 />
//               </Block>
//             </Block>
//           </ImageBackground>
//         </Block>
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   registerContainer: {
//     width: width * 0.9,
//     height: height * 0.75,
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
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   buttonView: {
//     flexDirection: 'row',
//   },
//   textInput: {
//     height: 40,
//     borderColor: 'black',
//     borderWidth: 1,
//     margin: 20,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
// });

// export default TouristGuide;

import React from "react";
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
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Button, Select, Input, Header, Switch } from '../components/';
//import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
const { width, height } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;
import { ButtonGroup } from 'react-native-elements';
import { Icon } from 'react-native-elements';


import {baseUrl} from '../baseUrl/baseUrl';
class TouristGuide extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      textInput: [],
      inputData: [],
      selectedIndex: 0,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }
  //function to add TextInput dynamically
  addTextInput = (index) => {
    let textInput = this.state.textInput;
    textInput.push(
      <View style={styles.row}>
        <TextInput
          style={{
            paddingHorizontal: 15,
            width: '100%',
            height: 50,
            fontSize: 16,
            backgroundColor: '#f3f3f3',
          }}
          onChangeText={(text) => this.addValues(text, index)}
        />
        <Button title='Remove' onPress={() => this.removeTextInput(index)} />
      </View>
    );
    this.setState({ textInput });
  };

  //function to remove TextInput dynamically
  removeTextInput = (index) => {
    this.state.textInput.splice(index, 1);
    this.setState({ textInput: this.state.textInput });
  };
  removeTextInput2 = (index) => {
    this.state.inputData.splice(index, 1);
    this.setState({ inputData: this.state.inputData });
  };
  //function to add text from TextInputs into single array
  addValues = () => {
    this.setState({
      textInput: [...this.state.textInput, { meta_name: 'value' }],
    });

  };
  addValuesthis = () => {
    this.setState({
      inputData: [...this.state.inputData, { meta_place: 'value' }],
    });
  };
  //function to console the output
  getValues = async() => {
    const lang = this.state.textInput;
    //const check = str.toString();
    const places=this.state.inputData;
    var langString = lang.map(function(item) {
      return item['meta_name'];
    });
    var placeString = places.map(function(item) {
      return item['meta_place'];
    });
    const langdata = langString.toString();
    const placedata = placeString.toString();
    // this.setState({languages:langdata});
    // this.setState({})
    // console.log('Languages', check);
    // console.log('Places', names);
    const token = await AsyncStorage.getItem('Ownertoken');
    fetch('http://192.168.1.153:5000/api/Specialization/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
      body: JSON.stringify({
        language: langdata,
        places: placedata,
        driving:this.state.selectedIndex
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          if (!data.errors) {
            console.log(data);
           
          } else {
            data.errors.forEach((error) => alert(error.msg));
          }
        } catch (e) {
          console.log('error hai', e);
        }
      });
  };
  updateValues = (value, index) => {
    this.state.textInput[index].meta_name = value;
    this.setState({ textInput: this.state.textInput });
  };

  updateValues2 = (value, index) => {
    this.state.inputData[index].meta_place = value;
    this.setState({ inputData: this.state.inputData });
  };

  render() {
    const { navigation } = this.props;
    const buttons = ['Driver', 'Without Driver'];
    return (
     
      <Block flex style={styles.profile}>
        
        <Block flex >
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
              <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header
               transparent
               white
               title="Profile"
               navigation={this.props.navigation}
             
            />
          </Block>
          <Block left style={styles.nameInfo}>
                    {/* <Text bold size={28} color="white">
                      Jessica Jones, 27
                    </Text> */}
                    <Text bold size={16} color="white" style={{ marginTop: 10, marginLeft:15 }}>
                     Enter Your Details ...
                    </Text>
                  </Block>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '-20%',marginBottom:60 }}
            >
              <Block flex style={styles.profileCard}>
              <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior='padding'
                    enabled
                  >
                          <Block row space="between">
                    <Block middle >
                    <Block
                  style={{ marginTop: 16, paddingHorizontal: theme.SIZES.BASE,width:320, marginLeft:-10 }}
                >
                  <ButtonGroup
                  
                    onPress={this.updateIndex}
                    selectedIndex={this.state.selectedIndex}
                    buttons={buttons}
                    // containerStyle={{ height: 20 }}
                  />
                </Block>
                <Block flex center>
                  <View style={{ marginTop: 8, marginLeft: -50, width: 200 }}>
                    <Text style={{ fontSize: 18 }}>Add Languages</Text>
                    {this.state.textInput.map((customInput, key) => {
                      return (
                        <View
                          key={key}
                          style={{ flexDirection: 'row', padding: 15 }}
                        >
                          <View
                            style={{ width: '40%', flex: 1, marginRight: 10 }}
                          >
                            <TextInput
                              style={{
                                paddingHorizontal: 15,
                                width: '100%',
                                height: 35,
                                fontSize: 16,
                                marginRight: 40,
                                backgroundColor: 'white',
                              }}
                              value={customInput.key}
                              onChangeText={(name) =>
                                this.updateValues(name, key)
                              }
                            />
                          </View>
                          <View style={{ width: 50 }}>
                           
                            <Button small color='error' style={{ width: 50, height:50 }}  onPress={() => this.removeTextInput(key)}>
           -
            </Button>
                          </View>
                        </View>
                      );
                    })}
                    <View
                      style={{
                        // margin: 10,
                        // paddingLeft: 100,
                        paddingRight: 100,
                        marginTop: 10,
                      }}
                    >
                  
                       <Button small color='success' style={{ width: 50, height:50 }}  onPress={() => this.addValues()}>
           +
            </Button>
                    </View>
                  </View>
                  <View style={{ marginTop: 20, marginLeft: -50, width: 200 }}>
                    <Text style={{ fontSize: 18 }}>Add Places</Text>
                    {this.state.inputData.map((customInput, key) => {
                      return (
                        <View
                          key={key}
                          style={{ flexDirection: 'row', padding: 15 }}
                        >
                          <View
                            style={{ width: '40%', flex: 1, marginRight: 10 }}
                          >
                            <TextInput
                              style={{
                                paddingHorizontal: 15,
                                width: '100%',
                                height: 35,
                                fontSize: 16,
                                marginRight: 40,
                                backgroundColor: 'white',
                              }}
                              value={customInput.key}
                              onChangeText={(Place) =>
                                this.updateValues2(Place, key)
                              }
                            />
                          </View>
                          <View style={{ width: 50 }}>
                            
                             <Button small color='error' style={{ width: 50, height:50 }}  onPress={() => this.removeTextInput2(key)}>
           -
            </Button>
                          </View>
                        </View>
                      );
                    })}
                    <View
                      style={{
                        // margin: 10,
                        // paddingLeft: 100,
                        paddingRight: 100,
                        marginTop: 10,
                      }}
                    >
                      
                      
                      <Button small color='success' style={{ width: 50, height:50 }}  onPress={() => this.addValuesthis()}>
           +
            </Button>
                    </View>
                  </View>
                </Block>
                <Block center>
            <Button color='primary' style={{width:290, marginTop:15}} onPress={() => this.getValues()}>
              SUCCESS
            </Button>
          </Block>
             
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
    marginTop: Platform.OS === "android" ? -HeaderHeight :0,
  // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 2,
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
    height: height / 2
  },
  nameInfo: {
    marginTop: 10
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 100,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
 
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});

export default TouristGuide;

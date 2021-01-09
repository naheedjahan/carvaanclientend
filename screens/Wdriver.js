// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   ScrollView,
//   Dimensions,
//   ImageBackground,
//   ActivityIndicator,
//   FlatList,
// } from 'react-native';
// import { Card, ListItem, Icon } from 'react-native-elements';
// import React from 'react';
// import { Component } from 'react';
// import { Header, Switch, Button } from '../components';
// import { Block, theme } from 'galio-framework';
// import PropTypes from 'prop-types';
// import { Images, argonTheme } from '../constants';

// const { width, height } = Dimensions.get('screen');
// class Wdriver extends Component {
//   state = {
//     'switch-1': true,
//     'switch-2': false,
//   };
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: 'nahedd',
//       address: 'abc',
//       data: [],
//       isLoading: true,
//     };
//   }

//   componentDidMount() {
//     this.getData();
//   }

//   getData = async () => {
//     // const data = this.props.route.params.vehicles;
//     // console.log(data);
//     // this.setState({
//     //   users: data,
//     //   isLoading: false,
//     // });
//     const response = await fetch('http://192.168.1.141:5000/api/vehicle/all', {
//       method: 'GET',
//       // headers: {
//       //   'x-auth-token': token,
//       // },
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         console.log('success');
//         console.log(responseJson);
//         this.setState({
//           users: responseJson,
//           isLoading: false,
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//         console.log('error araha');
//       });
//   };

//   toggleSwitch = (switchId) =>
//     this.setState({ [switchId]: !this.state[switchId] });
//   render() {
//     const { users, isLoading } = this.state;
//     const { navigation } = this.props;
//     const renderMenuItem = ({ item, index }) => {
//       return (
//         <View
//           key={index}
//           style={{
//             backgroundColor: theme.COLORS.WHITE,
//             marginVertical: theme.SIZES.BASE,
//             borderWidth: 0,
//             minHeight: 114,
//             marginBottom: 16,
//           }}
//         >
//           <View
//             style={{
//               borderRadius: 3,
//               elevation: 1,
//               overflow: 'hidden',
//               borderTopRightRadius: 0,
//               borderBottomRightRadius: 0,
//             }}
//           >
//             <Image
//               style={{
//                 height: 122,
//                 width: 'auto',
//               }}
//               resizeMode='cover'
//               source={{ uri: item.image }}
//             />

//             <Block
//               flex
//               space='between'
//               style={{ padding: theme.SIZES.BASE / 2 }}
//             >
//               <Text
//                 size={14}
//                 style={{ flex: 1, flexWrap: 'wrap', paddingBottom: 6 }}
//               >
//                 {item.model}
//               </Text>
//               <Text
//                 size={14}
//                 style={{ flex: 1, flexWrap: 'wrap', paddingBottom: 6 }}
//               >
//                 Fair per day: {item.fare}
//               </Text>
//             </Block>
//             <Block style={{ padding: theme.SIZES.BASE / 2 }}>
//               <Block
//                 row
//                 middle
//                 space='between'
//                 style={{ marginBottom: theme.SIZES.BASE }}
//               >
//                 <Text size={14}>Availability</Text>
//                 <Switch
//                   value={this.state['switch-1']}
//                   onValueChange={() => this.toggleSwitch('switch-1')}
//                 />
//               </Block>
//             </Block>
//             <Block middle row space='evenly' style={{ paddingBottom: 14 }}>
//               <Button
//                 //onPress={() => navigation.navigate('login')}
//                 small
//                 color='primary'
//                 //style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
//               >
//                 Car Details
//               </Button>
//               <Button
//                 color='primary'
//                 onPress={() => navigation.navigate('SpProfile')}
//                 small
//                 // style={{ backgroundColor: argonTheme.COLORS.PRIMARY }}
//               >
//                 About Owner
//               </Button>
//             </Block>
//             <Block
//               middle
//               row
//               space='evenly'
//               style={{ marginTop: 10, paddingBottom: 10 }}
//             >
//               <Button
//                 small
//                 // style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
//                 onPress={() => {
//                   console.log(item._id),
//                     navigation.navigate('RentBooking', {
//                       vehicleId: item._id,
//                     });
//                 }}
//                 color='primary'
//               >
//                 Book Now
//               </Button>
//             </Block>
//           </View>
//         </View>
//       );
//     };
//     if (isLoading) {
//       return <ActivityIndicator />;
//     } else {
//       return (
//         <ImageBackground
//           source={Images.Background}
//           style={{ width, height, zIndex: 1 }}
//         >
//           <Card
//             title='CARS WITH DRIVER'
//             style={{
//               backgroundColor: theme.COLORS.WHITE,
//               marginVertical: theme.SIZES.BASE,
//               borderWidth: 0,
//               minHeight: 114,
//               marginBottom: 16,
//             }}
//           >
//             <FlatList
//               data={users}
//               renderItem={renderMenuItem}
//               keyExtractor={({ id }, index) => id}
//             />
//           </Card>
//         </ImageBackground>
//       );
//     }
//   }
// }

// const styles = StyleSheet.create({
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
// });

// export default Wdriver;
// const users = [
//   {
//      name: 'brynn',
//      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
//   },

// ]
// // import React from "react";
// // import {
// //   StyleSheet,
// //   Dimensions,
// //   ScrollView,
// //   Image,
// //   ImageBackground,
// //   Platform
// // } from "react-native";
// // import { Block, Text, theme } from "galio-framework";
// // import {  Input, Header, Switch } from '../components/';
// // //import { Button } from "../components";
// // import { Images, argonTheme } from "../constants";
// // import { HeaderHeight } from "../constants/utils";
// // import { Card, ListItem, Button, Icon } from 'react-native-elements'
// // const { width, height } = Dimensions.get("screen");

// // const thumbMeasure = (width - 48 - 32) / 3;

// // class Wdriver extends React.Component {
// //   render() {
// //     return (

// //       <Block flex style={styles.profile}>

// //         <Block flex >
// //           <ImageBackground
// //             source={Images.ProfileBackground}
// //             style={styles.profileContainer}
// //             imageStyle={styles.profileBackground}
// //           >
// //               <Block style={{ marginBottom: theme.SIZES.BASE }}>
// //             <Header
// //                transparent
// //                white
// //                title="Profile"
// //                navigation={this.props.navigation}

// //             />
// //           </Block>
// //             <ScrollView
// //               showsVerticalScrollIndicator={false}
// //               style={{ width, marginTop: '5%' }}
// //             >
// //              <Card style={{ width: 100, height: 30 }}>
// //              <Text style={{textAlign: 'right', alignSelf: 'flex-end'}}>
// //       The idea with React Native Elements is more about component structure than actual design.
// //   </Text>

// //   <Button
// //     icon={<Icon name='code' color='#ffffff' />}
// //     buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
// //     title='VIEW NOW' />
// // </Card>
// // {/* <Block width={width * 0.8} style={{ marginBottom: 15 }}
// //                     row
// //                     space="evenly">
// //                       <Card>
// //                       <Block flex left >
// //                         <Text
// //                           color="#32325D"
// //                           size={16}

// //                         >
// //                           Select Vehicle Type
// //                         </Text>
// //                         </Block>
// //                         <Button
// //     icon={<Icon name='code' color='#ffffff' />}
// //     buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
// //     title='VIEW NOW' />
// //     </Card>
// //                     </Block> */}
// //             </ScrollView>
// //           </ImageBackground>
// //         </Block>

// //       </Block>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   profile: {
// //     marginTop: Platform.OS === "android" ? -HeaderHeight :0,
// //   // marginBottom: -HeaderHeight * 2,
// //     flex: 1
// //   },
// //   profileContainer: {
// //     width: width,
// //     height: height,
// //     padding: 0,
// //     zIndex: 1,
// //   //  marginTop:100,
// //   },
// //   profileBackground: {
// //     width: width,
// //     height: height / 2
// //   },
// //   profileCard: {
// //     // position: "relative",
// //     padding: theme.SIZES.BASE,
// //     marginHorizontal: theme.SIZES.BASE,
// //     marginTop: 100,
// //     borderTopLeftRadius: 6,
// //     borderTopRightRadius: 6,
// //     backgroundColor: theme.COLORS.WHITE,
// //     shadowColor: "black",
// //     shadowOffset: { width: 0, height: 0 },
// //     shadowRadius: 8,
// //     shadowOpacity: 0.2,
// //     zIndex: 2
// //   },
// //   info: {
// //     paddingHorizontal: 40
// //   },
// //   avatarContainer: {
// //     position: "relative",
// //     marginTop: -80
// //   },
// //   avatar: {
// //     width: 124,
// //     height: 124,
// //     borderRadius: 62,
// //     borderWidth: 0
// //   },
// //   nameInfo: {
// //     marginTop: 35
// //   },
// //   divider: {
// //     width: "90%",
// //     borderWidth: 1,
// //     borderColor: "#E9ECEF"
// //   },
// //   thumb: {
// //     borderRadius: 4,
// //     marginVertical: 4,
// //     alignSelf: "center",
// //     width: thumbMeasure,
// //     height: thumbMeasure
// //   }
// // });

// // export default Wdriver;

// import React from 'react';
// import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

// function Item({ item }) {
//   return (
//     <View style={styles.listItem}>
//       <Image source={{uri:item.photo}}  style={{width:60, height:60}} />
//       <View style={{alignItems:"center",flex:1}}>
//         <Text style={{fontWeight:"bold"}}>{item.name}</Text>
//         <Text>{item.position}</Text>
//       </View>
//       <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
//         <Text style={{color:"green"}}>Call</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// export default class Wdriver extends React.Component {
//   state = {
//     data:[
//         {
//             "name": "Miyah Myles",
//             "email": "miyah.myles@gmail.com",
//             "position": "Data Entry Clerk",
//             "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
//         },
//         {
//             "name": "June Cha",
//             "email": "june.cha@gmail.com",
//             "position": "Sales Manager",
//             "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
//         },
//         {
//             "name": "Iida Niskanen",
//             "email": "iida.niskanen@gmail.com",
//             "position": "Sales Manager",
//             "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
//         },
//         {
//             "name": "Renee Sims",
//             "email": "renee.sims@gmail.com",
//             "position": "Medical Assistant",
//             "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg"
//         },
//         {
//             "name": "Jonathan Nu\u00f1ez",
//             "email": "jonathan.nu\u00f1ez@gmail.com",
//             "position": "Clerical",
//             "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg"
//         },
//         {
//             "name": "Sasha Ho",
//             "email": "sasha.ho@gmail.com",
//             "position": "Administrative Assistant",
//             "photo": "https:\/\/images.pexels.com\/photos\/415829\/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb"
//         },
//         {
//             "name": "Abdullah Hadley",
//             "email": "abdullah.hadley@gmail.com",
//             "position": "Marketing",
//             "photo": "https:\/\/images.unsplash.com\/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f"
//         },
//         {
//             "name": "Thomas Stock",
//             "email": "thomas.stock@gmail.com",
//             "position": "Product Designer",
//             "photo": "https:\/\/tinyfac.es\/data\/avatars\/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg"
//         },
//         {
//             "name": "Veeti Seppanen",
//             "email": "veeti.seppanen@gmail.com",
//             "position": "Product Designer",
//             "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/97.jpg"
//         },
//         {
//             "name": "Bonnie Riley",
//             "email": "bonnie.riley@gmail.com",
//             "position": "Marketing",
//             "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/26.jpg"
//         }
//     ]
//   }

//   render(){
//     return (
//       <View style={styles.container}>
//         <FlatList
//           style={{flex:1}}
//           data={this.state.data}
//           renderItem={({ item }) => <Item item={item}/>}
//           keyExtractor={item => item.email}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F7F7F7',
//     marginTop:60
//   },
//   listItem:{
//     margin:10,
//     padding:10,
//     backgroundColor:"#FFF",
//     width:"80%",
//     flex:1,
//     alignSelf:"center",
//     flexDirection:"row",
//     borderRadius:5
//   }
// });
import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { Button, Select, Input, Header, Switch } from '../components/';
//import { Button } from "../components";
import { Images, argonTheme } from '../constants';
import { HeaderHeight } from '../constants/utils';
import { Card, Rating } from 'react-native-elements';
const { width, height } = Dimensions.get('screen');
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
const thumbMeasure = (width - 48 - 32) / 3;
function Item({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate('CarDetails', { item })}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: 150, height: 100, borderRadius: 1 }}
      />
      <View style={{ alignItems: 'center', flex: 1, marginLeft: 20 }}>
        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{item.name}</Text>
        <Rating
          type='star'
          imageSize={15}
          readonly
          style={{ paddingRight: 10, marginTop: 7 }}
          startingValue={item.rating}
        />
        <Text style={{ color: 'green', marginTop: 7 }}>
          {item.fare} Rs.per day
        </Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 30, flex: 1 }}>
        <Icon
          name='shield'
          size={36}
          type='font-awesome'
          color='green'
          //onPress={() => navigation.toggleDrawer()}
        />
      </View>
      {/* <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
        <Text size={13} style={{color:"#3944BC",marginTop:80}}>Details...</Text>
      </TouchableOpacity> */}
    </TouchableOpacity>
  );
}
class Wdriver extends React.Component {
  render() {
    const data = this.props.route.params.data;

    console.log(data);

    return (
      // <View style={styles.container}>
      //   <FlatList
      //     style={{flex:1}}
      //     data={this.state.data}
      //     renderItem={({ item }) => <Item item={item}/>}
      //     keyExtractor={item => item.email}
      //   />
      // </View>
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <Block style={{ marginBottom: theme.SIZES.BASE }}>
              <Header
                back
                transparent
                white
                title='Available Cars'
                navigation={this.props.navigation}
              />
            </Block>
            <Block left style={styles.nameInfo}>
              {/* <Text bold size={28} color="white">
                      Jessica Jones, 27
                    </Text> */}
              <Text bold size={16} color='white' style={{ marginLeft: 10 }}>
                Vehicles Matching Your Search
              </Text>
            </Block>
            {/* <Block flex style={styles.profileCard}> */}

            <FlatList
              style={{ flex: 1 }}
              data={data}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={(item) => item._id}
            />

            {/*   </Block> */}
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
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 60,
  },
  listItem: {
    margin: 9,

    backgroundColor: '#FFF',
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 1,
    height: 100,
    shadowColor: '#000',
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
  profileBackground: {
    width: width,
    height: height / 2,
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    // marginTop: 100,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    //  backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 50,
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
  nameInfo: {
    marginTop: 15,
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

export default Wdriver;

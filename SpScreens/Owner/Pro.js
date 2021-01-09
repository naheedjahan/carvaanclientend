// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   ScrollView,
//   Dimensions,
//   FlatList,
//   ImageBackground,
// } from 'react-native';
// import { Card, ListItem, Icon } from 'react-native-elements';
// import React from 'react';
// import { Component } from 'react';
// import { Header, Switch, Button } from '../components';
// import { Block, theme } from 'galio-framework';
// import PropTypes from 'prop-types';
// import { Images, argonTheme } from '../constants';
// import {baseUrl} from '../baseUrl/baseUrl';
// const { width, height } = Dimensions.get('screen');

// class Pro extends Component {
//   state = {
//     'switch-1': true,
//     'switch-2': false,
//   };
//   componentDidMount() {
//     this.getData();
//   }

//   getData = async () => {
//     //const data = this.props.route.params.vehicles;
//     // console.log(data);
//     // this.setState({
//     //   users: data,
//     //   isLoading: false,
//     // });
//     const response = await fetch(baseUrl+'api/Customer/viewRest', {
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
//               source={{
//                 uri:
//                   'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80https://images.unsplash.com/photo-1506671753197-8d137cc5d53c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=370&q=80',
//               }}
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
//                 Name: {item.model}
//               </Text>
//               <Text
//                 size={14}
//                 style={{ flex: 1, flexWrap: 'wrap', paddingBottom: 6 }}
//               >
//                 Fare per day: {item.fare}
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
//                       vehicleId: item.owner._id,
//                     });
//                 }}
//                 color='primary'
//               >
//                 Details
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
//             title='My CARS'
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
// const users = [
//   {
//     name: 'Zahid But',
//     Fair: '3000',
//     avatar:
//       'https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
//   },
//   {
//     name: 'Ahmed Khan',
//     Fair: '6000',
//     avatar:
//       'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
//   },
//   {
//     name: 'Yaqoob Khan',
//     Fair: '5000',
//     avatar:
//       'https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
//   },
// ];

// export default Pro;
import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  AsyncStorage,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { Button, Select, Icon, Input, Header, Switch } from '../../components';
//import { Button } from "../components";
import { Images, argonTheme } from '../../constants';
import { HeaderHeight } from '../../constants/utils';
import { Card, Rating } from 'react-native-elements';
const { width, height } = Dimensions.get('screen');
import { useNavigation } from '@react-navigation/native';
import { baseUrl } from '../../baseUrl/baseUrl';
const thumbMeasure = (width - 48 - 32) / 3;

function Item({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() =>
        navigation.navigate('CarDetails', {
          item,
        })
      }
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: 180, height: 100, borderRadius: 1 }}
      />
      <View style={{ alignItems: 'center', flex: 1 }}>
        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
          {item.manufacturer}
        </Text>
        <Rating
          type='star'
          imageSize={15}
          readonly
          style={{ paddingRight: 10, marginTop: 7 }}
          startingValue={2}
        />
        <Text style={{ color: 'green', marginTop: 7 }}>{item.fare}</Text>
      </View>

      {/* <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
        <Text size={13} style={{color:"#3944BC",marginTop:80}}>Details...</Text>
      </TouchableOpacity> */}
    </TouchableOpacity>
  );
}
class Pro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    console.log('chk');
    const token = await AsyncStorage.getItem('Ownertoken');
    const response = await fetch(baseUrl + 'api/owner/myvehicles', {
      method: 'GET',
      headers: {
        'x-auth-token': token,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('success');
        console.log(responseJson);
        this.setState({
          data: responseJson,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error(error);
        console.log('error araha');
      });
    console.log(this.setState.data);
  };

  render() {
    // const { users, isLoading } = this.state;
    const { navigation } = this.props;
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
                back
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
              <Text bold size={16} color='white' style={{ marginLeft: 10 }}>
                Vehicles
              </Text>
            </Block>
            {/* <Block flex style={styles.profileCard}> */}

            <FlatList
              style={{ flex: 1 }}
              data={this.state.data}
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

export default Pro;

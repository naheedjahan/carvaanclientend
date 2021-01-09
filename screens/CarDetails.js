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
  TouchableOpacity,
  View,
  Share,
} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { Button, Select, Input, Header, Switch } from '../components/';
//import { Button } from "../components";
import { Images, argonTheme } from '../constants';
import { HeaderHeight } from '../constants/utils';
const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;
import { ButtonGroup } from 'react-native-elements';
import { Card, Rating, Icon } from 'react-native-elements';

import { baseUrl } from '../baseUrl/baseUrl';
class CarDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diver: '',
      descrip: '',
    };
  }
  addFavourite = async () => {
    console.log('test');

    //-----------------------------------------------------------
    const vehicleId = this.props.route.params.item._id;
    console.log(vehicleId);
    const token = await AsyncStorage.getItem('Customertoken');
    fetch('http://192.168.1.153:5000/api/customer/fav/' + vehicleId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
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
  shareDish = (title, message, url) => {
    Share.share(
      {
        title: title,
        message: title + ': ' + message + ' ' + url,
        url: url,
      },
      {
        dialogTitle: 'Share ' + title,
      }
    );
  };
  async componentWillMount() {
    // Asking for device location permission
    const driver = this.props.route.params.item.driver;

    if (driver == 0) {
      this.setState({ driver: 'With Driver' });
    } else {
      this.setState({ driver: 'Without Driver' });
    }
    const des = this.props.route.params.item.description;

    if (des == '') {
      this.setState({ descrip: 'No Description Provided' });
    } else {
      this.setState({ descrip: des });
    }
  }
  render() {
    const { navigation } = this.props;
    const manf = this.props.route.params.item.manufacturer;
    //const name =this.props.route.params.item.model;
    const year = this.props.route.params.item.year;
    const fare = this.props.route.params.item.fare;
    const image = this.props.route.params.item.image;
    const sC = this.props.route.params.item.seatingCapacity;
    const transmission = this.props.route.params.item.transmission;
    const Oname = this.props.route.params.item.owner.name;
    const Oimage = this.props.route.params.item.owner.image;
    const Oaddress = this.props.route.params.item.owner.address;
    // const driver= this.props.route.params.item.driver;
    const Id = this.props.route.params.item._id;
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
                title='Cars Details'
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
                Vehicles Matching Your Search
              </Text>
            </Block>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '5%' }}
            >
              {/* <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('RentBooking')}>
     
     <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3gLAMkW3_Q8vTh-JkXBW0Q14OsfMS29Bqw&usqp=CAU'}}  style={{width:180, height:100,borderRadius:1}} />
      <View style={{alignItems:"center",flex:1}}>
        <Text style={{fontWeight:"bold",marginTop:10}}>Toyota Corola</Text>
        <Rating
              type='star'
              imageSize={15}
              readonly
              style={{ paddingRight: 10, marginTop:7 }}
              startingValue={4}
            />
            <Text style={{color:"green", marginTop:7}}>Rs. 5000</Text>
      </View>
    </TouchableOpacity> */}
              <Card style={{ backgroundColor: theme.COLORS.WHITE }}>
                <View
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                  <Image
                    style={{
                      flex: 1,
                      width: 300,
                      height: 180,
                      opacity: 0.6,
                    }}
                    source={{ uri: image }}
                  />

                  <Text
                    style={{ position: 'absolute', fontSize: 30 }}
                    bold
                    color={argonTheme.COLORS.BLACK}
                  >
                    {manf}
                  </Text>
                </View>
                <View
                  style={{
                    paddingVertical: 5,
                    paddingHorizontal: 3,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // alignItems: "center"
                  }}
                >
                  <Icon
                    name={'check'}
                    type='font-awesome'
                    color='#2DCE89'
                    size={15}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#2DCE89',
                      marginRight: 130,
                    }}
                  >
                    Free Vehicle Delivery{' '}
                  </Text>
                </View>
                <View
                  style={{
                    paddingVertical: 5,
                    paddingHorizontal: 3,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // alignItems: "center"
                  }}
                >
                  <Icon
                    name={'check'}
                    type='font-awesome'
                    color='#2DCE89'
                    size={15}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#2DCE89',
                      marginRight: 100,
                    }}
                  >
                    Free Booking Cancelation
                  </Text>
                </View>
                <Block style={styles.divider} />
                {/* <View style={{
           paddingVertical: 5,
           paddingHorizontal: 3,
            flexDirection: "row",
            justifyContent: "space-between",
            // alignItems: "center"
        }}>
            <Icon
              name={'check'}
              type='font-awesome'
              color='#2DCE89'
           
            />
            <Text style={{
                    fontSize: 16,
                    color: "#2DCE89",
                    marginRight:170
                }}>Kategorien:</Text>
           
        </View> */}
                <Text
                  size={14}
                  color='#8898AA'
                  style={{ marginTop: 10, marginLeft: 10 }}
                >
                  --- {sC} Seater
                </Text>
                <Text
                  size={14}
                  color='#8898AA'
                  style={{ marginTop: 10, marginLeft: 10 }}
                >
                  --- {year}
                </Text>
                <Text
                  size={14}
                  color='#8898AA'
                  style={{ marginTop: 10, marginLeft: 10 }}
                >
                  --- Tranmission: {transmission}
                </Text>
                <Text
                  size={14}
                  color='#8898AA'
                  style={{ marginTop: 10, marginLeft: 10 }}
                >
                  --- Fare: {fare} per day.
                </Text>
                <Text
                  size={14}
                  color='#8898AA'
                  style={{ marginTop: 10, marginLeft: 10 }}
                >
                  --- {this.state.driver}
                </Text>
                <Text
                  size={14}
                  color='#8898AA'
                  style={{ marginTop: 10, marginLeft: 10 }}
                >
                  --- {this.state.descrip}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon
                    raised
                    reverse
                    name={'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    onPress={() => this.addFavourite()}
                  />
                  <Icon
                    raised
                    reverse
                    name={'warning'}
                    type='font-awesome'
                    color='red'
                    // onPress={() => props.onSelect()}
                  />
                  <Icon
                    raised
                    reverse
                    name='share'
                    type='font-awesome'
                    color='#51D2A8'
                    style={styles.cardItem}
                    onPress={() =>
                      this.shareDish(manf, this.state.descrip, baseUrl + image)
                    }
                  />
                </View>
                <Block center style={{ marginTop: 50 }}>
                  <Button
                    style={styles.button}
                    color='primary'
                    onPress={() =>
                      navigation.navigate('RentBooking', {
                        vehicleId: Id,
                        manf: manf,
                        image: image,
                      })
                    } // pointing to next page here adding something here
                    textStyle={{ color: argonTheme.COLORS.WHITE }}
                  >
                    Book
                  </Button>
                </Block>
                <Block center style={{ marginTop: 10 }}>
                  <Button
                    style={styles.button}
                    color={argonTheme.COLORS.SECONDARY}
                    //  onPress={this.KeepMelogIn} // pointing to next page here adding something here
                    textStyle={{ color: argonTheme.COLORS.BLACK }}
                  >
                    Cancel
                  </Button>
                </Block>
              </Card>
              <Block style={styles.divider} />

              <TouchableOpacity
                style={styles.listItem}
                onPress={() => navigation.navigate('RentBooking')}
              >
                <Image
                  source={{ uri: Oimage }}
                  style={{ width: 180, height: 100, borderRadius: 1 }}
                />
                <View
                  style={{
                    alignItems: 'center',
                    flex: 1,
                    backgroundColor: theme.COLORS.WHITE,
                  }}
                >
                  <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
                    {Oname}
                  </Text>
                  <Rating
                    type='star'
                    imageSize={15}
                    readonly
                    style={{ paddingRight: 10, marginTop: 7 }}
                    startingValue={4}
                  />
                  <Text style={{ color: 'green', marginTop: 7 }}>
                    {' '}
                    View Profile
                  </Text>
                </View>
              </TouchableOpacity>
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
  divider: {
    width: '95%',
    borderWidth: 1,
    borderColor: '#E9ECEF',
    marginTop: 12,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  profileBackground: {
    width: width,
    height: height / 2,
  },
  nameInfo: {
    marginTop: 35,
  },
  listItem: {
    margin: 4,
    marginTop: 10,
    marginBottom: 40,
    backgroundColor: theme.COLORS.WHITE,
    width: '92%',
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
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 10,
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
  nameInfo: {
    marginTop: 2,
  },
  //   divider: {
  //     width: "90%",
  //     borderWidth: 1,
  //     borderColor: "#E9ECEF"
  //   },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure,
  },
});

export default CarDetails;

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
} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { Button, Select, Input, Header, Switch } from '../../components';
//import { Button } from "../components";
import { Images, argonTheme } from '../../constants';
import { HeaderHeight } from '../../constants/utils';
const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;
import { ButtonGroup } from 'react-native-elements';
import { Card, Rating, Icon } from 'react-native-elements';

import { baseUrl } from '../../baseUrl/baseUrl';
class MyBookingsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timing: 'I want to report this customer',
      rate: 0,
      fd: '',
    };
  }
  async componentDidMount() {
    const rating = this.props.route.params.item.customerFeedback.rating;
    const feedback = this.props.route.params.item.customerFeedback.feedback;

    if (rating != '') {
      this.setState({ rate: rating });
    } else {
      this.setState({ rate: 0 });
    }
    if (feedback != '') {
      this.setState({ fd: feedback });
    } else {
      this.setState({ fd: 'Feedback not provided!' });
    }
  }
  handlReport = async () => {
    const token = await AsyncStorage.getItem('Ownertoken');
    const customerId = this.props.route.params.item.customer._id;

    const response = await fetch(
      'http://192.168.1.153:5000/api/owner/reportCustomer/' + customerId,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
        body: JSON.stringify({
          report: this.state.timing,
        }),
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('success');
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
        console.log('error araha');
      });
  };
  render() {
    const { navigation } = this.props;
    const manf = this.props.route.params.item.customer.name;
    const model = this.props.route.params.item.customer.address;
    const image = this.props.route.params.item.customer.image;

    // const image=this.props.route.params.item.image
    const sC = this.props.route.params.item.seatingCapacity;
    const transmission = this.props.route.params.item.transmission;
    const descrip = this.props.route.params.item.description;
    const driver = this.props.route.params.item.driver;

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
                title='Booking history'
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
                Customer And Feedback Details
              </Text>
            </Block>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '5%' }}
            >
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
                  <Block
                    middle
                    row
                    space='evenly'
                    style={{ paddingBottom: 14, marginTop: 50 }}
                  >
                    <Button
                      onPress={this.handlReport}
                      // onPress={() => navigation.navigate('Wdriver')}
                      small
                      color='primary'
                      // style={{ backgroundColor: argonTheme.COLORS.PRIMARY }}
                    >
                      Report
                    </Button>
                  </Block>
                </View>
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
              size={15}
            />
            <Text style={{
                    fontSize: 15,
                    color:argonTheme.COLORS.SUCCESS,
                    marginRight:130
                }}
                
                >Free Vehicle Delivery </Text>
           
        </View> */}
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
              size={15}
            />
            <Text style={{
                    fontSize: 15,
                    color:argonTheme.COLORS.SUCCESS,
                    marginRight:100
                }}>Free Booking Cancelation</Text>
           
        </View> */}
                <Block style={styles.divider} />

                <Text
                  size={14}
                  color='#8898AA'
                  style={{ marginTop: 10, marginLeft: 10 }}
                >
                  --- {model}
                </Text>
                {/* <Text size={14} color="#8898AA" style={{ marginTop: 10, marginLeft:10 }}>
                      --- {year}
                    </Text> */}

                {/* <Text size={14} color="#8898AA" style={{ marginTop: 10, marginLeft:10 }}>
                      --- {this.state.timing}
                    </Text> */}
              </Card>

              <Card style={{ backgroundColor: theme.COLORS.WHITE }}>
                <Text
                  style={{ fontSize: 20 }}
                  bold
                  color={argonTheme.COLORS.BLACK}
                >
                  Customer Feedback
                </Text>
                <Block style={styles.divider} />

                <Rating
                  type='star'
                  imageSize={15}
                  readonly
                  style={{ marginLeft: -180, marginTop: 7 }}
                  startingValue={this.state.rate}
                />

                <Text
                  size={14}
                  color='#8898AA'
                  style={{ marginTop: 10, marginLeft: 10 }}
                >
                  --- {this.state.fd}
                </Text>
              </Card>
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

export default MyBookingsDetails;

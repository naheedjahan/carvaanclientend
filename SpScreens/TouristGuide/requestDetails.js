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
class requestDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timing: 'I want to report this customer',
      rate: 0,
      fd: '',
      dri: '',
    };
  }

  componentWillMount() {
    // Asking for device location permission
    const driver = this.props.route.params.item.vehicle.driver;

    if (driver == 0) {
      this.setState({ dri: 'With Driver' });
    } else {
      this.setState({ dri: 'Without Driver' });
    }
  }
  handlReport = async () => {
    const token = await AsyncStorage.getItem('Ownertoken');
    const requestId = this.props.route.params.item._id;

    const response = await fetch(baseUrl + 'api/owner/request/' + requestId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
    })
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
    const Cname = this.props.route.params.item.customer.name;
    const Caddress = this.props.route.params.item.customer.address;
    const Cimage = this.props.route.params.item.customer.image;
    const Cemail = this.props.route.params.item.customer.email;
    const Cphone = this.props.route.params.item.customer.cellPhone;
    // const image=this.props.route.params.item.image
    const model = this.props.route.params.item.vehicle.model;
    const Vimage = this.props.route.params.item.vehicle.image;
    const manf = this.props.route.params.item.vehicle.manufacturer;
    const trans = this.props.route.params.item.vehicle.transmission;
    const sP = this.props.route.params.item.vehicle.seatingCapacity;
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
                title='Request Details'
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
                Customer And Vehicle Details
              </Text>
            </Block>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '5%', marginBottom: '25%' }}
            >
              <Card style={{ backgroundColor: theme.COLORS.WHITE }}>
                {/* <View
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                  <Block
                    middle
                    row
                    space='evenly'
                    // style={{ paddingBottom: 14 }}
                  >
                    <Button
                      onPress={this.handlReport}
                      // onPress={() => navigation.navigate('Wdriver')}
                      small
                      color='primary'
                      // style={{ backgroundColor: argonTheme.COLORS.PRIMARY }}
                    >
                      Accept
                    </Button>
                  </Block>
                </View> */}

                <Image
                  style={{
                    flex: 1,
                    width: 300,
                    height: 180,
                  }}
                  source={{ uri: Cimage }}
                />
                <Block style={styles.divider} />
                <Text
                  size={14}
                  color='#8898AA'
                  style={{ marginTop: 10, marginLeft: 10 }}
                >
                  --- {Cname}
                </Text>
                <Text
                  size={14}
                  color='#8898AA'
                  style={{ marginTop: 10, marginLeft: 10 }}
                >
                  --- {Caddress}
                </Text>
                <Text
                  size={14}
                  color='#8898AA'
                  style={{ marginTop: 10, marginLeft: 10 }}
                >
                  --- {Cemail}
                </Text>
                <Text
                  size={14}
                  color='#8898AA'
                  style={{ marginTop: 10, marginLeft: 10 }}
                >
                  --- {Cphone}
                </Text>
                {/* <Text size={14} color="#8898AA" style={{ marginTop: 10, marginLeft:10 }}>
                      --- {this.state.timing}
                    </Text> */}
                <Block
                  middle
                  row
                  space='evenly'
                  // style={{ paddingBottom: 14 }}
                >
                  <Button
                    onPress={this.handlReport}
                    // onPress={() => navigation.navigate('Wdriver')}
                    small
                    color='primary'
                    // style={{ backgroundColor: argonTheme.COLORS.PRIMARY }}
                  >
                    Accept
                  </Button>
                </Block>
              </Card>

              <Card
                style={{
                  backgroundColor: theme.COLORS.WHITE,
                  marginBottom: 27,
                }}
              >
                <Image
                  style={{
                    flex: 1,
                    width: 300,
                    height: 180,
                    opacity: 0.6,
                  }}
                  source={{ uri: Vimage }}
                />

                <Text
                  style={{ position: 'absolute', fontSize: 30 }}
                  bold
                  color={argonTheme.COLORS.BLACK}
                >
                  {manf}
                </Text>
                <Block style={styles.divider} />
                <Text
                  size={14}
                  color='#8898AA'
                  style={{ marginTop: 10, marginLeft: 10 }}
                >
                  --- {model}
                </Text>
                <Text
                  size={14}
                  color='#8898AA'
                  style={{ marginTop: 10, marginLeft: 10 }}
                >
                  --- {sP}
                </Text>
                <Text
                  size={14}
                  color='#8898AA'
                  style={{ marginTop: 10, marginLeft: 10 }}
                >
                  --- {trans}
                </Text>
                <Text
                  size={14}
                  color='#8898AA'
                  style={{ marginTop: 10, marginLeft: 10 }}
                >
                  --- {this.state.dri}
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

export default requestDetails;

import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  AsyncStorage,
} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { Button, Select, Icon, Input, Header, Switch } from '../components';
//import { Button } from "../components";
import MapView from 'react-native-maps';
import openMap from 'react-native-open-maps';
import { Images, argonTheme } from '../constants';
import { HeaderHeight } from '../constants/utils';
import { Card, Rating } from 'react-native-elements';
const { width, height } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;

class CCInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null,
      timing: '',
    };
  }
  async componentWillMount() {
    // Asking for device location permission
    const open = this.props.route.params.item;
    let n = open.includes('opening_hours');
    if (n) {
      this.setState({
        timing: this.props.route.params.item.opening_hours.open_now,
      });
    } else {
      this.setState({ timing: 'Not Mentioned' });
    }
    const location = this.props.route.params.item.geometry.location;
    let region = {
      latitude: location.lat,
      longitude: location.lng,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,
    };
    this.setState({ region: region });
  }
  render() {
    //const item = this.props.route.params;
    const item = this.props.route.params.item.name;
    const item2 = this.props.route.params.item.vicinity;
    const bs = this.props.route.params.item.business_status;
    const location = this.props.route.params.item.geometry.location;
    //const open=this.props.route.params.item.opening_hours.open_now;
    const rating = this.props.route.params.item.user_ratings_total;
    //const check =this.props.route.params.item.plus_code.compound_code;
    //const item = this.props.navigation.getParam('item');

    console.log('here' + this.state.timing);
    const openAppMap = () => {
      openMap({
        latitude: location.lat,
        longitude: location.lng,
        zoom: 19,
      });
    };

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
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '5%' }}
            >
              <Block flex style={styles.profileCard}>
                <Block middle style={styles.avatarContainer}>
                  <Image
                    source={{
                      uri:
                        'https://image.flaticon.com/icons/png/512/1516/1516386.png',
                    }}
                    style={styles.avatar}
                  />
                </Block>
                <Block style={styles.info}>
                  <Block row space='between'>
                    <Block middle>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>
                        Timings
                      </Text>
                      <Text
                        bold
                        size={18}
                        color='#525F7F'
                        style={{ marginBottom: 4 }}
                      >
                        {this.state.timing ? 'Open' : 'Closed'}
                      </Text>
                    </Block>
                    {/* <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={18}
                        style={{ marginBottom: 4 }}
                      >
                        {open}
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>Photos</Text>
                    </Block> */}
                    <Block middle>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>
                        Customer Rating
                      </Text>
                      <Rating
                        type='star'
                        imageSize={15}
                        readonly
                        style={{ paddingRight: 10, marginTop: 7 }}
                        startingValue={rating}
                      />
                    </Block>
                  </Block>
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={28} color='#32325D'>
                      {item}
                    </Text>
                    <Text size={16} color='green' style={{ marginTop: 10 }}>
                      {bs}
                    </Text>
                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Block middle>
                    <Text
                      size={16}
                      color='#525F7F'
                      style={{ textAlign: 'center' }}
                      selectable
                    >
                      {item2}
                    </Text>
                  </Block>

                  <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                    {/* <Block row space="between" style={{ flexWrap: "wrap" }}>
                    {Photos.map((img, imgIndex) => (
                      <Image
                        source={{ uri: img }}
                        key={`viewed-${img}`}
                        resizeMode="cover"
                        style={styles.thumb}
                      />
                    ))}
                  </Block> */}
                    <MapView
                      style={{ height: height / 2, width: '100%' }}
                      initialRegion={location.lat}
                      onPress={openAppMap}
                    >
                      <MapView.Marker
                        coordinate={{
                          latitude: location.lat,
                          longitude: location.lng,
                        }}
                      />
                    </MapView>
                  </Block>
                </Block>
              </Block>
            </ScrollView>
          </ImageBackground>
        </Block>
        {/* <ScrollView showsVerticalScrollIndicator={false} 
                    contentContainerStyle={{ flex: 1, width, height, zIndex: 9000, backgroundColor: 'red' }}>
        <Block flex style={styles.profileCard}>
          <Block middle style={styles.avatarContainer}>
            <Image
              source={{ uri: Images.ProfilePicture }}
              style={styles.avatar}
            />
          </Block>
          <Block style={styles.info}>
            <Block
              middle
              row
              space="evenly"
              style={{ marginTop: 20, paddingBottom: 24 }}
            >
              <Button small style={{ backgroundColor: argonTheme.COLORS.INFO }}>
                CONNECT
              </Button>
              <Button
                small
                style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
              >
                MESSAGE
              </Button>
            </Block>

            <Block row space="between">
              <Block middle>
                <Text
                  bold
                  size={12}
                  color="#525F7F"
                  style={{ marginBottom: 4 }}
                >
                  2K
                </Text>
                <Text size={12}>Orders</Text>
              </Block>
              <Block middle>
                <Text bold size={12} style={{ marginBottom: 4 }}>
                  10
                </Text>
                <Text size={12}>Photos</Text>
              </Block>
              <Block middle>
                <Text bold size={12} style={{ marginBottom: 4 }}>
                  89
                </Text>
                <Text size={12}>Comments</Text>
              </Block>
            </Block>
          </Block>
          <Block flex>
              <Block middle style={styles.nameInfo}>
                <Text bold size={28} color="#32325D">
                  Jessica Jones, 27
                </Text>
                <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                  San Francisco, USA
                </Text>
              </Block>
              <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                <Block style={styles.divider} />
              </Block>
              <Block middle>
                <Text size={16} color="#525F7F" style={{ textAlign: "center" }}>
                  An artist of considerable range, Jessica name taken by
                  Melbourne …
                </Text>
                <Button
                  color="transparent"
                  textStyle={{
                    color: "#233DD2",
                    fontWeight: "500",
                    fontSize: 16
                  }}
                >
                  Show more
                </Button>
              </Block>
              <Block
                row
                style={{ paddingVertical: 14, alignItems: "baseline" }}
              >
                <Text bold size={16} color="#525F7F">
                  Album
                </Text>
              </Block>
              <Block
                row
                style={{ paddingBottom: 20, justifyContent: "flex-end" }}
              >
                <Button
                  small
                  color="transparent"
                  textStyle={{ color: "#5E72E4", fontSize: 12 }}
                >
                  View all
                </Button>
              </Block>
              <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                <Block row space="between" style={{ flexWrap: "wrap" }}>
                  {Images.Viewed.map((img, imgIndex) => (
                    <Image
                      source={{ uri: img }}
                      key={`viewed-${img}`}
                      resizeMode="cover"
                      style={styles.thumb}
                    />
                  ))}
                </Block>
              </Block>
          </Block>
        </Block>
                  </ScrollView>*/}
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
    width: 180,
    height: 180,
    borderRadius: 62,
    borderWidth: 0,
  },
  nameInfo: {
    marginTop: 35,
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

export default CCInput;

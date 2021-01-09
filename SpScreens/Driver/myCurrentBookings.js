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
import { Button, Select, Input, Header, Switch } from '../../components';
//import { Button } from "../components";
import { Images, argonTheme } from '../../constants';
import { HeaderHeight } from '../../constants/utils';
import { Card, Rating } from 'react-native-elements';
const { width, height } = Dimensions.get('screen');
import { useNavigation } from '@react-navigation/native';
const thumbMeasure = (width - 48 - 32) / 3;
import { Icon } from 'react-native-elements';
import { baseUrl } from '../../baseUrl/baseUrl';

function Item({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() =>
        navigation.navigate('OwnerCurrentBookingsDetails', {
          item,
        })
      }
    >
      <View style={{ alignItems: 'center', flex: 1 }}>
        <Icon
          size={70}
          color={argonTheme.COLORS.ICON}
          name='handshake-o'
          type='font-awesome'
          style={styles.inputIcons}
        />
      </View>
      <View style={{ alignItems: 'center', flex: 1 }}>
        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>On: </Text>
        <Text size={13} style={{ color: 'green' }}>
          {item.date}
        </Text>
        {/* <Rating
              type='star'
              imageSize={15}
              readonly
              style={{ paddingRight: 10, marginTop:7 }}
              startingValue={2}
            /> */}
        <Text size={13} style={{ fontWeight: 'bold', marginTop: 7 }}>
          {' '}
          For:{' '}
        </Text>
        <Text size={13} style={{ color: 'green' }}>
          {' '}
          {item.days} Days
        </Text>
      </View>

      {/* <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
        <Text size={13} style={{color:"#3944BC",marginTop:80}}>Details...</Text>
      </TouchableOpacity> */}
    </TouchableOpacity>
  );
}
class myCurrentBookings extends React.Component {
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
    const token = await AsyncStorage.getItem('DriverToken');
    const response = await fetch(baseUrl + 'api/driver/currentBooking', {
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
                title='My Bookings'
                navigation={this.props.navigation}
              />
            </Block>
            {/* <Block left style={styles.nameInfo}>
                    <Text bold size={28} color="white">
                      Jessica Jones, 27
                    </Text>
                    <Text bold size={16} color="white" style={{  marginLeft:10 }}>
                    Vehicles 
                    </Text>
                  </Block> */}
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

export default myCurrentBookings;

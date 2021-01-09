import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  ImageBackground,
} from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';
import React from 'react';
import { Component } from 'react';
import { Header, Switch, Button } from '../../components';
import { Block, theme } from 'galio-framework';
import PropTypes from 'prop-types';
import { Images, argonTheme } from '../../constants';

const { width, height } = Dimensions.get('screen');

class HireTouristGuide extends Component {
  state = {
    'switch-1': true,
    'switch-2': false,
  };
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    //const data = this.props.route.params.vehicles;
    // console.log(data);
    // this.setState({
    //   users: data,
    //   isLoading: false,
    // });
    const response = await fetch('http://192.168.1.141:5000/api/vehicle/all', {
      method: 'GET',
      // headers: {
      //   'x-auth-token': token,
      // },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('success');
        console.log(responseJson);
        this.setState({
          users: responseJson,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error(error);
        console.log('error araha');
      });
  };

  toggleSwitch = (switchId) =>
    this.setState({ [switchId]: !this.state[switchId] });
  render() {
    const { users, isLoading } = this.state;
    const { navigation } = this.props;
    const renderMenuItem = ({ item, index }) => {
      return (
        <View
          key={index}
          style={{
            backgroundColor: theme.COLORS.WHITE,
            marginVertical: theme.SIZES.BASE,
            borderWidth: 0,
            minHeight: 114,
            marginBottom: 16,
          }}
        >
          <View
            style={{
              borderRadius: 3,
              elevation: 1,
              overflow: 'hidden',
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
          >
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                top: 7,
              }}
            >
              <Image
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 200 / 2,
                }}
                resizeMode='cover'
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                }}
              />
            </View>
            <Block
              flex
              space='between'
              style={{ padding: theme.SIZES.BASE / 2 }}
            >
              <Text
                size={14}
                style={{ flex: 1, flexWrap: 'wrap', paddingBottom: 6 }}
              >
                Name: {item.owner.name}
              </Text>
              <Text
                size={14}
                style={{ flex: 1, flexWrap: 'wrap', paddingBottom: 6 }}
              >
                Address: {item.owner.address}
              </Text>
            </Block>
            <Block style={{ padding: theme.SIZES.BASE / 2 }}>
              <Block
                row
                middle
                space='between'
                style={{ marginBottom: theme.SIZES.BASE }}
              >
                <Text size={14}>Availability</Text>
                <Switch
                  value={this.state['switch-1']}
                  onValueChange={() => this.toggleSwitch('switch-1')}
                />
              </Block>
            </Block>

            <Block
              middle
              row
              space='evenly'
              style={{ marginTop: 10, paddingBottom: 10 }}
            >
              <Button
                small
                // style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
                onPress={() => {
                  console.log(item._id),
                    navigation.navigate('TouristBooking', {
                      vehicleId: item.owner._id,
                    });
                }}
                color='primary'
              >
                Book Now
              </Button>
            </Block>
          </View>
        </View>
      );
    };
    if (isLoading) {
      return <ActivityIndicator />;
    } else {
      return (
        <ImageBackground
          source={Images.Background}
          style={{ width, height, zIndex: 1 }}
        >
          <Card
            title='CARS WITH DRIVER'
            style={{
              backgroundColor: theme.COLORS.WHITE,
              marginVertical: theme.SIZES.BASE,
              borderWidth: 0,
              minHeight: 114,
              marginBottom: 16,
            }}
          >
            <FlatList
              data={users}
              renderItem={renderMenuItem}
              keyExtractor={({ id }, index) => id}
            />
          </Card>
        </ImageBackground>
      );
    }
  }
}
const users = [
  {
    name: 'Zahid But',
    Fair: '3000',
    avatar:
      'https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  },
  {
    name: 'Ahmed Khan',
    Fair: '6000',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Yaqoob Khan',
    Fair: '5000',
    avatar:
      'https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  },
];

export default HireTouristGuide;

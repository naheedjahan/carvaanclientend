import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  View,
  Image,
} from 'react-native';
import { Block, Checkbox, Text, theme } from 'galio-framework';
import { CheckBox } from 'react-native-elements';
import { Button, Icon, Input } from '../components';
import { Images, argonTheme } from '../constants';

const { width, height } = Dimensions.get('screen');
class SpCarRent extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block flex center style={{ marginTop: 8, marginBottom: 130 }}>
        <View style={styles.container}>
          <Block left style={{ marginLeft: 2 }}>
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
              }}
              style={styles.avatar}
            />
          </Block>
          <Text
            color='#32325D'
            size={16}
            onPress={() => navigation.navigate('Profile')}
            style={{ marginTop: 10, paddingLeft: 10, paddingRight: 80 }}
          >
            Yasir Iqbal {'\n'}Islamabad
          </Text>

          <Button
            small
            style={{ backgroundColor: argonTheme.COLORS.INFO }}
            onPress={() => navigation.navigate('RentBooking')}
            style={{ marginTop: 10 }}
            color='primary'
          >
            Confirm
          </Button>
        </View>
        <Block
          style={{
            width: '60%',
            borderWidth: 1,
            borderColor: '#E9ECEF',
            marginTop: 12,
          }}
        />
        <View style={styles.container}>
          <Block left style={{ marginLeft: 2 }}>
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
              }}
              style={styles.avatar}
            />
          </Block>
          <Text
            color='#32325D'
            size={16}
            onPress={() => navigation.navigate('RentBooking')}
            style={{ marginTop: 10, paddingLeft: 10, paddingRight: 80 }}
          >
            Hamid Khan {'\n'}Islamabad
          </Text>

          <Button
            small
            style={{ backgroundColor: argonTheme.COLORS.INFO }}
            onPress={() => navigation.navigate('RentBooking')}
            style={{ marginTop: 10 }}
            color='primary'
          >
            Confirm
          </Button>
        </View>
        <Block
          style={{
            width: '60%',
            borderWidth: 1,
            borderColor: '#E9ECEF',
            marginTop: 12,
          }}
        />
        <View style={styles.container}>
          <Block left style={{ marginLeft: 2 }}>
            <Image source={Images.user} style={styles.avatar} />
          </Block>
          <Text
            color='#32325D'
            size={16}
            onPress={() => navigation.navigate('RentBooking')}
            style={{ marginTop: 4, paddingLeft: 14, paddingRight: 80 }}
          >
            Zahih Butt {'\n'}Islamabad
          </Text>

          <Button
            small
            style={{ backgroundColor: argonTheme.COLORS.INFO }}
            onPress={() => navigation.navigate('RentBooking')}
            style={{ marginTop: 10 }}
            color='primary'
          >
            Confirm
          </Button>
        </View>
        <Block
          style={{
            width: '60%',
            borderWidth: 1,
            borderColor: '#E9ECEF',
            marginTop: 12,
          }}
        />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  text: {
    color: 'gray',
    backgroundColor: 'transparent',
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -80,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 62,
    borderWidth: 0,
  },
});

export default SpCarRent;

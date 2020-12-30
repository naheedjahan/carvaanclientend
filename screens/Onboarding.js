import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  AsyncStorage,
  Alert,
} from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
const { height, width } = Dimensions.get('screen');
import argonTheme from '../constants/Theme';
import Images from '../constants/Images';

class Onboarding extends React.Component {
  KeepMelogIn = async () => {
    const token = await AsyncStorage.getItem('Ownertoken');
    if (token != null) {
      this.props.navigation.navigate('CarOwnerMenu');
      console.log(token);
    } else this.props.navigation.navigate('loginSp');
  };

  KeepMelogInCustomer = async () => {
    const token = await AsyncStorage.getItem('Customertoken');
    if (token != null) {
      this.props.navigation.navigate('Screens');
      console.log(token);
    } else this.props.navigation.navigate('login');
  };
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
          <ImageBackground
            source={Images.page1}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>

        <Block flex space='between' style={styles.padded}>
          <Block flex space='around' style={{ zIndex: 2 }}>
            {/* <Block style={styles.title}>
              <Block>
                <Text color='white' size={60}>
                  Carvaan
                </Text>
              </Block>
              <Block style={styles.subTitle}>
                <Text color='white' size={18}>
                  Your Travel campanion
                </Text>
              </Block>
            </Block> */}
            <Block center>
              <Button
                style={styles.button}
                color={argonTheme.COLORS.SECONDARY}
                onPress={this.KeepMelogInCustomer} // pointing to next page here adding something here
                textStyle={{ color: argonTheme.COLORS.BLACK }}
              >
                Customer
              </Button>
            </Block>
            <Block center style={{ marginTop: -210 }}>
              <Button
                style={styles.button}
                color={argonTheme.COLORS.SECONDARY}
                onPress={this.KeepMelogIn} // pointing to next page here adding something here
                textStyle={{ color: argonTheme.COLORS.BLACK }}
              >
                Service Provider
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  logo: {
    width: 200,
    height: 150,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%',
  },
  title: {
    marginTop: '-5%',
  },
  subTitle: {
    marginTop: 20,
  },
});

export default Onboarding;

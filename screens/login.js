import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  View,
  AsyncStorage,
} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { CheckBox } from 'react-native-elements';
import { Button, Icon, Input } from '../components';
import { Images, argonTheme } from '../constants';
import * as SecureStore from 'expo-secure-store';
import baseUrl from '../baseUrl/baseUrl';
//----------
//import screens from '../screens';
//----------
const { width, height } = Dimensions.get('screen');
class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'naheedjahan96@gmail.com',
      password: '1111',
      remember: false,
      //--------
      nameError: '',
      emailError: '',
      check_textInputChange: false,
      secureTextEntry: true,
      iconName: 'eye-off',
      isValidUser: true,
      isValidPassword: true,
      //---------
    };
  }
  componentDidMount() {
    SecureStore.getItemAsync('Customerinfo').then((userdata) => {
      let Customerinfo = JSON.parse(userdata);
      if (Customerinfo) {
        this.setState({ email: Customerinfo.email });
        this.setState({ password: Customerinfo.password });
        this.setState({ remember: true });
      }
    });
  }
  handleLogin() {
    if (this.state.remember)
      SecureStore.setItemAsync(
        'Customerinfo',
        JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        })
      ).catch((error) => console.log('Could not save user info', error));
    else
      SecureStore.deleteItemAsync('Customerinfo').catch((error) =>
        console.log('Could not delete user info', error)
      );
    console.log('yahan a raha');
    // localhost means your mobile cannot access this
    fetch('http://192.168.1.153:5000/api/customer/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          if (!data.errors) {
            await AsyncStorage.setItem('Customertoken', data.token);
            const token = await AsyncStorage.getItem('Customertoken');
            this.props.navigation.navigate('Screens');
            console.log(token);
          } else {
            data.errors.forEach((error) => alert(error.msg));
          }
        } catch (e) {
          console.log('error hai', e);
        }
      });
  }
  render() {
    const { navigation } = this.props;
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.Background}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block
              style={styles.registerContainer}
              // code uraya hy yaha sy
            >
              <Block flex>
                <Block flex={0.17} middle>
                  <Text color='#8898AA' size={16}>
                    Login Your Account
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior='padding'
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        required
                        placeholder='Email'
                        // onBlur={() => this.emailValidator()}
                        value={this.state.email}
                        onChangeText={(value) =>
                          this.setState({ email: value })
                        }
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name='ic_mail_24px'
                            family='ArgonExtra'
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>

                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder='Password'
                        value={this.state.password}
                        onChangeText={(value) =>
                          this.setState({ password: value })
                        }
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name='padlock-unlocked'
                            family='ArgonExtra'
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <View style={styles.container}>
                      <Text
                        color='#8898AA'
                        size={16}
                        onPress={() => navigation.navigate('Account')}
                      >
                        Create Account
                      </Text>
                      <Text color='#8898AA' size={16}>
                        Forgot Password?
                      </Text>
                    </View>
                    <Block>
                      <CheckBox
                        title='Remember Me'
                        //center
                        checked={this.state.remember}
                        onPress={() =>
                          this.setState({ remember: !this.state.remember })
                        }
                      />
                    </Block>
                    <Block middle>
                      <Button
                        color='primary'
                        style={styles.createButton}
                        onPress={() => this.handleLogin()}
                      >
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          Continue
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: '#F4F5F7',
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden',
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#8898AA',
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: '#fff',
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: '800',
    fontSize: 14,
  },
  inputIcons: {
    marginRight: 12,
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30,
  },
  createButton: {
    width: width * 0.5,
    //marginTop: 25,
    marginBottom: 200,
  },
  container: {
    flex: 1,
    top: 20,
    //marginBottom: 200,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  text: {
    color: 'gray',
    backgroundColor: 'transparent',
  },
});

export default login;

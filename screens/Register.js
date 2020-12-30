import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { Block, Checkbox, Text, theme } from 'galio-framework';
import { TouchableOpacity } from 'react-native';
import { Button, Icon, Input } from '../components';
import { Images, argonTheme } from '../constants';
import { AsyncStorage, TextInput } from 'react-native';
const { width, height } = Dimensions.get('screen');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { View } from 'native-base';
import PhoneInput from 'react-native-phone-input';

//const baseUrl = 'http://192.168.1.141';
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'nahedd',
      email: 'naheedjahan96@gmail.com',
      number: '0965786',
      password: true,
      confirmPass: '0000000',
      address: 'Unknown',
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

  handleRegister() {
    console.log('yahan a raha');
    // localhost means your mobile cannot access this
    fetch('http://192.168.1.141:5000/api/customer/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        cellPhone: this.state.number,
        address: this.state.address,
        email: this.state.email,
        city: this.state.city,
        password: this.state.password,
        imageURI: this.state.imageUrl,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          if (!data.errors) {
            console.log('yahan ghga raha');
            await AsyncStorage.setItem('token', data.token);
            const token = await AsyncStorage.getItem('token');
            console.log(token);
            this.props.navigation.navigate('login');
          } else {
            data.errors.forEach((error) => alert(error.msg));
          }
        } catch (e) {
          console.log('error hai', e);
        }
      });
    // this.setState = {
    //   name: '',
    //   email: '',
    //   number: '',
    //   password: '',
    //   confirmPass: '',
    //   address: '',
    // };
  }
  emailValidator() {
    if (this.state.email == '') {
      this.setState({ emailError: 'Email field cannot be empty!' });
    } else {
      this.setState({ emailError: '' });
    }
  }
  textInputChange() {
    /// console.log('coming here also');
    //
    if (this.state.name.trim().length >= 4) {
      this.check_textInputChange = true;
      this.setState({
        isValidUser: true,
      });
    } else {
      this.check_textInputChange = false;
      this.setState({
        isValidUser: false,
      });
    }
  }
  handleValidUser() {
    console.log('che k 1');
    if (this.state.name == '') {
      this.setState({ nameError: 'field cann' });
    } else if (this.state.name.trim().length >= 4) {
      this.setState({
        isValidUser: true,
      });
    } else {
      this.setState({
        isValidUser: false,
        nameError: 'must be greater than 4 ',
      });
    }
    console.log('che k ');
  }
  onIconPress = () => {
    let iconName = this.state.secureTextEntry ? 'eye' : 'eye-off';

    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
      iconName: iconName,
    });
  };
  render() {
    const { navigation } = this.props; // is ki wja sy navigation wala error gya
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
              <ScrollView
                showsVerticalScrollIndicator={false}
                width={width * 0.9}
                style={{ marginTop: '25%' }}
              >
                <Block flex>
                  <Block flex={0.17} middle>
                    <Text color='#8898AA' size={18}>
                      Sign Up
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
                          placeholder='User Name'
                          value={this.state.value}
                          onChangeText={(value) =>
                            this.setState({ name: value }, this.textInputChange)
                          }
                          onEndEditing={this.handleValidUser.bind(this)}
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              name='hat-3'
                              family='ArgonExtra'
                              style={styles.inputIcons}
                            />
                          }
                        />
                        <Block>
                          {this.check_textInputChange ? (
                            <Feather
                              name='check-circle'
                              color='grey'
                              size={20}
                            />
                          ) : null}
                        </Block>

                        <Block row style={styles.passwordCheck}>
                          {this.state.isValidUser ? null : (
                            <Text
                              bold
                              size={12}
                              color={argonTheme.COLORS.ERROR}
                            >
                              {this.state.nameError}
                            </Text>
                          )}
                        </Block>
                      </Block>

                      <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                        <Input
                          borderless
                          keyboardType='email-adess'
                          required
                          placeholder='Email'
                          onBlur={() => this.emailValidator()}
                          value={this.state.value}
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
                      <Text style={{ color: 'red', marginLeft: 20 }}>
                        {this.state.emailError}
                      </Text>
                      <Block
                        width={width * 0.8} // this code is added for password confirmation
                      >
                        {/* <PhoneInput
                          borderless
                          placeholder='Phone Number'
                          // keyboardType='numeric'
                          //maxLength={11}
                          ref={(ref) => {
                            this.phone = ref;
                          }}
                          onPressFlag={this.onPressFlag}
                          style={{
                            flex: 1,
                            alignItems: 'center',
                            padding: 20,
                            paddingTop: 60,
                          }}
                          value={this.state.value}
                          onChangeText={(value) =>
                            this.setState({ number: value })
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
                        /> */}
                        <PhoneInput
                          ref={(ref) => {
                            this.phone = ref;
                          }}
                        />
                      </Block>
                      <Block width={width * 0.8}>
                        <Input
                          //password
                          //style={{ flexDirection: 'row' }}
                          borderless
                          placeholder='Password'
                          secureTextEntry={this.state.secureTextEntry}
                          value={this.state.value}
                          onChangeText={(value) =>
                            this.setState({ password: value })
                          }
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              name='padlock-unlocked'
                              //onPress={this.updateSecureTextEntry}>
                              family='ArgonExtra'
                              style={styles.inputIcons}
                            />
                          }
                        />
                        <TouchableOpacity onPress={this.onIconPress}>
                          <Feather
                            name={this.state.iconName}
                            color='grey'
                            size={20}
                          />
                        </TouchableOpacity>

                        <Block row style={styles.passwordCheck}>
                          <Text size={12} color={argonTheme.COLORS.MUTED}>
                            password strength:
                          </Text>
                          <Text
                            bold
                            size={12}
                            color={argonTheme.COLORS.SUCCESS}
                          >
                            {' '}
                            strong
                          </Text>
                        </Block>
                      </Block>
                      <Block
                        width={width * 0.8} // this code is added for password confirmation
                      >
                        <Input
                          password
                          borderless
                          placeholder='Confirm Password'
                          secureTextEntry={true} //true}
                          value={this.state.value}
                          onChangeText={(value) =>
                            this.setState({ confirmPass: value })
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
                      <Block
                        width={width * 0.8} // this code is added for password confirmation
                      >
                        <Input
                          password
                          borderless
                          placeholder='Address'
                          value={this.state.value}
                          onChangeText={(value) =>
                            this.setState({ address: value })
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
                      <Block middle>
                        <Button
                          color='primary'
                          style={styles.createButton}
                          onPress={() => this.handleRegister()}
                        >
                          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            CREATE ACCOUNT
                          </Text>
                        </Button>
                      </Block>
                    </KeyboardAvoidingView>
                  </Block>
                </Block>
              </ScrollView>
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
  createButton: {
    width: width * 0.5,
    //marginTop: 25,
    // marginBottom: 00,
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
    marginTop: 25,
    marginBottom: 25,
  },
});

export default Register;

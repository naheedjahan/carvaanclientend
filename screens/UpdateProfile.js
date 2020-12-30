import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  View,
  Image,
  ScrollView,
  Alert,
  AsyncStorage,
} from 'react-native';
import { Block, Checkbox, Text, theme } from 'galio-framework';
import { TouchableOpacity } from 'react-native';
import { Button, Icon, Input } from '../components';
import { Images, argonTheme } from '../constants';

const { width, height } = Dimensions.get('screen');

class UpdateProfile extends React.Component {
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
  handleEditing = async () => {
    const token = await AsyncStorage.getItem('Customertoken');
    fetch('http://192.168.1.141:5000/api/customer/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
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
            console.log('booking end');
            console.log(data);
            // this.props.navigation.navigate('login');
          } else {
            data.errors.forEach((error) => alert(error.msg));
          }
        } catch (e) {
          console.log('error hai', e);
        }
      });
  };
  render() {
    const createoneButtonAlert = () =>
      Alert.alert(
        'Confirm Booking',
        'Profile is Updataed',
        [
          {
            text: 'Ok',

            style: 'ok',
          },
        ],
        { cancelable: false }
      );
    const { navigation } = this.props; // is ki wja sy navigation wala error gya
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block flex middle>
          <Block flex>
            <Block flex center>
              <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior='padding'
                enabled
              >
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={Images.user}
                    //borderRadius style will help us make the Round Shape Image
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 200 / 2,
                    }}
                  />
                </View>

                <Block flex={0.17} right style={{ marginBottom: 12 }}>
                  <Text
                    color='#8898AA'
                    size={14}
                    onPress={() => navigation.navigate('popUp')}
                  >
                    Edit Your Profile Picture
                  </Text>
                </Block>
                <Block width={width * 0.8} style={{ marginBottom: 1 }}>
                  <Input
                    borderless
                    placeholder='Minha Yamin'
                    value={this.state.value}
                    onChangeText={(value) => this.setState({ name: value })}
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
                </Block>
                <Block width={width * 0.8} style={{ marginBottom: 8 }}>
                  <Input
                    borderless
                    placeholder='address'
                    value={this.state.value}
                    onChangeText={(value) => this.setState({ address: value })}
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
                <Block width={width * 0.8} style={{ marginBottom: 8 }}>
                  <Input
                    borderless
                    placeholder='cellphone'
                    value={this.state.value}
                    onChangeText={(value) =>
                      this.setState({ cellPhone: value })
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
                <Block width={width * 0.8} style={{ marginBottom: 8 }}>
                  <Input
                    borderless
                    placeholder='example96@gmail.com'
                    value={this.state.value}
                    onChangeText={(value) => this.setState({ email: value })}
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
                    value={this.state.value}
                    onChangeText={(value) => this.setState({ password: value })}
                    placeholder='Old Password'
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
                  <Block
                    width={width * 0.8} // this code is added for password confirmation
                  >
                    <Input
                      password
                      borderless
                      placeholder='New Password'
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
                  <Block row style={styles.passwordCheck}>
                    <Text size={12} color={argonTheme.COLORS.MUTED}>
                      password strength:
                    </Text>
                    <Text bold size={12} color={argonTheme.COLORS.SUCCESS}>
                      {' '}
                      strong
                    </Text>
                  </Block>
                </Block>

                <Block middle style={{ marginBottom: 8 }}>
                  <Button
                    // color='primary'
                    style={styles.createButton}
                    onPress={() => this.handleEditing()}
                    //onPress={() => this.handleRegister()}
                  >
                    <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                      UPDATE PROFILE
                    </Text>
                  </Button>
                </Block>
              </KeyboardAvoidingView>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    // width: width * 0.9,
    // height: height * 0.78,
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
    //overflow: 'hidden',
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
  },
});

export default UpdateProfile;

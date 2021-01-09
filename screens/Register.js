import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from 'react-native';
import { Block, Checkbox, Text, theme } from 'galio-framework';
import { TouchableOpacity } from 'react-native';
import { Button, Input } from '../components';
import { Images, argonTheme } from '../constants';
import { AsyncStorage, TextInput } from 'react-native';
const { width, height } = Dimensions.get('screen');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Icon } from 'react-native-elements';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import * as ImageManipulator from 'expo-image-manipulator';
import PassMeter from 'react-native-passmeter';
const MAX_LEN = 15,
  MIN_LEN = 6,
  PASS_LABELS = ['Too Short', 'Weak', 'Normal', 'Strong', 'Secure'];
//const baseUrl = 'http://192.168.1.141';
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'nahedd',
      email: 'naheedjahan96@gmail.com',
      number: '0965786',
      password: '',
      confirmPass: '',
      address: 'Unknown',
      //--------
      secureTextEntry: true,
      iconName: 'eye-off',
      //-------
      nameError: '',
      emailError: '',
      numberError: '',
      passError: '',
      cpassError: '',
      addressError: '',
      //-------------
      check_textInputChange: false,
      email_check: false,
      num_check: false,
      pass_chk: false,
      cPass_chk: false,
      address_chk: false,
      //--------------------
      isValidEmail: true,
      isValidUser: true,
      isValidPassword: true,
      isValid: true,
      isValidPass: true,
      isValidCPass: true,
      isValidAddress: true,
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
  }
  openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    this.processImage(pickerResult.uri);
  };
  getImageFromCamera = async () => {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (
      cameraPermission.status === 'granted' &&
      cameraRollPermission.status === 'granted'
    ) {
      // Display the camera to the user and wait for them to take a photo or to cancel
      // the action
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!result.cancelled) {
        this.processImage(result.uri);
      }
    }
  };
  processImage = async (imageUri) => {
    let processedImage = await ImageManipulator.manipulateAsync(
      imageUri,
      [{ resize: { width: 400 } }],
      { format: 'png' }
    );
    console.log(processedImage);
    let localUri = processedImage.uri;
    let filename = localUri.split('/').pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    this.setState({ imageUrl: processedImage.uri });
    // Upload the image using the fetch and FormData APIs
    let img = {
      uri: localUri,
      name: filename,
      type,
    };
    this.setState({ imgserver: img });
  };
  emailValidator() {
    if (this.state.email == '') {
      this.email_check = false;
      this.setState({ emailError: 'Email field cannot be empty!' });
    } else {
      this.email_check = true;
      this.setState({ emailError: '' });
    }
  }
  textInputChange(value) {
    /// console.log('coming here also');
    //
    if (value.trim().length < 3) {
      this.setState({
        nameError: 'Characters must be greater than 2 ',
      });
      this.check_textInputChange = false;
      this.setState({
        isValidUser: false,
      });
    } else if (value == '') {
      this.check_textInputChange = false;
      this.setState({ nameError: 'Name field cannot be empty!' });
    } else {
      this.check_textInputChange = true;

      this.setState({
        isValidUser: true,
      });
      this.setState({ name: value });
    }
  }
  handleValidUser() {
    console.log('che k 1');
    if (this.state.name == '') {
      this.check_textInputChange = false;
      this.setState({ nameError: 'Name field cannot be empty!' });
    } else if (this.state.name.trim().length >= 3) {
      this.setState({
        isValidUser: true,
      });
    } else {
      this.setState({
        isValidUser: false,
        nameError: 'Characters must be greater than 2 ',
      });
    }
    console.log('che k ');
  }
  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({
        isValidEmail: false,
      });
      this.email_check = false;
      console.log('Email is Not Correct');
      this.setState({ emailError: 'Email is Not Correct' });
    } else if (this.state.email == '') {
      this.setState({ email_check: false });
      this.setState({ isValidEmail: false });
      this.setState({ emailError: 'Email field cannot be empty!' });
    } else {
      this.email_check = true;
      this.setState({ isValidEmail: true });
      this.setState({ email: text });
      console.log('Email is Correct');
    }
  };
  onIconPress = () => {
    let iconName = this.state.secureTextEntry ? 'eye' : 'eye-off';

    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
      iconName: iconName,
    });
  };
  validateNumber = (value) => {
    if (value !== '') {
      this.setState({ num_check: true });
      this.setState({ number: value });
    } else {
      this.setState({ num_check: false });
      this.setState({ isValid: false });
      this.setState({ passError: 'Please enter your phone number!' });
    }
  };
  validatePass = (value) => {
    if (value !== '') {
      this.setState({ password: value });
      this.setState({ pass_chk: true });
      this.setState({ passError: '' });
    } else {
      this.setState({ pass_chk: false });
      this.setState({ isValidPass: false });
      this.setState({ passError: 'Please enter your Password!' });
    }
  };
  validateAddress = (value) => {
    if (value !== '') {
      this.setState({ address: value });
      this.setState({ address_chk: true });
      this.setState({ isValidAddress: true });
    } else {
      this.setState({ address_chk: false });
      this.setState({ isValidAddress: false });
      this.setState({ addressError: 'Please enter your Address!' });
    }
  };
  validateCPass = (value) => {
    if (value !== '') {
      if (value !== this.state.password) {
        this.setState({ cPass_check: false });
        this.setState({ isValidCPass: false });
        this.setState({ cpassError: 'Password does not match' });
      } else {
        this.setState({ confirmPass: value });
        this.setState({ cPass_chk: true });
        this.setState({ cpassError: '' });
        this.setState({ isValidCPass: true });
      }
    } else {
      this.setState({ cPass_check: false });
      this.setState({ isValidCPass: false });
      this.setState({ cpassError: 'Please enter your Password!' });
    }
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
                      //behavior='padding'
                      enabled
                    >
                      {this.check_textInputChange ? (
                        <Block width={width * 0.8}>
                          <Input
                            success
                            placeholder='Halay Noor'
                            value={this.state.value}
                            onChangeText={(value) =>
                              this.textInputChange(value)
                            }
                            //  onBlur={this.handleValidUser.bind(this)}
                            //  onEndEditing={this.handleValidUser.bind(this)}
                            iconContent={
                              <Icon
                                size={16}
                                color={argonTheme.COLORS.ICON}
                                // name='support'
                                // family='ArgonExtra'
                                name='user'
                                type='font-awesome'
                                style={styles.inputIcons}
                              />
                            }
                            // blurOnSubmit={true}
                          />
                        </Block>
                      ) : (
                        <Block width={width * 0.8}>
                          <Input
                            error
                            placeholder='Halay Noor'
                            value={this.state.value}
                            onChangeText={(value) =>
                              this.textInputChange(value)
                            }
                            //onEndEditing={this.handleValidUser.bind(this)}
                            iconContent={
                              <Block
                                middle
                                style={{
                                  width: 20,
                                  height: 20,
                                  borderRadius: 10,
                                  backgroundColor:
                                    argonTheme.COLORS.INPUT_ERROR,
                                }}
                              >
                                <Icon
                                  size={11}
                                  color={argonTheme.COLORS.ICON}
                                  name='user'
                                  type='font-awesome'
                                  // family='ArgonExtra'
                                />
                              </Block>
                            }
                          />
                        </Block>
                      )}
                      {this.state.isValidUser ? null : (
                        <Block row style={styles.passwordCheck}>
                          <Text bold size={12} color={argonTheme.COLORS.ERROR}>
                            {this.state.nameError}
                          </Text>
                        </Block>
                      )}

                      <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                        {this.email_check ? (
                          <Input
                            success
                            keyboardType='email-address'
                            placeholder='carvaan@email.com'
                            // onBlur={() => this.emailValidator()}
                            // onEndEditing={() => this.emailValidator()}
                            value={this.state.value}
                            onChangeText={(value) => this.validate(value)}
                            iconContent={
                              <Icon
                                size={16}
                                color={argonTheme.COLORS.ICON}
                                name='envelope'
                                type='font-awesome'
                                style={styles.inputIcons}
                              />
                            }
                          />
                        ) : (
                          <Input
                            error
                            keyboardType='email-address'
                            placeholder='carvaan@email.com'
                            value={this.state.value}
                            onChangeText={(value) => this.validate(value)}
                            // onEndEditing={this.validateEmail.bind(this)}
                            iconContent={
                              <Block
                                middle
                                style={{
                                  width: 20,
                                  height: 20,
                                  borderRadius: 10,
                                  backgroundColor:
                                    argonTheme.COLORS.INPUT_ERROR,
                                }}
                              >
                                <Icon
                                  size={11}
                                  color={argonTheme.COLORS.ICON}
                                  name='envelope'
                                  type='font-awesome'
                                  // family='ArgonExtra'
                                />
                              </Block>
                            }
                          />
                        )}
                        {this.state.isValidEmail ? null : (
                          <Block row style={styles.passwordCheck}>
                            <Text
                              bold
                              size={12}
                              color={argonTheme.COLORS.ERROR}
                            >
                              {this.state.emailError}
                            </Text>
                          </Block>
                        )}
                      </Block>
                      <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                        {this.state.num_check ? (
                          <Input
                            keyboardType='numeric'
                            maxLength={12}
                            success
                            value={this.state.value}
                            placeholder='03170155365'
                            value={this.state.value}
                            onChangeText={(value) => this.validateNumber(value)}
                            iconContent={
                              <Icon
                                size={16}
                                color={argonTheme.COLORS.ICON}
                                name='phone'
                                type='font-awesome'
                                style={styles.inputIcons}
                              />
                            }
                          />
                        ) : (
                          <Input
                            error
                            keyboardType='numeric'
                            maxLength={11}
                            placeholder='03170155365'
                            value={this.state.value}
                            onChangeText={(value) => this.validateNumber(value)}
                            // onEndEditing={this.handleValidUser.bind(this)}
                            iconContent={
                              <Block
                                middle
                                style={{
                                  width: 20,
                                  height: 20,
                                  borderRadius: 10,
                                  backgroundColor:
                                    argonTheme.COLORS.INPUT_ERROR,
                                }}
                              >
                                <Icon
                                  size={11}
                                  color={argonTheme.COLORS.ICON}
                                  name='phone'
                                  type='font-awesome'
                                  // family='ArgonExtra'
                                />
                              </Block>
                            }
                          />
                        )}
                        {this.state.isValid ? null : (
                          <Block row style={styles.passwordCheck}>
                            <Text
                              bold
                              size={12}
                              color={argonTheme.COLORS.ERROR}
                            >
                              {this.state.numberError}
                            </Text>
                          </Block>
                        )}
                      </Block>

                      <Block width={width * 0.8}>
                        {this.state.pass_chk ? (
                          <Input
                            success
                            placeholder='Password'
                            iconContent={
                              <TouchableOpacity onPress={this.onIconPress}>
                                <Feather
                                  name={this.state.iconName}
                                  type='font-awesome'
                                  size={17}
                                />
                              </TouchableOpacity>
                            }
                            blurOnSubmit={true}
                            secureTextEntry={this.state.secureTextEntry}
                            value={this.state.value}
                            onChangeText={(value) => this.validatePass(value)}
                            // onBlur={this.handleValidUser.bind(this)}
                            // onEndEditing={this.handleValidUser.bind(this)}
                          />
                        ) : (
                          <Input
                            error
                            //password
                            //style={{ flexDirection: 'row' }}

                            placeholder='Password'
                            secureTextEntry={this.state.secureTextEntry}
                            value={this.state.value}
                            onChangeText={(value) => this.validatePass(value)}
                            iconContent={
                              <TouchableOpacity
                                onPress={this.onIconPress}
                                middle
                                style={{
                                  width: 20,
                                  height: 20,
                                  borderRadius: 10,
                                  backgroundColor:
                                    argonTheme.COLORS.INPUT_ERROR,
                                }}
                              >
                                <Feather
                                  name={this.state.iconName}
                                  type='font-awesome'
                                  color={argonTheme.COLORS.ICON}
                                  size={17}
                                />
                              </TouchableOpacity>
                            }
                          />
                        )}
                        <PassMeter
                          style={{ width: 40 }}
                          showLabels
                          password={this.state.password}
                          maxLength={MAX_LEN}
                          minLength={MIN_LEN}
                          labels={PASS_LABELS}
                        />
                        {this.state.isValidPass ? null : (
                          <Block row style={styles.passwordCheck}>
                            <Text
                              bold
                              size={12}
                              color={argonTheme.COLORS.ERROR}
                            >
                              {this.state.passError}
                            </Text>
                          </Block>
                        )}
                      </Block>
                      <Block width={width * 0.8}>
                        {this.state.cPass_chk ? (
                          <Input
                            success
                            placeholder='Confirm Password'
                            iconContent={
                              <TouchableOpacity onPress={this.onIconPress}>
                                <Feather
                                  name={this.state.iconName}
                                  type='font-awesome'
                                  size={17}
                                />
                              </TouchableOpacity>
                            }
                            blurOnSubmit={true}
                            secureTextEntry={this.state.secureTextEntry}
                            value={this.state.value}
                            onChangeText={(value) => this.validateCPass(value)}
                            // onBlur={this.handleValidUser.bind(this)}
                            // onEndEditing={this.handleValidUser.bind(this)}
                          />
                        ) : (
                          <Input
                            error
                            //password
                            //style={{ flexDirection: 'row' }}

                            placeholder='Confirm Password'
                            secureTextEntry={this.state.secureTextEntry}
                            value={this.state.value}
                            onChangeText={(value) => this.validateCPass(value)}
                            iconContent={
                              <TouchableOpacity
                                onPress={this.onIconPress}
                                middle
                                style={{
                                  width: 20,
                                  height: 20,
                                  borderRadius: 10,
                                  backgroundColor:
                                    argonTheme.COLORS.INPUT_ERROR,
                                }}
                              >
                                <Feather
                                  name={this.state.iconName}
                                  type='font-awesome'
                                  color={argonTheme.COLORS.ICON}
                                  size={17}
                                />
                              </TouchableOpacity>
                            }
                          />
                        )}

                        {this.state.isValidCPass ? null : (
                          <Block row style={styles.passwordCheck}>
                            <Text
                              bold
                              size={12}
                              color={argonTheme.COLORS.ERROR}
                            >
                              {this.state.cpassError}
                            </Text>
                          </Block>
                        )}
                      </Block>

                      {this.state.address_chk ? (
                        <Block width={width * 0.8}>
                          <Input
                            success
                            placeholder='Address'
                            iconContent={
                              <Icon
                                size={11}
                                color={argonTheme.COLORS.ICON}
                                name='address-card'
                                type='font-awesome'
                                // family='ArgonExtra'
                              />
                            }
                            blurOnSubmit={true}
                            secureTextEntry={this.state.secureTextEntry}
                            value={this.state.value}
                            onChangeText={(value) =>
                              this.validateAddress(value)
                            }
                            // onBlur={this.handleValidUser.bind(this)}
                            // onEndEditing={this.handleValidUser.bind(this)}
                          />
                        </Block>
                      ) : (
                        <Block width={width * 0.8}>
                          <Input
                            error
                            //password
                            //style={{ flexDirection: 'row' }}

                            placeholder='Address'
                            secureTextEntry={this.state.secureTextEntry}
                            value={this.state.value}
                            onChangeText={(value) =>
                              this.validateAddress(value)
                            }
                            iconContent={
                              <Block
                                middle
                                style={{
                                  width: 20,
                                  height: 20,
                                  borderRadius: 10,
                                  backgroundColor:
                                    argonTheme.COLORS.INPUT_ERROR,
                                }}
                              >
                                <Icon
                                  size={11}
                                  color={argonTheme.COLORS.ICON}
                                  name='address-card'
                                  type='font-awesome'
                                  // family='ArgonExtra'
                                />
                              </Block>
                            }
                          />
                        </Block>
                      )}

                      {this.state.isValidAddress ? null : (
                        <Block row style={styles.passwordCheck}>
                          <Text bold size={12} color={argonTheme.COLORS.ERROR}>
                            {this.state.addressError}
                          </Text>
                        </Block>
                      )}

                      <Block row space='between'>
                        <Block middle>
                          <Image
                            source={{ uri: this.state.imageUrl }}
                            // loadingIndicatorSource={require('./images/logo.png')}
                            style={{
                              margin: 10,
                              width: 80,
                              height: 60,
                              backgroundColor: '#e3e3e3',
                            }}
                          />
                          <Text
                            bold
                            color='#525F7F'
                            size={15}
                            style={{ marginTop: 10 }}
                          >
                            Upload Picture
                          </Text>
                        </Block>
                        <Block middle>
                          <Icon
                            raised
                            reverse
                            name={'camera'}
                            type='font-awesome'
                            color={argonTheme.COLORS.SUCCESS}
                            onPress={this.getImageFromCamera}
                          />
                          <Text
                            bold
                            color='#525F7F'
                            size={15}
                            style={{ marginTop: 25 }}
                          >
                            Camera
                          </Text>
                        </Block>
                        <Block middle>
                          <Icon
                            raised
                            reverse
                            name={'picture-o'}
                            type='font-awesome'
                            color={argonTheme.COLORS.SUCCESS}
                            onPress={this.openImagePickerAsync}
                          />

                          <Text
                            bold
                            color='#525F7F'
                            size={15}
                            style={{ marginTop: 25 }}
                          >
                            Upload
                          </Text>
                        </Block>
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
    paddingBottom: 2,
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
    marginBottom: 25,
  },
});

export default Register;

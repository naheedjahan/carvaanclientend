import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  AsyncStorage,
  View,
  TouchableOpacity
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Block, Checkbox, Text, theme } from 'galio-framework';
import { CheckBox } from 'react-native-elements';
import { Button, Input } from '../components';
import { Icon } from 'react-native-elements';
import { Images, argonTheme } from '../constants';
import * as SecureStore from 'expo-secure-store';
import PassMeter from "react-native-passmeter";
const MAX_LEN = 15,
  MIN_LEN = 6,
  PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];
//----------
//import screens from '../screens';
//----------
const { width, height } = Dimensions.get('screen');
class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      remember: false,
      //--------
      // nameError: '',
      // emailError: '',
      // check_textInputChange: false,
      // secureTextEntry: true,
      // iconName: 'eye-off',
      // isValidUser: true,
      // isValidPassword: true,
      //---------
       //--------
       secureTextEntry: true,
       iconName: 'eye-off',
       //-------
       nameError: '',
       emailError: '',
       numberError: '',
       passError:'',
       cpassError:'',
       addressError:'',
       //-------------
       check_textInputChange: false,
       email_check:false,
       num_check:false,
       pass_chk:false,
       cPass_chk:false,
       address_chk:false,
       //--------------------
       isValidEmail:true,
       isValidUser: true,
       isValidPassword: true,
       isValid:true,
       isValidPass:true,
       isValidCPass:true,
       isValidAddress:true,
       //---------
    };
  }

  componentDidMount() {
    SecureStore.getItemAsync('userinfo').then((userdata) => {
      let userinfo = JSON.parse(userdata);
      if (userinfo) {
        this.setState({ email: userinfo.email });
        this.setState({ password: userinfo.password });
        this.setState({ remember: true });
      }
    });
  }
  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({
        isValidEmail: false
      });
      this.setState({ email_check: false })
      console.log("Email is Not Correct");
      this.setState({ emailError: "Email is Not Correct" })
      this.setState({ email: text })
     
  
    }
    else if(this.state.email == ''){
      
      this.setState({ email_check: false })
      this.setState({ isValidEmail: false })
      this.setState({ emailError: 'Email field cannot be empty!' });
    }
    else {
      this.email_check=true;
      this.setState({ isValidEmail: true })
      this.setState({ email: text })
      console.log("Email is Correct");
    }
  }
  onIconPress = () => {
    let iconName = this.state.secureTextEntry ? 'eye' : 'eye-off';

    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
      iconName: iconName,
    });
  };
  validateNumber=(value)=>{
    if (value !== '') {
      this.setState({ num_check: true });
      this.setState({ number: value});
      // var pattern = new RegExp(/^[0-9\b]+$/);
    
      // if (!pattern.test(value)) {
    
      //   this.isValid = false;
      //   this.setState({ numberError: 'Please enter only number!' });
       
    
      // }else if(value.length != 11){
    
      //   this.isValid = false;
      //   this.setState({ numberError: 'Please enter valid phone number!' })
        
    
      // }
    }
    else{
      this.setState({ num_check: false });
      this.setState({ isValid: false });
      this.setState({ passError: 'Please enter your phone number!' });    }
  }
  validatePass=(value)=>{
    if (value !== '') {
      this.setState({password:value});
      this.setState({ pass_chk: true });
      this.setState({ isValidPass: true });
      this.setState({ passError: '' }); 
    }
    else{
      this.setState({ pass_check: false });
      this.setState({ isValidPass: false });
      this.setState({ passError: 'Please enter your Password!' });    }
  }
  handleLogin() {
    if (this.state.remember)
      SecureStore.setItemAsync(
        'userinfo',
        JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        })
      ).catch((error) => console.log('Could not save user info', error));
    else
      SecureStore.deleteItemAsync('userinfo').catch((error) =>
        console.log('Could not delete user info', error)
      );
    // localhost means your mobile cannot access this
    fetch('http://192.168.1.153:5000/api/owner/auth/login', {
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
            console.log(data);
            await AsyncStorage.setItem('Ownertoken', data.token);
            const token = await AsyncStorage.getItem('Ownertoken');
            this.props.navigation.navigate('CarOwnerMenu');
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
                      {this.email_check ? 
                        <Input
                          
                          success
                          keyboardType='email-address'
                          placeholder='Email'
                          // onBlur={() => this.emailValidator()}
                          // onEndEditing={() => this.emailValidator()}
                          value={this.state.value}
                          onChangeText={(value) =>
                            this.setState({ email: value })
                          }
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              name='envelope'
                              type='font-awesome'
                              style={styles.inputIcons}
                            />
                          }
                        />:
                        <Input
                        error
                    
                        placeholder='carvaan.@gmail.com'
                        value={this.state.value}
                        onChangeText={ (value)=>this.validate(value)}
                      // onEndEditing={this.validateEmail.bind(this)}
                        iconContent={
                          <Block
                          middle
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 10,
                            backgroundColor: argonTheme.COLORS.INPUT_ERROR,
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
                      />}{this.state.isValidEmail ? null : (
                        <Block row style={styles.passwordCheck}>
                          
                            <Text
                              bold
                              size={12}
                              color={argonTheme.COLORS.ERROR}
                            >
                              {this.state.emailError}
                            </Text>
                          
                        </Block>)}
                      </Block>

                    <Block width={width * 0.8}>
                      {this.state.pass_chk ? 
                        <Input
                          success
                          placeholder='Password'
                          iconContent={
                            <TouchableOpacity onPress={this.onIconPress}  
                           >
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
                          onChangeText={(value)=>this.validatePass(value)}
                        // onBlur={this.handleValidUser.bind(this)}
                        // onEndEditing={this.handleValidUser.bind(this)}
                          
                        />:(
                        <Input
                        error
                          //password
                          //style={{ flexDirection: 'row' }}
                        
                          placeholder='Password'
                          secureTextEntry={this.state.secureTextEntry}
                          value={this.state.value}
                          onChangeText={(value)=>this.validatePass(value)}
                        
                          iconContent={
                            
                            <TouchableOpacity onPress={this.onIconPress}  
                            middle
                            style={{
                              width: 20,
                              height: 20,
                              borderRadius: 10,
                              backgroundColor: argonTheme.COLORS.INPUT_ERROR,
                            }}>
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
                                       
                      {this.state.isValidPass ? null : (
                        <Block row style={styles.passwordCheck}>
                          
                            <Text
                              bold
                              size={12}
                              color={argonTheme.COLORS.ERROR}
                            >
                              {this.state.passError}
                            </Text>
                          
                        </Block>)}
                      </Block>
                    <View style={styles.container}>
                      <Text
                        color='#8898AA'
                        size={16}
                        onPress={() => navigation.navigate('CarOwner')}
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
                       //onPress={()=>navigation.navigate('CarOwnerMenu')}
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

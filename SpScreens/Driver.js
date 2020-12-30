
import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
  Platform,
  Picker,
  AsyncStorage,
  View,
  TextInput,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Button, Select, Input, Header, Switch } from '../components/';
//import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
const { width, height } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;
import { ButtonGroup } from 'react-native-elements';
import { Icon } from 'react-native-elements';


import {baseUrl} from '../baseUrl/baseUrl';
class Driver extends React.Component {
  
  constructor(props) {
        super(props);
    
        this.state = {
          selectedValueType: 'Car',
          selectedValueSeating: 6,
          selectedValueManufacturer: 'Honda',
          selectedValueTransmission: 'Auto',
          fare:0,
          selectedIndex: 1,
          //setSelectedValue: 'Car',
        };
        this.updateIndex = this.updateIndex.bind(this);
      }
      updateIndex(selectedIndex) {
        this.setState({ selectedIndex });
      }
    
      handleSearch = async () => {
        const type = this.state.selectedValueType;
        const manufacturer = this.state.selectedValueManufacturer;
        const seatingCapacity = this.state.selectedValueSeating;
        const transmission = this.state.selectedValueTransmission;
        const driver = 0;
        console.log(type);
        const token = await AsyncStorage.getItem('Customertoken');
        const response = await fetch(
          baseUrl+'api/customer/search/' + type+'/'+manufacturer+'/'+seatingCapacity+'/'+transmission +'/'+driver ,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token': token,
            },
          }
        )
          .then((res) => res.json())
          .then(async (data) => {
            try {
              if (!data.errors) {
                console.log(data);
                this.props.navigation.navigate('Wdriver', {
                  vehicles: data,
                });
              } else {
                data.errors.forEach((error) => alert(error.msg));
              }
            } catch (e) {
              console.log('error hai', e);
            }
          });
      };
    
  render() {
    const { navigation } = this.props;
    const buttons = ['Driver', 'Without Driver'];
    return (
     
      <Block flex style={styles.profile}>
        
        <Block flex >
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
              <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header
               transparent
               white
               title="Profile"
               navigation={this.props.navigation}
             
            />
          </Block>
          <Block left style={styles.nameInfo}>
                    {/* <Text bold size={28} color="white">
                      Jessica Jones, 27
                    </Text> */}
                    <Text bold size={16} color="white" style={{ marginTop: 10, marginLeft:10 }}>
                     Enter Your Vehicle Details
                    </Text>
                  </Block>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '-20%',marginBottom:60 }}
            >
              <Block flex style={styles.profileCard}>
              <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior='padding'
                    enabled
                  >
                          <Block flex left style={{marginLeft:5}}>
                        <Text
                          bold
                          color="#525F7F"
                          size={15}
                          
                        >
                           Upload Your Driving Licence :
                        </Text>
                        </Block>
                          <Block row space="between">
                    <Block middle >
                    <Image
                          source={{ uri: this.state.imageUrl }}
                          // loadingIndicatorSource={require('./images/logo.png')}
                          style={{ margin: 10, width: 80, height: 60,backgroundColor: '#e3e3e3' }}
                        />
                      <Text  bold
                        color="#525F7F"
                        size={15}
                        style={{ marginTop:10 }}>Driving Licence</Text>
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
                        color="#525F7F"
                        size={15}
                        style={ { marginTop: 25 }}
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
                     
                      <Text  bold
                        color="#525F7F"
                        size={15}
                        style={{ marginTop: 25 }}>Gallery</Text>
                    </Block>
                  </Block>
                  
                  
                      

                    <Block
                      middle
                      row
                      space='evenly'
                      style={{ paddingBottom: 14, marginTop:50 }}
                      
                    >
                      <Button
                        
                        small
                        color='primary'
                        // style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
                      >
                        Cancel
                      </Button>
                      <Button
                       // onPress={this.handleSearch}
                        onPress={() => navigation.navigate('Wdriver')}
                        small
                        color='primary'
                        // style={{ backgroundColor: argonTheme.COLORS.PRIMARY }}
                      >
                        Search
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
              </Block>
            </ScrollView>
          </ImageBackground>
        </Block>
       
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight :0,
  // marginBottom: -HeaderHeight * 2,
    flex: 1
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
    height: height / 2
  },
  nameInfo: {
    marginTop: 10
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 100,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
 
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});

export default Driver;

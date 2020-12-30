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
  TouchableOpacity,
  View
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Button, Select,  Input, Header, Switch } from '../components/';
//import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
const { width, height } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;
import { ButtonGroup } from 'react-native-elements';
import { Card, Rating,Icon } from 'react-native-elements';


import {baseUrl} from '../baseUrl/baseUrl';
class CarDetails extends React.Component {
  
  
    
  render() {
    const { navigation } = this.props;
    const manf =this.props.route.params.item.manufacturer;
    // const model =this.props.route.params.item.model;
    // const year =this.props.route.params.item.year;
    // const fare =this.props.route.params.item.fare;
    const image=this.props.route.params.item.image
    // const sC =this.props.route.params.item.seatingCapacity;
    // const transmission =this.props.route.params.item.transmission;
    // const descrip = this.props.route.params.item.description;
    // const driver= this.props.route.params.item.driver;
    const Id =this.props.route.params.item._id;
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
               title="Cars Details"
               navigation={this.props.navigation}
             
            />
          </Block>
          <Block left style={styles.nameInfo}>
                    {/* <Text bold size={28} color="white">
                      Jessica Jones, 27
                    </Text> */}
                    <Text bold size={16} color="white" style={{ marginTop: 10, marginLeft:10 }}>
                     Vehicles Matching Your Search
                    </Text>
                  </Block>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '5%' }}
            >
              
              {/* <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('RentBooking')}>
     
     <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3gLAMkW3_Q8vTh-JkXBW0Q14OsfMS29Bqw&usqp=CAU'}}  style={{width:180, height:100,borderRadius:1}} />
      <View style={{alignItems:"center",flex:1}}>
        <Text style={{fontWeight:"bold",marginTop:10}}>Toyota Corola</Text>
        <Rating
              type='star'
              imageSize={15}
              readonly
              style={{ paddingRight: 10, marginTop:7 }}
              startingValue={4}
            />
            <Text style={{color:"green", marginTop:7}}>Rs. 5000</Text>
      </View>
    </TouchableOpacity> */}
    <Card   style={{backgroundColor: theme.COLORS.WHITE}}
  >
             
             <View style={{ justifyContent: 'center', alignItems: 'center'}}>
    <Image
     style={{
       flex: 1,
       width:300,
       height:180,
       opacity: 0.6
     }}
     source={{uri: image }}
     />
    
     <Text  style={{position: 'absolute', fontSize: 30}} bold color={argonTheme.COLORS.BLACK}>
                    {manf}
                  </Text>
 </View>
    <View style={{
            paddingVertical: 5,
            paddingHorizontal: 3,
            flexDirection: "row",
            justifyContent: "space-between",
            // alignItems: "center"
        }}>
            <Icon
              name={'check'}
              type='font-awesome'
              color='#2DCE89'
              size={15}
            />
            <Text style={{
                    fontSize: 15,
                    color: "#2DCE89",
                    marginRight:130
                }}
                
                >Free Vehicle Delivery </Text>
           
        </View>
        <View style={{
            paddingVertical: 5,
            paddingHorizontal: 3,
            flexDirection: "row",
            justifyContent: "space-between",
            // alignItems: "center"
        }}>
            <Icon
              name={'check'}
              type='font-awesome'
              color='#2DCE89'
              size={15}
            />
            <Text style={{
                    fontSize: 15,
                    color: "#2DCE89",
                    marginRight:100
                }}>Free Booking Cancelation</Text>
           
        </View>
        <Block style={styles.divider} />
        {/* <View style={{
           paddingVertical: 5,
           paddingHorizontal: 3,
            flexDirection: "row",
            justifyContent: "space-between",
            // alignItems: "center"
        }}>
            <Icon
              name={'check'}
              type='font-awesome'
              color='#2DCE89'
           
            />
            <Text style={{
                    fontSize: 16,
                    color: "#2DCE89",
                    marginRight:170
                }}>Kategorien:</Text>
           
        </View> */}
   <Text size={14} color="#8898AA" style={{ marginTop: 10, marginLeft:10 }}>
                      --- 4 Passengers
                    </Text>
                    <Text size={14} color="#8898AA" style={{ marginTop: 10, marginLeft:10 }}>
                      --- 2015
                    </Text>
                    <Text size={14} color="#8898AA" style={{ marginTop: 10, marginLeft:10 }}>
                      --- Automatic Tranmission
                    </Text>
                    <Text size={14} color="#8898AA" style={{ marginTop: 10, marginLeft:10 }}>
                      --- Corolla Hybrid
                    </Text>
                    <Text size={14} color="#8898AA" style={{ marginTop: 10, marginLeft:10 }}>
                      --- San Francisco, USA
                    </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon
              raised
              reverse
              name={'heart-o'}
              type='font-awesome'
              color='#f50'
            //   onPress={() =>
            //     props.favorite
            //       ? console.log('Already favorite')
            //       : props.onPress()
            //   }
            />
            <Icon
              raised
              reverse
              name={'warning'}
              type='font-awesome'
              color='red'
             // onPress={() => props.onSelect()}
            />
            <Icon
              raised
              reverse
              name='share'
              type='font-awesome'
              color='#51D2A8'
            //   style={styles.cardItem}
            //   onPress={() =>
            //     shareDish(corola, nyiu, baseUrl )
            //   }
            />
          </View>
            <Block center style={{marginTop:50}}>
              <Button
                style={styles.button}
                color='primary'
                onPress={() => navigation.navigate('RentBooking', {
                                        vehicleId: Id,
                                      })} // pointing to next page here adding something here
                textStyle={{ color: argonTheme.COLORS.WHITE }}
              >
                Book
              </Button>
            </Block>
            <Block center style={{marginTop:10}} >
              <Button
                style={styles.button}
                color={argonTheme.COLORS.SECONDARY}
              //  onPress={this.KeepMelogIn} // pointing to next page here adding something here
                textStyle={{ color: argonTheme.COLORS.BLACK }}
              >
               Cancel
              </Button>
            </Block>
        </Card>
        <Block style={styles.divider} />
        
      <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('RentBooking')}>
     
     <Image source={{uri:'data:image/jpeg;base64,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'}}  style={{width:180, height:100,borderRadius:1}} />
      <View style={{alignItems:"center",flex:1,backgroundColor: theme.COLORS.WHITE}}>
        <Text style={{fontWeight:"bold",marginTop:10}}>Raheela Khan</Text>
        <Rating
              type='star'
              imageSize={15}
              readonly
              style={{ paddingRight: 10, marginTop:7 }}
              startingValue={4}
            />
            <Text style={{color:"green", marginTop:7}}> View Profile</Text>
      </View>
    </TouchableOpacity>
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
  divider: {
    width: '95%',
    borderWidth: 1,
    borderColor: '#E9ECEF',
    marginTop: 12,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  nameInfo: {
    marginTop: 35
  },
  listItem:{
    margin:4,
  marginTop:10,
  marginBottom:40,
  backgroundColor: theme.COLORS.WHITE,
    width:"92%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:1,
    height:100,
    shadowColor: "#000",
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
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 10,
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
  nameInfo: {
    marginTop: 2

  },
//   divider: {
//     width: "90%",
//     borderWidth: 1,
//     borderColor: "#E9ECEF"
//   },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});

export default CarDetails;

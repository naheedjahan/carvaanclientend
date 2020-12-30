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
class BookingStatistics extends React.Component {
  
  
    
  render() {
    const { navigation } = this.props;
    
    return (
     
      <Block flex style={styles.profile}>
        
        <Block flex >
        
          <Block left style={styles.nameInfo}>
                    {/* <Text bold size={28} color="white">
                      Jessica Jones, 27
                    </Text> */}
                    <Text bold size={16} color="white" style={{ marginTop: 10, marginLeft:10 }}>
                     Book Your Vehicle
                    </Text>
                  </Block>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '40%' }}
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
    <Card   style={{marginTop:50, backgroundColor: theme.COLORS.WHITE}}
    featuredTitle='Toyota Corola' image={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3gLAMkW3_Q8vTh-JkXBW0Q14OsfMS29Bqw&usqp=CAU' }}>
          
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
          {/* <View
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
          </View> */}
            <Block center style={{marginTop:50}}>
              <Button
                style={styles.button}
                color='primary'
                onPress={() => navigation.navigate('popUp')} // pointing to next page here adding something here
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
        
      <Card onPress={() => navigation.navigate('RentBooking')}>
     
   
      <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
        <Text style={{fontWeight:"bold"}}>From: 2030/01/01</Text>
        <Text style={{fontWeight:"bold", marginLeft:80}}> To: 2030/02/01</Text>
         
      </View>
      <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
       
       <Text style={{color:'green',fontWeight:"bold"}}>Totol Days: 30</Text>
        <Text style={{color:'green', fontWeight:"bold", marginLeft:80}}> Total Fare: 210000</Text>
         
      </View>
    </Card>
            </ScrollView>
         
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

export default BookingStatistics;

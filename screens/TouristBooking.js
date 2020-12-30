import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Alert,
  AsyncStorage,
} from 'react-native';
import { Block, Checkbox, Text, theme } from 'galio-framework';
import DatePicker from 'react-native-datepicker';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);
import { Button, Icon, Input, Select } from '../components';
import { Images, argonTheme } from '../constants';

const { width, height } = Dimensions.get('screen');
class TouristBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      days: '6',
      address: '',
    };
    //set value in state for initial date
  }
  parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0] - 1, mdy[1]);
  }
  datediff() {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round(
      (this.state.endDate - this.state.startDate) / (1000 * 60 * 60 * 24)
    );
  }
  handleRentProcess = async () => {
    var d1 = new Date(this.state.startDate); //firstDate
    var d2 = new Date(this.state.endDate); //SecondDate
    // var diff = Math.abs(d2 - d1); //in milliseconds  ---> alternative way in javascript
    const range = moment.range(d1, d2);
    range.diff('months'); // 3
    range.diff('days'); // 92
    const diff = range.diff(); // 7945200000
    const caldays = parseInt(diff / (1000 * 60 * 60 * 24));
    console.log((this.state.days = caldays));

    //-----------------------------------------------------------
    const vehicleId = this.props.route.params.vehicleId;
    console.log(vehicleId);
    const token = await AsyncStorage.getItem('Customertoken');
    fetch('http://192.168.1.141:5000/api/customer/Tbook/' + vehicleId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
      body: JSON.stringify({
        days: this.state.days,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          if (!data.errors) {
            console.log('booking start');
            console.log(data);
            const id = data;
            // this.props.navigation.navigate('login');
            //this.props.navigation.navigate('EndVehicleBooking');
            this.props.navigation.navigate('EndTouristBooking', {
              vehicleId: vehicleId,
              bookingId: id,
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
    const vehicleId = this.props.route.params.vehicleId;

    console.log();
    const createTwoButtonAlert = () =>
      Alert.alert(
        'Confirm Booking',
        'Do You Really Want To Book This Car ?',
        [
          {
            text: 'Cancel',
            onPress: () => navigation.navigate('Home'),
            style: 'cancel',
          },
          { text: 'Yes', onPress: () => navigation.navigate('Home') },
        ],
        { cancelable: false }
      );
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
                  <Text color='#8898AA' size={14}>
                    Schedule Your Booking
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior='padding'
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Block flex left>
                        <Text
                          color='#8898AA'
                          size={14}
                          style={{ marginTop: 15 }}
                        >
                          From
                        </Text>
                      </Block>
                      <DatePicker
                        style={{ width: 200, marginTop: 45 }}
                        date={this.state.startDate} //initial date from state
                        mode='date' //The enum of date, datetime and time
                        placeholder='select date'
                        format='YYYY/MM/DD'
                        minDate={this.state.startDate}
                        maxDate='2030/01/01'
                        confirmBtnText='Confirm'
                        cancelBtnText='Cancel'
                        customStyles={{
                          dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0,
                          },
                          dateInput: {
                            marginLeft: 36,
                          },
                        }}
                        onDateChange={(value) => {
                          this.setState({ startDate: value });
                        }}
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Block flex left>
                        <Text
                          color='#8898AA'
                          size={14}
                          style={{ marginTop: 15 }}
                        >
                          To
                        </Text>
                      </Block>
                      <DatePicker
                        style={{ width: 200, marginTop: 45 }}
                        date={this.state.endDate} //initial date from state
                        mode='date' //The enum of date, datetime and time
                        placeholder='select date'
                        format='YYYY/MM/DD'
                        minDate={this.state.endDate}
                        maxDate='2030/01/01'
                        confirmBtnText='Confirm'
                        cancelBtnText='Cancel'
                        customStyles={{
                          dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0,
                          },
                          dateInput: {
                            marginLeft: 36,
                          },
                        }}
                        onDateChange={(endDate) => {
                          this.setState({ endDate: endDate });
                        }}
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 50 }}>
                      <Text color='#8898AA' size={14} style={{ marginTop: 15 }}>
                        Enter your localtion Here
                      </Text>
                      <Input
                        borderless
                        placeholder='Address e.g house#610 near railway hospital, westridge'
                        onChangeText={(value) => this.setState({ days: value })}
                      />
                    </Block>

                    <Block
                      middle
                      row
                      space='evenly'
                      style={{ paddingBottom: 14 }}
                    >
                      <Button
                        //onPress={() => navigation.navigate('login')}
                        small
                        color='primary'
                        // style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onPress={() => this.handleRentProcess()}
                        small
                        color='primary'
                        // style={{ backgroundColor: argonTheme.COLORS.PRIMARY }}
                      >
                        Confirm
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
    marginTop: 25,
  },
});

export default TouristBooking;

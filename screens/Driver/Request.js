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
import { Block, Checkbox, Text, theme } from 'galio-framework';
import { baseUrl } from '../../baseUrl/baseUrl';
import { Button, Input } from '../../components';
import { Images, argonTheme } from '../../constants';
import { Icon } from 'react-native-elements';
const { width, height } = Dimensions.get('screen');
class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
    };
  }
  componentDidMount() {
    this.getScreen();
  }
  getScreen = async () => {
    console.log('coming here');
    const token = await AsyncStorage.getItem('Customertoken');
    const RequestId = this.props.route.params.RequestId;
    const response = await fetch(
      baseUrl + 'api/customer/checkDriverRequest/' + RequestId,
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
            var x = data.map(function (item) {
              return item['driverBooking'];
            });

            const lang = x.toString();
            console.log(lang);
            if (lang == 'true') {
              this.setState({ check: true });
            }
          } else {
            data.errors.forEach((error) => alert(error.msg));
          }
        } catch (e) {
          console.log('error hai', e);
        }
      });
  };
  render() {
    const RequestId = this.props.route.params.RequestId;
    const { navigation } = this.props;
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block
              style={styles.registerContainer}
              // code uraya hy yaha sy
            >
              <Block flex>
                <Block flex middle>
                  <Icon
                    name={'check'}
                    type='font-awesome'
                    color='#2DCE89'
                    raised
                    reverse
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#2DCE89',
                    }}
                  >
                    Your Request Has Been Sent To Vehicle Owner
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior='padding'
                    enabled
                  >
                    <Block middle>
                      {this.state.check ? (
                        <Button
                          color={argonTheme.COLORS.WHITE}
                          style={styles.createButton}
                          //onPress={() => navigation.navigate('CCFieldValidator')}
                          disabled={!this.state.check}
                        >
                          <Text bold size={14} color={argonTheme.COLORS.INFO}>
                            Add Payment
                          </Text>
                        </Button>
                      ) : (
                        <Button
                          color='primary'
                          style={styles.createButton}
                          onPress={() =>
                            navigation.navigate('CreditCardInput', {
                              driver: 'driver',
                              RequestId: RequestId,
                            })
                          } // yha py isy pain ho ri hy :/
                          //onPress={() => navigation.navigate('CCFieldValidator')}
                        >
                          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            Add Payment
                          </Text>
                        </Button>
                      )}
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
    height: height * 0.3,
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

export default Request;

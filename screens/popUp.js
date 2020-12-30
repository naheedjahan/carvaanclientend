import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  View
} from 'react-native';
import { Block, Checkbox, Text, theme } from 'galio-framework';

import { Button, Input } from '../components';
import { Images, argonTheme } from '../constants';
import {Icon } from 'react-native-elements';
const { width, height } = Dimensions.get('screen');
class popUp extends React.Component {
  render() {
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
            <Text style={{
                    fontSize: 14,
                    color: "#2DCE89",
                    
                }}>Your Request Has Been Sent To Vehicle Owner</Text>
           
     
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior='padding'
                    enabled
                  >
                   
                    <Block middle>
                      <Button
                        color='primary'
                        style={styles.createButton}
                        //onPress={() => navigation.navigate('CreditCardInput')} // yha py isy pain ho ri hy :/
                        onPress={() => navigation.navigate('CCFieldValidator')} 
                      >
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          Add Payment
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

export default popUp;

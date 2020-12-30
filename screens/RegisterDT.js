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
} from 'react-native';
import { Block, Checkbox, Text, theme } from 'galio-framework';
import { TouchableOpacity } from 'react-native';
import { Button, Icon, Input } from '../components';
import { Images, argonTheme } from '../constants';

const { width, height } = Dimensions.get('screen');

class RegisterDT extends React.Component {
  render() {
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
                <Block
                  width={width * 0.8}
                  style={{ paddingHorizontal: theme.SIZES.BASE }}
                >
                  <Input
                    right
                    placeholder='Driving license'
                    iconContent={<Block />}
                  />
                </Block>
                <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                  <Input
                    right
                    placeholder='Places You Know'
                    iconContent={<Block />}
                  />
                </Block>
                <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                  <Input
                    right
                    placeholder='Languages You Know'
                    iconContent={<Block />}
                  />
                </Block>
                <Block middle style={{ marginBottom: 8 }}>
                  <Button
                    //color='primary'
                    style={styles.createButton}
                    // onPress={createoneButtonAlert}
                  >
                    <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                      REGISTER
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

export default RegisterDT;

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';
import React from 'react';
import { Component } from 'react';
import { Header, Switch, Button } from '../components';
import { Block, theme } from 'galio-framework';
import PropTypes from 'prop-types';
import { Images, argonTheme } from '../constants';

const { width, height } = Dimensions.get('screen');
class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.articles}
      >
        <Block style={{ marginBottom: theme.SIZES.BASE }}>
          <View
            style={{
              // position: 'absolute',
              // left: 0,
              //right: 0,
              //bottom: 0,
              // justifyContent: 'center',
              // marginBottom: 20,
              //alignItems: 'center',
              marginBottom: theme.SIZES.BASE,
              backgroundColor: theme.COLORS.WHITE,
              marginVertical: theme.SIZES.BASE,
              borderWidth: 0,
              minHeight: 114,
              marginBottom: 16,
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('RentACar')}
            >
              <View
                style={{
                  borderRadius: 3,
                  elevation: 1,
                  overflow: 'hidden',
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  marginRight: theme.SIZES.BASE,
                  marginLeft: theme.SIZES.BASE,
                  marginBottom: theme.SIZES.BASE,
                }}
              >
                <Image
                  style={{
                    height: 122,
                    width: 'auto',
                  }}
                  resizeMode='cover'
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80https://images.unsplash.com/photo-1506671753197-8d137cc5d53c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=370&q=80',
                  }}
                />

                <Block
                  flex
                  space='between'
                  style={{ padding: theme.SIZES.BASE / 2 }}
                >
                  <Text
                    size={14}
                    style={{ flex: 1, flexWrap: 'wrap', paddingBottom: 6 }}
                  >
                    Rent A Vehicle
                  </Text>
                </Block>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('HireDT')}
            >
              <View
                style={{
                  borderRadius: 3,
                  elevation: 1,
                  overflow: 'hidden',
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  marginRight: theme.SIZES.BASE,
                  marginLeft: theme.SIZES.BASE,
                  marginBottom: theme.SIZES.BASE,
                }}
              >
                <Image
                  style={{
                    height: 122,
                    width: 'auto',
                  }}
                  resizeMode='cover'
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                  }}
                />

                <Block
                  flex
                  space='between'
                  style={{ padding: theme.SIZES.BASE / 2 }}
                >
                  <Text
                    size={14}
                    style={{ flex: 1, flexWrap: 'wrap', paddingBottom: 6 }}
                  >
                    Hire A Driver/Tourist Guide
                  </Text>
                </Block>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('TripStack')}
            >
              <View
                style={{
                  borderRadius: 3,
                  elevation: 1,
                  overflow: 'hidden',
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  marginRight: theme.SIZES.BASE,
                  marginLeft: theme.SIZES.BASE,
                  marginBottom: theme.SIZES.BASE,
                }}
              >
                <Image
                  style={{
                    height: 122,
                    width: 'auto',
                  }}
                  resizeMode='cover'
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=487&q=80',
                  }}
                />

                <Block
                  flex
                  space='between'
                  style={{ padding: theme.SIZES.BASE / 2 }}
                >
                  <Text
                    size={14}
                    style={{ flex: 1, flexWrap: 'wrap', paddingBottom: 6 }}
                  >
                    Plan A Trip
                  </Text>
                </Block>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Block>
      </ScrollView>
    );
  }
}

export default Home;

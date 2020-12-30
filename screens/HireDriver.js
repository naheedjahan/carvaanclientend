import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';
import React from 'react';
import { Component } from 'react';
import { Header, Switch, Button } from '../components';
import { Block, theme } from 'galio-framework';
import PropTypes from 'prop-types';
import { Images, argonTheme } from '../constants';

const { width, height } = Dimensions.get('screen');

class HireDriver extends Component {
  state = {
    'switch-1': true,
    'switch-2': false,
  };

  toggleSwitch = (switchId) =>
    this.setState({ [switchId]: !this.state[switchId] });
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground
        source={Images.Background}
        style={{ width, height, zIndex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          //contentContainerStyle={styles.articles}
        >
          <Card
            title='DRIVER'
            style={{
              backgroundColor: theme.COLORS.WHITE,
              marginVertical: theme.SIZES.BASE,
              borderWidth: 0,
              minHeight: 114,
              marginTop: 70,
              marginBottom: 16,
            }}
          >
            {users.map((u, i) => {
              return (
                <View
                  key={i}
                  style={{
                    // position: 'absolute',
                    // left: 0,
                    //right: 0,
                    //bottom: 0,
                    // justifyContent: 'center',
                    // marginBottom: 20,
                    //alignItems: 'center',
                    backgroundColor: theme.COLORS.WHITE,
                    marginVertical: theme.SIZES.BASE,
                    borderWidth: 0,
                    minHeight: 114,
                    marginBottom: 16,
                  }}
                >
                  <View
                    style={{
                      borderRadius: 3,
                      elevation: 1,
                      overflow: 'hidden',
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  >
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: 7,
                      }}
                    >
                      <Image
                        source={{ uri: u.avatar }}
                        //borderRadius style will help us make the Round Shape Image
                        style={{
                          width: 200,
                          height: 200,
                          borderRadius: 200 / 2,
                        }}
                      />
                    </View>

                    <Block
                      flex
                      space='between'
                      style={{ padding: theme.SIZES.BASE / 2 }}
                    >
                      <Text
                        size={14}
                        style={{ flex: 1, flexWrap: 'wrap', paddingBottom: 6 }}
                      >
                        {u.name}
                      </Text>
                      <Text
                        size={14}
                        style={{ flex: 1, flexWrap: 'wrap', paddingBottom: 6 }}
                      >
                        Hiring charges per day: {u.Fair}
                      </Text>
                    </Block>
                    <Block style={{ padding: theme.SIZES.BASE / 2 }}>
                      <Block
                        row
                        middle
                        space='between'
                        style={{ marginBottom: theme.SIZES.BASE }}
                      >
                        <Text size={14}>Availability</Text>
                        <Switch
                          value={this.state['switch-1']}
                          onValueChange={() => this.toggleSwitch('switch-1')}
                        />
                      </Block>
                    </Block>
                    <Button
                      onPress={() => navigation.navigate('SpProfile')}
                      color='primary' //icon={<Icon name='code' color='#ffffff' />}
                      buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                      }}
                    >
                      View Profile
                    </Button>
                  </View>
                </View>
              );
            })}
          </Card>
        </ScrollView>
      </ImageBackground>
    );
  }
}
const users = [
  {
    name: 'Zahid But',
    Fair: '3000',
    avatar:
      'https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  },
  {
    name: 'Ahmed Khan',
    Fair: '6000',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Yaqoob Khan',
    Fair: '5000',
    avatar:
      'https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  },
];

export default HireDriver;

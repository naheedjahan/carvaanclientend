import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import { Icon } from 'react-native-elements';
import argonTheme from '../constants/Theme';

class DrawerItemCarOwner extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case 'Home':
        return (
          <Icon
            name='home'
            type='font-awesome'
            size={20}
            color={focused ? 'white' : argonTheme.COLORS.PRIMARY}
          />
        );
      case 'sign Out':
        return (
          <Icon
            name='sign-out'
            type='font-awesome'
            size={20}
            color={focused ? 'white' : argonTheme.COLORS.PRIMARY}
          />
        );
      case 'My Bookings':
        return (
          <Icon
            name='book'
            type='font-awesome'
            size={18}
            color={focused ? 'white' : argonTheme.COLORS.ERROR}
          />
        );
      case 'Current Booking':
        return (
          <Icon
            name='bookmark-check'
            type='material-community'
            size={23}
            color={focused ? 'white' : argonTheme.COLORS.PRIMARY}
          />
        );
      case 'Profile':
        return (
          <Icon
            name='account'
            type='material-community'
            size={20}
            color={focused ? 'white' : argonTheme.COLORS.WARNING}
          />
        );
      case 'Request':
        return (
          <Icon
            name='bookmark-outline'
            type='material-community'
            size={20}
            color={focused ? 'white' : argonTheme.COLORS.INFO}
          />
        );

      default:
        return null;
    }
  };

  render() {
    const { focused, title, navigation } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null,
    ];

    return (
      <TouchableOpacity
        style={{ height: 60 }}
        onPress={() =>
          title == 'Getting Started'
            ? Linking.openURL(
                'https://demos.creative-tim.com/argon-pro-react-native/docs/'
              ).catch((err) => console.error('An error occurred', err))
            : navigation.navigate(title)
        }
      >
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              size={15}
              bold={focused ? true : false}
              color={focused ? 'white' : 'rgba(0,0,0,0.5)'}
            >
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  activeStyle: {
    backgroundColor: argonTheme.COLORS.ACTIVE,
    borderRadius: 4,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
});

export default DrawerItemCarOwner;

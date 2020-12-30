import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

export default class SignOut extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.removeToken();
  }
  removeToken = async () => {
    // const token = await AsyncStorage.getItem('Ownertoken');
    await AsyncStorage.removeItem('Ownertoken').then(() => {
      this.props.navigation.navigate('loginSp');
    });
  };
  render() {
    return null;
  }
}

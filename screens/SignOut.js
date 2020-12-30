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
    await AsyncStorage.removeItem('Customertoken').then(() => {
      this.props.navigation.navigate('login');
    });
  };
  render() {
    return null;
  }
}

import React, { Component, useRef } from 'react';

import {
  Text,
  View,
  ScrollView,
  FlatList,
  Modal,
  StyleSheet,
  Button,
  Alert,
  PanResponder,
  Share,
  AsyncStorage,
} from 'react-native';
import { Card, Icon, Rating, Input } from 'react-native-elements';

class EndVehicleBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      author: '',
      comment: '',
      showModal: false,
    };
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  endBooking = async () => {
    //-----------------------------------------------------------
    const vehicleId = this.props.route.params.vehicleId;
    console.log(vehicleId);

    const token = await AsyncStorage.getItem('Customertoken');
    fetch('http://192.168.1.141:5000/api/customer/end/' + vehicleId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          if (!data.errors) {
            console.log('booking start');
            console.log(data);
            // this.props.navigation.navigate('login');
          } else {
            data.errors.forEach((error) => alert(error.msg));
          }
        } catch (e) {
          console.log('error hai', e);
        }
      });
    this.toggleModal();
  };
  handleComments = async (id) => {
    //-----------------------------------------------------------
    console.log('tri');
    const token = await AsyncStorage.getItem('Customertoken');
    fetch('http://192.168.1.141:5000/api/customer/rank/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
      body: JSON.stringify({
        rank: this.state.rating,
        feedback: this.state.comment,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          if (!data.errors) {
            console.log('tri');
            console.log(data);
            // this.props.navigation.navigate('login');
          } else {
            data.errors.forEach((error) => alert(error.msg));
          }
        } catch (e) {
          console.log('error hai', e);
        }
      });
    this.toggleModal();
  };

  render() {
    const bookingId = this.props.route.params.bookingId;
    console.log(bookingId);
    return (
      <ScrollView>
        <Card>
          <Text style={{ margin: 10 }}>End Booking</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button onPress={() => this.endBooking()} title='End Booking' />
          </View>
        </Card>
        <Modal
          animation={'slide'}
          transparent={false}
          visible={this.state.showModal}
          onDismiss={() => this.toggleModal()}
          onRequestClose={() => this.toggleModal}
        >
          <View style={styles.modal}>
            <View>
              <Rating
                showRating
                type='star'
                fractions={0}
                startingValue={0}
                imageSize={40}
                onFinishRating={(value) => this.setState({ rating: value })}
              />
            </View>

            <View>
              <Input
                placeholder='Comment'
                leftIcon={
                  <Icon name='comment-o' type='font-awesome' size={24} />
                }
                onChangeText={(value) => this.setState({ comment: value })}
              />
            </View>
            <View>
              <Button
                color='#512DA8'
                title='SUBMIT'
                onPress={() => this.handleComments(bookingId)}
              />
            </View>
            <View>
              <Button
                onPress={() => this.toggleModal()}
                color='#989898'
                title='CLOSE'
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  formRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 28,
  },
  formLabel: {
    fontSize: 18,
    flex: 2,
  },
  formItem: {
    flex: 1,
  },
  modal: {
    justifyContent: 'center',
    margin: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#512DA8',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    margin: 10,
  },
});

export default EndVehicleBooking;

import React, { Component } from 'react';

import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PubNub from 'pubnub';
import MapView from 'react-native-maps';
import carImage from '../assets/imgs/car.png';
import isEqual from 'lodash/isEqual';

export default class NavigationMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevPos: null,
      curPos: { latitude: 33.5953314, longitude: 73.0340103 },
      curAng: 45,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    this.pubnub = new PubNub({
      publishKey: 'pub-c-1e7bf1f5-7bf7-4339-a8b1-9ef11c29723a',
      subscribeKey: 'sub-c-099c491e-32f6-11eb-9713-12bae088af96',
    });
    this.changePosition = this.changePosition.bind(this);
    this.getRotation = this.getRotation.bind(this);
    this.updateMap = this.updateMap.bind(this);
  }

  changePosition(latOffset, lonOffset) {
    const latitude = this.state.curPos.latitude + latOffset;
    const longitude = this.state.curPos.longitude + lonOffset;
    this.setState(
      {
        prevPos: this.state.curPos,
        curPos: { latitude, longitude },
      },
      () => this.updateMap()
    );
  }

  getRotation(prevPos, curPos) {
    if (!prevPos) {
      return 0;
    }
    const xDiff = curPos.latitude - prevPos.latitude;
    const yDiff = curPos.longitude - prevPos.longitude;
    return (Math.atan2(yDiff, xDiff) * 180.0) / Math.PI;
  }

  updateMap() {
    const { curPos, prevPos, curAng } = this.state;
    const curRot = this.getRotation(prevPos, curPos);
    this.map.animateCamera({ heading: curRot, center: curPos, pitch: curAng });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!isEqual(prevState.prevPos, this.state.prevPos)) {
      this.updateMap();
    }
  }
  componentDidMount() {
    this.subscribeToPubNub();
    this.updateMap();
  }
  //c
  componentWillUnmount() {
    if (this.pubnub) {
      this.pubnub.unsubscribe({
        channels: ['location'],
      });
      var existingListener = {
        message: function () {},
      };

      this.pubnub.removeListener(existingListener);
    }
  }
  subscribeToPubNub = () => {
    this.pubnub.addListener({
      message: (msg) => {
        const { latitude, longitude } = msg.message;
        const newCoordinate = { latitude, longitude };
        console.log(newCoordinate);
        console.log(msg);
        if (Platform.OS === 'android') {
          //   if (this.marker) {
          //     //this.marker.coordinate.timing(newCoordinate).start();
          //    this.marker._component.animateMarkerToCoordinate(newCoordinate, 500);
          //   }
          // } else {
          //   coordinate.timing(newCoordinate).start();
          // }

          this.setState(
            {
              curPos: { latitude, longitude },
            },
            () => this.updateMap()
          );
        }
      },
    });

    this.pubnub.subscribe({
      channels: ['location'],
      withPresence: true,
    });
  };

  render() {
    return (
      <View style={styles.flex}>
        <MapView
          ref={(el) => (this.map = el)}
          style={styles.flex}
          minZoomLevel={15}
          initialRegion={{
            ...this.state.curPos,
            latitudeDelta: this.state.latitudeDelta,
            longitudeDelta: this.state.longitudeDelta,
          }}
        >
          <MapView.Marker
            coordinate={this.state.curPos}
            anchor={{ x: 0.5, y: 0.5 }}
            image={carImage}
          />
        </MapView>
        <View style={styles.buttonContainerUpDown}>
          <TouchableOpacity
            style={[styles.button, styles.up]}
            onPress={() => this.changePosition(0.0001, 0)}
          >
            <Text>+ Lat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.down]}
            onPress={() => this.changePosition(-0.0001, 0)}
          >
            <Text>- Lat</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainerLeftRight}>
          <TouchableOpacity
            style={[styles.button, styles.left]}
            onPress={() => this.changePosition(0, -0.0001)}
          >
            <Text>- Lon</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.right]}
            onPress={() => this.changePosition(0, 0.0001)}
          >
            <Text>+ Lon</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    width: '100%',
  },
  buttonContainerUpDown: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainerLeftRight: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgba(100,100,100,0.2)',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 50,
    width: 50,
  },
  up: {
    alignSelf: 'flex-start',
  },
  down: {
    alignSelf: 'flex-end',
  },
  left: {
    alignSelf: 'flex-start',
  },
  right: {
    alignSelf: 'flex-end',
  },
});

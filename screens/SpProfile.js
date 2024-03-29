import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
} from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import { Button } from '../components';
import { Images, argonTheme } from '../constants';
import { HeaderHeight } from '../constants/utils';

const { width, height } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;

class SpProfile extends React.Component {
  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.Background}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '25%' }}
            >
              <Block flex style={styles.profileCard}>
                <Block middle style={styles.avatarContainer}>
                  <Image
                    source={{
                      uri:
                        'https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                    }}
                    style={styles.avatar}
                  />
                </Block>
                <Block style={styles.info}>
                  <Block
                    middle
                    row
                    space='evenly'
                    style={{ marginTop: 20, paddingBottom: 24 }}
                  >
                    <Button
                      color='primary'
                      small
                      //style={{ backgroundColor: argonTheme.COLORS.INFO }}
                    >
                      CONNECT
                    </Button>
                    <Button
                      small
                      color='primary'
                      // style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
                    >
                      MESSAGE
                    </Button>
                  </Block>
                  <Block row space='between'>
                    <Block middle>
                      <Text
                        bold
                        size={18}
                        color='#525F7F'
                        style={{ marginBottom: 4 }}
                      >
                        2K
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>
                        Orders
                      </Text>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color='#525F7F'
                        size={18}
                        style={{ marginBottom: 4 }}
                      >
                        10
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>
                        Photos
                      </Text>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color='#525F7F'
                        size={18}
                        style={{ marginBottom: 4 }}
                      >
                        89
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>
                        Comments
                      </Text>
                    </Block>
                  </Block>
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={28} color='#32325D'>
                      Zahid But, 27
                    </Text>
                    <Text size={16} color='#32325D' style={{ marginTop: 10 }}>
                      Islamabad , Pakistan
                    </Text>
                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Block middle>
                    <Text
                      size={16}
                      color='#525F7F'
                      style={{ textAlign: 'center' }}
                    >
                      We can give here some info about zahid
                    </Text>
                    <Button
                      // color='Secondary'
                      style={styles.createButton}
                      color='primary'
                    >
                      HIRE
                    </Button>
                  </Block>
                </Block>
              </Block>
            </ScrollView>
          </ImageBackground>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1,
  },
  profileContainer: {
    width: 700,
    height: height,
    padding: 0,
    zIndex: 1,
  },
  profileBackground: {
    width: width,
    height: height / 2,
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  info: {
    paddingHorizontal: 40,
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -80,
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0,
  },
  nameInfo: {
    marginTop: 35,
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
    marginBottom: 100,
  },
  divider: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure,
  },
});

export default SpProfile;

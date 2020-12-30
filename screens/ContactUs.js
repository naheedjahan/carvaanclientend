import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  View,
  TextInput,
  Linking,
} from 'react-native';
import { Block, Text, Button as GaButton, theme } from 'galio-framework';
import { Button, Icon, Input } from '../components';

import { Header } from '../components';
import * as MailComposer from 'expo-mail-composer';
import call from 'react-native-phone-call';
import { Images, argonTheme } from '../constants';
import { HeaderHeight } from '../constants/utils';

const { width, height } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;

class ContactUs extends React.Component {
  sendMail() {
    MailComposer.composeAsync({
      recipients: ['naheedjahan96@gmail.com'],
      subject: 'Enquiry',
      body: 'To whom it may concern:',
    });
  }
  call = () => {
    //handler to make a call
    const args = {
      number: '03225053579',
      prompt: false,
    };
    call(args).catch(console.error);
  };
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
                <Block flex={0.17}>
                  <Text color='#8898AA' size={16}>
                    Contact Us
                  </Text>
                  <Block style={styles.divider} />
                  <Block
                    style={{
                      width: '60%',
                      borderWidth: 1,
                      borderColor: '#E9ECEF',
                      marginTop: 12,
                    }}
                  />
                </Block>

                <Block flex style={styles.group}>
                  <Text bold size={16} style={styles.title}>
                    Follow Us to stay connected
                  </Text>
                  <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                    <Block row center space='between'>
                      <Block flex middle right>
                        <GaButton
                          round
                          onlyIcon
                          shadowless
                          icon='facebook'
                          iconFamily='Font-Awesome'
                          iconColor={theme.COLORS.WHITE}
                          iconSize={theme.SIZES.BASE * 1.625}
                          color={theme.COLORS.FACEBOOK}
                          style={[styles.social, styles.shadow]}
                          onPress={() => {
                            Linking.openURL(
                              'https://www.facebook.com/naheed.jahan.3557'
                            );
                          }}
                        />
                      </Block>
                      <Block flex middle center>
                        <GaButton
                          round
                          onlyIcon
                          shadowless
                          icon='twitter'
                          iconFamily='Font-Awesome'
                          iconColor={theme.COLORS.WHITE}
                          iconSize={theme.SIZES.BASE * 1.625}
                          color={theme.COLORS.TWITTER}
                          style={[styles.social, styles.shadow]}
                          onPress={() => {
                            Linking.openURL('https://twitter.com/naheedjahan1');
                          }}
                        />
                      </Block>
                      <Block flex middle left>
                        <GaButton
                          round
                          onlyIcon
                          shadowless
                          icon='instagram'
                          iconFamily='Font-Awesome'
                          iconColor={theme.COLORS.WHITE}
                          iconSize={theme.SIZES.BASE * 1.625}
                          color={theme.COLORS.INSTAGRAM}
                          style={[styles.social, styles.shadow]}
                          onPress={() => {
                            Linking.openURL('https://twitter.com/naheedjahan1');
                          }}
                        />
                      </Block>
                    </Block>
                  </Block>
                </Block>

                <Block middle style={{ marginTop: 50 }}>
                  <Button
                    // color={argonTheme.COLORS.PRIMARY}
                    color='primary'
                    style={styles.createButton}
                    onPress={this.call} // yha py isy pain ho ri hy :/
                  >
                    <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                      Live Call
                    </Text>
                  </Button>
                  <Button
                    // color={argonTheme.COLORS.PRIMARY}
                    color='primary'
                    style={styles.createButton}
                    onPress={this.sendMail} // yha py isy pain ho ri hy :/
                  >
                    <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                      Send Us An Email
                    </Text>
                  </Button>
                </Block>

                {/* <Block center>
                        <Button style={styles.button}>Submit</Button>
                      </Block> */}
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
    width: width,
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
    //marginBottom: 200,
  },
  divider: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#E9ECEF',
    marginTop: 12,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure,
  },
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 44,
    color: argonTheme.COLORS.HEADER,
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
  },
});

export default ContactUs;

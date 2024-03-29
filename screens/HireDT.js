// import React from 'react';
// import {
//   StyleSheet,
//   ImageBackground,
//   Dimensions,
//   StatusBar,
//   KeyboardAvoidingView,
//   View,
//   Image,
//   ScrollView,
// } from 'react-native';
// import { Block, Checkbox, Text, theme } from 'galio-framework';

// import { Button, Icon, Input, Header } from '../components';
// import { Images, argonTheme } from '../constants';

// const { width, height } = Dimensions.get('screen');
// class HireDT extends React.Component {
//   render() {
//     const { navigation } = this.props;
//     return (
//       <Block flex middle>
//         <StatusBar hidden />

//         <ImageBackground
//           source={Images.Background}
//           style={{ width, height, zIndex: 1 }}
//         >
//           <ScrollView
//             showsVerticalScrollIndicator={false}
//             style={{ width, marginTop: '25%' }}
//           >
//             <Block flex style={styles.profileCard}>
//               <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
//                 <Block style={styles.avatarContainer}>
//                   <Image
//                     source={{
//                       uri:
//                         'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
//                     }}
//                     //borderRadius style will help us make the Round Shape Image
//                     style={styles.avatar}
//                   />
//                 </Block>
//                 <Block center style={{ marginTop: 70 }}>
//                   <Button
//                     onPress={() => navigation.navigate('HireDriver')}
//                     color='primary'
//                     // textStyle={{ color: 'black', fontSize: 12, fontWeight: '700' }}
//                     style={styles.button}
//                   >
//                     Hire Driver
//                   </Button>
//                 </Block>
//                 <Block center style={{ marginTop: 30 }}>
//                   <Button
//                     onPress={() => navigation.navigate('HireTouristGuide')}
//                     // color='secondary'
//                     color='primary'
//                     //textStyle={{ color: 'black', fontSize: 12, fontWeight: '700' }}
//                     style={styles.button}
//                   >
//                     Hire Tourist Guide
//                   </Button>
//                 </Block>
//                 {/* <Block center style={{ marginTop: 30, marginBottom: 70 }}>
//                   <Button
//                     onPress={() => navigation.navigate('HireBothDT')}
//                     //color='secondary'
//                     color='primary'
//                     // textStyle={{ color: 'black', fontSize: 12, fontWeight: '700' }}
//                     style={styles.button}
//                   >
//                     Hire Both
//                   </Button>
//                 </Block> */}
//               </Block>
//             </Block>
//           </ScrollView>
//         </ImageBackground>
//       </Block>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   registerContainer: {
//     width: width * 0.9,
//     height: height * 0.78,
//     backgroundColor: '#F4F5F7',
//     borderRadius: 4,
//     shadowColor: argonTheme.COLORS.BLACK,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowRadius: 8,
//     shadowOpacity: 0.1,
//     elevation: 1,
//     overflow: 'hidden',
//   },
//   profileCard: {
//     // position: "relative",
//     padding: theme.SIZES.BASE,
//     marginHorizontal: theme.SIZES.BASE,
//     marginTop: 70,
//     borderTopLeftRadius: 6,
//     borderTopRightRadius: 6,
//     backgroundColor: theme.COLORS.WHITE,
//     shadowColor: 'black',
//     shadowOffset: { width: 0, height: 0 },
//     shadowRadius: 8,
//     shadowOpacity: 0.2,
//     zIndex: 2,
//     //marginBottom: 200,
//   },
//   socialConnect: {
//     backgroundColor: argonTheme.COLORS.WHITE,
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     borderColor: '#8898AA',
//   },
//   socialButtons: {
//     width: 120,
//     height: 40,
//     backgroundColor: '#fff',
//     shadowColor: argonTheme.COLORS.BLACK,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowRadius: 8,
//     shadowOpacity: 0.1,
//     elevation: 1,
//   },
//   socialTextButtons: {
//     color: argonTheme.COLORS.PRIMARY,
//     fontWeight: '800',
//     fontSize: 14,
//   },
//   inputIcons: {
//     marginRight: 12,
//   },
//   passwordCheck: {
//     paddingLeft: 15,
//     paddingTop: 13,
//     paddingBottom: 30,
//   },
//   createButton: {
//     width: width * 0.5,
//     marginTop: 25,
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginTop: -100,
//   },
//   avatar: {
//     width: 200,
//     height: 200,
//     borderRadius: 62,
//     borderWidth: 0,
//   },
// });

// export default HireDT;

import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
  Platform,
  Picker,
  AsyncStorage,
} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { Button, Select, Icon, Input, Header, Switch } from '../components/';
//import { Button } from "../components";
import { Images, argonTheme } from '../constants';
import { HeaderHeight } from '../constants/utils';
const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;
import { ButtonGroup } from 'react-native-elements';

import { baseUrl } from '../baseUrl/baseUrl';
class HireDT extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <Block style={{ marginBottom: theme.SIZES.BASE }}>
              <Header
                transparent
                white
                title='Select'
                navigation={this.props.navigation}
              />
            </Block>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '-5%' }}
            >
              <Block flex style={styles.profileCard}>
                <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                  <Block>
                    <Image
                      source={{
                        uri:
                          'https://img.freepik.com/free-vector/taxi-driver-yellow-cab_81534-1299.jpg?size=338&ext=jpg',
                      }}
                      //borderRadius style will help us make the Round Shape Image
                      style={styles.avatar}
                    />
                  </Block>
                  <Block center style={{ marginTop: 70 }}>
                    <Button
                      onPress={() => navigation.navigate('HireDriver')}
                      color='primary'
                      // textStyle={{ color: 'black', fontSize: 12, fontWeight: '700' }}
                      style={styles.button}
                    >
                      Hire Driver
                    </Button>
                  </Block>
                  <Block center style={{ marginTop: 30 }}>
                    <Button
                      onPress={() => navigation.navigate('HireTouristGuide')}
                      // color='secondary'
                      color='primary'
                      //textStyle={{ color: 'black', fontSize: 12, fontWeight: '700' }}
                      style={styles.button}
                    >
                      Hire Tourist Guide
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
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
    //  marginTop:100,
  },
  profileBackground: {
    width: width,
    height: height / 2,
  },
  nameInfo: {
    marginTop: 10,
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 100,
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
    width: 270,
    height: 270,
    borderWidth: 5,
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

export default HireDT;

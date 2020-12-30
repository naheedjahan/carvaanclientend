import React from 'react';
import { useSafeArea } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import Images from '../constants/Images';
import { DrawerCar as DrawerCustomItem } from '../components';

function CustomDrawerContentOwner({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  const insets = useSafeArea();
  const screens = [
    'Home',
    'Profile',
    'My Bookings', // adding screen variable here
    'Request',
    'option', // edit profile
    'sign Out',
  ];
  return (
    <Block
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <Block flex={0.06} style={styles.header}>
        {/*<Image styles={styles.logo} source={Images.Logo} />*/}
        <Text bold size={28} color='#32325D'>
          CarVaan
        </Text>
      </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index ? true : false}
              />
            );
          })}
          {/* <Block
            flex
            style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}
          >
            <Block
              style={{
                borderColor: 'rgba(0,0,0,0.2)',
                width: '100%',
                borderWidth: StyleSheet.hairlineWidth,
              }}
            />
            <Text
              color='#8898AA'
              style={{ marginTop: 16, marginLeft: 8 }}
              onPress={() => navigation.navigate('Sp')}
            >
              Become a service provider
            </Text>
          </Block> */}
          <DrawerCustomItem  />
        </ScrollView>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: 'center',
  },
});

export default CustomDrawerContentOwner;

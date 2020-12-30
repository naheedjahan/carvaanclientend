import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import { Block, theme } from 'galio-framework';
import { Button } from '../components';
import { Card, Header, Tabs } from '../components';
import { tabs } from '../constants';

const { width } = Dimensions.get('screen');

import argonTheme from '../constants/Theme';

import Images from '../constants/Images';

class Sp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabas: tabs,
    };
  }
  _itemChoose(item) {
    alert(item.title);
  }
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        //contentContainerStyle={styles.articles}
      >
        <Text style={{ marginTop: 100 }}>some</Text>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Sp;

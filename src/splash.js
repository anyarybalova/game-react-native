'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Navigator,
  TouchableHighlight,
  Button
} from 'react-native';


class SplashPage extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      this.props.navigator.push({
        id: 'Menu',
        sceneConfig: Navigator.SceneConfigs.FadeAndroid
    });
    }, 1000);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 34,}}>Game</Text>
      </View>
    );
  }
}

module.exports = SplashPage;
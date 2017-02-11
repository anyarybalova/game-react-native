import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  Button
} from 'react-native';

import Game from './game';
import Menu from './menu';
import Credits from './credits';
import Instructions from './instructions';
import SplashPage from './splash';
import Finish from './finish';

export default class test03 extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{id: 'SplashPage'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }
  
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'SplashPage') {
      return (
        <SplashPage navigator={navigator} />
      );
    }
    if (routeId === 'Credits') {
      return (
        <Credits navigator={navigator} />
      );
    }
    if (routeId === 'Game') {
      return (
        <Game navigator={navigator} />
      );
    }
    if (routeId === 'Finish') {
      const status = route.status;
      return (
        <Finish navigator={navigator} status={status} />
      );
    }
    if (routeId === 'Menu') {
      return (
        <Menu navigator={navigator} />
      );
    }
    if (routeId === 'Instructions') {
      return (
        <Instructions navigator={navigator} />
      );
    }
    return this.noRoute(navigator);

  }

  gotoNext() {
    this.props.navigator.push({
      id: 'Menu',
      sceneConfig: Navigator.SceneConfigs.FloatFromLeft,
    });
  }

  noRoute(navigator) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => this.gotoNext.bind(this)}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>  404 - Page not found</Text>
        </TouchableOpacity>
      </View>
    );
  }      
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  bottons : {
  }
});

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
} from 'react-native';

import { 
  AdMobBanner
} from 'react-native-admob'

import Game from './game';
import Menu from './menu';
import Credits from './credits';
import Instructions from './instructions';
import SplashPage from './splash';
import Finish from './finish';
import Levels from './levels';



const CntMod = require('./const');
const CON = (new CntMod()).CONST;

export default class test03 extends Component {

  bannerError() {
    console.log('banner error');
  }
  render() {
    return (
      <View style={{flex:1, backgroundColor: 'white'}}>
        <View style={styles.ads}>
          <AdMobBanner
            bannerSize="banner"
            adUnitID="ca-app-pub-6746515493882427/7348826390"
            testDeviceID="EMULATOR"
            didFailToReceiveAdWithError={this.bannerError.bind(this)} />
        </View>
        <Navigator
          style={styles.content}
          initialRoute={{id: 'SplashPage'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
      </View>
    );
  }
  
  renderScene(route, navigator) {
    var routeId = route.id;
    switch(route.id) {
      case 'SplashPage':
        component = <SplashPage navigator={navigator} />;
        break;
      case 'Menu':
        component = <Menu navigator={navigator} />;
        break;
      case 'Credits':
        component = <Credits navigator={navigator} />;
        break;
      case 'Levels':
        component = <Levels navigator={navigator} />;
        break;
      case 'Game':
        component = <Game navigator={navigator} {...route.passProps}/>
        break;
      case 'Instructions':
        component = <Instructions navigator={navigator} />
        break;
      case 'Finish':
        component = <Finish navigator={navigator} {...route.passProps} />
        break;
      default:
        component = this.noRoute(navigator);
    }
    return component;
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
        <TouchableOpacity onPress={() => this.gotoNext.bind(this)}>
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
  content: {
    width: CON.WIDTH,
    height: CON.HEIGHT - CON.ADS_HEIGHT*1.5,
    left: 0,
    position: 'absolute',
    zIndex: 1,
    top: CON.ADS_HEIGHT
  },
  ads: {
      backgroundColor: 'black',
      width: CON.ADS_WIDTH,
      height: CON.ADS_HEIGHT,
      left: (CON.WIDTH - CON.ADS_WIDTH)/2,
      position: 'absolute',
      zIndex: 1,
      top: 0
  }
});

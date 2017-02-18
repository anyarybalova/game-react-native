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
import Levels from './levels';


const CntMod = require('./const');
const CON = (new CntMod()).CONST;

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

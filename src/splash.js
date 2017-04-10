'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';


const CntMod = require('./const');
const CON = (new CntMod()).CONST;

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
      <View style={styles.container}>
        <View style={styles.logoBox}>
          <Image source={require('./images/logo_text1.png')} style={styles.text1}/>
          <Image source={require('./images/barco.png')} style={styles.logo}/>  
          <Image source={require('./images/logo_text2.png')} style={styles.text2}/>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#045FB4',
  },
  logo :{
    zIndex: 5,
    width: CON.CELL*3,
    height: CON.CELL*3.5
  },
  text1: {
    zIndex: 10,
    top:  CON.CELL/1.5,
    width: CON.CELL*3,
    height: CON.CELL*1.5
  },
  text2: {
    zIndex: 10,
    marginTop: - CON.CELL/3,
    width: CON.CELL*3,
    height: CON.CELL
  }
});

module.exports = SplashPage;
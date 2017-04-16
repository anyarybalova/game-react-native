'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';


const CntMod = require('./const');
const CON = (new CntMod()).CONST;
const commonSt = require('./styles/common');

class Environment extends Component {
  render() {
    return (
      <View style={{width: CON.WIDTH, height: CON.HEIGHT}}>
        <Image  
            source={require('./images/environment.png')} 
            style= {commonSt.envImage}/>
          
      </View>
    );
  }
}

module.exports = Environment;
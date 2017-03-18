'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing
} from 'react-native';


const CntMod = require('./const');
const CON = (new CntMod()).CONST;

class Time extends Component {
  constructor(props) {
    super(props);
    this.timeSpinValue = new Animated.Value(1);
    this.timeSpin();
  }

  timeSpin () {
    this.timeSpinValue.setValue(0);
    Animated.timing(
      this.timeSpinValue,
      {
        toValue: 1,
        easing: Easing.easeInOutQuint
      }
    ).start();
  }

  componentWillReceiveProps(nextProps){
    this.timeSpin();
  }
  
   getTimingStyle(spin, color) {
      return [
          styles.timing, {
            //backgroundColor: color,
              //opacity: this.timeValue
              //left: x,
              transform: [{rotate: spin}]  
          }];
  }

  getTimingIntStyle(spin) {
      return [
          styles.intCircle, {
              transform: [{rotate: spin}]  
          }];
  }

  render() {
      const spin = this.timeSpinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
      });

      const spinInverted = this.timeSpinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['180deg', '0deg']
      });
    return (
      <View style={styles.timeBox} >
        <Animated.Image source={require('./images/timeCircleExt.png')} style={this.getTimingStyle(spin)} >
        </Animated.Image>
        <Animated.Image source={require('./images/timeCircleInt.png')} 
            style={this.getTimingIntStyle(spinInverted)} >
        </Animated.Image>
        <Text style={styles.timeLeft}>{this.props.timeLeft}</Text>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  timeBox:{
    top: 0,
    left: 0,
    width: CON.CELL,
    height: CON.CELL,
    //backgroundColor: 'red'
  },
  timing: {
    width: CON.CELL,
    height: CON.CELL,
    top: 0,
    zIndex: 5,
    left: 0,
    resizeMode: 'contain'
  },
  intCircle: {
    position:'absolute',
    zIndex: 6,
    top: 0,
    left: 0,
    resizeMode: 'contain',
    width: CON.CELL,
    height: CON.CELL
  },
  timeLeft: {
    position: 'absolute',
    zIndex: 5,
    top: CON.CELL/3.33,
    left: CON.CELL/4,
    color: 'white',
    fontSize: CON.CELL/3,
    width: CON.CELL/2,
    fontFamily: 'OCRAExtendedRegular',
    textAlign: 'center'
  },
  time: {
    width: 25,
    height:25,
    position: 'absolute',
    top: CON.HEIGHT - CON.OFFSET_TOP*4 +  CON.CELL/4
  }
});

module.exports = Time;
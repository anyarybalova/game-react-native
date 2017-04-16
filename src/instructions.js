import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions,
  Navigator,
	TouchableHighlight
} from 'react-native';

const commonSt = require('./styles/common');
const EnvImage = require('./environment');
const CntMod = require('./const');
const CON = (new CntMod()).CONST;

class Instructions extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          />
    );
  }

	gotoMenu() {
    this.props.navigator.jumpBack({
      sceneConfig: Navigator.SceneConfigs.FloatFromRight,
    });
	}

  renderScene(route, navigator) {
    return (
      <View style={commonSt.container}>
            <EnvImage/>
            <View style={styles.texts}>
              <Text style={[commonSt.text, styles.textBigger]}>The main objective is to situate tiles by color in any cuadrant.</Text>
              <Image source={require('./images/instructions.png')} style={styles.logo} />            
              <Text style={[commonSt.text, styles.textBigger]}>In the hard level it must match with the color of the quadrant.</Text>
            </View>
            <TouchableHighlight onPress={() => this.gotoMenu()} underlayColor="transparent" style={commonSt.btnBack}>
              <Image source={require('./images/btn_back_sm.png')} style={commonSt.imageBack} />
          </TouchableHighlight>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  texts: {
    zIndex: 5,
		position: 'absolute',
		top: CON.CELL,
		left: CON.CELL/4,
    width: CON.WIDTH - CON.CELL/2, 
    padding: CON.CELL/2
  },
  textBigger: {
    fontSize: CON.CELL/4
  },
  logo :{
    zIndex: 10,
    resizeMode: 'center',
    marginTop: CON.CELL/5,
    marginBottom: CON.CELL/5,
    width: CON.CELL*3.2,
    height: CON.CELL*3.2
  }
});


module.exports = Instructions;


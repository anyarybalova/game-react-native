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
const CntMod = require('./const');
const CON = (new CntMod()).CONST;

class Credits extends Component {
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
            <Image source={require('./images/environment.png')} style={commonSt.envImage} />
            <View style={styles.texts}>
              <Text style={[commonSt.text, styles.green]}>Designed and created by:</Text>
              <Text style={[commonSt.text,styles.textSm]}>Anya Rybalova</Text>
              <Text style={[commonSt.text, styles.green]}>Your comments are welcome.</Text>
              <Text style={[commonSt.text, styles.green]}>Thank you for playing my game.</Text>
              <Text style={[commonSt.text,styles.textSm]}>anya.rybalova@gmail.com</Text>
            </View>
            <View style={styles.logoBox}>
              <Image source={require('./images/barco.png')} style={styles.logo}/>  
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
		top: CON.CELL*2,
		left: CON.CELL/4,
    width: CON.WIDTH - CON.CELL/2
  },
  textSm: {
    textAlign: 'center',
    marginBottom: CON.CELL/3
  },
  green: {
    textAlign: 'center',
    color: '#00FFFF',
    paddingBottom: CON.CELL/20,
    fontSize: CON.CELL/4.5
  },
  logoBox: {
    zIndex: 5,
		position: 'absolute',
		top: CON.CELL*4.2,
		left: CON.WIDTH/2 - CON.CELL*1.5,
    width: CON.CELL*3,
    height: CON.CELL*3.5,
    //backgroundColor: 'red',
  },
  logo :{
    zIndex: 10,
    resizeMode: 'center',
    width: CON.CELL*3,
    height: CON.CELL*3.5
  }
});


module.exports = Credits;


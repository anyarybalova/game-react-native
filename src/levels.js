import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Navigator,
  TouchableHighlight
} from 'react-native';


const CntMod = require('./const');
const CON = (new CntMod()).CONST;

const levels = {
    easy: 80 * 1000,
    normal: 50 * 1000,
    difficult: 40 * 1000
};

class Levels extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    
  }

 
gotoGame(timeValue) {
    
    this.props.navigator.push({
        id: 'Game',
        passProps: {
            totalTime: timeValue
        },
        sceneConfig: Navigator.SceneConfigs.FloatFromLeft,
    });
}

gotoMenu() {
    this.props.navigator.push({
        id: 'Menu',
        sceneConfig: Navigator.SceneConfigs.FloatFromLeft,
    });
}

render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          />
    );
  }
      
renderScene() {
    return (
        <View style={styles.container}>
            <View style={styles.bt}>
                <TouchableHighlight style={styles.buttons}
                    onPress={()=>{this.gotoGame(0)}}>
                    <Text style={{color: 'white'}}>Unlimited</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttons}
                    onPress={()=>{this.gotoGame(levels.easy)}}>
                    <Text style={{color: 'white'}}>Easy</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttons}
                    onPress={()=>{this.gotoGame(levels.normal)}}>
                    <Text style={{color: 'white'}}>Normal</Text>
                </TouchableHighlight>


                <TouchableHighlight style={styles.buttons}
                    onPress={()=>{this.gotoGame(levels.difficult)}}>
                    <Text style={{color: 'white'}}>Difficult</Text>
                </TouchableHighlight>


                <TouchableHighlight style={styles.buttons}
                    onPress={this.gotoMenu.bind(this)}>
                    <Text style={{color: 'white'}}>Back</Text>
                </TouchableHighlight>
            </View>
        </View>  
        );    
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    resizeMode: 'contain',
    width: CON.WIDTH,
    height: CON.HEIGHT,
    opacity: 0.1
  },
  buttons : {
    backgroundColor: '#246dd5', 
    padding: 10,
    margin: 15,
    width: 200
  }
});

module.exports = Levels;

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

export default class Manu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };
    
  }

 
gotoLevels() {
    this.props.navigator.push({
        id: 'Levels',
        sceneConfig: Navigator.SceneConfigs.FloatFromLeft,
    });
}


gotoInstructions() {
    this.props.navigator.push({
        id: 'Instructions',
        sceneConfig: Navigator.SceneConfigs.FloatFromLeft,
    });
}

gotoCredits() {
    this.props.navigator.push({
        id: 'Credits',
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

            <TouchableHighlight style={styles.buttons}
                onPress={this.gotoLevels.bind(this)}>
                <Text style={{color: 'white'}}>PLAY GAME</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttons}
                onPress={this.gotoCredits.bind(this)}>
                <Text style={{color: 'white'}}>CREDITS</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttons}
                onPress={this.gotoInstructions.bind(this)}>
                <Text style={{color: 'white'}}>INSTRUCTIONS</Text>
            </TouchableHighlight>
        </View>  
        );    
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    resizeMode: 'cover',
  },  
  buttons : {
    backgroundColor: '#246dd5', 
    padding: 10,
    margin: 15
  }
});


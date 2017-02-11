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


let Window = Dimensions.get('window');
let winWidth = Window.width;



export default class Manu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };
    
  }

 
gotoGame() {
    this.props.navigator.push({
        id: 'Game',
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
            <Text style={styles.welcome}>
            ROOT
            </Text>
            <View>
                <TouchableHighlight style={styles.buttons}
                    onPress={this.gotoGame.bind(this)}>
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
        </View>  
        );    
    }
}


console.log('width window: ', winWidth);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5a7487',
  },
  buttons : {
    backgroundColor: '#246dd5', 
    padding: 10,
    margin: 15
  }
});


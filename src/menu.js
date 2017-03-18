import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Navigator,
  TouchableHighlight,
  BackAndroid,
  Animated
} from 'react-native';


const CntMod = require('./const');
const CON = (new CntMod()).CONST;
const commonSt = require('./styles/common');

export default class Manu extends Component {
  constructor(props) {
    super(props);
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

exitApp() {
    BackAndroid.exitApp();
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
        <View style={commonSt.container}>
            <Image source={require('./images/environment.png')} 
                style= {commonSt.envImage}/>
            
            <View style={commonSt.btnGroups}>
                <TouchableHighlight onPress={() => this.gotoLevels()}
                    underlayColor="transparent"
                    style={commonSt.btn}>
                    <Animated.Image source={require('./images/btn_empty.png')} style={commonSt.imageBtn}>
                        <Text style={commonSt.btnText}>Play Game</Text>
                    </Animated.Image>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this.gotoCredits()}
                    underlayColor="transparent"
                    style={commonSt.btn}>
                    <Animated.Image source={require('./images/btn_empty.png')} style={commonSt.imageBtn}>
                        <Text style={commonSt.btnText}>Credits  </Text>
                    </Animated.Image>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this.gotoInstructions()}
                    underlayColor="transparent"
                    style={commonSt.btn}>
                    <Animated.Image source={require('./images/btn_empty.png')} style={commonSt.imageBtn}>
                        <Text style={commonSt.btnText}>   Instructions</Text>
                    </Animated.Image>
                </TouchableHighlight>
            </View>
            <TouchableHighlight onPress={() => this.exitApp()} underlayColor="transparent" style={commonSt.btnBack}>
                <Image source={require('./images/btn_back_sm.png')} style={commonSt.imageBack} />
            </TouchableHighlight>
        </View>  
        );    
    }
}


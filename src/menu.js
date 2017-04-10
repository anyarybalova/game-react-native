import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableHighlight,
  BackAndroid
} from 'react-native';


const CntMod = require('./const');
const ConstModule = new CntMod();
const CON = ConstModule.CONST;
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

measureView(event) {
    const width = event.nativeEvent.layout.width;
    ConstModule.setImageWidth(width);
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
          navigator={this.props.navigator} />
    );
  }
      
renderScene() {
    return (
        <View style={commonSt.container}>
            <Image onLayout={(event) => this.measureView(event)}
                 source={require('./images/environment.png')} 
                style= {commonSt.envImage}/>
            
            <View style={commonSt.btnGroups}>
                <TouchableHighlight onPress={() => this.gotoLevels()}
                    underlayColor="transparent"
                    style={commonSt.btn}>
                    <Image source={require('./images/btn_empty.png')} style={commonSt.imageBtn}>
                        <Text style={commonSt.btnText}>Play Game</Text>
                    </Image>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this.gotoCredits()}
                    underlayColor="transparent"
                    style={commonSt.btn}>
                    <Image source={require('./images/btn_empty.png')} style={commonSt.imageBtn}>
                        <Text style={commonSt.btnText}>Credits  </Text>
                    </Image>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this.gotoInstructions()}
                    underlayColor="transparent"
                    style={commonSt.btn}>
                    <Image source={require('./images/btn_empty.png')} style={commonSt.imageBtn}>
                        <Text style={commonSt.btnText}>   Instructions</Text>
                    </Image>
                </TouchableHighlight>
            </View>
            <TouchableHighlight onPress={() => this.exitApp()} underlayColor="transparent" style={commonSt.btnBack}>
                <Image source={require('./images/btn_exit_sm.png')} style={commonSt.imageBack} />
            </TouchableHighlight>
        </View>  
        );    
    }
}


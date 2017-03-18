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
  Animated
} from 'react-native';

const CntMod = require('./const');
const CON = (new CntMod()).CONST;
const commonSt = require('./styles/common');

class Levels extends Component {
  constructor(props) {
    super(props);

    this.state = {
        levels: [{
                label: 'Unlimited',
                time: 0 
            },{
                label: 'Easy     ',
                time: 70 
            },{
                label: 'Normal   ',
                time: 40 
            },{
                label: 'Difficult',
                time: 10 
            }
        ]
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
    const levelBtns = this.state.levels.map((level, index) => {
        return (<TouchableHighlight key={index} onPress={()=>{this.gotoGame(level.time)}}
            underlayColor="transparent"
            style={commonSt.btn}>
            <Animated.Image source={require('./images/btn_empty.png')} style={commonSt.imageBtn}>
                <Text style={commonSt.btnText}>{level.label}</Text>
            </Animated.Image>
        </TouchableHighlight>)
    });
    
    return (
        <View style={commonSt.container}>
            <Image source={require('./images/environment.png')} style={commonSt.envImage} />
            <View style={commonSt.btnGroups}>
                {levelBtns}
            </View>
                <TouchableHighlight onPress={() => this.gotoMenu()} underlayColor="transparent" style={commonSt.btnBack}>
                  <Image source={require('./images/btn_back_sm.png')} style={commonSt.imageBack} />
              </TouchableHighlight>
        </View>  
        );    
    }
}

/*
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'black'
  },
  backgroundImage: {
    width: null,
    height: null,
    resizeMode: 'contain',
    flex: 1
  },
  bt: {
    zIndex: 5,
    position: 'absolute',
    top: CON.CELL*2,
    left: CON.CELL,
    width: CON.CELL*4
  },
  btn : {
    alignItems: 'center',
  },
  imageBtn: {
     resizeMode: 'contain',
     width: CON.BTN_WIDTH,
     height: CON.CELL,
     marginBottom: CON.CELL/4
  },
  btnText: {
      zIndex: 20,
      textAlign: 'center',
      paddingTop: CON.CELL/3,
      color: 'white',
      fontSize: CON.CELL/4,
      paddingLeft: CON.CELL/2,
      fontFamily: 'OCRAExtendedRegular'
  },
  btnBack: {
    position: 'absolute',
    width: CON.CELL,
    zIndex: 5,
    top: CON.HEIGHT - CON.CELL*2,
    left: CON.CELL/1.8
  },
  imageBack: {
      width: CON.CELL,
      height: CON.CELL,
      resizeMode: 'contain',
  }
});
*/
module.exports = Levels;

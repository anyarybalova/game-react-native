import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableHighlight,
  Animated,
  Easing
} from 'react-native';

/*import {
  Timer
} from 'react-native-timer'
*/
const Timer = require('react-native-timer');
const _ = require('lodash');

import Collection from './collection'
import Viewport from './viewport'
import Levels from './levels';
import Time from './time';
//import { findNodeHandle } from 'react-native';

const CntMod = require('./const');
const CON = (new CntMod()).CONST;
const winWidth = CON.WIDTH;
const start = CON.CELL*2/3;
const finish = CON.WIDTH - CON.CELL;

class Game extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      width: 600,
      height: 600,
      animation: true,
      timeLeft: this.props.totalTime//,
     // types: _.shuffle(CON.NUMBERS)
    };
  }


  shouldComponentUpdate (nextProps, nextState) {
    return true;
  }

  tick() {
    const t = this.state.timeLeft;

      this.setState({timeLeft: t - 1});
      if (this.state.timeLeft > 0) {
      } else {
        Timer.clearInterval(this);
        this.gotoFinishPage('lost');
      }
  }


  reloadGame() {
    //this.setState({types: _.shuffle(CON.NUMBERS)});
    //this.setState({timeLeft: this.props.totalTime});
    Timer.clearInterval(this);
    this.props.navigator.resetTo({
        id: 'Game',
        passProps: {
            totalTime: this.props.totalTime
        },
        sceneConfig: Navigator.SceneConfigs.FadeAndroid,
    });
  }
  

  componentDidMount () {
    const self = this;
    if (this.props.totalTime > 0) {
      Timer.setInterval(this, 'tick', this.tick.bind(self), 1000);
    }
  }
  
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          />
    );
  }


	gotoLevels() {
    this.setState({animation: false});
    Timer.clearInterval(this);
    this.props.navigator.push({
        id: 'Levels',
        sceneConfig: Navigator.SceneConfigs.FloatFromLeft,
    });
	}

  gotoFinishPage(status) {
    if (this.state.animation) {
      this.props.navigator.push({
          id: 'Finish',
          passProps: {
            status: status,
            totalTime: this.props.totalTime
          },
          sceneConfig: Navigator.SceneConfigs.FloatFromLeft,
      });
    }
  }

  measureView(event) {
    this.setState({
      width : event.nativeEvent.layout.width
    });
    this.setState({
      height : event.nativeEvent.layout.height
    });
  }


  renderScene() {
      /*var x = this.timeValue.interpolate({
        inputRange: [0, 1],
        outputRange: [start, finish]
      });

      var color = this.timeValue.interpolate({
        inputRange: [0, 0.7, 0.85],
        outputRange: ['rgba(0, 255, 0, 1)', 'rgba(0,255, 0, 1)', 'rgba(255, 0, 0, 1)']
      });
      */
    return (
      <View style={styles.main}>
        <View style={styles.ads}></View>
        <View style={styles.container}>
          <Image source={require('./images/environment.png')} style={styles.backgroundImage} />
          
          <Image onLayout={(event) => this.measureView(event)} ref="container" 
              source={require('./images/base_v7.png')}
                  style={styles.backdrop}>
              <View>
                <Collection onWin={this.gotoFinishPage.bind(this)}/>
              </View>
          </Image>

          <View style={styles.footer}>
            <TouchableHighlight onPress={() => this.gotoLevels()} 
                underlayColor="transparent"
                style={styles.btnBack}>
                <Image source={require('./images/btn_back_sm.png')} style={styles.imageBtn} />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.reloadGame()} 
                underlayColor="transparent"
                style={styles.reloadGame}>
                <Image source={require('./images/btn_reset_sm.png')} style={styles.imageBtn} />
            </TouchableHighlight>

            {this.props.totalTime > 0 ? (
              <View style={styles.timeBox} >
                <Time timeLeft={this.state.timeLeft}  />
                </View>
            ) : <View style={styles.timeBox} ></View>}

          </View>
        </View>
      </View>  
    );
  }
}


const styles = StyleSheet.create({
  main: {
    flex:1,
    backgroundColor: 'black'
  },
  ads: {
      backgroundColor: 'green',
      width: 468,
      height: 60,
      position: 'absolute',
      zIndex: 3,
      top: 0,
      left: (CON.WIDTH - 468) /2
  },
  container: {
    //backgroundColor: 'blue',
    width: CON.WIDTH,
    top: 60,
    height: CON.HEIGHT - 60
  }, 
  backgroundImage: {
    resizeMode: 'stretch',
    zIndex: 2,
    width: CON.WIDTH,
    height: CON.HEIGHT - 80
  },  
  backdrop:	{
		flex:	0,
    width: winWidth,
    height: winWidth,
    position: 'absolute',
    top: CON.TOP,
    marginLeft: 0,
    zIndex: 2
  },
  footer: {
    position: 'absolute',
    zIndex: 4,
    top: CON.WIDTH + CON.CELL,
    width: CON.WIDTH - CON.CELL,
    left: CON.CELL/2,
    //backgroundColor: 'green'
  },
  timeBox:{
    top: 0,
    left: CON.WIDTH - CON.CELL*2,
    width: CON.CELL,
    height: CON.CELL,
    //backgroundColor: 'red'
  },
  buttons : {
    backgroundColor: '#246dd5', 
    padding: 10,
    margin: 15,
    width: 200,
    alignItems: 'center',
    top: CON.HEIGHT - CON.OFFSET_TOP*3,
    position: 'absolute',
    left: 300
  },
  btnBack: {
    position: 'absolute',
    width: CON.CELL,
    zIndex: 5,
    top: 0,
    left: 0,
    //backgroundColor: 'red'
  },
  reloadGame: {
    position: 'absolute',
    width: CON.CELL,
    zIndex: 5,
    top: 0,
    left: CON.CELL*1.2,
    //backgroundColor: 'red'
  },
  imageBtn: {
      width: CON.CELL,
      height: CON.CELL,
      resizeMode: 'contain',
  },
  time: {
    width: 25,
    height:25,
    position: 'absolute',
    top: CON.HEIGHT - CON.OFFSET_TOP*4 +  CON.CELL/4
  }
});

module.exports = Game;
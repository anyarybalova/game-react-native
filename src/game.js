import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableHighlight,
  NetInfo
} from 'react-native';

const Timer = require('react-native-timer');
const _ = require('lodash');

import Collection from './collection'
import Viewport from './viewport'
import Levels from './levels';
import Time from './time';

const commonSt = require('./styles/common');
const CntMod = require('./const');
const EnvImage = require('./environment');
const CON = (new CntMod()).CONST;
const winWidth = CON.WIDTH;

class Game extends Component {
  constructor(props) {
    super(props);

    const difficultLevel = [{
        transform: {rotateX: '0deg'}, order: [2,3,4,1]
      },{
        transform: {rotateX: '180deg'},
        order: [4,1,2,3]
      },{
        transform: {rotateY: '180deg'},
        order: [3,2,1,4]
      },{
        transform: {rotateZ: '180deg'},
          order: [1,4,3,2]
    }];
    if (this.props.type === 'Hard'){
      this.order = _.first(_.shuffle(difficultLevel));
      this.imgEnv = 'zones';
    } else {
      this.imgEnv = 'base';
      this.order = {
        transform: {rotateX: '0deg'},
        order: []
      };
    }
    
    this.state = {
      width: 600,
      height: 600,
      timeLeft: this.props.totalTime,
      isConnected: null
    };
    this._handleConnectivityChange = this._handleConnectivityChange.bind(this);
  }


  shouldComponentUpdate (nextProps, nextState) {
    return true;
  }

  componentDidMount() {      
    NetInfo.isConnected.addEventListener(
        'change',
        this._handleConnectivityChange
    );
    NetInfo.isConnected.fetch().done(
        (isConnected) => { this.setState({isConnected}); }
    );
    if (this.props.totalTime > 0) {
      Timer.setInterval(this, 'tick', this.tick.bind(this), 1000);
    }
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
        'change',
        this._handleConnectivityChange
    );
  }

  _handleConnectivityChange(isConnected) {
    this.setState({isConnected,});
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
    Timer.clearInterval(this);
    this.props.navigator.resetTo({
        id: 'Game',
        passProps: {
            totalTime: this.props.totalTime,
            type: this.props.type
        },
        sceneConfig: Navigator.SceneConfigs.FadeAndroid,
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


	gotoLevels() {
    Timer.clearInterval(this);
    this.props.navigator.push({
        id: 'Levels',
        sceneConfig: Navigator.SceneConfigs.FloatFromLeft,
    });
	}

  gotoFinishPage(status) {
    Timer.clearInterval(this);
    this.props.navigator.push({
        id: 'Finish',
        passProps: {
          status: status,
          totalTime: this.props.totalTime,
          type: this.props.type,
          timeLeft: this.state.timeLeft
        },
        sceneConfig: Navigator.SceneConfigs.FloatFromLeft,
    });
  }

  getStyle(transform) {
      return [
          styles.imgBackdrop, {
            transform: [transform]
          }];
  }

  renderScene() {
    return (
        <View style={commonSt.container}>
          <EnvImage />
            <View style={styles.backdrop}>
              <Image ref="container" 
              source={{uri: this.imgEnv}}
                  style={this.getStyle(this.order.transform)}></Image>
                  { this.state.isConnected ?
                    <Collection onWin={this.gotoFinishPage.bind(this)} type={this.props.type} order={this.order.order}/>
                    : <View></View>}
            </View>

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
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    backgroundColor: 'black'
  },
  container: {
    width: CON.WIDTH,
    height: CON.HEIGHT - CON.ADS_HEIGHT,
    //backgroundColor: 'green'
  }, 
  backgroundImage: {
    resizeMode: 'stretch',
    zIndex: 2,
    width: CON.WIDTH,
    height: CON.HEIGHT - CON.ADS_HEIGHT
  },  
  backdrop:	{
    width: winWidth,
    height: winWidth,
    position: 'absolute',
    top: CON.HEIGHT/8.5,
    marginLeft: 0,
    zIndex: 3,
  },
  imgBackdrop:	{
    position: 'absolute',
    resizeMode: 'contain',
    width: winWidth,
    height: winWidth
  },
  footer: {
    position: 'absolute',
    zIndex: 4,
    top: CON.TOP_BACK,
    width: CON.WIDTH - CON.CELL,
    left: CON.CELL/2,
  },
  timeBox:{
    top: 0,
    left: CON.WIDTH - CON.CELL*2,
    width: CON.CELL,
    height: CON.CELL,
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
  },
  reloadGame: {
    position: 'absolute',
    width: CON.CELL,
    zIndex: 5,
    top: 0,
    left: CON.CELL*1.2,
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
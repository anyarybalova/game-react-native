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

import Collection from './collection'
import Viewport from './viewport'
import { findNodeHandle } from 'react-native';

const CntMod = require('./const');
const CON = (new CntMod()).CONST;
const winWidth = CON.WIDTH;

class Game extends Component {
  constructor(props) {
    super(props);
    this.timeValue = new Animated.Value(1);

    this.state = {
      width: 600,
      height: 600,
      animation: true
    };
  }


  time () {
    this.timeValue.setValue(1);
    Animated.timing(
      this.timeValue,
      {
        toValue: 0,
        duration: this.props.totalTime,
        easing: Easing.easeOutBack
      }
    ).start(() => this.gotoFinishPage('lost'));
  }


  componentDidMount () {
    if (this.props.totalTime > 0) {
      this.time();
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

	gotoMenu() {
    this.setState({animation: false});
    this.props.navigator.push({
        id: 'Menu',
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


  getTimeStyle(x) {
      return [
          styles.time, {
              //opacity: this.timeValue
              left: x,
              transform: [{scaleX: this.timeValue}] 
          }];
  }


  renderScene() {
      var x = this.timeValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.1, 1]
      });

    return (
      <View style={styles.main}>
        <Image source={require('./images/fondo_v5.png')} style={styles.backgroundImage} />
        <Text style={styles.welcome}>
          TESTING!
        </Text>
        <Image onLayout={(event) => this.measureView(event)} ref="container" source={require('./images/base_v7.png')}
                resizeMode='contain'
                style={styles.backdrop}>
            <View>
              <Collection onWin={this.gotoFinishPage.bind(this)}/>
            </View>
        </Image>

        <TouchableHighlight style={styles.buttons}
            onPress={this.gotoMenu.bind(this)}>
          <Text style={{color: 'white'}}>BACK</Text>
        </TouchableHighlight>
        
        
        {this.props.totalTime > 0 ? (
            <Animated.Image
            source={require('./images/time.png')} 
            style={this.getTimeStyle(x)} >
          </Animated.Image>
          ) : null}
      </View>  
    );
  }
}


const styles = StyleSheet.create({
  main: {
    flex:1,
    backgroundColor: '#5a7487',
    zIndex: 1
  },
  backgroundImage: {
    resizeMode: 'stretch',
    zIndex: 0,
    width: winWidth,
    height: CON.HEIGHT
  },  
  backdrop:	{
		flex:	0,
    width: winWidth,
    height: winWidth,
    position: 'absolute',
    top: CON.TOP,
    marginLeft: 0,
    zIndex:5
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    zIndex: 5
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
  time: {
    position: 'absolute',
    top: CON.HEIGHT - CON.OFFSET_TOP*3
  }
});

module.exports = Game;
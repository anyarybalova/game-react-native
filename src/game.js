import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Navigator,
  TouchableHighlight,
  Animated,
  Easing
} from 'react-native';

import Collection from './collection'
import Viewport from './viewport'
import { findNodeHandle } from 'react-native';
let Window = Dimensions.get('window');
let winWidth = Window.width;

class Game extends Component {
  constructor(props) {
    super(props);
    this.timeValue = new Animated.Value(10);

    this.state = {
      width: 600,
      height: 600,
      top: Window.height/5
    };
  }


  time () {
     this.timeValue.setValue(1);
    Animated.timing(
      this.timeValue,
      {
        toValue: 0,
        duration: 3000,
        easing: Easing.linear
      }
    ).start(() => this.gotoFinishPage('lost'));
  }

  componentDidMount () {
    this.time();
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
    this.props.navigator.jumpBack({
      sceneConfig: Navigator.SceneConfigs.FloatFromRight,
    });
	}

  gotoFinishPage(status) {
    this.props.navigator.push({
        id: 'Finish',
        status: status,
        sceneConfig: Navigator.SceneConfigs.FadeAndroid,
    });
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
        inputRange: [0, 1],
        outputRange: [-60, 90],
      });

    return (
      <View style={styles.main}>
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

        <Animated.Image
            source={require('./images/time.png')} 
            style={this.getTimeStyle(x)} >
        </Animated.Image>
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
  backdrop:	{
		flex:	0,
    width: winWidth,
    height: winWidth,
    position: 'absolute',
    top: Math.floor(Window.height/5),
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
  },
  buttons : {
    backgroundColor: '#246dd5', 
    padding: 10,
    margin: 15,
    width: 200,
    alignItems: 'center',
    top: Window.height - Window.height/5,
    left: 300
  },
  time: {
    top: Window.height - Window.height/3 + 50
  }
});

module.exports = Game;
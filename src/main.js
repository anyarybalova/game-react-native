import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

import Collection from './collection'
import Viewport from './viewport'
import { findNodeHandle } from 'react-native';
let Window = Dimensions.get('window');
let winWidth = Window.width;

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 600,
      height: 600,
      top: Window.height/5
    };
    
  }
  

  measureView(event) {
    console.log('height: ', event.nativeEvent.layout.height);
    console.log('width: ', event.nativeEvent.layout.width);
    console.log('x: ', event.nativeEvent.layout.x);
    console.log('y: ', event.nativeEvent.layout.y);
    this.setState({
      width : event.nativeEvent.layout.width
    });
    this.setState({
      height : event.nativeEvent.layout.height
    });
  }

  render() {
    
    return (
      <View style={styles.main}>
        <Text style={styles.welcome}>
          TESTING!
        </Text>
        <Image onLayout={(event) => this.measureView(event)} ref="container" source={require('./images/base_v6.png')}
                resizeMode='contain'
                style={styles.backdrop}>
            <View>
              <Collection width={this.state.width}/>
            </View>
        </Image>
      </View>  
    );
  }
}


console.log('width window: ', winWidth);
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
});


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

import Main from './main'

let Window = Dimensions.get('window');
let winWidth = Window.width;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };
    
  }

  handleClickPlay() {
    this.setState({currentStep: 1});
}
      
render() {
    switch (this.state.page) {
         case 1:
            return (
                <View style={styles.main}>
                    <Text style={styles.welcome}>
                    ROOT
                    </Text>
                    <View>
                        <button onClick={this.handleClickPlay}>Play</button>
                    </View>
                </View>  
                );
        case 2:
            return <Main/>
        }
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
  }
});


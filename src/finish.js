'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Navigator,
  TouchableHighlight,
  Button
} from 'react-native';


class Finish extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var navigator = this.props.navigator;
  }

  gotoGame() {
    this.props.navigator.jumpBack({
        sceneConfig: Navigator.SceneConfigs.FloatFromRight,
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
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
        { this.props.status === 'lost' ?
            <Text style={{color: 'white', fontSize: 34,}}>You lost!</Text>
            :
            <Text style={{color: 'white', fontSize: 34,}}>You won!</Text>
        }
        <TouchableHighlight style={styles.buttons}
            onPress={this.gotoGame.bind(this)}>
          <Text style={{color: 'blue'}}>Play again</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttons}
            onPress={this.gotoMenu.bind(this)}>
          <Text style={{color: 'blue'}}>Menu</Text>
        </TouchableHighlight>
      </View>
    );
  }s
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    backgroundColor: '#5a7487',
    zIndex: 1
  },
  backdrop:	{
		flex:	0,
    position: 'absolute',
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
    backgroundColor: '#fff', 
    padding: 10,
    margin: 15,
    width: 200,
    alignItems: 'center'
  },
});

module.exports = Finish;
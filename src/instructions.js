import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions,
  Navigator,
TouchableHighlight
} from 'react-native';


class Instructions extends Component {
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

  renderScene(route, navigator) {
    return (
      <View style={styles.container}>
        <Text style={{color: 'blue', fontSize: 32 }}>INSTRUCTIONS</Text>
        <TouchableHighlight style={{backgroundColor: 'yellow', padding: 10}}
            onPress={this.gotoMenu.bind(this)}>
          <Text style={{color: 'white'}}>BACK</Text>
        </TouchableHighlight>
      </View>
    );
  }

}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#5a7487',
  },
  bottons : {
		backgroundColor: 'blue', 
		padding: 10
  }
});

module.exports = Instructions;


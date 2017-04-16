'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableHighlight
} from 'react-native';


const CntMod = require('./const');
const EnvImage = require('./environment');
const CON = (new CntMod()).CONST;
const commonSt = require('./styles/common');

class Finish extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var navigator = this.props.navigator;
  }

  gotoGame() {
    this.props.navigator.push({
        id: 'Game',
        passProps: {
          totalTime: this.props.totalTime,
          type: this.props.type
        },
        sceneConfig: Navigator.SceneConfigs.FloatFromRight
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
      <View style={commonSt.container}>
            <EnvImage/>
            <View style={commonSt.btnGroups}>
              { this.props.status === 'lost' ?
              <Text style={[commonSt.text, styles.resultText]}>You lost...</Text>
              :
              <View>
                <Text style={[commonSt.text, styles.resultText]}> You won!</Text>
                <Text style={[commonSt.text, styles.textScore]}>Your time:</Text>
                <Text style={[commonSt.text, styles.textScore, styles.lastScore]}>
                    {this.props.timeLeft}</Text>
              </View>
              }
                <TouchableHighlight onPress={this.gotoGame.bind(this)}
                    underlayColor="transparent"
                    style={commonSt.btn}>
                    <Image source={require('./images/btn_empty.png')} style={commonSt.imageBtn}>
                        <Text style={commonSt.btnText}>Play again</Text>
                    </Image>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this.gotoMenu()}
                    underlayColor="transparent"
                    style={commonSt.btn}>
                    <Image source={require('./images/btn_empty.png')} style={commonSt.imageBtn}>
                        <Text style={commonSt.btnText}>Menu     </Text>
                    </Image>
                </TouchableHighlight>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  resultText: {
    textAlign: 'center',
    fontSize: CON.CELL/1.5,
    marginRight: CON.CELL/4,
    marginBottom: CON.CELL/2,
		textShadowColor: 'rgba(0, 0, 0, 1)',
		textShadowOffset: {width: 2, height: 2}
  },
  textScore: {
    textAlign: 'center',
    fontSize: CON.CELL/3
  },
  lastScore: {
    marginBottom: CON.CELL/1.6
  }

});

module.exports = Finish;
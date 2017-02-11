'use	strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
    View
} from 'react-native';

const _ = require('lodash');

import Viewport from './viewport'
const Values = require('./values');
var Matrix = new Values();
const tiles = Matrix.getTiles();
let Window = Dimensions.get('window'); 
const winWidth = Window.width;
let CIRCLE_DIAMETR = winWidth/6;
let top = Math.floor(Window.height/5);
const OFFSET_RIGHT = CIRCLE_DIAMETR/2;
/*let positions =[
        {id:1 ,top: OFFSET_RIGHT, left:50},
        {id:2, top: CIRCLE_DIAMETR*2 + OFFSET_RIGHT,left:50}
      ];
  */    
console.log('---------TILES--------------');
console.log(tiles);
/*let positions = _.filter(tiles, function(item){
  return (item != -2 && item!= -1);
});*/

export default class Collection extends Component {
  constructor(props) {
    super(props);
    this.wonGame = this.wonGame.bind(this);
    this.state = {
      state: 1
      };
    this.handleColision.bind(this);
  }

  shouldComponentUpdate() {
    return false;
  }

  wonGame() {
    console.log(this.props);
    console.log('+++++++++++++++++WONGAME------++++++++++++++++++++++++');
    this.props.onWin();
  }

  handleColision(params, props) {
    console.log(params.id);
    //var positions = positions;
    
    var canMove = Matrix.changePosition(params.id, params.direction);
    
    //console.log(positions);
    /*positions[params.id].top = params.posTop;
    positions[params.id].left = params.posLeft;
    this.setState({positions: positions});*/
    if (canMove) {
      var won = Matrix.checkWin();
      if (won) {
        console.log(props);
        this.wonGame();
      }
    }
    return canMove;
  }
  
  render() {
    var fichas = tiles.map((pos, index) => {      
          return (<Viewport key={pos.id} position={pos} onColision={this.handleColision.bind(this)}/>)
    });
    return (
      <View style={styles.container}>  
        {fichas}
      </View>
    );
  }
}


let CIRCLE_RADIUS = 36;
const styles = StyleSheet.create({
  container: {
    zIndex: 2,
   // justifyContent: 'center',
   // alignItems: 'center',
    //top: 0,
    //left: 0,
    width: Window.width,
    height: Window.height
  }
});
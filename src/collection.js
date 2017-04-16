'use	strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const _ = require('lodash');

import Viewport from './viewport'
const TableMatrix = require('./matrix');
const CntMod = require('./const');
const CON = (new CntMod()).CONST;

var Matrix = new TableMatrix();

const winWidth = CON.WIDTH;
const cell = CON.CELL;
const top = CON.OFFSET_TOP;
    

export default class Collection extends Component {
  constructor(props) {
    super(props);
    Matrix.createTiles();
    this.wonGame = this.wonGame.bind(this);
    this.handleColision.bind(this); 
    this.state = {
      tiles: Matrix.getTiles()
    };
  }

  
  shouldComponentUpdate (nextProps, nextState) {
    return false;
  }
  

  wonGame() {
    this.props.onWin();
  }

  handleColision(params, props) {
    var canMove = Matrix.changePosition(params.id, params.direction);
    
    if (canMove) {
      if (this.props.type === 'Hard') {
        var won = Matrix.checkWinWithOrder(this.props.order);
      } else {
        var won = Matrix.checkWin();
      }
      if (won) {
        this.wonGame();
      }
    }
    return canMove;
  }
  
  render() {
    var fichas = this.state.tiles.map((pos, index) => {      
          return (<Viewport key={pos.id} position={pos} onColision={this.handleColision.bind(this)}/>)
    });
    return (
      <View style={styles.container}>{fichas}</View>
    );
  }
}


let CIRCLE_RADIUS = 36;
const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    width: CON.WIDTH,
    height: CON.WIDTH,
    //marginTop: - CON.CELL/30
    
  }
});
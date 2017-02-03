'use	strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
    View
} from 'react-native';

import Viewport from './viewport'
let Window = Dimensions.get('window'); 
const winWidth = Window.width;
let CIRCLE_DIAMETR = winWidth/6;
let top = Math.floor(Window.height/5);
console.log("Dimensions:");
console.log(top, CIRCLE_DIAMETR);
const OFFSET_RIGHT = CIRCLE_DIAMETR/2;
let positions =[
        {id:1 ,top: OFFSET_RIGHT, left:50},
        {id:2, top: CIRCLE_DIAMETR*2 + OFFSET_RIGHT,left:50}
      ];

export default class Collection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      };
    this.handleColision.bind(this);
  }
  
  handleColision(params) {
    console.log('----------function------------');
    /*console.log(params.id);
    console.log(params.posTop);
    console.log(params.posLeft);*/
    var positions = positions;

    
    //console.log(positions);
    /*positions[params.id].top = params.posTop;
    positions[params.id].left = params.posLeft;
    this.setState({positions: positions});*/
    return 'hola'
  }
  
  render() {
    var fichas = positions.map((pos) => {
      return (<Viewport key={pos.id} width={this.props.width} position={pos} onColision={this.handleColision}/>)
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
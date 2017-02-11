//import React, { Component } from 'react';
import {
  Dimensions
} from 'react-native';

let Const = {};
function getConstants() {
    if (Const) {
        console.log('is NOT empty');
        return Const;
    } else {
        let Window = Dimensions.get('window'); 
        const winWidth = Window.width;
        const cell = winWidth/6;
        const winHeight = Window.height;
        var Const = {};
        Const.WIDTH = winWidth;
        Const.CELL = cell;
        Const.TOP = Math.floor(Window.height/5),
        Const.OFFSET_LEFT = cell/2;
        Const.OFFSET_TOP = cell/2;
        Const.FOOTER = winHeight - winHeight/6;
        
      return Const;
   }
};

module.exports = getConstants;
'use strict';
import {Dimensions} from 'react-native';

let instance = null;

function getConstants() {
	let Const = {};
	let Window = Dimensions.get('window'); 
	const winWidth = Window.width;
	const cell = winWidth/6;
	const winHeight = Window.height;
	Const.WIDTH = winWidth;
	Const.CELL = cell;
	Const.TOP = cell,
	Const.OFFSET_LEFT = cell/2;
	Const.OFFSET_TOP = cell/2;
	Const.HEIGHT = Window.height;
	Const.FOOTER = winHeight - winHeight/6;
	Const.OFFSET_BUTTONS = cell/2 * 3;
	Const.BTN_WIDTH = winWidth*0.5;
	Const.ADS_HEIGHT = 60;
	Const.NUMBERS = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4];
	return Const;
}


class Cache {
	constructor() {
		if (!instance) {
			instance = this;
			this.CONST = getConstants();
		}
		return instance;
	}
}

module.exports = Cache;
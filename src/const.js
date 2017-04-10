'use strict';
import {Dimensions, PixelRatio} from 'react-native';

let instance = null;

function getConstants() {
	let Const = {};
	let Window = Dimensions.get('window'); 
	console.log('++++++++++++++++++++++++++++++++++++++++++++');
	console.log(PixelRatio.get());
	console.log(PixelRatio.getPixelSizeForLayoutSize(Window.width));
	console.log(PixelRatio.getPixelSizeForLayoutSize(Window.height));
	console.log(PixelRatio.getFontScale());
	console.log('++++++++++++++++++++++++++++++++++++++++++++');
	const winWidth = Window.width;
	let cell = Math.floor(winWidth/(6));
	console.log(cell);
	const winHeight = Window.height;
	const ratio = PixelRatio.get();
	Const.ratio = ratio;
	Const.prop = ratio/2;
	Const.WIDTH = winWidth;
	Const.HEIGHT = Window.height;
	let prop = 2;
	if (winHeight/winWidth >= 1.48 && winHeight/winWidth <= 1.6 && ratio === 2){
		prop = 1.5;
		cell = Math.floor(winWidth/(7));
	}
	if (ratio === 3.5) {
		cell = cell*2.5/4;
	}
	Const.CELL = cell;
	console.log(winWidth +' - ' +winHeight);
	//offset for tiles
	Const.OFFSET_LEFT = cell/2;
	Const.OFFSET_TOP = cell/2;


	Const.FOOTER = winHeight - winHeight/6;
	Const.OFFSET_BUTTONS = cell/2 * 3;
	Const.BTN_WIDTH = winWidth*0.5;
	Const.ADS_HEIGHT = 50;
	Const.ADS_WIDTH = 320;
	Const.TOP = winHeight/5;
	Const.TOP_BACK = winHeight*4.4/6;
	Const.imageWidth = winWidth;
	if (prop === 1.5) {
		Const.TOP_BACK = winHeight*4.2/6;
		Const.imageWidth = cell*5.5;		
	} else if (ratio === 3.5) {
		Const.imageWidth = cell*4.5;
		//Const.OFFSET_BUTTONS = cell*2;		
		Const.TOP = winHeight/6;		
		Const.TOP_BACK = winHeight*1.9/3;		
	}
	Const.levels = [{
				label: 'Unlimited',
				time: 0 
			},{
				label: 'Easy     ',
				time: 99 
			},{
				label: 'Normal   ',
				time: 65
			},{
				label: 'Hard     ',
				time: 90
			}];
	return Const;
}


class Cache {
	constructor() {
		if (!instance) {
			instance = this;
			this.CONST = getConstants();
			this.imageWidth;
		}
		return instance;
	}

	getImageWidth() {
		return this.imageWidth;
	}

	setImageWidth(width) {
		this.imageWidth = width;
	}


}

module.exports = Cache;
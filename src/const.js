'use strict';
import {Dimensions, PixelRatio} from 'react-native';
import {StatusBar} from 'react-native';


let instance = null;

function getConstants(imageWidth) {
	let Const = {};
	let Window = Dimensions.get('window'); 
	const statusBar = StatusBar.currentHeight;

	console.log('++++++++++++++++++++++++++++++++++++++++++++');
	console.log(PixelRatio.get());
	console.log(PixelRatio.getPixelSizeForLayoutSize(Window.width));
	console.log(PixelRatio.getPixelSizeForLayoutSize(Window.height));
	console.log(PixelRatio.getFontScale());
	console.log('++++++++++++++++++++++++++++++++++++++++++++');
	Const.ADS_HEIGHT = 50;
	Const.ADS_WIDTH = 320;
	const winWidth = Window.width;
	const winHeight = Window.height - statusBar - Const.ADS_HEIGHT;
	let cell = Math.floor(winWidth/(6));
	console.log(cell);
	const ratio = PixelRatio.get();
	Const.ratio = ratio;
	Const.prop = ratio/2;
	Const.WIDTH = winWidth;
	Const.HEIGHT = winHeight;
	
	Const.CELL = cell;
	console.log(winWidth +' - ' +winHeight);
	//offset for tiles
	Const.OFFSET_LEFT = cell/1.98;
	Const.OFFSET_TOP = cell/1.98;


	Const.FOOTER = winHeight - winHeight/6;
	Const.OFFSET_BUTTONS = cell/2 * 3;
	Const.BTN_WIDTH = winWidth*0.5;
	Const.TOP = winHeight/5.2;
	Const.TOP_BACK = winHeight*5.05/6;
	Const.imageWidth = winWidth;
	
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
		}
		return instance;
	}


}

module.exports = Cache;
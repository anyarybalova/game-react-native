import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

const CntMod = require('../const');
const CON = (new CntMod()).CONST;
const CELL = CON.CELL;

const CommonStyles = StyleSheet.create({
	container: {
		flex: 1
  },
  envImage: {
		width: CON.WIDTH,
		height: CON.HEIGHT - CON.ADS_HEIGHT*1.3,
		resizeMode: 'stretch',
		flex: 1
  },
  btnGroups: {
		zIndex: 5,
		position: 'absolute',
		top: CON.TOP,
		left: CELL,
		width: CELL*4
  },
  btn : {
		alignItems: 'center',
  },
  imageBtn: {
		resizeMode: 'contain',
		width: CON.BTN_WIDTH,
		height: CELL,
		marginBottom: CELL/4
  },
  btnText: {
	  zIndex: 20,
	  textAlign: 'center',
	  paddingTop: CELL/3,
	  color: 'white',
	  fontSize: CELL/4,
	  paddingLeft: CELL/2,
	  fontFamily: 'OCRAExtendedRegular',
		textShadowColor: 'rgba(0, 0, 0, 1)',
		textShadowOffset: {width: 2, height: 2}
  },
	text: {
		color: 'white',
	  fontSize: CELL/4,
	  fontFamily: 'OCRAExtendedRegular',
		textShadowColor: 'rgba(0, 0, 0, 1)',
		textShadowOffset: {width: 2, height: 2}
	},
  btnBack: {
		position: 'absolute',
		width: CELL,
		zIndex: 5,
		top: CON.TOP_BACK,
		left: CELL/1.5
  },
  imageBack: {
	  width: CELL,
	  height: CELL,
	  resizeMode: 'contain',
  }
});

module.exports = CommonStyles;

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

const CntMod = require('../const');
const CON = (new CntMod()).CONST;
const CELL = CON.CELL;

const CommonStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black'
  },
  envImage: {
		width: null,
		height: null,
		resizeMode: 'contain',
		flex: 1
  },
  btnGroups: {
		zIndex: 5,
		position: 'absolute',
		top: CELL*2.5,
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
		shadowColor: 'rgba(150, 150, 150, 1)',
		shadowOffset: {width: 4, height: 3}
  },
	text: {
		color: 'white',
	  fontSize: CELL/4,
	  fontFamily: 'OCRAExtendedRegular',
		shadowColor: 'rgba(150, 150, 150, 1)',
		shadowOffset: {width: 3, height: 3}
	},
  btnBack: {
		position: 'absolute',
		width: CELL,
		zIndex: 5,
		top: CON.HEIGHT - CELL*2,
		left: CELL/1.8
  },
  imageBack: {
	  width: CELL,
	  height: CELL,
	  resizeMode: 'contain',
  }
});

module.exports = CommonStyles;

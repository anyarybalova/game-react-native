import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	Navigator,
	TouchableHighlight
} from 'react-native';

const CntMod = require('./const');
const CON = (new CntMod()).CONST;
const commonSt = require('./styles/common');
const _ = require('lodash');

class Levels extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.widthImg;
	}
 
gotoGame(timeValue, type) {	
	this.props.navigator.push({
			id: 'Game',
			passProps: {
					totalTime: timeValue,
					type: _.trim(type)
			},
			sceneConfig: Navigator.SceneConfigs.FloatFromLeft,
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
			<Navigator
					renderScene={this.renderScene.bind(this)}
					navigator={this.props.navigator}
					/>
		);
	}
			


renderScene() {
		const levelBtns = CON.levels.map((level, index) => {
				return (<TouchableHighlight key={index} onPress={()=>{this.gotoGame(level.time, level.label)}}
						underlayColor="transparent"
						style={commonSt.btn}>
						<Image source={require('./images/btn_empty.png')} style={commonSt.imageBtn}>
								<Text style={commonSt.btnText}>{level.label}</Text>
						</Image>
				</TouchableHighlight>)
		});
		
		return (
				<View style={commonSt.container}>
						<Image source={require('./images/environment.png')} style={commonSt.envImage} />
						<View style={commonSt.btnGroups}>
								{levelBtns}
						</View>
								<TouchableHighlight onPress={() => this.gotoMenu()} underlayColor="transparent" style={commonSt.btnBack}>
									<Image source={require('./images/btn_back_sm.png')} style={commonSt.imageBack} />
							</TouchableHighlight>
				</View>  
				);    
		}
}


module.exports = Levels;

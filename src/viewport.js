'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    PanResponder,
    Animated,
    Text,
    View
} from 'react-native';

const CntMod = require('./const');
const CON = (new CntMod()).CONST;

const CIRCLE_DIAMETR = CON.CELL;
const STEP = CIRCLE_DIAMETR;

export default class Viewport extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pan: new Animated.ValueXY({
                x: this.props.position.top, 
                y: this.props.position.left})
        };
        let mover = Animated.event([null, 
            {dx: this.state.pan.x, 
            dy: this.state.pan.y 
        }]) ;
        
        this.panResponder = PanResponder.create({
            componentWillMount: function() {
            },
            onMoveShouldSetPanResponderCapture: () => true,

            onPanResponderGrant: (e, gestureState) => {
                this.state.pan.setOffset({
                    x: this.state.pan.x._value, 
                    y: this.state.pan.y._value
                });
                this.state.pan.setValue({x: 0, y: 0});
            },
           
            onPanResponderMove: (e, gesture) => {
                var pos = this.state.pan.getLayout();
                var CONFIG = {tension: 2, friction: 3};
            },

            onPanResponderRelease: (e, gesture) => {
                this.state.pan.flattenOffset();
                let valueX = 0;
                let valueY = 0;
                let dirX = 0;
                let dirY = 0;
                if (Math.abs(gesture.dx) > Math.abs(gesture.dy)) {
                    if (gesture.dx > 0) {
                        valueX = STEP;
                        dirX = 1;
                    } else {
                        valueX = -STEP;
                        dirX = -1;
                    }
                } else {
                    if (gesture.dy > 0) {
                        valueY = STEP;
                        dirY = 1;
                    } else {
                        valueY = -STEP;
                        dirY = -1;
                    }
                }
                var canMove = this.props.onColision({
                    id: this.props.position.id,
                    direction: {x: dirY, y: dirX}
                });
                if (canMove) {
                    Animated.spring(this.state.pan, {
                        toValue: {
                            x: this.state.pan.x._value + valueX, 
                            y: this.state.pan.y._value + valueY}
                    }).start();
                }
            }
        });
    }

    getStyle() {
        return [
            styles.circle, {
                transform: this.state.pan.getTranslateTransform()
            }];
    }

    render() {
        let { pan } = this.state;
        let [translateX, translateY] = [pan.x, pan.y];

        let imageStyle = {transform: [{translateX}, {translateY}]};

        let src = './images/type_' + this.props.position.type + '.png';
        return (
                <Animated.Image
                    source={{uri: this.props.position.type}} 
                    {...this.panResponder.panHandlers}
                    style={this.getStyle()} >
                </Animated.Image>
        );
    }

}


let styles = StyleSheet.create({
    circle: {
        width: CIRCLE_DIAMETR,
        height: CIRCLE_DIAMETR,
        zIndex: 30,
        position: 'absolute'
    }
});

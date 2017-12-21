/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';


/**
 * 监听手势点击
 */
export default class Demo5TouchEvent extends Component {

    constructor(props) {
        super(props);

        this._onTouchMove = this._onTouchMove.bind(this);
        this._onTouchStart = this._onTouchStart.bind(this);
        this._onTouchEnd = this._onTouchEnd.bind(this);

    }

    _onTouchMove(event){
        console.log("touch move : " + event.timeStamp
            + ", X : " + event.nativeEvent.locationX
            + ", Y : " + event.nativeEvent.locationY);
    }



    _onTouchStart(event){
        console.log("touch start : " + event.timeStamp
            + ", X : " + event.nativeEvent.locationX
            + ", Y : " + event.nativeEvent.locationY);
    }

    _onTouchEnd(event){
        console.log("touch end : " + event.timeStamp
            + ", X : " + event.nativeEvent.locationX
            + ", Y : " + event.nativeEvent.locationY);
    }

    render() {
        return (
                <View style={styles.container}
                      onTouchStart = {this._onTouchStart}
                      onTouchMove = {this._onTouchMove}
                      onTouchEnd = {this._onTouchEnd}>
                </View>
        );
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }

});
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
export default class Demo7pointerEvents extends Component {

    constructor(props){
        super(props)
        this.state = {bigButtonPointerEvents:null};
        this.onBigButtonPressed = this.onBigButtonPressed.bind(this);
        this.onSmallButtonPressed = this.onSmallButtonPressed.bind(this);

    }

    onBigButtonPressed(){
        console.log('big button pressed!');
    }

    onSmallButtonPressed(){
        if(this.state.bigButtonPointerEvents === null){
            this.setState({bigButtonPointerEvents:'none'});//改变状态机的变量值
            console.log('big button will not responde.' + this.state.bigButtonPointerEvents);
            return ;
        }

        this.setState({bigButtonPointerEvents:null});//改变状态机变量值
        console.log('big button will responde.' + this.state.bigButtonPointerEvents);
    }




    render() {
        return (
                <View style={styles.container}>

                    <Text style = {styles.sButtonSytle}
                    onPress = {this.onSmallButtonPressed}>
                        small button
                    </Text>

                    <Text style = {styles.bButtonStyle}
                    onPress = {this.onBigButtonPressed}
                    pointerEvents = {this.state.bigButtonPointerEvents}>
                        big button
                    </Text>
                </View>
        );
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sButtonSytle:{
        fontSize:20,
        left:130,
        top:50,
        width:150,
        height:35,
        backgroundColor:'grey'
    },
    bButtonStyle:{
        fontSize:20,
        left:130,
        top:130,
        width:150,
        height:70,
        backgroundColor:'grey'
    }

});
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';


/**
 * 图片资源
 */
export default class Demo9TouchableOpacity extends Component {

    constructor(props){
        super(props)
    }

    onButtonPressed(){

    }

    render() {


        return (
                <ScrollView >

                    <View
                        style={styles.container}>

                        <TouchableNativeFeedback
                        background = {TouchableNativeFeedback.Ripple('red',false)}
                        >
                            <View style = {styles.button}></View>
                        </TouchableNativeFeedback >

                        {/*<TouchableHighlight onPress = {this.onButtonPressed}>*/}
                            {/*<View sytle = {styles.button}/>*/}
                        {/*</TouchableHighlight>*/}


                    </View>
                </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    button:{
        height:70,
        width:300,
        backgroundColor:'grey'

    }

});
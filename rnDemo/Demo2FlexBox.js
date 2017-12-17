/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Demo1FlexBox extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.vs}/>
                <View style={styles.vs1}/>
                <View style={styles.vs}/>
                <View style={styles.vs2}/>

            </View>

        );
    }
}
var styles = StyleSheet.create({
    container: {
        width:200,
        height:200,
        justifyContent: 'space-around',
        backgroundColor:'white'
    },
    vs: {
        height: 50,
        backgroundColor: 'gray',

    },
    vs1: {
        flex: 1,
        height: 50,
        backgroundColor: 'black'
    },
    vs2: {
        flex: 2,
        height: 50,
        backgroundColor: 'black'
    }
});
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
    TextInput,
    ScrollView
} from 'react-native';

export default class Demo3View extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (

            <ScrollView >

                <View style={styles.container}>

                    <View style={styles.welcome}
                          opacity={0}/>
                    <View style={styles.welcome}
                          opacity={0.1}/>
                    <View style={styles.welcome}
                          opacity={0.25}/>
                    <View style={styles.welcome}
                          opacity={0.5}/>
                    <View style={styles.welcome}
                          opacity={0.75}/>
                    <View style={styles.welcome}
                          opacity={1}/>
                    <View style={styles.welcome}
                          opacity={5} />


                </View>

            </ScrollView>

        );
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    welcome: {
        width: 50,
        height: 50,
        borderWidth: 1,
        backgroundColor: 'black',
        borderRadius: 25,
        margin:20,
        elevation:50,
        shadowColor:'red'
    }

});
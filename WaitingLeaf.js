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

export default class WaitingLeaf extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.textPromptStyle}>
                    登录使用手机号：{this.props.phoneNumber}
                </Text>

                <Text style={styles.textPromptStyle}>
                    登录使用密码：{this.props.userPw}
                </Text>

                <Text style={styles.bigTextPrompt}
                      onPress={()=>this.onGoBackPressed()}>
                    返回
                </Text>

            </View>

        );
    }

    onGoBackPressed(){
        this.props.onGobackPressed();
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    textPromptStyle: {
        fontSize: 20,
        color:'black'
    },
    bigTextPrompt: {
        fontSize: 60,
        color: 'black'
    }
});

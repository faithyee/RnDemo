/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    TextInput,
    StyleSheet,
    Dimensions,
    ScrollView,
    Text,
    View,
    DeviceEventEmitter
} from 'react-native';

let widthOfMargin = Dimensions.get('window').width * 0.05;

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputedNum: "",
            inputedPw: ""

        };

        this.updatePw = this.updatePw.bind(this);
    }

    updateNum(newText) {
        this.setState((state) => {
            return {
                inputedNum: newText,
            };
        });
    }

    updatePw(newText) {
        this.setState(() => {
                return {
                    inputedPw: newText,
                };
            }
        );
    }

    userPressConfirm() {
        //onLoginPressed是一个回调函数，会使App。js里的onLoginPressed执行
        this.props.onLoginPressed(this.state.inputedNum, this.state.inputedPw);
    }

    onUI1Pressed() {
        this.props.onUI1Pressed();
    }

    onUI2Pressed() {
        this.props.onUI2Pressed();
    }

    onUI3Pressed() {
        this.props.onUI3Pressed();
    }

    onUI4Pressed() {
        this.props.onUI4Pressed();
    }

    onUI5Pressed() {
        this.props.onUI5Pressed();
    }

    onUI6Pressed() {
        this.props.onUI6Pressed();
    }

    onUI7Pressed() {
        this.props.onUI7Pressed();
    }

    onUI8Pressed() {
        this.props.onUI8Pressed();
    }

    onUI9Pressed() {
        this.props.onUI9Pressed();
    }

    onUI10Pressed() {
        this.props.onUI10Pressed();
    }

    onUI11Pressed() {
        this.props.onUI11Pressed();
    }

    //Rn向原生发送消息，并监听原生返回的信息
    userPressAddressBook() {
        DeviceEventEmitter.addListener('AndroidToRnMessage', this.handleAndroidMessage.bind(this));//监听原生消息

        var {NativeModules} = require('react-native');
        let ExampleInterface = NativeModules.ExampleInterface;
        ExampleInterface.HandlerMessage('你好，原生');
    }

    //定义方法，处理原生返回的信息，并展示在RnUI中
    handleAndroidMessage(aMessage) {
        console.log('AndroidToRnMessage:' + aMessage);
        let aObj = JSON.parse(aMessage);
        this.setState({inputedNum: aObj.peerNumber});//将用户选择的号码显示在RN界面上
    }

    //使用promise机制通信
    sendMegByPromise() {
        var {NativeModules} = require('react-native');
        let ExampleInterface = NativeModules.ExampleInterface;
        ExampleInterface.HandlerPromiseMessage('Promise:你好，原生').then(
            (result) => {
                console.log(result);
                let aObj = JSON.parse(result);
                this.setState({inputedNum: aObj.peerNumber});
            }
        ).catch(
            (error) => {
                console.log(error);//打印异常信息
                console.log(error.message);//打印android的异常信息
                console.log(error.code);//打印自己提供的异常信息
            }
        );
    }

    render() {
        return (

            <ScrollView>

                <View style={styles.container}>

                    <Text style={styles.textPromptStyle}>
                        我是Rn页面
                    </Text>

                    <TextInput style={styles.textInputStyle}
                               placeholder={'请输入手机号'}
                               onChangeText={(newText) => this.updateNum(newText)}
                    />
                    <Text style={styles.textPromptStyle}>
                        您输入的手机号： {this.state.inputedNum}
                    </Text>

                    <TextInput style={styles.textInputStyle}
                               placeholder={'请输入密码'}
                               secureTextEntry={true}
                               onChangeText={this.updatePw}
                    />

                    <Text style={styles.bigTextPrompt}
                          onPress={() => this.userPressConfirm()}>
                        确定
                    </Text>

                    <Text style={styles.bigTextPrompt}
                          onPress={() => this.userPressAddressBook()}>
                        通讯录
                    </Text>

                    <Text style={styles.bigTextPrompt}
                          onPress={() => this.sendMegByPromise()}>
                        通讯录(promise)
                    </Text>

                    <Text style={styles.bigTextPrompt}
                          onPress={() => this.onUI1Pressed()}>
                        跳转UI1测试页面
                    </Text>


                    <Text style={styles.bigTextPrompt}
                          onPress={() => this.onUI2Pressed()}>
                        跳转UI2测试页面
                    </Text>

                    <Text style={styles.bigTextPrompt}
                          onPress={() => this.onUI3Pressed()}>
                        跳转UI3测试页面
                    </Text>

                    <Text style={styles.bigTextPrompt}
                          onPress={() => this.onUI4Pressed()}>
                        跳转UI4测试页面
                    </Text>
                    <Text style={styles.bigTextPrompt}
                          onPress={() => this.onUI5Pressed()}>
                        跳转UI5测试页面
                    </Text>

                    <Text style={styles.bigTextPrompt}
                          onPress={() => this.onUI6Pressed()}>
                        跳转UI6测试页面
                    </Text>

                    <Text style={styles.bigTextPrompt}
                          onPress={() => this.onUI7Pressed()}>
                        跳转UI7测试页面
                    </Text>

                    <Text style={styles.bigTextPrompt}
                          onPress={() => this.onUI8Pressed()}>
                        跳转UI8测试页面
                    </Text>

                    <Text style={styles.bigTextPrompt}
                          onPress={() => this.onUI9Pressed()}>
                        跳转UI9测试页面
                    </Text>

                    <Text style={styles.bigTextPrompt}
                          onPress={() => this.onUI10Pressed()}>
                        跳转UI10测试页面
                    </Text>

                    <Text style={styles.bigTextPrompt}
                          onPress={() => this.onUI11Pressed()}>
                        跳转UI11测试页面
                    </Text>

                </View>

            </ScrollView>

        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    textInputStyle: {
        margin: widthOfMargin,
        height: 48,
        backgroundColor: 'gray',
        fontSize: 20
    },
    textPromptStyle: {
        margin: widthOfMargin,
        fontSize: 20
    },
    bigTextPrompt: {
        margin: widthOfMargin,
        backgroundColor: 'gray',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
});

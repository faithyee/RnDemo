/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  TextInput,
  StyleSheet,
  Dimensions,
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

  updateNum(newText){
    this.setState((state) => {
        return {
            inputedNum: newText,
        };
    });
  }

  updatePw(newText){
    this.setState(() => {
          return {
            inputedPw:newText,
          };
        }
    );
  }

  userPressConfirm(){
      //onLoginPressed是一个回调函数，会使App。js里的onLoginPressed执行
      this.props.onLoginPressed(this.state.inputedNum, this.state.inputedPw);
  }

  //Rn向原生发送消息，并监听原生返回的信息
  userPressAddressBook(){
      DeviceEventEmitter.addListener('AndroidToRnMessage' ,this.handleAndroidMessage.bind(this));//监听原生消息

      var { NativeModules } = require('react-native');
      let ExampleInterface = NativeModules.ExampleInterface;
      ExampleInterface.HandlerMessage('你好，原生');
  }

  //定义方法，处理原生返回的信息，并展示在RnUI中
    handleAndroidMessage(aMessage){
      console.log('AndroidToRnMessage:'+aMessage);
      let aObj = JSON.parse(aMessage);
      this.setState({inputedNum:aObj.peerNumber});//将用户选择的号码显示在RN界面上
    }

    //使用promise机制通信
    sendMegByPromise(){
        var { NativeModules } = require('react-native');
        let ExampleInterface = NativeModules.ExampleInterface;
        ExampleInterface.HandlerPromiseMessage('Promise:你好，原生').then(
            (result)=>{
                console.log(result);
                let aObj = JSON.parse(result);
                this.setState({inputedNum:aObj.peerNumber});
            }
        ).catch(
            (error)=>{
                console.log(error);//打印异常信息
                console.log(error.message);//打印android的异常信息
                console.log(error.code);//打印自己提供的异常信息
            }
        );
    }

  render() {
    return (

      <View style = {styles.container}>

          <Text style = {styles.textPromptStyle}>
              我是Rn页面
          </Text>

          <TextInput style = {styles.textInputStyle}
                     placeholder = {'请输入手机号'}
                     onChangeText = {(newText) => this.updateNum(newText)}
          />
          <Text style = {styles.textPromptStyle}>
                您输入的手机号： {this.state.inputedNum}
          </Text>

          <TextInput style = {styles.textInputStyle}
                     placeholder = {'请输入密码'}
                     secureTextEntry = {true}
                     onChangeText = {this.updatePw}
          />

          <Text style = {styles.bigTextPrompt}
                onPress = {()=>this.userPressConfirm()}>
                确定
          </Text>

          <Text style = {styles.bigTextPrompt}
                onPress = {()=>this.userPressAddressBook()}>
                通讯录
          </Text>

          <Text style = {styles.bigTextPrompt}
                onPress = {()=>this.sendMegByPromise()}>
              通讯录(promise)
          </Text>
      </View>

    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textInputStyle : {
    margin : widthOfMargin,
    height : 48,
    backgroundColor : 'gray',
    fontSize : 20
  },
  textPromptStyle : {
    margin : widthOfMargin,
    fontSize : 20
  },
  bigTextPrompt : {
    margin : widthOfMargin,
    backgroundColor : 'gray',
    fontSize : 20,
    color : 'white',
    textAlign : 'center'
  }
});

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
  View
} from 'react-native';

let widthOfMargin = Dimensions.get('window').width * 0.05;

export default class App extends Component<{}> {
  render() {
    return (

      <View style = {styles.container}>
          <TextInput style = {styles.textInputStyle}  placeholder = {'请输入手机号'}/>
          <Text style = {styles.textPromptStyle}>
            您输入的手机号：
          </Text>

          <TextInput style = {styles.textInputStyle}  placeholder = {'请输入密码'} secureTextEntry = {true}/>

          <Text style = {styles.bigTextPrompt}>
            确定
          </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
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
  },
});

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



  render() {
    return (

      <View style = {styles.container}>
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

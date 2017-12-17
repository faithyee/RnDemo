/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    BackHandler
} from 'react-native';

import LoginLeaf from './LoginLeaf';
import WaitingLeaf from './WaitingLeaf';
import Demo1FlexBox from './rnDemo/Demo1FlexBox';
import Demo2FlexBox from './rnDemo/Demo2FlexBox';
import Demo3View from './rnDemo/Demo3View';
import Demo4View from './rnDemo/Demo4View';

export default class App extends Component {


    constructor(props){
        super(props);
        this.state = {
            currentScene : 'Login',
            phoneNumber : '',
            userPw : ''
        };

        this.handleBackSignal = this.handleBackSignal.bind(this);
        this.onLoginPressed = this.onLoginPressed.bind(this);
        this.onUI1Pressed = this.onUI1Pressed.bind(this);
        this.onUI2Pressed = this.onUI2Pressed.bind(this);
        this.onUI3Pressed = this.onUI3Pressed.bind(this);
        this.onUI4Pressed = this.onUI4Pressed.bind(this);
    }

    onLoginPressed( aNumber, aPW){
        this.setState({
            currentScene : 'Waiting',
            phoneNumber : aNumber,
            userPw : aPW
        });
    }

    onUI1Pressed(){
        this.setState({
            currentScene : 'Demo1FlexBox'
        });
    }

    onUI2Pressed(){
        this.setState({
            currentScene : 'Demo2FlexBox'
        });
    }

    onUI3Pressed(){
        this.setState({
            currentScene : 'Demo3View'
        });
    }

    onUI4Pressed(){
        this.setState({
            currentScene : 'Demo4View'
        });
    }

    render(){
        if(this.state.currentScene === 'Login'){
            return <LoginLeaf onLoginPressed = {this.onLoginPressed}
                              onUI1Pressed = {this.onUI1Pressed}
                              onUI2Pressed = {this.onUI2Pressed}
                              onUI4Pressed = {this.onUI4Pressed}
                              onUI3Pressed = {this.onUI3Pressed}/>;
        }else if(this.state.currentScene === 'Waiting'){
            return (<WaitingLeaf
            phoneNumber= {this.state.phoneNumber}
            onGobackPressed = {this.handleBackSignal}
            userPw = {this.state.userPw}/>);
        }else if(this.state.currentScene === 'Demo1FlexBox'){
            return <Demo1FlexBox></Demo1FlexBox>;
        }else if(this.state.currentScene === 'Demo2FlexBox'){
            return <Demo2FlexBox></Demo2FlexBox>;
        }else if(this.state.currentScene === 'Demo3View'){
            return <Demo3View></Demo3View>;
        }else if(this.state.currentScene === 'Demo4View'){
            return <Demo4View></Demo4View>;
        }

    }

    handleBackSignal(){
        if( this.state.currentScene ==='Waiting'){
            this.setState({currentScene:'Login'});
            return true;
        }

        return false;
    }

    componentDidMount(){
        if(Platform.OS === 'android'){
            BackHandler.addEventListener('hardwareBackPress', this.handleBackSignal);
        }
    }

    componentWillUnmount(){
        if(Platform.OS === 'android'){
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackSignal);
        }
    }

}


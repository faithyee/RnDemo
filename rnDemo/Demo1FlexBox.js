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
        this.state = {
            uiColor: 'red'
        }

        this.onTextPress = this.onTextPress.bind(this);

    }

    onTextPress() {
        this.setState((state) => {
            return {
                uiColor: 'blue'
            };
        });
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.firstRow}>
                    <View style={styles.test1}/>
                    <View style={styles.test2}/>
                    <Text onPress={this.onTextPress} style={[styles.test1, {color: this.state.uiColor}]}>点击我（动态修改style）</Text>
                    <View style={styles.test3}/>


                </View>

                <View style={styles.testPostion}/>
            </View>

        );
    }
}


var styles = StyleSheet.create({
    container: {
        flex: -1,
        backgroundColor: 'white',

    },
    firstRow: {
        height: 200,
        top: 40,
        flex: 0,
        backgroundColor: 'pink',
        flexDirection: 'row',//row,row-reverse,column,column-reverse
        justifyContent: 'space-between', //测试去掉本行注释,flex-start,flex-end,center,space-between,space-around
        alignItems: 'center',//flex-start,flex-end,center,stretch(需要子view的高度删除才生效)
        flexWrap: 'wrap'//超出最大展示数量，自动换行，no-wrap为不换行
    },
    test1: {
        width: 68,
        height: 100,
        backgroundColor: 'white'
    },
    test2: {
        width: 68,
        height: 150,
        backgroundColor: 'white'
    },
    test3: {
        width: 68,
        height: 80,
        alignSelf: 'flex-start',//与父view中的alignItems类似，但可以让子view独立孤行，flex-start,flex-end,center,space-between,space-around
        backgroundColor: 'white',
        zIndex: 10
    },
    testPostion: {
        backgroundColor: 'grey',
        height: 60,
        width: 60,
        position: 'relative',//
        top: 150,
        left: 10
        // position:'absolute',
        // right:50
    }

});
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
    ScrollView
} from 'react-native';


/**
 * 监听手势点击
 */
export default class Demo6onLayout extends Component {

    _onLayout(event){//这个函数没有执行绑定操作，因为它只没有使用LearnRn类的任何变量
        {//这里使用大括号是为了将let解构赋值得到的变量的作用域限制
            //在大括号内，因为接下来还要解构赋值一次
            //使用解构赋值取得设备放置方式被改变后的宽、高与左上角坐标
            let {x,y,width,height} = event.nativeEvent.layout;
            console.log('width from view onlayout:' + width);//打印宽
            console.log('height form view onlayout:' + height);//打印高
            console.log('x from view onlayout:' + x);//打印组件左上顶点的横坐标
            console.log('y from view onlayout:' + y);//打印组件左上顶点的纵坐标


        }

        //使用解构赋值取得设备屏幕的宽和高，与onlayout函数上报的宽、高做比较
        let Dimensions = require('Dimensions');
        let {width,height} = Dimensions.get('window');
        console.log('width from Dimensions:' + width);
        console.log('height from Dimensions' + height);
        console.log('\r\n');

    }

    _onLayoutText(event){//text组件的onLayout回调函数

        let{x,y,width,height} = event.nativeEvent.layout;
        console.log('width from Text onLayout:' + width);
        console.log('height from Text onLayout:' + height);
        console.log('x from Text onLayout:' + x);
        console.log('y from Text onLayout:' + y);
        console.log('\r\n');


    }

    render() {
        return (
                <View style={styles.container}
                onLayout = {this._onLayout}>
                    {/*//为根view加上onLayout回调函数*/}

                    <Text style = {styles.welcome}
                    onLayout = {this._onLayoutText}>
                        welcome to Renative !
                    </Text>
                    {/*//为Text组件加上onLayout回调函数*/}
                </View>
        );
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,    //将跟view的flex样式设为1，并且不指定根view的宽和高
        backgroundColor: '#F5FCFF',
        alignItems:'center',
        justifyContent:'center'
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    }

});
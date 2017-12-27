/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';


/**
 * 图片资源
 */
export default class Demo8Image extends Component {

    constructor(props){
        super(props)
        this.state = {bigButtonPointerEvents:null};
    }

    render() {

        let ades = {android : 'mao',
                        width:96,
                        height:96}

        return (
                <ScrollView >

                    <View
                        style={styles.container}>
                        {/*导入网络图片*/}
                        <Image
                            style = {styles.imageStyle}
                            source = {imagesSource}
                        ></Image>

                        {/*加载目录下的图片*/}
                        <Image
                            style = {styles.imageStyle}
                            source = {require('../source/timg.jpg')}
                        ></Image>

                        {/*加载android工程下的图片资源*/}
                        <Image
                            style = {styles.perciseImageStyle}
                            source = {nativeImageSource(ades)}
                        ></Image>

                        {/*resizeMode test*/}
                        <Image
                            style = {styles.imageStyle}
                            source = {nativeImageSource(ades)}
                            resizeMode = {'cover'}
                        ></Image><Text>cover</Text>

                        <Image
                            style = {styles.imageStyle}
                            source = {nativeImageSource(ades)}
                            resizeMode = {'contain'}
                        ></Image><Text>contain</Text>

                        <Image
                            style = {styles.imageStyle}
                            source = {nativeImageSource(ades)}
                            resizeMode = {'stretch'}
                        ></Image><Text>stretch</Text>

                        <Image
                            style = {styles.imageStyle}
                            source = {nativeImageSource(ades)}
                            resizeMode = {'center'}
                        ></Image><Text>center</Text>

                    </View>
                </ScrollView>
        );
    }
}

let imagesSource = {
    uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514222928160&di=39d3a8aac2cfa2a3278dcd3212b368e3&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201511%2F2015112509.jpg',
    header:{
        Authorization1 : 'someAuthToken',
        Authorization2 : 'someAuthToken'
    }

}

//导入nativeImageSource函数
let nativeImageSource = require('nativeImageSource');

let PixelRatio = require('PixelRatio');
let pixetRatio = PixelRatio.get();

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center'
    },
    imageStyle:{
        height:300,
        width:300,
        backgroundColor:'grey',
        borderRadius:30

    },
    perciseImageStyle:{
        width:1200/pixetRatio,
        height:799/pixetRatio
    }

});
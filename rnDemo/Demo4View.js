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

export default class Demo4View extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (


                <View style={styles.container}>

                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                    <Text style={styles.welcome1}>
                        Welcome1 to React Native!...
                    </Text>
                    <Text style={styles.welcome2}>
                        Welcome2 to React Native!
                    </Text>
                    <Text style={styles.welcome3}>
                        Welcome3 to React Native!!!!
                    </Text>
                    <Text style={styles.welcome4}>
                        Welcome4 to React Native!
                    </Text>
                    <Text style={styles.welcome5}>
                        Welcome5 to React Native!
                    </Text>
                    <Text style={styles.welcome6}>
                        Welcome6 to React Native!
                    </Text>
                    <Text style={styles.welcome7}>
                        Welcome7 to React Native!
                    </Text>
                    <Text style={styles.welcome8}>
                        Welcome8 to React Native!
                    </Text>
                    <Text style={styles.welcome9}>
                        Welcome9 to React Native!
                    </Text>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>


                </View>


        );
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'center'

    },
    welcome: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{rotate:'45deg'}]
    },
    welcome1: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{rotateX:'45deg'},{skewX:'45deg'}]
    },
    welcome2: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{rotateY:'45deg'}]
    },
    welcome3: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{scale:2}]
    },
    welcome4: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{scaleX:2}]
    },
    welcome5: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{scaleY:2}]
    },
    welcome6: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{translateX:200}]
    },
    welcome7: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{translateY:150}]
    },
    welcome8: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{skewX:'45deg'}]
    },
    welcome9: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        transform:[{skewY:'45deg'}]
    }

});
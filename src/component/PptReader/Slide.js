import React, {Component} from 'react';
import {
    Text, View, Image, StyleSheet, Dimensions, ImageBackground, Alert, TouchableHighlight
} from 'react-native';
import {responsive} from "react-native-responsive-ui";
import {ResponsiveComponent, ResponsiveStyleSheet} from "react-native-responsive-ui";

@responsive
class Slide extends ResponsiveComponent  {

    get style() {
        let SCREEN_WIDTH = Dimensions.get('window').width;
        let SCREEN_HEIGHT = Dimensions.get('window').height;
        return ResponsiveStyleSheet.select([{
            query: { orientation: "landscape" },
            style: {
                slide: {
                    flex: 1,
                    width: SCREEN_WIDTH,
                    height: SCREEN_HEIGHT,
                }
            }
        }, {
            query: { orientation: "portrait" },
            style: {
                slide: {
                    flex: 1,
                    width: SCREEN_WIDTH,
                    height: 200,
                }
            }
        }]);
    }

    render() {
        const {width, height} = this.props.window;
        const mode = height > width ? "portrait" : "landscape";
        const {style} = this;
        return (
            <View style={{flex: 1}}>
                <TouchableHighlight onPress={() => {
                    Alert.alert('🎸', 'You rock ');
                }}>
                    <ImageBackground source={{uri: this.props.image}} style={style.slide}>
                    </ImageBackground>
                </TouchableHighlight>
            </View>
        )
    }
}

export default Slide;
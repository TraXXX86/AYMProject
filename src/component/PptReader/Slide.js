import React, {Component} from 'react';
import {
    Text, View, Image, StyleSheet, Dimensions, ImageBackground, Alert, TouchableHighlight
} from 'react-native';
import {responsive} from "react-native-responsive-ui";
import {ResponsiveComponent, ResponsiveStyleSheet} from "react-native-responsive-ui";

@responsive
class Slide extends ResponsiveComponent  {

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    test() {
        Alert.alert('🎸', 'You rock ')
    }

    get style() {
        let SCREEN_WIDTH = Dimensions.get('window').width
        let SCREEN_HEIGHT = Dimensions.get('window').height
        console.log('SCREEN_WIDTH : ' + SCREEN_WIDTH)
        console.log('SCREEN_HEIGHT : ' + SCREEN_HEIGHT)
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

        console.log('style : ' + style.slide)

        return (
            <View style={{flex: 1}}>
                <TouchableHighlight onPress={() => {
                    //this.setModalVisible(true);
                    this.test();
                }}>
                    <ImageBackground source={{uri: this.props.image}} style={style.slide}>
                    </ImageBackground>
                </TouchableHighlight>
            </View>
        )
    }
}

export default Slide;
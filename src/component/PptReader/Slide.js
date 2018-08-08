import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, ImageBackground} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

class Slide extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={{uri: this.props.image}} style={styles.slide}>
                    <Text>Inside</Text>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: 200,
    }
});

export default Slide;
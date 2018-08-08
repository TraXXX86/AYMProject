import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

class Slide extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Image ref="image"
                       style={styles.slide}
                       source={{uri: this.props.image}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    }
});

export default Slide;
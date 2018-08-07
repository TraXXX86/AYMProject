import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

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
        width: 300,
        height: 200
    }
});

export default Slide;
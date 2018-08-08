import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements'

class NavigationBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNext: props.isNext,
            onClick: props.onClick,
        };
    }

    render() {
        if (this.state.isNext) {
            return (
                <View style={{flex: 1}}>
                    <Button
                        buttonStyle={styles.navigationButton}
                        rightIcon={{name: 'angle-right', type: 'font-awesome'}}
                        onPress={() => this.state.onClick()}/>
                </View>
            );
        }
        return (
            <View style={{flex: 1}}>
                <Button
                    buttonStyle={styles.navigationButton}
                    leftIcon={{name: 'angle-left', type: 'font-awesome'}}
                    onPress={() => this.state.onClick()}/>
            </View>
        );
    }
}

export default NavigationBtn;

const styles = StyleSheet.create({
    navigationButton: {
        backgroundColor: '#3D6DCC',
        borderRadius: 50,
    },
})
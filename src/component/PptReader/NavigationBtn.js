import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements'

class NavigationBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNext: props.isNext,
            onClick: props.onClick,
        };
    }

    getNavigationText(isNext) {
        if (isNext) {
            return "Next";
        } else {
            return "Previous";
        }
    }

    render() {
        if (this.state.isNext) {
            return (
                <View style={{flex: 1}}>
                    <Button
                        large
                        rightIcon={{name: 'angle-right', type: 'font-awesome'}}
                        onPress={() => this.state.onClick()}/>
                </View>
            );
        }
        return (
            <View style={{flex: 1}}>
                <Button
                    large
                    leftIcon={{name: 'angle-left', type: 'font-awesome'}}
                    onPress={() => this.state.onClick()}/>
            </View>
        );
    }
}

export default NavigationBtn;
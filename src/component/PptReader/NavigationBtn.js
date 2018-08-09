import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import AYMButton from '../AYMButton';

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
                    <AYMButton
                        leftIcon={{name: 'angle-right', type: 'font-awesome'}}
                        onPress={() => this.state.onClick()}
                    />
                </View>
            );
        }
        return (
            <View style={{flex: 1}}>
                <AYMButton
                    leftIcon={{name: 'angle-left', type: 'font-awesome'}}
                    onPress={() => this.state.onClick()}
                />
            </View>
        );
    }
}

export default NavigationBtn;
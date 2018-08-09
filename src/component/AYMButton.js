import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

class AYMButton extends React.Component {
    render() {
        return (
            <Button
                title={this.props.title}
                buttonStyle={styles.signUpButton}
                linearGradientProps={{
                    colors: ['#FF9800', '#F44336'],
                    start: [1, 0],
                    end: [0.2, 0],
                }}
                titleStyle={styles.signUpButtonText}
                icon={this.props.icon}
                onPress={this.props.onPress}
                rightIcon={this.props.rightIcon}
                leftIcon={this.props.leftIcon}
            />
        );
    }
}

export default AYMButton;

const styles = StyleSheet.create({
    signUpButtonText: {
        fontFamily: 'bold',
        fontSize: 13,
    },
    signUpButton: {
        backgroundColor: "#3D6DCC",
        borderRadius: 50,
        height: 45,
    },
})
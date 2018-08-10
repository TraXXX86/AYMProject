import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';

class AYMAvatar extends React.Component {
    render() {
        if (this.props.avatar == null || this.props.avatar === '' || this.props.avatar === 'https://....') {
            return (<Avatar
                small = {this.props.small}
                medium = {this.props.medium}
                xlarge = {this.props.xlarge}
                rounded
                icon={{name: this.props.icon ? this.props.icon : 'user', type: 'font-awesome'}}
                onPress={this.props.onPress}
                activeOpacity={0.7}
            />);
        }
        return (<Avatar
            small = {this.props.small}
            medium = {this.props.medium}
            xlarge = {this.props.xlarge}
            rounded
            source={{uri: this.props.avatar}}
            onPress={this.props.onPress}
            activeOpacity={0.7}
        />)
    }
}

export default AYMAvatar;
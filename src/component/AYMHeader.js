import React, {Component} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Header, Icon, Text, Avatar} from 'react-native-elements';

import {withNavigation} from 'react-navigation';

class AYMHeader extends Component {
    render() {
        if (this.props.mode !== 'landscape') {
            return (
                <Header
                    outerContainerStyles={{paddingBottom: 8}}
                    leftComponent={
                        <Icon
                            name='sign-out'
                            type='font-awesome'
                            color='#fff'
                            size={30}
                            onPress={() => {
                                this.props.navigation.navigate('Home');
                            }}
                        />
                    }
                    centerComponent={{
                        text: this.props.title ? this.props.title : 'Animate Your Meeting',
                        style: {color: '#fff', paddingBottom: 8}
                    }}
                    rightComponent={
                        <Icon
                            name='question-circle'
                            type='font-awesome'
                            color='#fff'
                            size={30}
                            onPress={() => {
                                this.props.navigation.navigate('Help');
                            }}
                        />
                    }
                />
            )
        } else {
            return (<View style={{flex: 2, backgroundColor: '#3D6DCC'}}>
            </View>);
        }
    }
}

export default withNavigation(AYMHeader);
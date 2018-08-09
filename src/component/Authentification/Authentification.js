import React, {Component} from 'react';
import {Alert, Text, View, KeyboardAvoidingView, Dimensions, StyleSheet, ScrollView} from 'react-native';
import {Header, Button, FormLabel, FormInput, FormValidationMessage, Icon} from 'react-native-elements'
import {withNavigation} from 'react-navigation';

import AYMButton from '../AYMButton';

class AuthentificationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: 'Clara',
            user_profil: 'teacher',
            server_url: '',
            meeting_id: '',
        };
        this.navigation = this.props.navigation;
    }

    /**
     * Open AYM application when user is connected
     */
    submitForm() {
        this.navigation.navigate('Home', {
            'server_url': this.state.server_url,
            'meeting_id': this.state.meeting_id,
            'user_name': this.state.user_name,
            'user_profil': this.state.user_profil,
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={{flex: 1}}>
                    <Header
                        outerContainerStyles={{paddingBottom: 8}}
                        centerComponent={{text: 'Authentication', style: {color: '#fff', paddingBottom: 8}}}
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
                    <View style={{flex: 1, padding: 10}}>
                        <FormLabel>Server :</FormLabel>
                        <FormInput
                            icon="user"
                            value={this.state.server_url}
                            onChangeText={server_url => this.setState({server_url})}
                            placeholder="Server Name"
                        />
                        <FormLabel>User Name :</FormLabel>
                        <FormInput
                            icon="user"
                            value={this.state.user_name}
                            onChangeText={user_name => this.setState({user_name})}
                            placeholder="User Name"
                        />
                        <FormLabel>Select your profile:</FormLabel>
                        <FormInput
                            icon="user"
                            value={this.state.user_profil}
                            onChangeText={user_profil => this.setState({user_profil})}
                            placeholder="User Profil"
                        />
                        <FormLabel>Select your meeting room:</FormLabel>
                        <FormInput
                            icon="user"
                            value={this.state.meeting_id}
                            onChangeText={meeting_id => this.setState({meeting_id})}
                            placeholder="Meeting Room"
                        />
                    </View>
                    <View style={{padding: 15}}>
                        <AYMButton
                            title="Sign in"
                            icon={{name: 'sign-in', type: 'font-awesome'}}
                            onPress={() => this.submitForm()}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default withNavigation(AuthentificationScreen);
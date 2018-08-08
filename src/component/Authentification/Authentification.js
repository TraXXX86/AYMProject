import React, {Component} from 'react';
import {Alert, Text, View, KeyboardAvoidingView, Dimensions, StyleSheet, ScrollView} from 'react-native';
import {Header, Button, FormLabel, FormInput, FormValidationMessage, Icon} from 'react-native-elements'
import {withNavigation} from 'react-navigation';

class Authentification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: 'Prof',
            user_profil: 'teacher',
            server_url: 'wss://aym.arbey.fr/ws',
            meeting_id: '1AF',
        };
        this.navigation = this.props.navigation;
    }

    /**
     * Open AYM application when user is connected
     */
    submitForm() {
        //Alert.alert('🎸', 'You rock ')

        console.log(this.state);
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
                        centerComponent={{text: 'Authentification', style: {color: '#fff'}}}
                        rightComponent={
                            <Icon
                                name='question-circle'
                                type='font-awesome'
                                color='#fff'
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
                        <Button
                            title="Se connecter"
                            buttonStyle={styles.signUpButton}
                            linearGradientProps={{
                                colors: ['#FF9800', '#F44336'],
                                start: [1, 0],
                                end: [0.2, 0],
                            }}
                            titleStyle={styles.signUpButtonText}
                            icon={{name: 'sign-in', type: 'font-awesome'}}
                            onPress={() => this.submitForm()}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default withNavigation(Authentification);

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
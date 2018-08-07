import React, {Component} from 'react';
import {Alert, Text, View, KeyboardAvoidingView, Dimensions, StyleSheet} from 'react-native';
import {Header, Divider, Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import AYM from '../AYM/AYM';
//import FBLoginButton from './FBLoginButton';
import {withNavigation} from 'react-navigation';

//var FBLoginButton = require('./FBLoginButton');

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

class Authentification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            user_profil: 'learner',
            server_url: 'test',
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
            <View style={{flex: 1}}>
                <Header
                    centerComponent={{text: 'Authentification', style: {color: '#fff'}}}
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
        );
    }

    /*
     <FBLoginButton></FBLoginButton>
     render() {
     return (
     <form className="Authentification" onSubmit={this.handleSubmit}>
     <label>
     Server:
     <input id="server_name" type="text" value={this.state.server_name} onChange={this.handleChange}/>
     </label>
     <br />
     <label>
     Name:
     <input id="user_name" type="text" value={this.state.user_name} onChange={this.handleChange}/>
     </label>
     <br />
     <label>
     Select your profile:
     <select id="user_profil" value={this.state.user_profil} onChange={this.handleChange}>
     <option value="learner">Learner</option>
     <option value="teacher">Teacher</option>
     </select>
     </label>
     <br />
     <label>
     Select your meeting room:
     <select id="meeting_id" value={this.state.meeting_id} onChange={this.handleChange}>
     <option value="1AF">Default Room</option>
     </select>
     </label>
     <br />
     <input type="submit" value="Submit"/>
     </form>
     );
     }
     */
}

export default withNavigation(Authentification);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        paddingTop: 20,
        backgroundColor: '#293046',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    formContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    signUpText: {
        color: 'white',
        fontSize: 28,
        fontFamily: 'light',
    },
    whoAreYouText: {
        color: '#7384B4',
        fontFamily: 'bold',
        fontSize: 14,
    },
    userTypesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: SCREEN_WIDTH,
        alignItems: 'center',
    },
    userTypeItemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
    },
    userTypeItemContainerSelected: {
        opacity: 1,
    },
    userTypeMugshot: {
        margin: 4,
        height: 70,
        width: 70,
    },
    userTypeMugshotSelected: {
        height: 100,
        width: 100,
    },
    userTypeLabel: {
        color: 'yellow',
        fontFamily: 'bold',
        fontSize: 11,
    },
    inputContainer: {
        paddingLeft: 8,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'rgba(110, 120, 170, 1)',
        height: 45,
        marginVertical: 10,
    },
    inputStyle: {
        flex: 1,
        marginLeft: 10,
        color: 'white',
        fontFamily: 'light',
        fontSize: 16,
    },
    errorInputStyle: {
        marginTop: 0,
        textAlign: 'center',
        color: '#F44336',
    },
    signUpButtonText: {
        fontFamily: 'bold',
        fontSize: 13,
    },
    signUpButton: {
        borderRadius: 50,
        height: 45,
    },
    loginHereContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    alreadyAccountText: {
        fontFamily: 'lightitalic',
        fontSize: 12,
        color: 'white',
    },
    loginHereText: {
        color: '#FF9800',
        fontFamily: 'lightitalic',
        fontSize: 12,
    },
})
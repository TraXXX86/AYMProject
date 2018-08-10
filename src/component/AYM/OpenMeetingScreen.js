import React from 'react';
import {StyleSheet, View, Modal, Alert, TouchableHighlight, ScrollView} from 'react-native';
import {Header, Text, Icon, FormLabel, FormInput, Button} from 'react-native-elements';
import {withNavigation} from 'react-navigation';

import AYMButton from '../AYMButton';
import AYMAvatar from '../AYMAvatar';

class OpenMeetingScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_name: 'Clara',
            user_profil: 'learner',
            meeting_id: '1AF',
        };
        this.navigation = this.props.navigation;
    }

    /**
     *
     * Open AYM application when user is connected
     */
    submitForm() {
        this.navigation.navigate('Meeting', {
            'meeting_id': this.state.meeting_id,
            'user_name': this.state.user_name,
            'user_profil': this.state.user_profil,
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    outerContainerStyles={{paddingBottom: 8}}
                    leftComponent={
                        <Icon
                            name='arrow-circle-o-left'
                            type='font-awesome'
                            color='#fff'
                            size={30}
                            onPress={() => {
                                this.props.navigation.goBack();
                            }}
                        />
                    }
                    centerComponent={{text: 'Animate Your Meeting', style: {color: '#fff', paddingBottom: 8}}}
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
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text h3>Join a meeting</Text>
                </View>
                <View style={{flex: 2, padding: 10}}>
                    <ScrollView>
                        <FormLabel>Select your meeting room:</FormLabel>
                        <FormInput
                            value={this.state.meeting_id}
                            onChangeText={meeting_id => this.setState({meeting_id})}
                            placeholder="Meeting Room"
                            onSubmitEditing={() => {
                                this.user_name.focus();
                            }}
                        />
                        <FormLabel>Your Name :</FormLabel>
                        <FormInput
                            value={this.state.user_name}
                            onChangeText={user_name => this.setState({user_name})}
                            placeholder="User Name"
                            ref={ input => this.user_name = input}
                        />
                        <FormLabel>Your Avatar :</FormLabel>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <AYMAvatar
                                medium={true}
                                onPress={()=>Alert.alert('Avatar selection is coming soon')}/>
                        </View>
                    </ScrollView>
                </View>
                <View style={{padding: 15}}>
                    <AYMButton
                        title="Join meeting"
                        icon={{name: 'sign-in', type: 'font-awesome'}}
                        onPress={() => this.submitForm()}
                    />
                </View>

            </View>
        );
    }
}

export default withNavigation(OpenMeetingScreen);
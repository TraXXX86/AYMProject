import React from 'react';
import {StyleSheet, View, Modal, Alert, TouchableHighlight, ScrollView} from 'react-native';
import {Header, Text, Icon, FormLabel, FormInput} from 'react-native-elements';
import {withNavigation} from 'react-navigation';

import AYMButton from '../AYMButton';
import AYMAvatar from '../AYMAvatar';

class CreateMeetingScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_name: 'Clara',
            user_profil: 'trainer',
            meeting_id: '5b7438ec4de4b',
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
                    <Text h3>Configure your meeting:</Text>
                </View>
                <View style={{flex: 2}}>
                    <ScrollView>
                        <FormLabel>Choose a meeting room :</FormLabel>
                        <FormInput
                            value={this.state.meeting_id}
                            onChangeText={meeting_id => this.setState({meeting_id})}
                            onSubmitEditing={() => {
                                this.user_name.focus();
                            }}
                            placeholder="Meeting Room"
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
                <View style={{marginTop: 15, marginBottom: 15}}>
                    <View>
                        <AYMButton
                            title="Add your PowerPoint"
                            icon={{name: 'file-powerpoint-o', type: 'font-awesome'}}
                            onPress={()=>Alert.alert('PowerPoint selection is coming soon on mobile Application')}
                        />
                    </View>
                    <View style={{marginTop: 10}}>
                        <AYMButton
                            title="Create"
                            icon={{name: 'check', type: 'font-awesome'}}
                            onPress={() => this.submitForm()}
                        />
                    </View>
                </View>

            </View>
        );
    }
}

export default withNavigation(CreateMeetingScreen);
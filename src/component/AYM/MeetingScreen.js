import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {withNavigation} from 'react-navigation';

import AYM from './AYM';

class MeetingScreen extends React.Component {
    render() {
        const {navigation} = this.props;
        let server_url = navigation.getParam('server_url');
        if(server_url == null || server_url === ''){
            // TODO : set server adress here
            server_url = '';
        }
        const meeting_id = navigation.getParam('meeting_id');
        const user_name = navigation.getParam('user_name');
        const user_profil = navigation.getParam('user_profil');

        return (
            <AYM server={server_url}
                 meeting_id={meeting_id}
                 user_id={user_name}
                 user_name={user_name}
                 user_profil={user_profil}
            />
        );
    }
}

export default withNavigation(MeetingScreen);
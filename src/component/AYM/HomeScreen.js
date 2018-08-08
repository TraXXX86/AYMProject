import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {withNavigation} from 'react-navigation';

import AYM from './AYM';

class HomeScreen extends React.Component {
    render() {
        const {navigation} = this.props;
        const server_url = navigation.getParam('server_url');
        const meeting_id = navigation.getParam('meeting_id');
        const user_name = navigation.getParam('user_name');
        const user_profil = navigation.getParam('user_profil');

        return (
            <View style={{flex: 1}}>
                <View>
                    <Header
                        leftComponent={
                            <Icon
                                name='sign-out'
                                type='font-awesome'
                                color='#fff'
                                onPress={() => {
                                    this.props.navigation.navigate('Authentification');
                                }}
                            />
                        }
                        centerComponent={{text: 'AYM', style: {color: '#fff'}}}
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
                </View>
                <View style={{flex: 18, marginTop: -1}}>
                    <AYM server={server_url}
                         meeting_id={meeting_id}
                         user_id={user_name}
                         user_name={user_name}
                         user_profil={user_profil}/>
                </View>
            </View>
        );
    }
}

export default withNavigation(HomeScreen);
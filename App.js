import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import UserScreen from './src/component/UserViewer/UserScreen';
import CreateMeetingScreen from './src/component/AYM/CreateMeetingScreen';
import OpenMeetingScreen from './src/component/AYM/OpenMeetingScreen';
import MeetingScreen from './src/component/AYM/MeetingScreen';
import HelpScreen from './src/component/AYM/HelpScreen';
import HomeScreen from './src/component/AYM/HomeScreen';
import RatingScreen from './src/component/AYM/RatingScreen';
import AuthentificationScreen from './src/component/Authentification/Authentification';

const RootStack = createStackNavigator(
    {
        Meeting: {
            screen: MeetingScreen,
            navigationOptions: {
                title: 'Meeting',
            },
        },
        CreateMeeting: {
            screen: CreateMeetingScreen,
            navigationOptions: {
                title: 'Create meeting',
            },
        },
        OpenMeeting: {
            screen: OpenMeetingScreen,
            navigationOptions: {
                title: 'Open meeting',
            },
        },
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: 'Home',
            },
        },
        Authentification: {
            screen: AuthentificationScreen,
            navigationOptions: {
                title: 'Authentification',
            },
        },
        User: {
            screen: UserScreen,
            navigationOptions: {
                title: 'User',
            },
        },
        Help: HelpScreen,
        Ratings: RatingScreen,
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import UserScreen from './src/component/UserViewer/UserScreen';
import HomeScreen from './src/component/AYM/HomeScreen';
import HelpScreen from './src/component/AYM/HelpScreen';
import RatingScreen from './src/component/AYM/RatingScreen';
import AuthentificationScreen from './src/component/Authentification/Authentification';

const RootStack = createStackNavigator(
    {
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
        initialRouteName: 'Authentification',
        headerMode: 'none',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}
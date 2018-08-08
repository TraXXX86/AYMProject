import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation';

import UserScreen from './src/component/UserViewer/UserScreen';
import HomeScreen from './src/component/AYM/HomeScreen';
import HelpScreen from './src/component/AYM/HelpScreen';
import Authentification from './src/component/Authentification/Authentification';

class AuthentificationScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Authentification />
            </View>
        );
    }
}

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
    },
    {
        initialRouteName: 'Authentification',
        headerMode: 'none'
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}
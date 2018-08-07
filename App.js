import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';

import AYM from './src/component/AYM/AYM';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    leftComponent={{icon: 'menu', color: '#fff'}}
                    centerComponent={{text: 'AYM', style: {color: '#fff'}}}
                    rightComponent={{icon: 'home', color: '#fff'}}
                />
                <AYM server=""
                     meeting_id=""
                     user_id="Prof"
                     user_name="Prof"
                     user_profil="teacher"/>
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
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
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}
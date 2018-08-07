import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation';

import AYM from './src/component/AYM/AYM';
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

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
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
                                this.props.navigation.navigate('Details');
                            }}
                        />
                    }
                />
                <AYM server=""
                     meeting_id="1AF"
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
            <View style={{flex: 1}}>
                <Header
                    centerComponent={{text: 'AYM', style: {color: '#fff'}}}
                    leftComponent={
                        <Icon
                            name='angle-left'
                            type='font-awesome'
                            color='#fff'
                            onPress={() => {
                                this.props.navigation.navigate('Home');
                            }}
                        />
                    }
                />
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>Details Screen</Text>
                    <Button
                        title="Go to Home"
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                    <Button
                        title="Go back"
                        onPress={() => this.props.navigation.goBack()}
                    />
                </View>
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
        Details: DetailsScreen,
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
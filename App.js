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
        const { navigation } = this.props;
        const server_url = navigation.getParam('server_url');
        const meeting_id = navigation.getParam('meeting_id');
        const user_name = navigation.getParam('user_name');
        const user_profil = navigation.getParam('user_profil');

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
                <AYM server={server_url}
                     meeting_id={meeting_id}
                     user_id={user_name}
                     user_name={user_name}
                     user_profil={user_profil}/>
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
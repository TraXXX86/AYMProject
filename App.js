import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation';

import AYM from './src/component/AYM/AYM';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    leftComponent={
                        <Icon
                            name='home'
                            type='font-awesome'
                            color='#fff'
                        />
                    }
                    centerComponent={{text: 'AYM', style: {color: '#fff'}}}
                    rightComponent={
                        <Icon
                            name='angle-right'
                            type='font-awesome'
                            color='#fff'
                            onPress={() => {
                                this.props.navigation.navigate('Details', {
                                    itemId: 86,
                                    otherParam: 'anything you want here',
                                });
                            }}
                        />
                    }
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
            <View style={{flex: 1}}>
                <Header
                    centerComponent={{text: 'AYM', style: {color: '#fff'}}}
                    leftComponent={
                        <Icon
                            name='angle-left'
                            type='font-awesome'
                            color='#fff'
                            onPress={() => {
                                this.props.navigation.navigate('Home', {
                                    itemId: 86,
                                    otherParam: 'anything you want here',
                                });
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
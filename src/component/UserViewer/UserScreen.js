import React from 'react';
import {StyleSheet, View, Button, Image} from 'react-native';
import {Header, Icon, Avatar, Text, Card} from 'react-native-elements';
import {withNavigation} from 'react-navigation';

class UserScreen extends React.Component {
    render() {
        const {navigation} = this.props;
        const user = navigation.getParam('user');
        return (
            <View style={{flex: 1}}>
                <Header
                    centerComponent={{text: 'User details', style: {color: '#fff'}}}
                    leftComponent={
                        <Icon
                            name='angle-left'
                            type='font-awesome'
                            color='#fff'
                            onPress={() => {
                                this.props.navigation.goBack();
                            }}
                        />
                    }
                />
                <Image
                    style={{flex: 1}}
                    source={{uri: user.avatar}}
                    defaultSource={require('../../../resources/img/avatar.jpg')}
                />
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text h4>Id: {user.id}</Text>
                    <Text h4>Username: {user.name}</Text>
                    <Text h4>Login: {user.login}</Text>
                    <Text h4>Profil: {user.type}</Text>
                </View>
            </View>
        );
    }
}

/*
 <Card title='User details'
 style={{flex: 1}}
 image={require('../../../resources/img/avatar.jpg')}>
 <Text h4>Id: {user.id}</Text>
 <Text h4>Username: {user.name}</Text>
 <Text h4>Login: {user.login}</Text>
 <Text h4>Profil: {user.type}</Text>
 </Card>
 */

export default withNavigation(UserScreen);
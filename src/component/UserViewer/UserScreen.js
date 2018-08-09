import React from 'react';
import {StyleSheet, View, Button, Image} from 'react-native';
import {Header, Icon, Avatar, Text, Card} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
//import AvatarAYM from './UserViewer';

class UserScreen extends React.Component {
    render() {
        const {navigation} = this.props;
        const user = navigation.getParam('user');

        return (
            <View style={{flex: 1}}>
                <Header
                    outerContainerStyles={{paddingBottom: 8}}
                    centerComponent={{text: 'User details', style: {color: '#fff', paddingBottom: 8}}}
                    leftComponent={
                        <Icon
                            name='arrow-circle-o-left'
                            type='font-awesome'
                            color='#fff'
                            size={30}
                            onPress={() => {
                                this.props.navigation.goBack();
                            }}
                        />
                    }
                />
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <AvatarAYM avatar={user.avatar}/>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text h4>Id: {user.id}</Text>
                    <Text h4>Username: {user.name}</Text>
                    <Text h4>Profil: {user.type}</Text>
                </View>
            </View>
        );
    }
}

function AvatarAYM(props) {
    if (props.avatar === null || props.avatar === '' || props.avatar === 'https://....') {
        return (<Avatar
            xlarge
            rounded
            icon={{name: 'user', type: 'font-awesome'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
        />);
    }
    return (<Avatar
        xlarge
        rounded
        source={{uri: props.avatar}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
    />);
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
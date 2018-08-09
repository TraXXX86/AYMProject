import React, {Component} from 'react';
import {Image, Text, View, FlatList, ScrollView, ActivityIndicator, StyleSheet} from 'react-native';
import {Avatar, List, ListItem} from 'react-native-elements'
import {withNavigation} from 'react-navigation';

class UserViewer extends Component {

    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;
    }

    goToUserDetails(user) {
        //Alert.alert('🎸', 'You rock ')
        this.navigation.navigate('User', {
            'user': user,
        })
    }

    render() {
        const users = this.props.users;
        /*<Image
         source={{ uri: user.avatar}}
         defaultSource={require('../../../resources/img/avatar.jpg')} />*/
        //let avatarToUse = '../../../resources/img/avatar.png';

        const orderedUsers = [].concat(users).sort(function (a, b) {
            var nameA = a.name.toLowerCase().normalize('NFD'), nameB = b.name.toLowerCase().normalize('NFD');
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });

        try {
            return (
                <ScrollView>
                    <List>
                        {orderedUsers.map((user) => {
                                if (user.name != '' && user.name != 'Psio') {
                                    return <ListItem
                                        roundAvatar
                                        avatar={<AvatarAYM avatar={user.avatar}/>}
                                        key={user.id}
                                        title={user.name}
                                        onPress={() => this.goToUserDetails(user)}
                                    />
                                }
                            }
                        )}
                    </List>
                </ScrollView>
            )
        } catch (error) {
            return (
                <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator size="large" color="#0000ff"/>
                </View>
            );
        }
    }
}

function AvatarAYM(props) {
    if (props.avatar === null || props.avatar === '' || props.avatar === 'https://....') {
        return (<Avatar
            small
            rounded
            icon={{name: 'user', type: 'font-awesome'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
        />);
    }
    return (<Avatar
        small
        rounded
        source={{uri: props.avatar}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
    />);
}

export default withNavigation(UserViewer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})
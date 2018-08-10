import React, {Component} from 'react';
import {Image, Text, View, FlatList, ScrollView, ActivityIndicator, StyleSheet} from 'react-native';
import {Avatar, List, ListItem} from 'react-native-elements'
import {withNavigation} from 'react-navigation';

import AYMAvatar from '../AYMAvatar';

class UserViewer extends Component {

    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;
    }

    goToUserDetails(user) {
        this.navigation.navigate('User', {
            'user': user,
        })
    }

    render() {
        const users = this.props.users;
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
                                        avatar={<AYMAvatar avatar={user.avatar} small={true}/>}
                                        key={user.id}
                                        title={user.name}
                                        subtitle={user.type}
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
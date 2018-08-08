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

        try {
            return (
                <ScrollView>
                    <List>
                        {users.map((user) => {
                                if (user.name != 'Psio') {
                                    return <ListItem
                                        roundAvatar
                                        avatar={<Avatar
                                            small
                                            rounded
                                            //source={{uri: user.avatar}}
                                            icon={{name: 'user', type: 'font-awesome'}}
                                            onPress={() => console.log("Works!")}
                                            activeOpacity={0.7}
                                        />
                                        }
                                        key={user.id}
                                        title={user.name}
                                        onPressRightIcon={() => this.goToUserDetails(user)}
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
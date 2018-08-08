import React, {Component} from 'react';
import {Image, Text, View, FlatList, ScrollView} from 'react-native';
import {Avatar, List, ListItem} from 'react-native-elements'

class UserViewer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const users = this.props.users;

        /*<Image
         source={{ uri: user.avatar}}
         defaultSource={require('../../../resources/img/avatar.jpg')} />*/

        try {
            return (
                <ScrollView style={{flex: 1}}>
                    <List style={{flex: 1}}>
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
                                    />
                                }
                            }
                        )}
                    </List>
                </ScrollView>
            )
        } catch (error) {
            return (
                <Text style={{flex: 1}}>
                    Error : {error.toString()}
                </Text>
            );
        }


    }
}

export default UserViewer;
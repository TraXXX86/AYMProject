import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import { List, ListItem } from 'react-native-elements'

class UserViewer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const users = this.props.users;
        try {
            return (
                <View style={{flex: 1}}>
                    <FlatList
                        style={{flex: 1}}
                        data={users}
                        renderItem={({item}) => {
                            if(item.name !== 'Psio'){
                                return <Text style={{flex: 1}}>{item.name}</Text>
                            }
                        }}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            );
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
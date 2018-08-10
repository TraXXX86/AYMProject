import React from 'react';
import {StyleSheet, View, Modal, Alert, TouchableHighlight, ScrollView} from 'react-native';
import {Header, Text, Icon} from 'react-native-elements';
import {withNavigation} from 'react-navigation';

import AYMButton from '../AYMButton';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: 1,
            modalVisible: true,
        };
    }

    ratingCompleted(rating) {
        console.log("Rating is: " + rating);
        this.setState({[rating]: rating});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    outerContainerStyles={{paddingBottom: 8}}
                    centerComponent={{text: 'Animate Your Meeting', style: {color: '#fff', paddingBottom: 8}}}
                    rightComponent={
                        <Icon
                            name='question-circle'
                            type='font-awesome'
                            color='#fff'
                            size={30}
                            onPress={() => {
                                this.props.navigation.navigate('Help');
                            }}
                        />
                    }
                />
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text h3>What are you doing?</Text>
                    <View style={{marginBottom: 20, marginTop: 50}}>
                        <AYMButton
                            icon={{name: 'plus-circle', type: 'font-awesome'}}
                            title="Create a new meeting"
                            onPress={() => this.props.navigation.navigate('CreateMeeting')}/>
                    </View>
                    <View>
                        <AYMButton
                            icon={{name: 'sign-in', type: 'font-awesome'}}
                            title="Join a meeting"
                            onPress={() => this.props.navigation.navigate('OpenMeeting')}/>
                    </View>
                </View>
            </View>
        );
    }
}

export default withNavigation(HomeScreen);
import React from 'react';
import {StyleSheet, View, Modal, Alert, TouchableHighlight, ScrollView} from 'react-native';
import {Header, Text, Icon, Button, Avatar} from 'react-native-elements';
import {AirbnbRating} from 'react-native-ratings';
import {withNavigation} from 'react-navigation';

import AYMButton from '../AYMButton';

class RatingScreen extends React.Component {

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
                    centerComponent={{text: 'Ratings', style: {color: '#fff', paddingBottom: 8}}}
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
                <View style={{flex: 19, alignItems: 'center', justifyContent: 'center'}}>
                    <Text h3>What did you think of your training ?</Text>
                    <AirbnbRating
                        showRating = {false}
                    />
                </View>
                <View style={{flex: 4, alignItems: 'center', marginBottom: 20}}>
                    <View style={{flex: 1}}>
                        <AYMButton
                            icon={{name: 'check', type: 'font-awesome'}}
                            title="Validate"
                            onPress={() => this.props.navigation.goBack()} />
                    </View>
                </View>
            </View>
        );
    }
}

export default withNavigation(RatingScreen);
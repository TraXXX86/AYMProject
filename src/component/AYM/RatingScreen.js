import React from 'react';
import {StyleSheet, View, Modal, Alert, TouchableHighlight, ScrollView} from 'react-native';
import {Header, Text, Icon, Button, Avatar} from 'react-native-elements';
import {AirbnbRating} from 'react-native-ratings';
import {withNavigation} from 'react-navigation';

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
                    centerComponent={{text: 'Ratings', style: {color: '#fff'}}}
                    leftComponent={
                        <Icon
                            name='arrow-circle-o-left'
                            type='font-awesome'
                            color='#fff'
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
                <View style={{flex: 4, alignItems: 'center'}}>
                    <Button
                        title="Go back"
                        onPress={() => this.props.navigation.goBack()}
                    />
                </View>
            </View>
        );
    }
}

export default withNavigation(RatingScreen);
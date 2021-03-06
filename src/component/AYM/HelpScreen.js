import React from 'react';
import {StyleSheet, Text, View, Modal, Alert, TouchableHighlight, ScrollView, Button} from 'react-native';
import {Header, Icon, Avatar} from 'react-native-elements';
import {withNavigation} from 'react-navigation';

import AYMButton from '../AYMButton';

class HelpScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    outerContainerStyles={{paddingBottom: 8}}
                    centerComponent={{
                        text: 'Help',
                        style: {color: '#fff', paddingBottom: 8}
                    }}
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
                <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{marginTop: 10}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet bibendum nulla, nec
                        iaculis enim. Donec laoreet efficitur ante vitae venenatis. Sed semper sollicitudin euismod.
                        Morbi congue sapien sed sapien eleifend, in consequat metus vehicula. Nulla facilisi. Proin
                        in consequat metus. In facilisis bibendum enim id gravida. Phasellus eleifend leo et mi
                        elementum volutpat. Nam euismod libero et ultrices placerat. Sed hendrerit egestas mattis.
                        Fusce velit purus, egestas quis varius id, dignissim vel tellus. Donec semper commodo augue,
                        dignissim venenatis tortor posuere ac. Quisque consequat odio at convallis vulputate.
                    </Text>
                    <Text>
                        Suspendisse eu eleifend orci, tincidunt bibendum urna. Donec elementum vehicula quam
                        pellentesque maximus. Praesent suscipit malesuada faucibus. Aliquam erat ipsum, fermentum ut
                        augue a, volutpat dictum erat. Sed sollicitudin felis vel ante tempor aliquet. Pellentesque
                        in mollis urna. Ut varius leo condimentum odio pretium varius. Donec tempor ornare urna, vel
                        hendrerit diam facilisis in. Maecenas et erat eget orci euismod semper at eu mi.
                    </Text>
                    <View style={{flex: 4, flexDirection: 'row', marginTop: 20, marginBottom: 20}}>
                        <View style={{flex: 1}}>
                            <AYMButton
                                title="Go back"
                                icon={{name: 'arrow-circle-o-left', type: 'font-awesome'}}
                                onPress={() => this.props.navigation.goBack()}
                            />
                        </View>
                        <View style={{flex: 1}}>
                            <AYMButton
                                title="Rating"
                                icon={{name: 'star', type: 'font-awesome'}}
                                onPress={() => this.props.navigation.navigate('Ratings')}
                            />
                        </View>
                    </View>
                    <View style={{flex: 4, flexDirection: 'row', marginBottom: 20}}>
                        <View style={{flex: 1}}>
                            <AYMButton
                                title="Advanced Authentication"
                                icon={{name: 'cog', type: 'font-awesome'}}
                                onPress={() => this.props.navigation.navigate('Authentification')}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
            ;
    }
}

export default withNavigation(HelpScreen);
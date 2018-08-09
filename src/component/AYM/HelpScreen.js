import React from 'react';
import {StyleSheet, Text, View, Modal, Alert, TouchableHighlight, ScrollView, Button} from 'react-native';
import {Header, Icon, Avatar} from 'react-native-elements';
import {withNavigation} from 'react-navigation';

class HelpScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    centerComponent={{text: 'Help', style: {color: '#fff'}}}
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
                <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                    <Avatar
                        medium
                        rounded
                        overlayContainerStyle={{backgroundColor: '#3D6DCC'}}
                        icon={{
                            name: 'question',
                            type: 'font-awesome',
                            color: '#fff',
                        }}
                        activeOpacity={0.7}
                    />
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet bibendum nulla, nec
                        iaculis enim. Donec laoreet efficitur ante vitae venenatis. Sed semper sollicitudin euismod.
                        Morbi congue sapien sed sapien eleifend, in consequat metus vehicula. Nulla facilisi. Proin
                        in consequat metus. In facilisis bibendum enim id gravida. Phasellus eleifend leo et mi
                        elementum volutpat. Nam euismod libero et ultrices placerat. Sed hendrerit egestas mattis.
                        Fusce velit purus, egestas quis varius id, dignissim vel tellus. Donec semper commodo augue,
                        dignissim venenatis tortor posuere ac. Quisque consequat odio at convallis vulputate.

                        Suspendisse eu eleifend orci, tincidunt bibendum urna. Donec elementum vehicula quam
                        pellentesque maximus. Praesent suscipit malesuada faucibus. Aliquam erat ipsum, fermentum ut
                        augue a, volutpat dictum erat. Sed sollicitudin felis vel ante tempor aliquet. Pellentesque
                        in mollis urna. Ut varius leo condimentum odio pretium varius. Donec tempor ornare urna, vel
                        hendrerit diam facilisis in. Maecenas et erat eget orci euismod semper at eu mi.
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet bibendum nulla, nec
                        iaculis enim. Donec laoreet efficitur ante vitae venenatis. Sed semper sollicitudin euismod.
                        Morbi congue sapien sed sapien eleifend, in consequat metus vehicula. Nulla facilisi. Proin
                        in consequat metus. In facilisis bibendum enim id gravida. Phasellus eleifend leo et mi
                        elementum volutpat. Nam euismod libero et ultrices placerat. Sed hendrerit egestas mattis.
                        Fusce velit purus, egestas quis varius id, dignissim vel tellus. Donec semper commodo augue,
                        dignissim venenatis tortor posuere ac. Quisque consequat odio at convallis vulputate.

                        Suspendisse eu eleifend orci, tincidunt bibendum urna. Donec elementum vehicula quam
                        pellentesque maximus. Praesent suscipit malesuada faucibus. Aliquam erat ipsum, fermentum ut
                        augue a, volutpat dictum erat. Sed sollicitudin felis vel ante tempor aliquet. Pellentesque
                        in mollis urna. Ut varius leo condimentum odio pretium varius. Donec tempor ornare urna, vel
                        hendrerit diam facilisis in. Maecenas et erat eget orci euismod semper at eu mi.
                    </Text>
                    <View style={{flex: 4, flexDirection: 'row', marginTop: 20, marginBottom: 20}}>
                        <Button
                            title="Rating"
                            onPress={() => this.props.navigation.navigate('Ratings')}
                        />
                        <Button
                            title="Go back"
                            onPress={() => this.props.navigation.goBack()}
                        />
                    </View>
                </ScrollView>
            </View>
        )
            ;
    }
}

export default withNavigation(HelpScreen);
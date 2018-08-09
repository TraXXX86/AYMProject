import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
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
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Avatar
                        xlarge
                        rounded
                        overlayContainerStyle={{backgroundColor: '#3D6DCC'}}
                        icon={{
                            name: 'question',
                            type: 'font-awesome',
                            color: '#fff',
                        }}
                        activeOpacity={0.7}
                    />
                    <Button
                        title="Go back"
                        onPress={() => this.props.navigation.goBack()}
                    />
                </View>
            </View>
        );
    }
}

export default withNavigation(HelpScreen);
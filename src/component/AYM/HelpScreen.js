import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {withNavigation} from 'react-navigation';

class HelpScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'red'}}>
                <Header
                    centerComponent={{text: 'Help', style: {color: '#fff'}}}
                    leftComponent={
                        <Icon
                            name='angle-left'
                            type='font-awesome'
                            color='#fff'
                            onPress={() => {
                                this.props.navigation.goBack();
                            }}
                        />
                    }
                />
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>Help Screen</Text>
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
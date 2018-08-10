import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Avatar} from 'react-native-elements';
import AYMHeader from './AYMHeader';
import AYMButton from './AYMButton';

class AYMError extends React.Component {
    render() {
        return (<View style={{flex: 1}}>
            <AYMHeader mode={this.props.mode} navigation={this.props.navigation}/>
            <View style={{flex: 12, alignItems: 'center', justifyContent: 'center'}}>
                <Avatar
                    xlarge
                    rounded
                    overlayContainerStyle={{backgroundColor: '#dd0000'}}
                    icon={{
                        name: 'exclamation-triangle',
                        type: 'font-awesome',
                        color: '#fff',
                    }}
                    activeOpacity={0.7}
                />
                <Text h3>{this.props.message}</Text>
            </View>
            <View style={{flex: 4}}>
                <AYMButton
                    title="Back to previous page"
                    icon={{name: 'arrow-circle-o-left', type: 'font-awesome'}}
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        </View>)
    }
}

export default AYMError;
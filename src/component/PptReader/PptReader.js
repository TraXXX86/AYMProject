import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import NavigationBtn from './NavigationBtn';
import Slide from './Slide';

class PptReader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ws_client: props.wsclient,
            read_only: props.read_only,
        };
    }

    render() {
        console.log('Slide to show : ' + this.props.image);
        return (
            <ScrollView>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{flex: 20}}>
                        <Slide image={this.props.image}/>
                    </View>
                    <View style={{flex: 6}}>
                        <Text>{this.props.title}</Text>
                        <Text>{this.props.slide_title}</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default PptReader;

import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import NavigationBtn from './NavigationBtn';
import Slide from './Slide';

class PptReader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            meeting_id: props.meeting_id,
            ws_client: props.wsclient,
            read_only: props.read_only,
        };
    }

    /**
     * Do WS call to get specific slide
     * @param slide_id Slide id
     */
    goToSlide(slide_id) {
        if (this.state.ws_client != null && this.state.ws_client !== '') {
            this.state.ws_client.send('{ "event": "REQUEST_SLIDE", "meeting": {"id": "' + this.state.meeting_id + '", "current_slide": {"id": "' + slide_id + '"}}}');
        }
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
                    {!this.state.read_only ?
                        <View style={{flex: 6, flexDirection: 'row', marginTop: 10}}>
                            <NavigationBtn onClick={() => this.goToSlide(this.props.previous_slide)}/>
                            <NavigationBtn isNext="true" onClick={() => this.goToSlide(this.props.next_slide)}/>
                        </View> : ''
                    }
                </View>
            </ScrollView>
        );
    }
}

export default PptReader;

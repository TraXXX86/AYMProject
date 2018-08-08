import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
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
        this.state.ws_client.send('{ "event": "REQUEST_SLIDE", "meeting": {"id": "' + this.state.meeting_id + '", "current_slide": {"id": "' + slide_id + '"}}}');
    }

    render() {
        console.log('Slide to show : ' + this.props.image);
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'steelblue',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{flex: 1, backgroundColor: 'steelblue'}}>
                    <Text>{this.props.title}</Text>
                </View>
                <View style={{flex: 1, backgroundColor: 'steelblue'}}>
                    <Text>{this.props.slide_title}</Text>
                </View>
                <View style={{flex: 20, backgroundColor: 'steelblue'}}>
                    <Slide image={this.props.image}/>
                </View>
                {!this.state.read_only ?
                    <View style={{flex: 4, flexDirection: 'row', backgroundColor: 'steelblue'}}>
                        <NavigationBtn onClick={() => this.goToSlide(this.props.previous_slide)}/>
                        <NavigationBtn isNext="true" onClick={() => this.goToSlide(this.props.next_slide)}/>
                    </View> : ''}

            </View>
        );
    }
}

export default PptReader;

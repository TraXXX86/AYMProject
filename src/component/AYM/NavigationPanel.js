import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {responsive} from "react-native-responsive-ui";
import AYMButton from '../AYMButton';

@responsive
class NavigationPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            meeting_id: props.meeting_id,
            ws_client: props.wsclient,
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
        const {width, height} = this.props.window;
        const mode = height > width ? "portrait" : "landscape";

        return (
            <ScrollView>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{flex: 6, flexDirection: 'row', marginTop: 10}}>
                        <View style={{flex: 1}}>
                            <AYMButton
                                leftIcon={{name: 'angle-left', type: 'font-awesome'}}
                                onPress={() => this.goToSlide(this.props.previous_slide)}
                            />
                        </View>
                        {mode !== 'landscape' ? <View style={{flex: 2}}>
                            <AYMButton
                                icon={{name: 'plus-circle', type: 'font-awesome'}}
                                title="Add Quiz"
                            />
                        </View> : <Text></Text>}
                        <View style={{flex: 1}}>
                            <AYMButton
                                rightIcon={{name: 'angle-right', type: 'font-awesome'}}
                                onPress={() => this.goToSlide(this.props.next_slide)}
                            />
                        </View>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

export default NavigationPanel;

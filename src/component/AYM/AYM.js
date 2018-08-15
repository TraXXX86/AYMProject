import React, {Component} from 'react';
import {View, ActivityIndicator, StyleSheet, ScrollView} from 'react-native';
import {Header, Icon, Text, Avatar} from 'react-native-elements';

import PptReader from '../PptReader/PptReader';
import NavigationPanel from './NavigationPanel';
import UserViewer from '../UserViewer/UserViewer';
import AYMError from '../AYMError';
import AYMHeader from '../AYMHeader';

import {withNavigation} from 'react-navigation';
import {responsive} from "react-native-responsive-ui";

@responsive
class AYM extends Component {

    constructor(props) {
        super(props);
        if (props.server != null && props.server !== '') {
            let ws_client = new WebSocket(props.server);

            // Create function to use binding this
            function doWsInit(event) {
                console.log('REQUEST_JOIN for user : ' + props.user_id);
                ws_client.send('{ "meeting": {"id": "' + this.props.meeting_id + '"}, "event": "REQUEST_JOIN", "user": {"id": "' + props.user_id + '","type": "' + props.user_profil + '","name": "' + props.user_name + '","avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}');
            }

            ws_client.onopen = doWsInit.bind(this);

            // Create function to use binding this
            function doWsCall(event) {
                var message = JSON.parse(event.data);
                this.processServerReturn(message);
            }

            ws_client.onmessage = doWsCall.bind(this);

            this.ws_client = ws_client;
        }
        this.state = {
            read_only: props.user_profil === 'learner',
            current_user_name: props.user_name,
        };
    }

    /**
     * Process responses messages
     * @param message
     */
    processServerReturn(message) {
        // TODO : Update a partial state with syntax [name]: value
        let meetingToUse = this.state.meeting;
        let userIdToUse = this.state.user_id;
        let slideToUse = this.state.slide;
        let imageToUse = this.state.image;
        let nextSlideToUse = this.state.next_slide;
        let previousSlideToUse = this.state.previous_slide;
        let usersToUse = this.state.users;

        console.log(message);

        if (message.error) {
            // Update component status
            this.setState({
                error: message.error,
            });
            return;
        }

        switch (message.event) {
            case "JOIN":
                // TODO : Update users list
                meetingToUse = message.meeting;
                if (usersToUse != null) {
                    usersToUse.push(message.user);
                }
                console.log('JOIN for user : ' + message.user.id + ' ' + message.user.name);
                break;
            case "INFO_MEETING":
                meetingToUse = message.meeting;
                // TODO : uncomment to use received slides
                slideToUse = message.meeting.current_slide;
                usersToUse = message.meeting.users;
                console.log('INFO_MEETING : Meeting[' + meetingToUse.id + ']');
                // Get Image url
                this.imgServerUri = message.meeting.server.slide_uri;
                if (slideToUse != null) {
                    this.slides = message.meeting.slides;
                    imageToUse = this.generateImgUrl(this.imgServerUri, message.meeting.id, slideToUse.id);

                    // Get previous and next slide id
                    let slides_nav = this.processSlidesList(this.slides, slideToUse.id);
                    nextSlideToUse = slides_nav.next;
                    previousSlideToUse = slides_nav.previous;
                }
                break;
            case "SLIDE":
                // TODO : uncomment to use received slides
                slideToUse = message.meeting.current_slide;
                console.log('SLIDE : Meeting[' + meetingToUse.id + '] Slide[' + slideToUse.id + ']');
                if (slideToUse != null) {
                    imageToUse = this.generateImgUrl(this.imgServerUri, message.meeting.id, slideToUse.id);
                    // Get previous and next slide id
                    slides_nav = this.processSlidesList(this.slides, slideToUse.id);
                    nextSlideToUse = slides_nav.next;
                    previousSlideToUse = slides_nav.previous;
                }
                break;
            default:
                break;
        }
        // Update component status
        this.setState({
            meeting: meetingToUse,
            user_id: userIdToUse,
            slide: slideToUse,
            image: imageToUse,
            next_slide: nextSlideToUse,
            previous_slide: previousSlideToUse,
            users: usersToUse,
            error: null,
        })
    }

    /**
     * Generate url to get Slide image jpg
     * @param serverPath : URL tempalte
     * @param meeting_id : meeting id which will be replaced {meeting} pattern into URL template
     * @param slide_id : slide id which will be replaced {meeting} pattern into URL template
     * @return URL use to get Slide image jpg
     */
    generateImgUrl(serverPath, meeting_id, slide_id) {
        // https://xxxxxxxx/{meeting}/slides/{slide}
        let result = serverPath;
        result = result.replace('{meeting}', meeting_id);
        result = result.replace('{slide}', slide_id);
        return result;
    }

    /**
     * Calcul the next and previous slide ID
     * @param slides : Ordered slides list
     * @param current_slide_id : Current slide ID
     * @return Array with keys 'previous' and 'next'
     */
    processSlidesList(slides, current_slide_id) {
        let result;
        let previous = null;
        let next = null;
        for (var i = 0; i < slides.length; i++) {
            if (slides[i].id === current_slide_id) {
                if (i > 0) {
                    previous = slides[i - 1].id;
                }
                if (i < slides.length - 1) {
                    next = slides[i + 1].id;
                }
                result = {
                    'previous': previous,
                    'next': next,
                };
                break;
            }
        }
        return result;
    }

    get style() {
        return ResponsiveStyleSheet.select([{
            query: {orientation: "landscape"},
            style: {
                slide: {
                    flex: 1,
                    width: SCREEN_WIDTH,
                    height: SCREEN_HEIGHT,
                }
            }
        }, {
            query: {orientation: "portrait"},
            style: {
                slide: {
                    flex: 1,
                    width: SCREEN_WIDTH,
                    height: 200,
                }
            }
        }]);
    }

    render() {
        const {width, height} = this.props.window;
        const mode = height > width ? "portrait" : "landscape";

        if (this.state.meeting != null) {
            // If we have a meeting and a slide to show
            if (this.state.slide != null) {
                let styleToUse = styles.ppt_reader;
                if (this.state.read_only) {
                    styleToUse = styles.ppt_reader_read_only;
                }
                return (
                    <View style={{flex: 1}}>
                        <AYMHeader mode={mode} title={this.state.meeting.titre} navigation={this.props.navigation}/>
                        <WarningMessage error={this.state.error}/>
                        <View style={styleToUse}>
                            <ScrollView>
                                <PptReader slide_title={this.state.slide.title}
                                           image={this.state.image}/>
                                {!this.state.read_only ? <NavigationPanel
                                    wsclient={this.ws_client}
                                    meeting_id={this.state.meeting.id}
                                    next_slide={this.state.next_slide}
                                    previous_slide={this.state.previous_slide}
                                /> : <Text></Text>}
                            </ScrollView>
                        </View>
                        {mode !== 'landscape' ? <View style={{flex: 13}}>
                            <UserViewer users={this.state.users}/>
                        </View> : <Text></Text> }
                    </View>
                );
            }
            // If we have a meeting without slides
            else {
                // If user is a learner
                if (this.state.read_only) {
                    return (
                        <View style={{flex: 1}}>
                            <AYMHeader mode={mode} title={this.state.meeting.titre} navigation={this.props.navigation}/>
                            <WarningMessage error={this.state.error}/>
                            {mode !== 'landscape' ? <View style={{flex: 13}}>
                                <UserViewer users={this.state.users}/>
                            </View> : <Text></Text> }
                        </View>
                    );
                }
                // If user is a teacher
                else {
                    return (
                        <View style={{flex: 1}}>
                            <AYMHeader mode={mode} title={this.state.meeting.titre} navigation={this.props.navigation}/>
                            <WarningMessage error={this.state.error}/>
                            <NavigationPanel
                                wsclient={this.ws_client}
                                next_slide={this.state.next_slide}
                                previous_slide={this.state.previous_slide}
                            />
                            <View style={{flex: 13}}>
                                <UserViewer users={this.state.users}/>
                            </View>
                        </View>
                    );
                }
            }
        } else if (this.ws_client == null && this.state.meeting == null) {
            return (
                <AYMError mode={mode}
                          navigation={this.props.navigation}
                          message='Unable to access server, please try again or contact your administrator'/>
            );
        } else {
            return (
                <View style={{flex: 1}}>
                    <AYMHeader mode={mode} navigation={this.props.navigation}/>
                    <View style={[styles.container, styles.horizontal]}>
                        <ActivityIndicator size="large" color="#0000ff"/>
                    </View>
                </View>
            );
        }
    }
}

function WarningMessage(props) {
    if (props.error) {
        return (
            <View style={{flex: 1, backgroundColor: 'red'}}>
                <Text>Error : {props.error}</Text>
            </View>
        );
    } else {
        return <Text></Text>;
    }
}

export default withNavigation(AYM);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    ppt_reader_read_only: {
        flex: 12
    },
    ppt_reader: {
        flex: 18
    }
})
import React, {Component} from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import {Header, Icon} from 'react-native-elements';

import PptReader from '../PptReader/PptReader';
import UserViewer from '../UserViewer/UserViewer';
import {withNavigation} from 'react-navigation';
import {responsive} from "react-native-responsive-ui";

@responsive
class AYM extends Component {

    constructor(props) {
        super(props);
        let ws_client = new WebSocket(props.server);

        // Create function to use binding this
        function doWsInit(event) {
            console.log('REQUEST_JOIN for user : ' + props.user_id);
            ws_client.send('{ "meeting": {"id": "' + this.props.meeting_id + '"}, "event": "REQUEST_JOIN", "user": {"id": "' + props.user_id + '","type": "' + props.user_profil + '","name": "' + props.user_name + '","avatar": "https://...."}}');
        }

        ws_client.onopen = doWsInit.bind(this);

        // Create function to use binding this
        function doWsCall(event) {
            var message = JSON.parse(event.data);
            this.processServerReturn(message);
        }

        ws_client.onmessage = doWsCall.bind(this);

        this.ws_client = ws_client;
        this.state = {
            slide: {
                id: 1
            },
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
                slideToUse = message.meeting.current_slide;
                usersToUse = message.meeting.users;
                console.log('INFO_MEETING : Meeting[' + meetingToUse.id + '] Slide[' + slideToUse.id + ']');
                // Get Image url
                this.imgServerUri = message.meeting.server.slide_uri;
                this.slides = message.meeting.slides;
                imageToUse = this.generateImgUrl(this.imgServerUri, message.meeting.id, message.meeting.current_slide.id);
                // Get previous and next slide id
                let slides_nav = this.processSlidesList(this.slides, message.meeting.current_slide.id);
                nextSlideToUse = slides_nav.next;
                previousSlideToUse = slides_nav.previous;
                break;
            case "SLIDE":
                slideToUse = message.meeting.current_slide;
                console.log('SLIDE : Meeting[' + meetingToUse.id + '] Slide[' + slideToUse.id + ']');
                imageToUse = this.generateImgUrl(this.imgServerUri, message.meeting.id, message.meeting.current_slide.id);
                // Get previous and next slide id
                slides_nav = this.processSlidesList(this.slides, message.meeting.current_slide.id);
                nextSlideToUse = slides_nav.next;
                previousSlideToUse = slides_nav.previous;
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

    render() {
        const {width, height} = this.props.window;
        const mode = height > width ? "portrait" : "landscape";

        if (this.state.meeting != null && this.state.slide != null) {
            return (
                <View style={{flex: 1}}>
                    <HeaderAYM mode={mode} title={this.state.meeting.titre} navigation={this.props.navigation}/>
                    <WarningMessage error={this.state.error}/>
                    <View style={{flex: 18}}>
                        <PptReader wsclient={this.ws_client}
                                   meeting_id={this.state.meeting.id}
                                   slide_title={this.state.slide.title}
                                   image={this.state.image}
                                   next_slide={this.state.next_slide}
                                   previous_slide={this.state.previous_slide}
                                   read_only={this.state.read_only}/>
                    </View>
                    {mode !== 'landscape' ? <View style={{flex: 13}}>
                        <UserViewer users={this.state.users}/>
                    </View> : '' }
                </View>
            );
        } else {
            return (
                <View style={{flex: 1}}>
                    <HeaderAYM mode={mode} navigation={this.props.navigation}/>
                    <View style={[styles.container, styles.horizontal]}>
                        <ActivityIndicator size="large" color="#0000ff"/>
                    </View>
                </View>
            );
        }
    }
}

function HeaderAYM(props) {
    if (props.mode !== 'landscape') {
        return (
            <View>
                <Header
                    leftComponent={
                        <Icon
                            name='sign-out'
                            type='font-awesome'
                            color='#fff'
                            onPress={() => {
                                props.navigation.navigate('Authentification');
                            }}
                        />
                    }
                    centerComponent={{text: props.title ? props.title : 'AYM', style: {color: '#fff'}}}
                    rightComponent={
                        <Icon
                            name='question-circle'
                            type='font-awesome'
                            color='#fff'
                            onPress={() => {
                                props.navigation.navigate('Help');
                            }}
                        />
                    }
                />
            </View>)
    } else {
        return (<View style={{flex: 2, backgroundColor: '#3D6DCC'}}>
        </View>);
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
        return '';
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
    }
})
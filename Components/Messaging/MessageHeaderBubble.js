import React from 'react';
import {TouchableHighlight, View, Image, Text} from 'react-native';
import Styles from './ChatBubbleStyles.js'


export class MessageHeaderBubble extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            source: props.source,
            title: props.title
        }
    }
    render() {
        return (
            <View style={Styles.container}>
                <TouchableHighlight style={Styles.button}>
                    <Image style={{height: 45, width: 45, borderRadius:22.5}} source={this.state.source} />
                </TouchableHighlight>
            </View>
        );
    }
}

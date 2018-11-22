import React from 'react';
import {TouchableHighlight, View, Image, Text} from 'react-native';
import Styles from './ChatBubbleStyles.js'


export class ConversationListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            source: props.source,
            title: props.title,

        }
    }
    render() {
        return (

            <View style={{height: 50, backgroundColor:'red', alignItems: 'stretch'}}>
            <Text style={Styles.title}>{this.state.title}</Text>
            </View>
        );
    }
}

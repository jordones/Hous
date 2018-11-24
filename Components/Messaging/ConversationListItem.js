import React from 'react';
import {TouchableHighlight, View, Image, Text, StyleSheet} from 'react-native';
import {ChatBubble} from './ChatBubble.js';
import Styles from './ConversationListStyles.js'

export class ConversationListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            source: props.source,
            title: props.title,
            message: props.message

        }
    }
    render() {
        return (
            <View style={Styles.cardRoot}>
              <View style={Styles.imageContainer}>
              <ChatBubble source="../../assets/house1.jpg" title=""/>
              </View>
              <View style={Styles.rightContainer}>
              <Text style={Styles.text}>
                    {this.state.title}
              </Text>
              <Text style={Styles.message}>
                { this.state.message}
              </Text>
              </View>
              </View>
        );
    }
}

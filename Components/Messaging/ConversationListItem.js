import React from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet, Alert} from 'react-native';
import {ChatBubble} from './ChatBubble.js';
import Styles from './ConversationListStyles.js'
import { withNavigation } from 'react-navigation';


export class ConversationListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            conversation: props.conversation,


        }
    }

    render() {
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Message', {
                conversation: this.state.conversation,
                messageData: this.state.conversation.messageData
            }) }}>
            <View style={Styles.cardRoot}>
                  <View style={Styles.imageContainer}>
                  <ChatBubble source={this.state.conversation.uri} title=""/>
                  </View>
                  <View style={Styles.rightContainer}>
                  <Text
                    style={Styles.text}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                  >
                        {this.state.conversation.title}
                  </Text>
                  <Text
                    style={Styles.message}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                  >
                    { this.state.conversation.message}
                  </Text>
                  </View>
              </View>
              </TouchableOpacity>
        );
    }
}

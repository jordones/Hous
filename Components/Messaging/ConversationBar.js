import React from 'react';
import {TouchableHighlight, View, Image, Text, ScrollView} from 'react-native';
import Styles from './ConversationBarStyles.js';
import {ChatBubble} from './ChatBubble.js';


export class ConversationBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            conversations: props.conversations
        }
    }

    renderConversations = () => {
        return this.state.conversations.map((conversation) => {
            return (
                <ChatBubble key={conversation.id} source={conversation.uri} title={conversation.title}/>
            );
        });
    }

    render() {
            return (
                <View style={Styles.container}>
                  <Text style={Styles.title}>Start a New Conversation</Text>
                  <View style={Styles.scrollWrapper}>
                  <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      style={Styles.scroll}>
                      {this.renderConversations()}
                  </ScrollView>
                  </View>
                </View>
        );
    }
}

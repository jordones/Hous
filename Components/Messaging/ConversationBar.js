import React from 'react';
import {TouchableHighlight, View, Image, Text, ScrollView} from 'react-native';
import Styles from './ConversationBarStyles.js'
import {ChatBubble} from './ChatBubble.js'


export class ConversationBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            conversations: props.conversations
        }
    }

    renderConversations = () => {
        return this.state.conversations.map((conversation) => {
            <View>
            <Text>{conversation.title}</Text>
            </View>

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
                      <ChatBubble source="../../assets/house1.jpg" title="House"/>
                      <ChatBubble source="../../assets/house2.jpg" title="House"/>
                      <ChatBubble source="../../assets/house3.jpg" title="House"/>
                      <ChatBubble source="../../assets/house4.jpg" title="House"/>
                      <ChatBubble source="../../assets/house5.jpg" title="House"/>
                      <ChatBubble source="../../assets/house3.jpg" title="House"/>
                      <ChatBubble source="../../assets/house4.jpg" title="House"/>
                      <ChatBubble source="../../assets/house1.jpg" title="House"/>
                  </ScrollView>
                  </View>
                </View>
        );
    }
}

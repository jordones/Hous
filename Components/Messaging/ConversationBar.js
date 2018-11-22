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
            <Text>{conversation.title} qwe</Text>
            </View>

        });
    }

    render() {
            return (
                <View style={{flex: 1}}>
                  <View style={Styles.title}>
                  <Text>Start a New Conversation</Text>
                  </View>
                  <View style={{height: 110, paddingTop: 10}}>
                  <ScrollView
                      horizontal= {true}
                      style={{height:110}}>
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

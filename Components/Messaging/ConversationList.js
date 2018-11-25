import React from 'react';
import {TouchableHighlight, View, Image, Text, ScrollView} from 'react-native';
import Styles from './ConversationListStyles.js'
import {ConversationListItem} from './ConversationListItem.js'

export class ConversationList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            conversations: props.conversations
        }
    }

    renderConversations = () => {
        return this.state.conversations.map((conversation) => {
            return (
                <ConversationListItem key={conversation.id} source={conversation.uri} title={conversation.title} message={conversation.message} nav={this.props.nav}/>

            );
        });
    }

    render() {
        return (
            <View style={Styles.listContainer}>
                    <Text style={Styles.title}>Conversations</Text>
                <ScrollView
                     contentContainerStyle={Styles.scroll}
                     showsVerticalScrollIndicator= {false}
                 >
                {this.renderConversations()}
                </ScrollView>
            </View>

        );
    }
}

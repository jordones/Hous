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

    render() {
        return (
            <View style={Styles.listContainer}>
                    <Text style={Styles.title}>Conversations</Text>
                <ScrollView
                     contentContainerStyle={Styles.scroll}
                     showsVerticalScrollIndicator= {false}
                 >
                  <ConversationListItem source="../../assets/house1.jpg" title="House" message="Hello I am interested in renting.."/>
                  <ConversationListItem source="../../assets/house2.jpg" title="House" message="Hello I am interested in renting.."/>
                  <ConversationListItem source="../../assets/house3.jpg" title="House" message="Hello I am interested in renting.."/>
                  <ConversationListItem source="../../assets/house4.jpg" title="House" message="Hello I am interested in renting.."/>
                  <ConversationListItem source="../../assets/house5.jpg" title="House" message="Hello I am interested in renting.."/>
                  <ConversationListItem source="../../assets/house3.jpg" title="House" message="Hello I am interested in renting.."/>
                  <ConversationListItem source="../../assets/house4.jpg" title="House" message="Hello I am interested in renting.."/>
                  <ConversationListItem source="../../assets/house1.jpg" title="House" message="Hello I am interested in renting.."/>
                </ScrollView>
            </View>

        );
    }
}

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
            <View style={{flex:3,
                                flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'stretch',}}>
                <View style={Styles.title}>
                    <Text>Conversations</Text>
                </View>
                <ScrollView
                     contentContainerStyle={{
                       flexGrow: 1,
                       justifyContent: 'center',
                       alignItems: 'stretch'
                   }}>
                  <ConversationListItem source="../../assets/house1.jpg" title="House"/>
                  <ConversationListItem source="../../assets/house2.jpg" title="House"/>
                  <ConversationListItem source="../../assets/house3.jpg" title="House"/>
                  <ConversationListItem source="../../assets/house4.jpg" title="House"/>
                  <ConversationListItem source="../../assets/house5.jpg" title="House"/>
                  <ConversationListItem source="../../assets/house3.jpg" title="House"/>
                  <ConversationListItem source="../../assets/house4.jpg" title="House"/>
                  <ConversationListItem source="../../assets/house1.jpg" title="House"/>
                </ScrollView>
            </View>

        );
    }
}

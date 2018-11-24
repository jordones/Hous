import React from "react";
import { View } from "react-native";
import {NavBarScreen} from '../NavBarScreen';
import {ConversationBar} from './Components/Messaging/ConversationBar.js';
import {ConversationList} from './Components/Messaging/ConversationList.js';
/*
 * Conversation Info provided below is placeholder data for the purpose of supplying
 * date to the chatscreen components
 * - Jordon
*/
const ConversationBarData = [
  {id: "1", uri: require('./assets/house1.jpg'), title: "Bathroom"},
  {id: "2", uri: require('./assets/house2.jpg'), title: "Pineapple Under the Sea"},
  {id: "3", uri: require('./assets/house3.jpg'), title: "The Office"},
  {id: "4", uri: require('./assets/house4.jpg'), title: "Bedroom"},
  {id: "5", uri: require('./assets/house5.jpg'), title: "Dorm"}
]

const ConversationListData = [
  {id: "1", uri: require('./assets/house1.jpg'), title: "Placeholder", text: "blah blah blah"},
  {id: "2", uri: require('./assets/house2.jpg'), title: "Placeholder", text: "blah blah blah"},
  {id: "3", uri: require('./assets/house3.jpg'), title: "Placeholder", text: "blah blah blah"},
  {id: "4", uri: require('./assets/house4.jpg'), title: "Placeholder", text: "blah blah blah"},
  {id: "5", uri: require('./assets/house5.jpg'), title: "Placeholder", text: "blah blah blah"}
]

export class ChatScreen extends NavBarScreen {

  render() {
    return (
      <View style={{ padding: 5 ,flex: 1, alignItems: "stretch", justifyContent: "center" }}>
        <ConversationBar conversations={ConversationBarData}/>
        <ConversationList conversations={ConversationListData}/>
      </View>
    );
  }
}

import React from "react";
import { View, Button } from "react-native";
import {NavBarScreen} from '../../headers/NavBarScreen';
import {ConversationBar} from './ConversationBar.js';
import {ConversationList} from './ConversationList.js';
/*
 * Conversation Info provided below is placeholder data for the purpose of supplying
 * date to the chatscreen components
 * - Jordon
*/
const ConversationBarData = [
  {id: "1", uri: require('../../assets/rmwview.jpg'), title: "Room With a View",
    messageData:[]},
  {id: "2", uri: require('../../assets/2bdrm.jpg'), title: "2 Bedroom Apartment",
    messageData:[]},
  {id: "3", uri: require('../../assets/49queen.jpg'), title: "49 Queen St East",
    messageData:[]},
  {id: "4", uri: require('../../assets/avalonpkwy.jpg'), title: "Avalon on the Parkway",
    messageData:[]},
  {id: "5", uri: require('../../assets/exhibition.jpg'), title: "Exhibition Mews",
    messageData:[]}
]

const ConversationListData = [
  {id: "1", uri: require('../../assets/house1.jpg'), title: "Ultra Clean Public Bathroom Urinal for Rent in Urban Space", message: "Ok, thank you.",
    messageData: [
        {id: 1, sender: 'send', content: 'Hey, I\'m interested in this house. Is it still available?'},
        {id: 2, sender: 'receive', content: 'Hi, Yes it is still available. Is there anything that you\'d like to know about it?'},
        {id: 3, sender: 'send', content: 'No that is all, thank you.'},
        {id: 4, sender: 'receive', content: 'Ok, thank you.'},

    ]},
  {id: "2", uri: require('../../assets/house2.jpg'), title: "Pineapple Under the Sea", message: "blah blah blah",
    messageData:[]},
  {id: "3", uri: require('../../assets/house3.jpg'), title: "The Office", message: "blah blah blah",
    messageData:[]},
  {id: "4", uri: require('../../assets/house4.jpg'), title: "Bedroom", message: "A room for rent in a shared house for students, available immediately, 15 minutes walk to U of G, close to Stone Road Mall and Metro grocery. Rent includes heat, hydro, central air, internet and all utilities, laundry is on site with limited parking as well. Plus the house is cleaned once a month by a professional cleaning service.",
    messageData:[]},
  {id: "5", uri: require('../../assets/house5.jpg'), title: "Dorm", message: "Perfect for students.",
    messageData:[]}
]

export class ChatScreen extends NavBarScreen {

  render() {
    return (
      <View style={{ padding: 5 ,flex: 1, alignItems: "stretch", justifyContent: "center" }}>
        <ConversationBar conversations={ConversationBarData} navigation={this.props.navigation}/>
        <ConversationList conversations={ConversationListData} navigation={this.props.navigation }/>
      </View>
    );
  }
}

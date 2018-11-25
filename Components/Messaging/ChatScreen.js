import React from "react";
import { View, Button } from "react-native";
import {NavBarScreen} from '../../NavBarScreen';
import {ConversationBar} from './ConversationBar.js';
import {ConversationList} from './ConversationList.js';
/*
 * Conversation Info provided below is placeholder data for the purpose of supplying
 * date to the chatscreen components
 * - Jordon
*/
const ConversationBarData = [
  {id: "1", uri: require('../../assets/house1.jpg'), title: "Bathroom"},
  {id: "2", uri: require('../../assets/house2.jpg'), title: "Pineapple Under the Sea"},
  {id: "3", uri: require('../../assets/house3.jpg'), title: "The Office"},
  {id: "4", uri: require('../../assets/house4.jpg'), title: "Bedroom"},
  {id: "5", uri: require('../../assets/house5.jpg'), title: "Dorm"}
]

const ConversationListData = [
  {id: "1", uri: require('../../assets/house1.jpg'), title: "Ultra Clean Public Bathroom Urinal for Rend in Urban Space", message: "blah blah blah"},
  {id: "2", uri: require('../../assets/house2.jpg'), title: "Pineapple Under the Sea", message: "blah blah blah"},
  {id: "3", uri: require('../../assets/house3.jpg'), title: "The Office", message: "blah blah blah"},
  {id: "4", uri: require('../../assets/house4.jpg'), title: "Bedroom", message: "A room for rent in a shared house for students, available immediately, 15 minutes walk to U of G, close to Stone Road Mall and Metro grocery. Rent includes heat, hydro, central air, internet and all utilities, laundry is on site with limited parking as well. Plus the house is cleaned once a month by a professional cleaning service."},
  {id: "5", uri: require('../../assets/house5.jpg'), title: "Dorm", message: "blah blah blah"}
]

export class ChatScreen extends NavBarScreen {

  render() {
    return (
      <View style={{ padding: 5 ,flex: 1, alignItems: "stretch", justifyContent: "center" }}>
        <ConversationBar conversations={ConversationBarData}/>
        <ConversationList conversations={ConversationListData} nav={this.props.navigation }/>
      </View>
    );
  }
}

import React from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet, Alert} from 'react-native';
import {ChatBubble} from './ChatBubble.js';
import Styles from './ConversationListStyles.js'

export class ConversationListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            source: props.source,
            title: props.title,
            message: props.message

        }
    }

    _onPressButton() {
   Alert.alert('You opened a chat!')
 }

    render() {
        return (
            <TouchableOpacity onPress={this._onPressButton}>
            <View style={Styles.cardRoot}>
                  <View style={Styles.imageContainer}>
                  <ChatBubble source={this.state.source} title=""/>
                  </View>
                  <View style={Styles.rightContainer}>
                  <Text
                    style={Styles.text}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                  >
                        {this.state.title}
                  </Text>
                  <Text
                    style={Styles.message}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                  >
                    { this.state.message}
                  </Text>
                  </View>
              </View>
              </TouchableOpacity>
        );
    }
}

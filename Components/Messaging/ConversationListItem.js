import React from 'react';
import {TouchableHighlight, View, Image, Text, StyleSheet} from 'react-native';
import Styles from './ChatBubbleStyles.js';
import {ChatBubble} from './ChatBubble.js';


export class ConversationListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            source: props.source,
            title: props.title,
            message: props.message

        }
    }
    render() {
        return (
            <View style={styles.cardRoot}>
              <View style={styles.imageContainer}>
              <ChatBubble source="../../assets/house1.jpg" title=""/>
              </View>
              <View style={styles.rightContainer}>
              <Text style={styles.text}>
                    {this.state.title}
              </Text>
              <Text style={styles.message}>
                { this.state.message}
              </Text>
              </View>
              </View>
        );
    }
}

const styles = StyleSheet.create({
  cardRoot: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth : 2,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: -20,
    marginRight: -10,
    padding: 0
  },
  rightContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  text: {
      alignContent: 'flex-start',
      color: 'rgba(0, 0, 0, 0.9)',
      fontSize: 16
  },
  message : {
      alignContent: 'flex-start',
      color: 'rgba(0, 0, 0, 0.6)',
      fontSize: 12
  }

});

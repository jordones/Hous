import React from 'react';
import {TouchableHighlight, View, Image, Text} from 'react-native';
import Styles from './ChatBubbleStyles.js'


export class ChatBubble extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            source: props.source,
            title: props.title
        }
    }
    render() {
        return (
            <View style={Styles.container}>
                <TouchableHighlight
                    style={Styles.button}
                    underlayColor = "transparent" 
                >
                    
                    <Image style={Styles.mainButtonImage} source={this.state.source} />
                </TouchableHighlight>
                <Text
                    style={Styles.title}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}>{this.state.title}</Text>
            </View>
        );
    }
}

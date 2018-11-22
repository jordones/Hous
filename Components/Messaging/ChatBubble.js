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
            <View style={{flex:1}}>
            <TouchableHighlight style={Styles.button}>
                <Image style={Styles.mainButtonImage} source={{uri: 'https://images.adsttc.com/media/images/58bc/4293/e58e/cecd/d000/016d/newsletter/FEATURED_IMAGE.jpg?1488732815'}} />
            </TouchableHighlight>
            <Text style={Styles.title}>{this.state.title}</Text>
            </View>
        );
    }
}

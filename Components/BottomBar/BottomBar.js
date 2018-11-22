import React from 'react';
import {TouchableHighlight, View, Image} from 'react-native';
import Styles from './BottomBarStyles.js'

export class BottomBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <View style={Styles.bottomBar}>
                <View style={{flex:1}}>
                <TouchableHighlight style={Styles.button} onPress={ this.props.updateBack }>
                    <Image style={Styles.smallButtonImage} source={require('../../assets/icons/bottom-bar/reverseIcon.png')} />
                </TouchableHighlight>
                </View>
                <View style={{flex:1}}>
                <TouchableHighlight style={Styles.button} onPress={ this.props.updateDislike }>
                    <Image style={Styles.mainButtonImage} source={require('../../assets/icons/bottom-bar/homeHate.png')} />
                </TouchableHighlight>
                </View>
                <View style={{flex:1}}>
                <TouchableHighlight style={Styles.button} onPress={ this.props.updateLike }>
                    <Image style={Styles.mainButtonImage} source={require('../../assets/icons/bottom-bar/homeHeart.png')} />
                </TouchableHighlight>
                </View>
                <View style={{flex:1}}>
                <TouchableHighlight style={Styles.button}>
                    <Image style={Styles.smallButtonImage} source={require('../../assets/icons/chat.png')} />
                </TouchableHighlight>
                </View>
            </View>
        );
    }
}
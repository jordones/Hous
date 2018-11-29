import React from 'react'
import { TouchableHighlight, View, Image } from 'react-native'
import styles from './BottomBarStyles.js'

export class BottomBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.bottomBar}>
                <View style={{ flex: 1 }}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.props.updateBack}
                        underlayColor = "transparent"
                    >
                        <Image
                            style={styles.smallButtonImage}
                            source={require('../../assets/icons/bottom-bar/reverseIcon.png')}
                            resizeMode="contain"
                        />
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableHighlight
                        underlayColor = "transparent"
                        style={styles.button}
                        onPress={this.props.updateDislike}
                    >
                        <Image
                            style={styles.mainButtonImage}
                            source={require('../../assets/icons/bottom-bar/homeHate.png')}
                            resizeMode="contain"
                        />
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableHighlight
                        underlayColor = "transparent"
                        style={styles.button}
                        onPress={this.props.updateLike}
                    >
                        <Image
                            style={styles.mainButtonImage}
                            source={require('../../assets/icons/bottom-bar/homeHeart.png')}
                            resizeMode="contain"
                        />
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableHighlight
                         style={styles.button}
                         underlayColor = "transparent" 
                         >
                        <Image
                            style={styles.smallButtonImage}
                            source={require('../../assets/icons/chat.png')}
                            resizeMode="contain"
                        />
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

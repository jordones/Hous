import React from 'react'
import { TouchableHighlight, Image, StyleSheet } from 'react-native'

export class NavBarScreen extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle: (
            <TouchableHighlight
                onPress={() => navigation.navigate('Home')}
                underlayColor="rgba(255,255,255,1)"
            >
                <Image
                    style={styles.homeIcon}
                    resizeMode="contain"
                    source={require('./assets/icons/logos/LogoIcon.png')}
                    onClick={() => navigation.navigate('Home')}
                />
            </TouchableHighlight>
        ),
        headerRight: (
            <TouchableHighlight
                onPress={() => navigation.navigate('Chat')}
                underlayColor="rgba(255,255,255,1)"
            >
                <Image
                    style={[{ marginRight: 10 }, styles.icon]}
                    resizeMode="contain"
                    source={require('./assets/icons/chat.png')}
                    onClick={() => navigation.navigate('Chat')}
                />
            </TouchableHighlight>
        ),
        headerLeft: (
            <TouchableHighlight
                onPress={() => navigation.navigate('Profile')}
                underlayColor="rgba(255,255,255,1)"
            >
                <Image
                    style={[styles.icon, { marginLeft: 10 }]}
                    resizeMode="contain"
                    source={require('./assets/icons/user.png')}
                    onClick={() => navigation.navigate('Profile')}
                />
            </TouchableHighlight>
        ),
    })
}

const styles = StyleSheet.create({
    icon: {
        opacity: 0.4,
        width: 24,
        height: 24,
    },
    homeIcon: {
        margin: 50,
        width: 50,
        height: 50,
    },
})

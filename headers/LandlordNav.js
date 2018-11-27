import React from 'react'
import { TouchableHighlight, Image, StyleSheet } from 'react-native'

export class LandlordNav extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle: (
            <TouchableHighlight
                onPress={() => navigation.navigate('Listings')}
                underlayColor="rgba(255,255,255,1)"
            >
                <Image
                    style={styles.homeIcon}
                    resizeMode="contain"
                    source={require('../assets/icons/logos/logoLandscape.png')}
                />
            </TouchableHighlight>
        ),
        headerRight: (
            null
        ),
        headerLeft: (
            null
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
        width: 150,
    },
})

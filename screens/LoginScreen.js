import React from 'react'
import { LinearGradient } from 'expo'
import { TouchableHighlight, Image, Text, StyleSheet } from 'react-native'

export class LoginScreen extends React.Component {
    // Disable the nav header bar on the login screen
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <LinearGradient
                colors={['#2da1ff', '#4ba9f2', '#03f98a']}
                style={styles.gradient}
            >
                <Image
                    style={styles.image}
                    resizeMod="contain"
                    source={require('../assets/icons/logos/logoWhite.png')}
                />
                <Text style={styles.textHeader}>Hoüs</Text>
                <Text style={styles.textSubtitle}>Sign In To Get Started</Text>
                <TouchableHighlight
                    style={[{ marginBottom: 35 }, styles.button]}
                    onPress={() => this.props.navigation.navigate('Home')}
                    underlayColor="rgba(255,255,255,0.2)"
                >
                    <Text
                        style={[
                            { paddingLeft: 45, paddingRight: 45 },
                            styles.loginText,
                        ]}
                    >
                        LOGIN AS RENTER
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Listings')}
                    underlayColor="rgba(255,255,255,0.2)"
                >
                    <Text
                        style={[
                            { paddingLeft: 33, paddingRight: 33 },
                            styles.loginText,
                        ]}
                    >
                        LOGIN AS LANDLORD
                    </Text>
                </TouchableHighlight>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        marginBottom: 10,
        maxWidth: 150,
        maxHeight: 150,
    },
    textHeader: {
        color: 'white',
        fontSize: 32,
        fontWeight: '800',
        margin: 5,
    },
    textSubtitle: {
        color: 'white',
        fontSize: 21,
        fontWeight: '400',
        marginBottom: 30,
    },
    loginText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400',
    },
    button: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 12,
        borderColor: 'white',
        borderWidth: 2,
        padding: 10,
        marginBottom: 35,
    },
})

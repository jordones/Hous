import React from 'react'
import { LinearGradient } from 'expo'
import { TouchableHighlight, Image, Text } from 'react-native'

export class LoginScreen extends React.Component {
    // Disable the nav header bar on the login screen
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <LinearGradient
                colors={['#2da1ff', '#4ba9f2', '#03f98a']}
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image
                    style={{ marginBottom: 10, maxWidth: 150, maxHeight: 150 }}
                    source={require('../assets/icons/logos/logoWhite.png')}
                />
                <Text
                    style={{
                        color: 'white',
                        fontSize: 32,
                        fontWeight: '800',
                        margin: 5,
                    }}
                >
                    Hoüs
                </Text>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 21,
                        fontWeight: '400',
                        marginBottom: 10,
                    }}
                >
                    Sign In To Get Started
                </Text>
                <TouchableHighlight
                    style={{
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        borderRadius: 5,
                        borderColor: 'white',
                        borderWidth: 3,
                        padding: 10,
                        marginBottom: 10,
                    }}
                    onPress={() => this.props.navigation.navigate('Home')}
                    underlayColor="rgba(255,255,255,0.2)"
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                            fontWeight: '600',
                        }}
                    >
                        LOGIN AS RENTER
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={{
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        borderRadius: 5,
                        borderColor: 'white',
                        borderWidth: 3,
                        padding: 10,
                        marginBottom: 10,
                    }}
                    onPress={() => this.props.navigation.navigate('Listings')}
                    underlayColor="rgba(255,255,255,0.2)"
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                            fontWeight: '600',
                        }}
                    >
                        LOGIN AS LANDLORD
                    </Text>
                </TouchableHighlight>
            </LinearGradient>
        )
    }
}
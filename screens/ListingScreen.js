import React from 'react'

import { TouchableHighlight, Image, Text, View } from 'react-native'
import { LandlordNav } from '../headers/LandlordNav.js';

export class ListingScreen extends LandlordNav {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text>Listings Screen</Text>
            </View>
        )
    }
}
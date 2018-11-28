import React from 'react'

import { Text, View, } from 'react-native'
import { LandlordNav } from '../../headers/LandlordNav'

export class ListingDetailsScreen extends LandlordNav {

    constructor(props) {
        super(props);
        listing = this.props.navigation.state.params.listing
    }
    

    componentDidMount() {
        console.log(listing)
    }

    render() {
        return(
        <View
        style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}
        >
        <Text>sasaas</Text>
        </View>
        )
    }
}

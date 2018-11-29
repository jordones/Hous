import React from 'react'

import { Text, View, TouchableHighlight, Image } from 'react-native'
import {ListingInfo} from '../../components/ListingInfo/ListingInfo'

export class ListingDetailsScreen extends React.Component {

    constructor(props) {
        super(props);
        listing = this.props.navigation.state.params.listing
    }
    
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <TouchableHighlight
                onPress={() => navigation.navigate('Listings')}
                underlayColor="rgba(255,255,255,1)"
            >
                <Image
                    resizeMode="contain"
                    source={require('../../assets/icons/logos/logoLandscape.png')}
                />
            </TouchableHighlight>
        ),
        headerRight: (
            <TouchableHighlight
                onPress={() => navigation.navigate('ListingEdit',{
                    listingItem: listing,
                    })}
                underlayColor="rgba(255,255,255,1)"
                style= {{paddingRight: 20, paddingTop:5}}
            >
            <Text style={{fontSize: 18}}>Edit</Text>
            </TouchableHighlight>
        ),
    })
    
    render() {
        return(
        <View
        style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}
        >
        <ListingInfo listingObject = { listing } type="landlord" />
        </View>
        )
    }
}

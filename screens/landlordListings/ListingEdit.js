import React from 'react'
import ToggleSwitch from 'toggle-switch-react-native'

import { Text, View, TouchableHighlight, Image, ScrollView } from 'react-native'
import Style from './ListingEditStyles.js';

export class ListingEdit extends React.Component {

    constructor(props) {
        super(props);

        listing = this.props.navigation.state.params.listingItem
        this.state = {
            availabilitySwitch: listing.Available,
        }
        
    }
    componentWillMount() {
        console.log(listing)
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
                onPress={() => navigation.goBack()}
                underlayColor="rgba(255,255,255,1)"
                style= {{paddingRight: 20, paddingTop:5}}
            >
            <Text style={{fontSize: 18}}>Done</Text>
            </TouchableHighlight>
        ),
        headerLeft: (
            null
        )
    })
    
    render() {
        return(
        <ScrollView contentContainerStyle={Style.scrollViewClose}>
            <View style={Style.ListingRow}>
            <Text>Show this listing</Text>
            <ToggleSwitch
                onColor="#09F494"
                offColor = "#929292"
                isOn={this.state.availabilitySwitch}
                size = 'medium'
                onToggle={availabilitySwitch => {
                    this.setState({ availabilitySwitch })
                }}
            />
            </View>
        </ScrollView>
        )
    }
}

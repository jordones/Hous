import React from 'react'
import ToggleSwitch from 'toggle-switch-react-native'

import { Text, View, TouchableHighlight, Image, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native'
import Style from './ListingEditStyles.js';
import {LocationInputNoIcon} from '../../components/LocationInput'
import { StateConsumer } from '../../StateContext'
import { EditImages } from '../../components/listingsEdit/EditImages'
import { EditAmenities } from '../../components/listingsEdit/EditAmenities'

export class ListingEdit extends React.Component {

    constructor(props) {
        super(props);

        listing = this.props.navigation.state.params.listingItem
        this.state = {
            availabilitySwitch: listing.Available,
            title: listing.title,
            price: listing.price,
            description: listing.description
        }
        
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
                <Text style={Style.listingEditText}>Show this listing</Text>
                <View style={Style.toggleSwitchStyle}>
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
            </View>
            <EditImages listingImages={listing.images}/>
            <Text style={Style.listingEditHeader}>Title</Text>
            <View style={Style.rowPadding}>
                <TextInput
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}
                    style={Style.inputStyle}
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={Style.rowPadding}>
                <StateConsumer>
                    {({ value }) => (
                        < LocationInputNoIcon
                            label="Listing Location"
                            onPress={() =>
                                 this.props.navigation.navigate('LocationInputModal')
                            }
                            value={listing.location}
                        />
                    )}
                </StateConsumer>
            </View>
            <Text style={Style.listingEditHeader}>Monthly Price</Text>
            <View style={Style.rowPadding}>
                <TextInput
                    onChangeText={(price) => this.setState({price})}
                    value={this.state.price}
                    style={Style.inputStyle}
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={Style.rowPadding}/>
            <View style={Style.rowPadding}>
                <Text style={Style.listingEditHeader}>Amenities</Text>
            </View>
            <View style={Style.rowPadding}>
                <EditAmenities listingAmenities={listing.amenities}/>
            </View>
            <KeyboardAvoidingView style={Style.rowPadding} behavior="padding" enabled>
                <TextInput
                    onChangeText={(description) => this.setState({description})}
                    value={this.state.description}
                    style={Style.descriptionInput}
                    multiline={true}
                    underlineColorAndroid="transparent"
                />
            </KeyboardAvoidingView>
        </ScrollView>
        )
    }
}

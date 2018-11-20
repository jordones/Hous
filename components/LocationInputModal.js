import React from 'react'
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import { GooglePlacesAutocomplete } from './GooglePlacesAutoComplete'
import { StateConsumer } from '../StateContext'

export const LocationInputModal = props => (
    <StateConsumer>
        {({ onChangeProperty }) => (
            <GooglePlacesAutocomplete
                placeholder="Search"
                minLength={1} // minimum length of text to search
                autoFocus
                returnKeyType={'search'}
                listViewDisplayed="auto"
                enableHighAccuracyLocation={false}
                enablePoweredByContainer={false}
                fetchDetails={true}
                renderDescription={row => {
                    return (
                        row.description ||
                        row.name ||
                        row.vicinity ||
                        row.formatted_address
                    )
                }}
                onPress={(data, details = null) => {
                    onChangeProperty('location')(details.formatted_address)
                    props.navigation.goBack()
                }}
                getDefaultValue={() => ''}
                query={{
                    key: 'AIzaSyDFy9dtECeg8Gd-72jY0zK3nX_OL2EgIzY',
                    language: 'en',
                    types: 'geocode',
                }}
                styles={{
                    textInputContainer: {
                        width: '100%',
                    },
                    description: {
                        fontWeight: 'bold',
                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb',
                    },
                    container: {
                        marginTop: StatusBar.currentHeight,
                    },
                }}
                currentLocation={true}
                currentLocationLabel="Current Location"
                nearbyPlacesAPI="GoogleReverseGeocoding"
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                GoogleReverseGeocodingQuery={{
                    result_type: 'postal_code',
                }}
                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                GooglePlacesSearchQuery={{
                    rankby: 'distance',
                    types: 'postal_code',
                }}
                debounce={200}
            />
        )}
    </StateConsumer>
)

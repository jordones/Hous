import React from 'react';
import {Text, ScrollView} from 'react-native';
import Style from './ListingInfoStyles.js';
import ThumbnailCarousel from './ImageCarousel.js'

export class ListingInfo extends React.Component {

    constructor(props) {
        super(props);
        item = this.props.listingObject
    }

    render() {
        return ( 
          <ScrollView contentContainerStyle={Style.scrollViewClose}>
            <ThumbnailCarousel listingImages = { item.images }/>
            <Text style={Style.welcome}>Welcome to { item.title }</Text>
            <Text style={Style.welcome}>Welcome to { item.title }</Text>
            <Text style={Style.welcome}>Welcome to { item.title }</Text>
            <Text style={Style.welcome}>Welcome to { item.title }</Text>
            <Text style={Style.welcome}>Welcome to { item.title }</Text>
            <Text style={Style.welcome}>Welcome to { item.title }</Text>
            <Text style={Style.welcome}>Welcome to { item.title }</Text>
            <Text style={Style.welcome}>Welcome to { item.title }</Text>
          </ScrollView>
        );
    }
}

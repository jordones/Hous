import React from 'react';
import {Text, ScrollView, View, Image, TouchableHighlight} from 'react-native';
import Style from './ListingInfoStyles.js';
import ThumbnailCarousel from './ImageCarousel.js';
import {AmenitiesInfo} from './AmenitiesInfo';
import { LinearGradient } from 'expo';

export class ListingInfo extends React.Component {

    constructor(props) {
        super(props);
        item = this.props.listingObject
    }

    render() {
        return ( 
          <ScrollView contentContainerStyle={Style.scrollViewClose}>
            <ThumbnailCarousel listingImages = { item.images }/>
            <View>
                 <TouchableHighlight 
                    style={{position: 'absolute', height: 50, width: 50, right: 5, top: -30, borderRadius:50 }}
                    onPress={ this.props.closeInfo }
                    underlayColor = "transparent">      
                <LinearGradient
                    colors={['#5EA9E9', '#B4EC51']}
                    style={{ flex: 1, alignItems: "center", justifyContent: "center", borderRadius:50}}>
                    <Image style={{height: 28, width: 28}} source={require('../../assets/icons/up.png')}/>
                </LinearGradient>
                </TouchableHighlight>
            </View>
            <View style={{padding:5}}> 
                <View style={Style.headerRow}>
                    <Text style={Style.titleStyle}>{item.title}</Text>
                </View>
                <View style={Style.headerRow}>
                    <Image style={Style.iconStyle} source={require('../../assets/icons/map-marker.png')} />
                    <Text style={Style.headerStyle}>{item.location}</Text>
                </View>
                <View style={Style.headerRow}>
                    <Image style={Style.iconStyle} source={require('../../assets/icons/wallet.png')} />
                    <Text style={Style.headerStyle}>{item.price}</Text>
                </View>
                <View style={Style.sectionSeperator}></View>
                    <AmenitiesInfo amenities={item.amenities}/>
                    <Text style={Style.headerStyle}>Description</Text>
                    <Text style={Style.descriptionStyle}>{item.description}</Text>
            </View>
          </ScrollView>
        );
    }
}

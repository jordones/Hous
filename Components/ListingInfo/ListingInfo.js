import React from 'react';
import {Text, ScrollView, View, Image, TouchableHighlight} from 'react-native';
import Style from './ListingInfoStyles.js';
import ThumbnailCarousel from './ImageCarousel.js';
import {AmenitiesInfo} from './AmenitiesInfo';
import { LinearGradient } from 'expo';

export class ListingInfo extends React.Component {

    constructor(props) {
        super(props);
        listing = this.props.listingObject
        type = this.props.type
    }

    render() {
        if (type == "landlord") {
            return ( 
            <ScrollView contentContainerStyle={Style.scrollViewClose}>
                <ThumbnailCarousel listingImages = { listing.images }/>
                <View>
                    <TouchableHighlight 
                        style={{position: 'absolute', height: 50, width: 50, right: 5, top: -30, borderRadius:50 }}
                        onPress={ this.props.closeInfo }
                        underlayColor = "transparent">      
                    <LinearGradient
                        colors={['#5EA9E9', '#B4EC51']}
                        style={{ flex: 1, alignItems: "center", justifyContent: "center", borderRadius:50}}>
                        <Image resizeMode="contain" style={{width: 28, tintColor: 'white', opacity: 0.7}} source={require('../../assets/icons/chat.png')}/>
                    </LinearGradient>
                    </TouchableHighlight>
                </View>
                <View style={{padding:5}}> 
                    <View style={Style.headerRow}>
                        <Text style={Style.titleStyle}>{listing.title}</Text>
                    </View>
                    <View style={Style.headerRow}>
                        <Image style={Style.iconStyle} source={require('../../assets/icons/map-marker.png')} />
                        <Text style={Style.headerStyle}>{listing.location}</Text>
                    </View>
                    <View style={Style.headerRow}>
                        <Image style={Style.iconStyle} source={require('../../assets/icons/wallet.png')} />
                        <Text style={Style.headerStyle}>{listing.price}</Text>
                    </View>
                    <View style={Style.sectionSeperator}></View>
                        <AmenitiesInfo amenities={listing.amenities}/>
                        <Text style={Style.headerStyle}>Description</Text>
                        <Text style={Style.descriptionStyle}>{listing.description}</Text>
                </View>
            </ScrollView>
            );
            }
            else {
            return ( 
            <ScrollView contentContainerStyle={Style.scrollViewClose}>
                <ThumbnailCarousel listingImages = { listing.images }/>
                <View>
                    <TouchableHighlight 
                        style={{position: 'absolute', height: 50, width: 50, right: 5, top: -30, borderRadius:50 }}
                        onPress={ this.props.closeInfo }
                        underlayColor = "transparent">      
                    <LinearGradient
                        colors={['#5EA9E9', '#B4EC51']}
                        style={{ flex: 1, alignItems: "center", justifyContent: "center", borderRadius:50}}>
                        <Image style={{width: 28, height: 28}} source={require('../../assets/icons/up.png')}/>
                    </LinearGradient>
                    </TouchableHighlight>
                </View>
                <View style={{padding:5}}> 
                    <View style={Style.headerRow}>
                        <Text style={Style.titleStyle}>{listing.title}</Text>
                    </View>
                    <View style={Style.headerRow}>
                        <Image style={Style.iconStyle} source={require('../../assets/icons/map-marker.png')} />
                        <Text style={Style.headerStyle}>{listing.location}</Text>
                    </View>
                    <View style={Style.headerRow}>
                        <Image style={Style.iconStyle} source={require('../../assets/icons/wallet.png')} />
                        <Text style={Style.headerStyle}>{listing.price}</Text>
                    </View>
                    <View style={Style.sectionSeperator}></View>
                        <AmenitiesInfo amenities={listing.amenities}/>
                        <Text style={Style.headerStyle}>Description</Text>
                        <Text style={Style.descriptionStyle}>{listing.description}</Text>
                </View>
            </ScrollView>
            ); 
            }
        }
    }

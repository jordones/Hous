import React from 'react'

import { ScrollView, Text, View, Image, TouchableHighlight } from 'react-native'
import { LandlordNav } from '../../headers/LandlordNav.js';
import Styles from './ListingStyles.js'

const Listings = [{
        id: "1",
        Available: true,
        title: "1 Bedroom, 1 Bathroom",
        location: "Guelph, Ontario",
        price: "$500/month",
        amenities: {
            "Parking": true,
            "Laundry": true,
            "Furnished": false,
            "Full Kitchen": true,
            "Pet Friendly": false,
            "Air Condition": true,
            "Roommates": false,
            "Smoker Friendly": false,
        },
        images: [{
                id: 1,
                thumbnail: require('../../assets/icons/house-pictures/picture1.png')
            },
            {
                id: 2,
                thumbnail: require('../../assets/icons/house-pictures/picture2.png'),
            },
            {
                id: 3,
                thumbnail: require('../../assets/icons/house-pictures/picture3.png'),
            },
            {
                id: 4,
                thumbnail: require('../../assets/icons/house-pictures/picture4.png'),
            },
            {
                id: 5,
                thumbnail: require('../../assets/icons/house-pictures/picture5.png'),
            },
        ],
        description: "A room for rent in a shared house for students, available immediately, 15 minutes walk to U of G, close to Stone Road Mall and Metro grocery. Rent includes heat, hydro, central air, internet and all utilities, laundry is on site with limited parking as well. Plus the house is cleaned once a month by a professional cleaning service.",
    },
    {
        id: "2",
        Available: true,
        title: "Pineapple under the Sea",
        location: "Bikini Bottom, USA",
        price: "$800/month",
        amenities: {
            "Parking": false,
            "Laundry": true,
            "Furnished": false,
            "Full Kitchen": true,
            "Pet Friendly": false,
            "Air Condition": true,
            "Roommates": false,
            "Smoker Friendly": false,
        },
        images: [{
            id: 1,
            thumbnail: require('../../assets/house2.jpg')
        }],
        description: "124 Conch Street is the address of the pineapple house where SpongeBob SquarePants, his pet snail Gary, and pet scallop Shelley live in. The house is three stories high and fully furnished.",
    },
    {
        id: "3",
        Available: true,
        title: "Home with $200 plasma screen tv",
        location: "Scranton, PA",
        price: "$500/month",
        amenities: {
            "Parking": true,
            "Laundry": true,
            "Furnished": true,
            "Full Kitchen": true,
            "Pet Friendly": true,
            "Air Condition": true,
            "Roommates": false,
            "Smoker Friendly": true,
        },
        images: [{
            id: 1,
            thumbnail: require('../../assets/house3.jpg')
        }],
        description: "This immaculate, professionally-designed 2-story condo with a private deck and patio invites comfort, and exudes modern elegance. With 2 bedrooms, 2 and a half baths, generous living space and stylish finishes, you'll enjoy a perfect setting for relaxing and entertaining.",
    },
    {
        id: "4",
        Available: true,
        title: "Single room",
        location: "Etobicoke, Ontario",
        price: "$900/month",
        amenities: {
            "Parking": false,
            "Laundry": false,
            "Furnished": false,
            "Full Kitchen": true,
            "Pet Friendly": true,
            "Air Condition": true,
            "Roommates": true,
            "Smoker Friendly": false,
        },
        images: [{
            id: 1,
            thumbnail: require('../../assets/house4.jpg')
        }],
        description: "Main floor furnished room in Etobicoke for man. Bright room in excellent condition Wi-fi internet Laundry in the basement Utilities included We prefer full time working man. Price 800 Please contact the owner",
    },
    {
        id: "5",
        Available: false,
        title: "South Res",
        location: "Guelph, Ontario",
        price: "$800/month",
        amenities: {
            "Parking": false,
            "Laundry": false,
            "Furnished": false,
            "Full Kitchen": false,
            "Pet Friendly": false,
            "Air Condition": false,
            "Roommates": false,
            "Smoker Friendly": false,
        },
        images: [{
            id: 1,
            thumbnail: require('../../assets/house5.jpg')
        }],
        description: "Our largest residence community is also getting a summer face lift, with new cladding that will add refreshed colour to portions of its unique architecture.  Here is a glimpse of what you can expect to see in the Fall of 2018.",
    }
]

export class ListingScreen extends LandlordNav {
    renderListings = () => {
        return Listings.map((item) => {
            if (item.Available) {
                return (
                <TouchableHighlight 
                    key={item.id}
                    underlayColor = "transparent"
                    onPress={() => this.props.navigation.navigate('ListingDetails',{
                    listing: item,
                    })
                    }
                >
                <View style={Styles.ListingWrapper}>
                    <View style={Styles.imageShadow}>
                    <Image style={Styles.mainButtonImage} source={item.images[0].thumbnail} />
                    </View>
                    <View>
                        <Text                     
                        numberOfLines={1}
                        ellipsizeMode={'tail'} 
                        style={Styles.listingHeader}>{item.title}</Text>
                        <Text 
                        numberOfLines={1}
                        ellipsizeMode={'tail'}
                        style={Styles.listingPreviewText}>{item.location}</Text>
                        <Text 
                        numberOfLines={1}
                        ellipsizeMode={'tail'}
                        style={Styles.listingPreviewText}>{item.price}</Text>
                    </View>
                </View>
                </TouchableHighlight>
                );
            } 
            else {
                return(
                    <View key={item.id} style={Styles.ListingWrapper}>
                        <View style={Styles.imageShadow}>
                        <Image style={Styles.mainButtonImage} source={item.images[0].thumbnail} />
                        </View>
                        <View>
                            <Text                     
                            numberOfLines={1}
                            ellipsizeMode={'tail'} 
                            style={Styles.listingHeader}>{item.title}</Text>
                            <Text 
                            numberOfLines={1}
                            ellipsizeMode={'tail'}
                            style={Styles.listingPreviewText}>{item.location}</Text>
                            <Text 
                            numberOfLines={1}
                            ellipsizeMode={'tail'}
                            style={Styles.listingPreviewText}>{item.price}</Text>
                        </View>
                        <View style={Styles.unavailable}>
                            <Text style={Styles.textLeased}>Leased</Text>
                        </View>
                    </View>
                );
            }
        });
    }

    render() {
        return (
            <View style={Styles.listContainer}>
                <ScrollView
                     contentContainerStyle={Styles.scroll}
                     showsVerticalScrollIndicator= {false}
                 >
                 <Text style={Styles.title}>Listings</Text>
                {this.renderListings()}
                </ScrollView>
            </View>

        );
    }
}
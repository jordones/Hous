import React from 'react';
import {Text, View, Image} from 'react-native';
import Style from './ListingInfoStyles.js';


export class AmenitiesInfo extends React.Component {

    constructor(props) {
        super(props);
        item = this.props.amenities
    }

    render() {
        const available = <Image style={Style.amenitiesStatus}  source={require('../../assets/icons/check.png')} />;
        const notAvailable = <Image style={Style.amenitiesStatus}  source={require('../../assets/icons/times.png')} />;;
        var amenitiesList = Object.entries(item).map(([key, value], index) => {
            if (key == "Parking") {
                return(
                    <View style={Style.amenitiesRow} key={index}>
                        <View style={Style.imageWrapper}>
                            <Image style={Style.amenitiesImage}  source={require('../../assets/icons/amenities/car-garage.png')} />
                        </View>
                        <Text style={Style.amenitiesText}>{key}</Text>
                        {value ? available : notAvailable}
                     </View>
                )
            }
            else if (key == "Laundry") {
                return(
                    <View style={Style.amenitiesRow} key={index}>
                        <View style={Style.imageWrapper}>
                            <Image style={Style.amenitiesImage}  source={require('../../assets/icons/amenities/laundry.png')} />
                        </View>
                        <Text style={Style.amenitiesText}>{key}</Text>
                        {value ? available : notAvailable}
                     </View>
                )
            }
            else if (key == "Furnished") {
                return(
                    <View style={Style.amenitiesRow} key={index}>
                        <View style={Style.imageWrapper}>
                            <Image style={Style.amenitiesImage}  source={require('../../assets/icons/amenities/bed.png')} />
                        </View>
                        <Text style={Style.amenitiesText}>{key}</Text>
                        {value ? available : notAvailable}
                     </View>
                )
            }
             else if (key == "Full Kitchen") {
                return(
                    <View style={Style.amenitiesRow} key={index}>
                        <View style={Style.imageWrapper}>
                            <Image style={Style.amenitiesImage} source={require('../../assets/icons/amenities/kitchen.png')} />
                        </View>
                        <Text style={Style.amenitiesText}>{key}</Text>
                        {value ? available : notAvailable}
                     </View>
                )
            }
             else if (key == "Pet Friendly") {
                return(
                    <View style={Style.amenitiesRow} key={index}>
                        <View style={Style.imageWrapper}>
                            <Image style={Style.amenitiesImage}  source={require('../../assets/icons/amenities/pawprint.png')} />
                        </View>
                        <Text style={Style.amenitiesText}>{key}</Text>
                        {value ? available : notAvailable}
                     </View>
                )
            }
            else if (key == "Air Condition") {
                return(
                    <View style={Style.amenitiesRow} key={index}>
                        <View style={Style.imageWrapper}>
                            <Image style={Style.amenitiesImage}  source={require('../../assets/icons/amenities/house.png')} />
                        </View>
                        <Text style={Style.amenitiesText}>{key}</Text>
                        {value ? available : notAvailable}
                     </View>
                )
            }
            else if (key == "Roommates") {
                return(
                    <View style={Style.amenitiesRow} key={index}>
                        <View style={Style.imageWrapper}>
                            <Image style={Style.amenitiesImage}  source={require('../../assets/icons/amenities/multiple-users-silhouette.png')} />
                        </View>
                        <Text style={Style.amenitiesText}>{key}</Text>
                        {value ? available : notAvailable}
                     </View>
                )
            }
            else if (key == "Smoker Friendly") {
                return(
                    <View style={Style.amenitiesRow} key={index}>
                        <View style={Style.imageWrapper}>
                            <Image style={Style.amenitiesImage}  source={require('../../assets/icons/amenities/smoking.png')} />
                        </View>
                        <Text style={Style.amenitiesText}>{key}</Text>
                        {value ? available : notAvailable}
                     </View>
                )
            }
            
        });
        return ( 
            <View>
                <Text style={Style.subHeaderStyle}>Amenities</Text>
                { amenitiesList }
            </View>
        );
    }
}

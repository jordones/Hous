import React from 'react';
import {Text, View, Image} from 'react-native';
import Style from './EditAmenitiesStyles.js';
import ToggleSwitch from 'toggle-switch-react-native'


export class EditAmenities extends React.Component {

    constructor(props) {
        super(props);
        item = this.props.listingAmenities

        this.state = {
            Parking: item['Parking'],
            Laundry: item['Laundry'],
            Furnished: item['Furnished'],
            FKitchen: item['Full Kitchen'],
            PFriendly: item['Pet Friendly'],
            AirCondition: item['Air Condition'],
            Roommates: item['Roommates'],
            SmokerFriendly: item['Smoker Friendly']
        }
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
                        <View style={Style.toggleSwitchStyle}>
                            <ToggleSwitch
                                onColor="#09F494"
                                offColor = "#929292"
                                isOn={this.state.Parking}
                                size = 'medium'
                                onToggle={Parking => {
                                    this.setState({ Parking })
                                }}
                            />
                        </View>
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
                        <View style={Style.toggleSwitchStyle}>
                            <ToggleSwitch
                                onColor="#09F494"
                                offColor = "#929292"
                                isOn={this.state.Laundry}
                                size = 'medium'
                                onToggle={Laundry => {
                                    this.setState({ Laundry })
                                }}
                            />
                        </View>
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
                        <View style={Style.toggleSwitchStyle}>
                            <ToggleSwitch
                                onColor="#09F494"
                                offColor = "#929292"
                                isOn={this.state.Furnished}
                                size = 'medium'
                                onToggle={Furnished => {
                                    this.setState({ Furnished })
                                }}
                            />
                        </View>
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
                        <View style={Style.toggleSwitchStyle}>
                            <ToggleSwitch
                                onColor="#09F494"
                                offColor = "#929292"
                                isOn={this.state.FKitchen}
                                size = 'medium'
                                onToggle={FKitchen => {
                                    this.setState({ FKitchen })
                                }}
                            />
                        </View>
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
                        <View style={Style.toggleSwitchStyle}>
                            <ToggleSwitch
                                onColor="#09F494"
                                offColor = "#929292"
                                isOn={this.state.PFriendly}
                                size = 'medium'
                                onToggle={PFriendly => {
                                    this.setState({ PFriendly })
                                }}
                            />
                        </View>
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
                        <View style={Style.toggleSwitchStyle}>
                            <ToggleSwitch
                                onColor="#09F494"
                                offColor = "#929292"
                                isOn={this.state.AirCondition}
                                size = 'medium'
                                onToggle={AirCondition => {
                                    this.setState({ AirCondition })
                                }}
                            />
                        </View>
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
                        <View style={Style.toggleSwitchStyle}>
                            <ToggleSwitch
                                onColor="#09F494"
                                offColor = "#929292"
                                isOn={this.state.Roommates}
                                size = 'medium'
                                onToggle={Roommates => {
                                    this.setState({ Roommates })
                                }}
                            />
                        </View>
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
                        <View style={Style.toggleSwitchStyle}>
                            <ToggleSwitch
                                onColor="#09F494"
                                offColor = "#929292"
                                isOn={this.state.SmokerFriendly}
                                size = 'medium'
                                onToggle={SmokerFriendly => {
                                    this.setState({ SmokerFriendly })
                                }}
                            />
                        </View>
                     </View>
                )
            }
            
        });
        return ( 
            <View>
                { amenitiesList }
            </View>
        );
    }
}

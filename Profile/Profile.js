import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
    Input,
    Slider,
    LocationInput,
    AmenityRow,
    RowSeperator,
    SectionSeperator,
    Label,
    SectionHeaderText,
} from '../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StateConsumer } from '../StateContext'

export const Profile = ({
    navigation,
    name,
    location,
    onChangeProperty,
    onChangeAmenity,
    amenities,
    distance,
}) => (
    <KeyboardAwareScrollView contentContainerStyle={styles.view}>
        <View>
            <Input
                label="Name"
                value={name}
                onChangeText={onChangeProperty('name')}
            />
            <StateConsumer>
                {({ value }) => (
                    <LocationInput
                        label="Search Location"
                        onPress={() =>
                            navigation.navigate('LocationInputModal')
                        }
                        value={location}
                    />
                )}
            </StateConsumer>
            <Label>Search Range</Label>
            <Slider
                value={distance}
                min={0}
                max={500}
                onSlide={onChangeProperty('distance')}
            />
            <SectionSeperator />
            <SectionHeaderText>Preferred Amenities</SectionHeaderText>
            <AmenityRow
                id="parking"
                value={amenities['parking']}
                label="Parking"
                iconSource={require('../assets/icons/amenities/car-garage.png')}
                onChange={onChangeAmenity}
            />
            <RowSeperator />
            <AmenityRow
                id="laundry"
                value={amenities['laundry']}
                label="Laundry"
                iconSource={require('../assets/icons/amenities/laundry.png')}
                onChange={onChangeAmenity}
            />
            <RowSeperator />
            <AmenityRow
                id="furnished"
                value={amenities['furnished']}
                label="Furnished"
                iconSource={require('../assets/icons/amenities/bed.png')}
                onChange={onChangeAmenity}
            />
            <RowSeperator />
            <AmenityRow
                id="kitchen"
                value={amenities['kitchen']}
                label="Full Kitchen"
                iconSource={require('../assets/icons/amenities/kitchen.png')}
                onChange={onChangeAmenity}
            />
            <RowSeperator />
            <AmenityRow
                id="petFriendly"
                value={amenities['petFriendly']}
                label="Pet Friendly"
                iconSource={require('../assets/icons/amenities/pawprint.png')}
                onChange={onChangeAmenity}
            />
            <RowSeperator />
            <AmenityRow
                id="airCondition"
                value={amenities['airCondition']}
                label="Air Conditioned"
                iconSource={require('../assets/icons/amenities/house.png')}
                onChange={onChangeAmenity}
            />
            <RowSeperator />
            <AmenityRow
                id="roommates"
                value={amenities['roommates']}
                label="Roommates"
                iconSource={require('../assets/icons/amenities/multiple-users-silhouette.png')}
                onChange={onChangeAmenity}
            />
            <RowSeperator />
            <AmenityRow
                id="smokerFriendly"
                value={amenities['smokerFriendly']}
                label="Smoker Friendly"
                iconSource={require('../assets/icons/amenities/smoking.png')}
                onChange={onChangeAmenity}
            />
        </View>
    </KeyboardAwareScrollView>
)

const styles = StyleSheet.create({
    view: {
        padding: 14,
    },
})

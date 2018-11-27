import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native'
import { Label } from './Label'

export const LocationInput = ({ label, onPress, value, ...props }) => (
    <TouchableOpacity onPress={onPress}>
        <Label>{label}</Label>
        <View style={styles.wrapper}>
            <Image
                style={styles.imageStyle}
                source={require('../assets/icons/direction-icon.png')}
            />
            <Text
                {...props}
                style={styles.input}
                underlineColorAndroid="transparent"
            >
                {value}
            </Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    imageStyle: {
        marginRight: 10,
        opacity: 0.4,
        width: 24,
        height: 24,
    },
    input: {
        flex: 1,
        height: 35,
        lineHeight: 35,
        color: 'rgba(0,0,0,0.6)',
        fontSize: 18,
        textAlign: 'left',
    },
    wrapper: {
        flexDirection: 'row',
        marginBottom: 11,
        height: 35,
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: 'rgba(0,0,0,0.25)',
    },
})

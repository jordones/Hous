import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native'
import { Label } from './Label'

export const LocationInput = ({ label, onPress, value, ...props }) =>
(
    <TouchableOpacity onPress={onPress}>
        <Label>{label}</Label>
        <View style={styles.wrapper}>            
            <Image
                style={{ marginRight: 10, opacity: 0.4, width: 24, height: 24 }}
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

export const LocationInputNoIcon = ({ label, onPress, value, ...props }) =>
(
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.textNoIcon}>{label}</Text>
        <View style={styles.wrapperNoIcon}>            
            <Text
                {...props}
                style={styles.inputNoIcon}
                underlineColorAndroid="transparent"
            >
                {value}
            </Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
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
        inputNoIcon: {
        flex: 1,
        height: 35,
        lineHeight: 35,
        color: 'rgba(0,0,0,1)',
        fontSize: 18,
        textAlign: 'left',
    },
    wrapperNoIcon: {
        flexDirection: 'row',
        height: 35,

        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: 'rgba(0,0,0,0.25)',
    },
    textNoIcon: {
        flex: 1,
        color: 'rgba(0,0,0,0.6)',
        fontWeight: 'bold',
        fontSize: 20,
        height: 26,
        textAlign: 'left',
    }
})

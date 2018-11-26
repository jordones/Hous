import React from 'react'
import { Text, TextInput, StyleSheet } from 'react-native'
import { Label } from './Label'

export const Input = ({ label, ...props }) => (
    <React.Fragment>
        <Label>{label}</Label>
        <TextInput
            {...props}
            style={styles.input}
            underlineColorAndroid="transparent"
        />
    </React.Fragment>
)

const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 35,
        color: 'rgba(0,0,0,0.6)',
        fontSize: 18,
        textAlign: 'left',
        borderBottomWidth: 3,
        borderBottomColor: 'rgba(0,0,0,0.25)',
        marginBottom: 11,
    },
})

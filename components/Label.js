import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const Label = ({ ...props }) => (
    <Text style={styles.inputLabel} {...props} />
)

const styles = StyleSheet.create({
    inputLabel: {
        flex: 1,
        color: 'rgba(0,0,0,0.5)',
        fontWeight: 'bold',
        fontSize: 20,
        height: 26,
        textAlign: 'left',
    },
})

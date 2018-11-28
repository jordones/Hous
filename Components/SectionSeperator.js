import React from 'react'
import { View, StyleSheet } from 'react-native'

export const SectionSeperator = () => (
    <View style={styles.view} />
)

const styles = StyleSheet.create({
    view: {
        height: 3,
        backgroundColor: 'rgba(0,0,0,0.10)',
        flex: 1,
    },
})

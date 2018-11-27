import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const SectionHeaderText = ({ ...props }) => (
    <Text style={styles.sectionHeader} {...props} />
)

const styles = StyleSheet.create({
    sectionHeader: {
        flex: 1,
        color: 'rgba(0,0,0,0.6)',
        fontWeight: 'bold',
        fontSize: 20,
        height: 28,
        textAlign: 'left',
        marginBottom: 12,
        marginTop: 14,
    },
})

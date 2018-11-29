import React from 'react'
import { Text, Image, TouchableOpacity, View, StyleSheet } from 'react-native'

export const RowSeperator = () => <View style={styles.rowView} />

export const ColumnSeperator = () => <View style={styles.columnView} />

export const Segment = ({ label, onPress, selected }) => (
    <TouchableOpacity
        onPress={onPress}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
        <Text style={{ fontSize: 16, opacity: selected ? 0.8 : 0.4 }}>
            {label}
        </Text>
    </TouchableOpacity>
)

export const AmenityRow = ({ iconSource, label, onChange, id, value }) => (
    <View style={styles.amenityView}>
        <Image
            style={styles.image}
            source={iconSource}
            resizeMode={'contain'}
        />
        <Text style={styles.text}>{label}</Text>
        <View style={{ flexDirection: 'row' }}>
            <Segment
                label="Yes"
                onPress={() => onChange(id)(true)}
                selected={value === true}
            />
            <ColumnSeperator />
            <Segment
                label="No"
                onPress={() => onChange(id)(false)}
                selected={value === false}
            />
            <ColumnSeperator />
            <Segment
                label="Null"
                onPress={() => onChange(id)(null)}
                selected={value === null}
            />
        </View>
    </View>
)

const styles = StyleSheet.create({
    rowView: {
        height: 1.5,
        backgroundColor: 'rgba(0,0,0,0.25)',
        flex: 1,
    },

    columnView: {
        width: 1.5,
        backgroundColor: 'rgba(0,0,0,0.25)',
        marginHorizontal: 5,
    },

    amenityView: {
        flexDirection: 'row',
        height: 44,
        alignItems: 'center',
    },
    image: {
        marginRight: 10,
        opacity: 0.4,
        height: 24,
        width: 24,
    },
    text: {
        fontSize: 18,
        marginRight: 'auto',
    },
})

import React from 'react'
import { Text, Image, TouchableOpacity, View } from 'react-native'

export const RowSeperator = () => (
    <View
        style={{ height: 1.5, backgroundColor: 'rgba(0,0,0,0.25)', flex: 1 }}
    />
)

export const ColumnSeperator = () => (
    <View
        style={{
            width: 1.5,
            backgroundColor: 'rgba(0,0,0,0.25)',
            marginHorizontal: 5,
        }}
    />
)

export const Segment = ({ label, onPress, selected }) => (
    <TouchableOpacity onPress={onPress} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
        <Text style={{ fontSize: 16, opacity: selected ? 0.8 : 0.4 }}>
            {label}
        </Text>
    </TouchableOpacity>
)

export const AmenityRow = ({ iconSource, label, onChange, id, value }) => (
    <View
        style={{
            flexDirection: 'row',
            height: 44,
            alignItems: 'center',
        }}
    >
        <Image
            style={{
                marginRight: 10,
                opacity: 0.4,
                height: 24,
                width: 24,
            }}
            source={iconSource}
            resizeMode={'contain'}
        />
        <Text style={{ fontSize: 18, marginRight: 'auto' }}>{label}</Text>
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

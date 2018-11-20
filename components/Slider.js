import React from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const getGray = brightness => {
    const value = Math.round(brightness * 255)
    return `rgba(${value},${value},${value},1)`
}

const getTrue = () => true

const map = (v, x0, x1, y0, y1) => ((v - x0) * (y1 - y0)) / (x1 - x0) + y0

const clamp = (v, min, max) => Math.min(Math.max(v, min), max)

export class Slider extends React.Component {
    static defaultProps = {
        min: 0,
        max: 100,
        sliding: false,
    }

    state = {
        // width of the slider
        width: 250,
        // starting offset of the touch
        xOffset: 0,
    }

    onLayout = evt => this.setState({ width: evt.nativeEvent.layout.width })

    getValue = pageX => {
        const position = pageX - this.state.xOffset
        const { min, max } = this.props
        const value = map(position, 22, this.state.width - 22, min, max)
        const clamped = clamp(value, min, max)
        return clamped
    }

    onSlideStart = evt => {
        const pageX = evt.nativeEvent.pageX
        const xOffset = evt.nativeEvent.pageX - evt.nativeEvent.locationX
        this.setState({ xOffset, sliding: true }, () => {
            const value = this.getValue(pageX)
            if (this.props.onSlideStart) {
                this.props.onSlideStart(value)
            }
        })
    }

    onSlide = evt => {
        const value = this.getValue(evt.nativeEvent.pageX)
        if (this.props.onSlide) {
            this.props.onSlide(value)
        }
    }

    onSlideEnd = evt => {
        const value = this.getValue(evt.nativeEvent.pageX)
        this.setState({ sliding: false })
        if (this.props.onSlideEnd) {
            this.props.onSlideEnd(value)
        }
    }

    render() {
        const {
            // current value of the slider
            value,
            // min value of the slider
            min = 0,
            // max value of the slider
            max = 100,
            // start of the slide (value)
            onSlideStart,
            // sliding (value)
            onSlide,
            // end of the slide (value)
            onSlideEnd,
        } = this.props
        const { sliding, width } = this.state
        const left = { left: map(value, min, max, 22, width - 22) }
        const thumbStyle = [
            styles.thumb,
            left,
            {
                borderColor: sliding ? getGray(0.875) : getGray(0.9),
                backgroundColor: sliding ? getGray(0.975) : getGray(1),
            },
        ]
        return (
            <View
                style={styles.container}
                onLayout={this.onLayout}
                onStartShouldSetResponder={getTrue}
                onMoveShouldSetResponder={getTrue}
                onResponderGrant={this.onSlideStart}
                onResponderMove={this.onSlide}
                onResponderRelease={this.onSlideEnd}
            >
                <View style={styles.innerContainer}>
                    <View style={styles.bar} />
                </View>
                <View style={styles.innerContainer}>
                    <Animated.View pointerEvents="none" style={thumbStyle} />
                </View>
                <View style={styles.innerContainer}>
                    <Text style={[styles.text, left]}>{`${Math.round(value)} km`}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        justifyContent: 'center',
    },
    innerContainer: {
        ...StyleSheet.absoluteFillObject,
        flexDirection: 'row',
        alignItems: 'center',
    },
    bar: { height: 3, flex: 1, backgroundColor: '#09F494', borderRadius: 1.5 },
    thumb: {
        width: 44,
        height: 44,
        borderWidth: 1,
        borderRadius: 22,
        marginLeft: -22,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginBottom: 70,
        width: 88,
        marginLeft: -44,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#7F7F7F',
    },
})

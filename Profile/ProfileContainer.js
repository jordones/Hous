import React from 'react'
import { Profile } from './Profile'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { StateConsumer } from '../StateContext'
import { NavBarScreen } from '../headers/NavBarScreen'

export class ProfileContainer extends NavBarScreen {
    render() {
        return (
            <StateConsumer>
                {props =>
                    props.loading ? (
                        <View style={styles.view}>
                            <ActivityIndicator size="large" />
                        </View>
                    ) : (
                        <Profile {...this.props} {...props} />
                    )
                }
            </StateConsumer>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
})

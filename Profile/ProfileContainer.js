import React from 'react'
import { Profile } from './Profile'
import { ActivityIndicator, View } from 'react-native'
import { StateConsumer } from '../StateContext'

const stateKey = 'user'

export class ProfileContainer extends React.Component {
    render() {
        return (
            <StateConsumer>
                {props =>
                    props.loading ? (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                flex: 1,
                            }}
                        >
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

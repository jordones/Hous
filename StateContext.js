import React from 'react'
import { AsyncStorage } from 'react-native'

const { Provider, Consumer } = React.createContext()

export const StateConsumer = Consumer

const stateKey = 'user'

export class StateProvider extends React.Component {
    state = {
        loading: true,
        id: 1,
        name: '',
        location: '',
        distance: 200,
        amenities: {
            parking: null,
            laundry: null,
            furnished: null,
            kitchen: null,
            petFriendly: null,
            airCondition: null,
            roommates: null,
            smokerFriendly: null,
        },
    }

    componentDidMount() {
        this.loadState()
    }

    loadState = async () => {
        const json = await AsyncStorage.getItem(stateKey)
        const value = JSON.parse(json || '{}')
        this.setState({
            ...this.state,
            ...value,
            loading: false,
        })
    }

    setStateness = updateState => {
        this.setState(updateState, state => {
            AsyncStorage.setItem(stateKey, JSON.stringify(this.state))
        })
    }

    onChangeProperty = name => value => {
        this.setStateness(state => ({
            ...state,
            [name]: value,
        }))
    }

    onChangeAmenity = name => value => {
        this.setStateness(state => ({
            ...state,
            amenities: {
                ...state.amenities,
                [name]: value,
            },
        }))
    }

    render() {
        return (
            <Provider
                value={{
                    ...this.state,
                    onChangeProperty: this.onChangeProperty,
                    onChangeAmenity: this.onChangeAmenity,
                }}
            >
                {this.props.children}
            </Provider>
        )
    }
}

import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { TinderDemo as HomeScreen } from './screens/TinderDemo.js'
import { ChatScreen } from './components/Messaging/ChatScreen.js'
import { MessageScreen } from './components/Messaging/MessageScreen.js'
import { Profile as ProfileScreen } from './Profile'
import { LocationInputModal } from './components'
import { StateProvider } from './StateContext'
import { LoginScreen } from './screens/LoginScreen'
import { ListingScreen } from './screens/ListingScreen'

const MainStack = createStackNavigator(
    {
        Login: LoginScreen,
        Home: HomeScreen,
        Profile: ProfileScreen,
        Chat: ChatScreen,
        Listings: ListingScreen,
        Message: MessageScreen,
    },
    {
        initialRouteName: 'Login',
        headerLayoutPreset: 'center',
    },
)

const RootStack = createStackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        LocationInputModal: {
            screen: LocationInputModal,
        },
    },
    {
        headerMode: 'none',
        mode: 'modal',
    },
)

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
    render() {
        return (
            <StateProvider>
                <AppContainer />
            </StateProvider>
        )
    }
}

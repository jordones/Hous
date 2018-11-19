import React from "react";
import { TouchableHighlight ,Image , View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { LinearGradient } from 'expo';
import {TinderDemo} from './TinderDemo.js';


class NavBarScreen extends React.Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        headerTitle: (
          <TouchableHighlight 
            onPress={() => navigation.navigate('Home')}
            underlayColor = "rgba(255,255,255,1)"
          >
          <Image
            style={{margin: 50 }}
            source={require('./assets/icons/logos/LogoIcon.png')}
            onClick={() => navigation.navigate('Home')}
           />
           </TouchableHighlight>
        ),
        headerRight: (
          <TouchableHighlight 
            onPress={() => navigation.navigate('Chat')}
            underlayColor = "rgba(255,255,255,1)"
          >
            <Image
              style={{marginRight: 10, opacity: 0.4 }}
              source={require('./assets/icons/chat.png')}
              onClick={() => navigation.navigate('Chat')}
            />
           </TouchableHighlight>
        ),
        headerLeft: (
          <TouchableHighlight 
            onPress={() => navigation.navigate('Profile')}
            underlayColor = "rgba(255,255,255,1)"
          >
          <Image
            style={{marginLeft: 10, opacity: 0.4 }}
            source={require('./assets/icons/user.png')}
            onClick={() => navigation.navigate('Profiel')}
          />
          </TouchableHighlight>
        ),
    });
}

class HomeScreen extends NavBarScreen {

  render() {
    return (
        <TinderDemo/>
    );
  }
}

class ProfileScreen extends NavBarScreen {

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

class ChatScreen extends NavBarScreen {

  render() {
    return (
      <View style={{ padding: 5 ,flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Chat Screen</Text>
      </View>
    );
  }
}


class ListingsScreen extends React.Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        headerTitle: (
          <Button
            onPress={() => navigation.navigate('Login')}
            title="Hous"
            color="#000"
          />
        ),
        headerLeft: null
    });
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Listings Screen</Text>
      </View>
    );
  }
}

class LoginScreen extends React.Component {

    // Disable the nav header bar on the login screen
    static  navigationOptions = {
        header: null,
    }
  render() {
    return (
      <LinearGradient
          colors={['#2da1ff', '#4ba9f2', '#03f98a']}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{color: 'white'}}>Hous</Text>
      <Text style={{color: 'white'}}>Sign In To Get Started</Text>
        <Button
          title="Login as Renter"
          onPress={() => this.props.navigation.navigate('Home')}
          style={{marginBottom: 15}}
        />
        <Button
          title="Login as Landlord"
          onPress={() => this.props.navigation.navigate('Listings')}
        />
        </LinearGradient>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    Profile: ProfileScreen,
    Chat: ChatScreen,
    Listings: ListingsScreen
  },
  {
    initialRouteName: "Login",
    headerLayoutPreset: 'center',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

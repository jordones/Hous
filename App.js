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
          <TouchableHighlight 
            onPress={() => navigation.navigate('Login')}
            underlayColor = "rgba(255,255,255,1)"
          >
          <Image
            style={{margin: 50 }}
            source={require('./assets/icons/logos/logoLandscape.png')}
            onClick={() => navigation.navigate('Home')}
           />
           </TouchableHighlight>
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
        <Image
          style={{marginBottom: 10, maxWidth: 150, maxHeight: 150 }}
          source={require('./assets/icons/logos/logoWhite.png')}
        />
        <Text style={{color: 'white', fontSize: 32, fontWeight: "800", margin: 5 }}>Hoüs</Text>
        <Text style={{color: 'white', fontSize: 21, fontWeight: "400", marginBottom: 10 }}>Sign In To Get Started</Text>
        <TouchableHighlight
          style={{backgroundColor: "rgba(255,255,255,0.2)",borderRadius: 5, borderColor: "white", borderWidth: 3, padding: 10, marginBottom: 10}}
          onPress={() => this.props.navigation.navigate('Home')}
          underlayColor = "rgba(255,255,255,0.2)" >
            <Text style={{color:"white", fontSize: 18, fontWeight: "600" }} >LOGIN AS RENTER</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{backgroundColor: "rgba(255,255,255,0.2)",borderRadius: 5, borderColor: "white", borderWidth: 3, padding: 10, marginBottom: 10}}
          onPress={() => this.props.navigation.navigate('Listings')}
          underlayColor = "rgba(255,255,255,0.2)" >
            <Text style={{color:"white", fontSize: 18, fontWeight: "600" }} >LOGIN AS LANDLORD</Text>
        </TouchableHighlight>
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

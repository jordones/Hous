import React from "react";
import {TouchableHighlight, Image, ScrollView} from 'react-native';

export class NavBarScreen extends React.Component {
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

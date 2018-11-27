import React from "react";
import { View, TouchableHighlight, Image, Text } from "react-native";

export class MessageScreen extends React.Component {

    static navigationOptions = ({navigation, screenProps}) => ({
        headerTitle: (
          <TouchableHighlight
            onPress={() => navigation.navigate('Login')}
            underlayColor = "transparent"
          >
            <Image
              style={{margin: 50 }}
              source={require('../../assets/icons/logos/logoLandscape.png')}
              onClick={() => navigation.navigate('Home')}
            />
           </TouchableHighlight>
        ),
    });

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <View style={{flex:1}}>
                <Text>Message Screen</Text>
            </View>
        );
    }
}

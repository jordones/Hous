import React from "react";
import { View, TouchableHighlight, Image, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Alert, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { MessageHeaderBubble } from './MessageHeaderBubble.js';

const messageData = [
    {id: 1, sender: 'send', content: 'Hey, u up?'},
    {id: 2, sender: 'receive', content: 'Yes'},
    {id: 3, sender: 'receive', content: 'House is available still.kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'},
    {id: 4, sender: 'send', content: 'Dope'},
    {id: 5, sender: 'receive', content: 'Yeet'},
]

export const ChatItem = ({ id, sender, content }) => (

    <Text
        key={id}
        style={sender == 'send' ? styles.send : styles.receive
    }>{content}</Text>

)

export class MessageScreen extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle: (
            <MessageHeaderBubble
                source={navigation.state.params.conversation.uri}
                title={navigation.state.params.conversation.title}
            />
        ),
    })

    constructor(props) {
        super(props)
        conversation = this.props.navigation.state.params.conversation
        this.state = {
            messageData: this.props.navigation.state.params.messageData,
            maxElement: 0,
            text: ''
        }
    }

    renderChat = () => {
        return this.state.messageData.map((chat) => {
            this.state.maxElement = chat.id;
            return (
                <ChatItem
                    key={chat.id}
                    sender={chat.sender}
                    content={chat.content}
                />
            );
        });
    }

    onPress = () => {
        this.state.messageData.push({id: this.state.maxElement+1, sender: 'send', content: this.state.text})
        this.state.maxElement++
        this.forceUpdate()
    }

    render() {
        return(
            <KeyboardAvoidingView style={styles.listContainer} behaviour='padding' enabled>
                <ScrollView
                contentContainerStyle={styles.scroll}
                showsVerticalScrollIndicator= {false}>
                    {this.renderChat()}
                </ScrollView>
                <View style={{ borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0)', borderTopColor: 'rgba(0, 0, 0, 0.15)' }}>
                    <View style={{flexDirection:'row', width: window.width, margin: 10, padding:4, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:'rgba(0, 0, 0, 0.15)', borderRadius:10, backgroundColor:'rgba(0, 0, 0, 0.05)'}}>
                        <View style={{flex:4}}>
                            <TextInput
                                style={styles.textBar}
                                placeholder={"Type a message..."}
                                placeholderTextColor={'black'}
                                underlineColorAndroid={"transparent"}
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                            />
                        </View>
                        <View style={{flex:1}}>
                            <TouchableOpacity
                                onPress={this.onPress}
                                style={styles.button}
                            >
                                <Text>Send</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        opacity: 0.4,
        width: 50,
        height: 30,
        alignItems: 'center',
        justifyContent:'center',
    },
    homeIcon: {
        width: 30,
        height: 30,
        borderRadius: 30
    },
    mainButtonImage: {
        width: 30,
        height: 30,
        borderRadius: 30
    },
    send: {
        minHeight: 25,
        borderRadius: 15,
        borderBottomRightRadius: 0,
        backgroundColor: '#30A3FF',
        borderColor: '#2683CE',
        borderWidth: 1,
        color: 'white',
        textAlign: 'right',
        padding: 15,
        marginBottom: 5,
        marginTop: 5,
        alignSelf: 'flex-end'

    },
    receive: {
        minHeight: 25,
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.10)',
        borderColor: 'rgba(0, 0, 0, 0.15)',
        borderWidth: 1,
        color: 'black',
        textAlign: 'left',
        padding: 15,
        marginBottom: 5,
        marginTop: 5,
        alignSelf: 'flex-start'

    },
    scroll: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingLeft: 10,
        paddingRight: 10,

    },
    listContainer: {
        flex:1,
        justifyContent: 'space-between'
    },
    textBar: {
        color: 'black'
    },
    button: {
        alignItems: 'flex-end',
        padding: 4
    }
})

import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions
} from "react-native"
import Icons from 'react-native-vector-icons/Feather'
import userImage from "../../../images/sideImage.jpeg"
import EmojiBoard from 'react-native-emoji-board'
import { HeadData } from "../chatScreen/HeadData"


const chatinfo = HeadData.map(chat => (
    <View key={chat.id} style={{ flexDirection: 'row' }}>
        <Image source={chat.charUrl}
            style={{
                width: 48,
                height: 48,
                borderRadius: 100,
                right: 85
            }} />

        <View style={{ right: 80 }}>
            <Text style={{
                color: '#15243C',
                fontWeight: "500",
                fontSize: 16

            }}>{chat.name}</Text>
            <Text
                style={{
                    fontWeight: "400",
                    fontSize: 12,
                    color: 'rgba(21, 36, 60, 0.6)'
                }}
            >{chat.username}</Text>
        </View>

    </View>
))



const ChatScreen = () => {

    const [EnableShift, setEanableShift] = useState(false)
    const [show, setShow] = useState(false)


    const onClick = emoji => {
         console.log(emoji)
    }
 
    return (
        <View style={styles.chatContainer}>
            <StatusBar />
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <Icons name='arrow-left' size={25} color='#15243C' style={{
                        left: 10,
                        top: 6
                    }} />
                </TouchableOpacity>

                <View style={styles.HeaderInfo}>
                    {chatinfo}
                </View>

                <TouchableOpacity>
                    <Icons name='more-vertical' size={25} color='#15243C' style={{
                        top: 6
                    }} />
                </TouchableOpacity>
            </View>
            <View style={{
                borderWidth: 1,
                borderColor: '#F4F4F4',
                marginTop: 20
            }}></View>




            <View style={styles.mainChatConponent}>
                <View style={{
                    width: 257,
                    backgroundColor: "#578DDE",
                    height: 100,
                    left: 107,
                    borderRadius: 7,
                    paddingTop: 8,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingBottom: 32,
                }}>
                    <Text style={{
                        fontWeight: "400",
                        fontSize: 16,
                        fontStyle: "normal",
                        lineHeight: 20,
                        color: "#FFFFFF"
                    }}>I wanted to know when you would be logging off today.
                        I needed something
                 </Text>

                    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={{ fontStyle: 'normal', fontSize: 9, color: 'white', top: 2, left: 5 }}>7:30AM</Text>
                        <Icons name="check" size={16} color="white" style={{ left: 10 }} />
                        <Icons name="check" size={16} color="white" />
                    </View>
                </View>
            </View>

            <View style={styles.replyChatContainer}>

                <View style={{
                    width: 257,
                    height: 62,
                    left: 61,
                    backgroundColor: "#FAFAFA",
                    borderTopRightRadius: 7,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 7,
                    borderBottomRightRadius: 7
                }}>
                    <Text style={{
                        fontWeight: '400',
                        fontSize: 16,
                        lineHeight: 19.2,
                        fontStyle: 'normal',
                        color: "rgba(21, 36, 60, 0.8)",
                        paddingTop: 8,
                        paddingLeft: 16,
                        paddingRight: 28,
                        paddingBottom: 16,
                    }}>Hi Jane,
                    How’s your day going today?</Text>
                </View>

                <View style={{
                    width: 257,
                    height: 84,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    left: 61, backgroundColor: "#FAFAFA",
                    top: 10,
                    borderTopRightRadius: 7,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 7,
                    borderBottomRightRadius: 7,
                    position: "relative"


                }}>
                    <Image source={userImage} style={{
                        width: 24,
                        height: 24,
                        borderRadius: 100,
                        position: "absolute",
                        top: 57,
                        right: 270
                    }} />
                    <Text style={{
                        fontWeight: '400',
                        fontSize: 16,
                        lineHeight: 19.2,
                        fontStyle: 'normal',
                        color: "rgba(21, 36, 60, 0.8)",
                        paddingTop: 8,
                        paddingLeft: 16,
                        paddingRight: 28,
                        paddingBottom: 16
                    }}>I wanted to know when you would be logging off today.
                    I needed something</Text>
                </View>
            </View>


            <KeyboardAvoidingView behavior="position" style={styles.chatInputContainer} enabled={EnableShift}>
                <View style={{ position: "relative" }} >
                    <StatusBar barStyle="dark-content" />
                    <Icons name='meh'
                        onPress={() => setShow(!show)}
                        size={25} style={{
                            position: 'absolute',
                            left: 20,
                            top: 15,
                            color: "#BDBDBD",
                        }} />

                    <TextInput placeholder="Type a message"
                        onFocus={() => setEanableShift(true)}
                        style={styles.textInput} />
                    <EmojiBoard showBoard={show} onClick={onClick} />
                    <Icons name='paperclip' size={20} style={{
                        position: 'absolute',
                        right: 110,
                        top: 15,
                        color: "#BDBDBD",
                    }} />
                    <Icons name='send' size={20} style={{
                        position: 'absolute',
                        top: 7,
                        right: 30,
                        paddingLeft: 10,
                        color: 'white',
                        paddingTop: 10,
                        backgroundColor: "#578DDE",
                        width: 40,
                        height: 40,
                        borderRadius: 100
                    }} />
                </View>
            </KeyboardAvoidingView>

        </View>


    );
};

const styles = StyleSheet.create({
    chatContainer: {
        width: "100%",
        height: Dimensions.get('window').height
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 20
    },
    HeaderInfo: {
        flexDirection: 'row'
    },
    mainChatConponent: {
        marginTop: 10
    },
    replyChatContainer: {
        marginTop: 20,
    },
    chatInputContainer: {
        top: 300,
        marginBottom: 0,
        left: 10,
    },
    textInput: {
        height: 50,
        width: 287,
        marginBottom: 40,
        borderWidth: 2,
        borderRadius: 7,
        borderColor: '#FAFAFA',
        paddingLeft: 60
    }

})

export default ChatScreen;
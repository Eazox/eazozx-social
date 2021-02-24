import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import Icons from "react-native-vector-icons/Feather"
import { NewMessageData } from '../../mainComponents/NewMessageList/MessageData'



const Messagecontent = NewMessageData.map(message => (
    <View key={message.username} style={{ flexDirection: 'row', paddingTop: 10 }}>
        <Image source={message.image} style={{
            height: 40,
            width: 40,
            borderRadius: 100,
            marginLeft: 10
        }} />
         <View style={{ marginLeft: 10 }}>
            <Text>{message.fullname}</Text>
            <TextInput>{message.username}</TextInput>
        </View>


        <TouchableOpacity style={{
            borderWidth: 1,
            left: 120,
            paddingTop: 11,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: 16,
            borderColor: '#578DDE',
            borderRadius: 40,
        }}>
            <View>
                <Text style={{
                    color: '#15243C',
                    fontWeight: "400",
                    fontStyle: "normal",
                    fontSize: 16,
                    lineHeight: 19.2
                }}>Message</Text>
            </View>

        </TouchableOpacity>


    </View>
))

const NewMessageList = () => {
    return (
        <View style={styles.NewMessageList}>


            <View style={styles.NewMessageHeader}>
                <TouchableOpacity onPress={() => alert("someone press me")}>
                    <Icons name="arrow-left" size={25} color="#15243C" style={{
                        top: 2,
                        left: 17

                    }} />
                </TouchableOpacity>

                <View style={styles.NewMessageListText}>
                    <Text
                        style={{
                            fontWeight: "600",
                            color: "#578DDE",
                            fontStyle: "normal",
                            fontSize: 24,
                            lineHeight: 29.4
                        }}
                    >New Messages</Text>
                </View>
            </View>

            <View style={styles.NewMessageForm}>
                <TouchableOpacity >
                    <Icons name="search" size={20} style={{
                        position: 'absolute',
                        top: 9,
                        right: 130,
                        color: '#578DDE'
                    }} />
                </TouchableOpacity>

                <TextInput style={{
                    borderWidth: 1,
                    width: 343,
                    paddingLeft: 50,
                    height: 40,
                    borderColor: '#578DDE',
                    borderRadius: 40
                }} />
            </View>


            <View style={styles.NewMessagecontent}>
                {Messagecontent}
            </View>






        </View>

    );


};

const styles = StyleSheet.create({
    NewMessageHeader: {
        marginTop: 50,
        flexDirection: 'row'
    },
    NewMessageListText: {
        left: 90
    },
    NewMessageForm: {
        marginTop: 30,
        alignItems: "center",
        position: 'relative'
    },
    NewMessagecontent: {
        top: 20,
    }


})


export default NewMessageList;

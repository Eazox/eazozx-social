import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native"
import ArrowDown from "../images/arrow_drop_down.png"
import { DatePicker } from "native-base"
import { Picker } from '@react-native-picker/picker';
import SetProfileHeader from "../components/proSetupHeader/Header"
import ProgressBar from "../components/profileProgressBar/ProgressBar"
import ProfileSetUpImage from '../components/profileSetImages/ProfileSetUpImage';

class ProfileSetupScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: "",
            date: new Date(),
        }

        this.setDate = this.setState.bind(this)
    }


    setDate(newDate) {
        this.setState({ date: newDate });
    }


    render() {
        const { date } = this.state;

        return (
            <View>
                <SetProfileHeader />
                <ProgressBar />
                <ProfileSetUpImage />

                <View styles={styles.FormConatiner}>
                    <View style={styles.FormContent}>
                        <Text style={{
                            marginLeft: 20,
                            marginBottom: 5,
                            fontWeight: "400",
                            fontSize: 16,
                            fontStyle: "normal",
                            lineHeight: 19.2
                        }}>Bio</Text>

                        <TextInput
                            style={styles.profileInput}

                        />

                        <View style={styles.formLocation}>
                            <Text style={{
                                marginLeft: 20,
                                marginBottom: 10,
                                fontWeight: '400',
                                fontStyle: 'normal',
                                fontSize: 16,
                                color: '#15243C'

                            }}>Location</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Picker
                                    selectedValue={this.state.location}
                                    style={{
                                        height: 46,
                                        width: 343, backgroundColor: "#FAFAFA",
                                        marginLeft: 20, borderRadius: 5,

                                    }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ language: itemValue })
                                    }
                                >
                                    <Picker.Item label="Abia" value="Abia" />
                                    <Picker.Item label="Lagos" value="Lagos" />
                                    <Picker.Item label="FCT" value="FCT" />
                                </Picker>

                                <Image source={ArrowDown} style={{marginTop: 12, right: 30}} />
                            </View>
                        </View>


                        <View style={styles.formDate}>
                            <Text
                                style={{
                                    marginLeft: 20,
                                    marginBottom: 10,
                                    marginTop: 10,
                                    fontWeight: '400',
                                    fontStyle: 'normal',
                                    fontSize: 16,
                                    color: '#15243C'
                                }}

                            >Date of Birth</Text>
                            <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2025, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{
                                    color: "#000000", marginLeft: 20,
                                    width: 185,
                                    height: 48, borderWidth: 2, borderColor: "#FAFAFA",
                                    backgroundColor: "#FAFAFA"
                                }}
                                placeHolderTextStyle={{ color: "#000000", marginLeft: 20 }}
                                onDateChange={this.setDate}
                                disabled={false}
                            />

                        </View>


                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttonContent}>
                                <Text style={{
                                    textAlign: "center",
                                    marginTop: 12,
                                    color: "#FFFFFF"
                                }}>Complete Setup</Text>
                            </TouchableOpacity>
                        </View>



                    </View>

                </View>

            </View>
        );
    }
};


const styles = StyleSheet.create({
    formConatiner: {
        flex: 1,
        marginTop: 300
    },
    FormContent: {
        marginTop: 100
    },
    profileInput: {
        width: 343,
        marginLeft: 20,
        height: 48,
        paddingLeft: 10,
        backgroundColor: "#FAFAFA",
        borderRadius: 5
    },
    formLocation: {
        marginTop: 20,



    },
    buttonContent: {
        backgroundColor: "#578DDE",
        width: 343,
        height: 48,
        marginLeft: 20,
        borderRadius: 5
    },
    buttonContainer: {
        marginTop: 70,
        fontWeight: "500",
        fontStyle: "normal",
        fontSize: 18,
        lineHeight: 21.83

    }
})

export default ProfileSetupScreen;
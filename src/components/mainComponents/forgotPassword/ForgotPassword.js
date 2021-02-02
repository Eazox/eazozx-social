import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, } from "react-native"
import Arrow from '../../../images/keyboard.png'
import MainImg from "../../../images/forget.png"


const ForgotPassword = () => {
    return (
        <View style={styles.forgotContainer}>
            <View style={styles.resetConatanier}>

                <View style={styles.forgetArrow}>
                    <TouchableOpacity>
                        <Image source={Arrow} color="#15243C" />
                    </TouchableOpacity>

                </View>


                <View style={styles.forgetText}>
                    <Text style={{
                        fontWeight: "600",
                        fontStyle: "normal",
                        fontSize: 24,
                        color: '#578DDE',
                        lineHeight: 29.4
                    }}>Reset Password</Text>
                </View>
            </View>

            <View style={styles.ForgotMainContainer}>
                <Image source={MainImg} />
            </View>

            <View style={styles.ForgotPasswordText}>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 24, color: "#261D80",
                    lineHeight: 29.11, bottom: 5,
                    fontStyle: 'normal'
                }}>Forgot Password?</Text>
                <Text syle={{
                    fontWeight: "400",
                    fontStyle: "normal",
                     fontSize: 16,
                     textAlign:"center",
                    lineHeight: 22.4,
                }}>Please enter your email address to reset password </Text>
            </View>

            <View style={styles.forgetInputContainer}>
                <Text style={{
                    fontWeight: "400",
                    fontStyle: 'normal',
                    fontSize: 16, lineHeight: 19.2,
                    color: '#15243C',
                    bottom: 8
                }}>Email Address</Text>

                <TextInput style={[styles.input,
                {
                    height: Platform.OS == 'android' ? 40 : 20, width: 343, borderColor: "#FAFAFA",
                    backgroundColor: "#FAFAFA", borderRadius: 5, paddingLeft: 16
                }]}  />
            </View>

            <View style={styles.forgetButtonContainer}>
                <TouchableOpacity
                    style={styles.button}

                >
                    <Text style={{
                        fontWeight: "500",
                        fontStyle: 'normal',
                        fontSize: 18, lineHeight: 21.83,
                        color: "#FFFFFF",
                        paddingTop: 13,
                        paddingBottom: 10,
                    }}>Reset Password</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    forgotContainer: {
        flex: 1,
    },
    resetConatanier: {
        marginTop: 68,
        flexDirection: "row",
        justifyContent: 'center'
    },
    forgetArrow: {
        right: 68,
        top: 7
    },
    ForgotMainContainer: {
        flex: 1,
        alignItems: "center",
        top: 47.74
    },
    ForgotPasswordText: {
        flex: 1,
        marginTop: 280,
        marginBottom: 5,
        marginLeft: 16
    },
    forgetInputContainer: {
        flex: 1,
        marginTop: 90,
        marginLeft: 20,

    },
    forgetButtonContainer: {
        top: 120,
        alignItems: "center"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#578DDE",

        height: 48,
        width: 343,
        borderRadius: 5
    }


})

export default ForgotPassword;

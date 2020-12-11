import React, { useState } from 'react';
import {  Form, Item, Input, Label, Button } from 'native-base';
import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native"

import resetArrow from "../images/keyboard.png"

const ResetPassword = () => {
    const [email, setEmail] = useState("")
    const [password , setPassword] = useState("")
    


    const onSubmit = () => {
        console.warn(email, password)
    }


    return (
        <View style={styles.resetContainer}>
            <View style={styles.resetHeader}>
                <TouchableOpacity>
                    <View style={{ right: 90 }}>
                        <Image source={resetArrow} />
                    </View>
                </TouchableOpacity>

                <View>
                    <Text style={{
                        color: "#578DDE",
                        fontSize: 17,
                        fontWeight: "700"
                    }}>RESET PASSWORD</Text>
                </View>


            </View>

            <View style={{
                borderWidth: 2,
                borderColor: "#FAFAFA",
                marginTop: 50
            }}></View>


            <View style={styles.mainContainer}>
                <Text style={{ fontSize: 20, color: "#578DDE", letterSpacing: 2, fontWeight: "700" }}>Reset Your</Text>
                <Text style={{ fontSize: 20, color: "#578DDE", letterSpacing: 10, fontWeight: "700", marginLeft: 15 }}>Password?</Text>
                <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 10, fontWeight: "100" }}>please fill in your email and Password</Text>
            </View>


            <View style={styles.inputContainer}>
                <Form>
                    <Item stackedLabel>
                        <Label style={{ color: "#578DDE" }}>email</Label>
                        <Input
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(value) => setEmail(value)}
                            value={email}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label style={{ color: "#578DDE" }} >Password</Label>
                        <Input
                            password={true}
                            secureTextEntry={true}
                            onChangeText={(value) => setPassword(value)}
                            value={password}
                        />
                    </Item>
                </Form>
            </View>


            <View style={styles.ResetButton}>
                <Button
                  onPress={() => onSubmit()}
                    full style={{
                        backgroundColor: '#578DDE',
                        width: 343,
                        marginLeft: 25,
                        borderRadius: 5,
                    }}>
                    <Text style={{ color: 'white', }}>Reset Password</Text>
                </Button>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    resetContainer: {
        flex: 1,
        marginTop: 50
    },
    resetHeader: {
        flexDirection: "row",
        justifyContent: "center"

    },
    mainContainer: {
        marginTop: 150,
        justifyContent: "center",
        alignItems: 'center'
    },
    inputContainer: {
        marginTop: 100,
        marginLeft: 20,
        width: 343
    },
    ResetButton: {
        marginTop: 200
    }

})

export default ResetPassword;
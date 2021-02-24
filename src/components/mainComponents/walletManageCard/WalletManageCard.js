import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import Icons from "react-native-vector-icons/Feather"

const WalletManageCard = () => {
    return (
        <View style={styles.walletManageContainer}>

            <View style={styles.walletManageText}>
                <Text style={{
                    fontWeight: "600",
                    fontSize: 24,
                    fontStyle: "normal",
                    lineHeight: 29.4,
                    left: 16,
                    top: 5,
                    color: '#578DDE'
                }}>Wallet</Text>

                <View style={styles.walletIcons}>
                    <View style={{ backgroundColor: "#578DDE" }}>
                        <Icons name="bar-chart" size={18} color="#ffffff" />
                    </View>
                </View>
            </View>

            <View style={styles.walletBalance}>
                <View style={{ marginTop: 16, marginLeft: 16 }}>
                    <Text style={{
                        color: "#FFFFFF",
                        opacity: 0.5,
                        fontWeight: "500",
                        fontSize: 14
                    }}>Account Balance</Text>

                    <Text style={{
                        fontSize: 14,
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: 20,
                        color: "#FFFFFF"
                    }}>$</Text>

                    <Text style={{
                        left: 15, top: -20,
                        fontSize: 24,
                        color: "#FFFFFF"
                    }}>20,000</Text>

                    <View style={styles.walletUser}>
                        <Text style={{
                            fontWeight: "500",
                            fontStyle: "normal",
                            fontSize: 14,
                            lineHeight: 16.98,
                            color: "#FFFFFF"
                        }}>eazox.pay/manuelsnr</Text>
                    </View>
                </View>

                <View style={{ position: "relative" }}>
                    <View style={styles.walletSecond}>
                        <View style={{
                            backgroundColor: "#25AFFD",
                            top: 0,
                            height: 70, width: 70,
                            right: -36, justifyContent: "center",
                            alignItems: "center", borderBottomLeftRadius: 100,
                            borderTopRightRadius: 15
                        }}>
                            <Icons name="eye-off" size={18} color="#FFFFFF" style={{
                                top: -10,
                                left: 5
                            }} />
                        </View>
                    </View>
                </View>
            </View>


            <View style={styles.walletBoxex}>
                <TouchableOpacity>
                    <View style={{
                        backgroundColor: "#C7FFCC",
                        height: 48,
                        width: 48,
                        left: 10,
                        borderRadius: 4,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Icons name="upload" size={25} color="#43C780" />

                    </View>
                    <Text style={{
                        color: "#3B485B",
                        fontWeight: "normal",
                        fontSize: 14,
                        left: 10,
                        fontStyle: "normal"
                    }}>Deposit</Text>
                </TouchableOpacity>



                <TouchableOpacity>
                    <View style={{
                        backgroundColor: "#C9DFFF",
                        height: 48,
                        width: 48,
                        right: 5,
                        borderRadius: 4,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Icons name="gift" size={25} color="#5091F2" />
                    </View>

                    <Text style={{
                        color: "#3B485B",
                        fontWeight: "normal",
                        fontSize: 14,
                        right: 5,
                        fontStyle: "normal"
                    }}>Reward</Text>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={{
                        backgroundColor: "#3B485B",
                        height: 48,
                        width: 48,
                        right: 10,
                        borderRadius: 4,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Icons name="download" size={25} color="#15243C" />
                    </View>
                    <Text style={{
                        color: "#3B485B",
                        fontWeight: "normal",
                        right: 15,
                        fontSize: 14,
                        fontStyle: "normal"
                    }}>Withdraw</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.walletActivity}>
                <Text style={{
                    color: "#3B485B",
                    fontWeight: "500",
                    fontSize: 14,
                    lineHeight: 16.98
                }}>Activities</Text>
                <Text style={{
                    color: "#3B485B",
                    fontWeight: "400",
                    fontSize: 14,
                    lineHeight: 16.8
                }}>Manage Card</Text>
                <Text style={{
                    fontWeight: "400",
                    fontStyle: "normal",
                    fontSize: 14,
                    lineHeight: 16.8,
                    color: "#3B485B"
                }}>Cryptocurrency</Text>
            </View>

            <View style={{ marginTop: 10, marginLeft: 10 }}>
                <View style={{
                    borderWidth: 2,
                    width: 343,
                    left: 7,
                    borderColor: "#FAFAFA"
                }}>
                    <View style={{
                        borderWidth: 2,
                        height: 1,
                        left: 110,
                        width: 85,
                        borderColor: "#578DDE"
                    }}></View>
                </View>
            </View>

            <View style={styles.walletManageSmall}>
                <TouchableOpacity>
                    <View style={{
                        backgroundColor: "#FFC7C7",
                        height: 32,
                        width: 32,
                        right: 20,
                        borderRadius: 4,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Icons name="trash" size={15} color="#FC6363" />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={{
                        backgroundColor: "#DDE2F2",
                        height: 32,
                        width: 32,
                        borderRadius: 4,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Icons name="edit-2" size={15} color="#578DDE" />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.walletManageCardName}>
                <View style={styles.inputOne}>
                    <Text style={{fontWeight: "500", fontStyle: "normal", fontSize: 14, color: "#3B485B", bottom: 10}}>Card Name</Text>
                    <TextInput style={{ width: 343, height: 48, borderRadius: 8, backgroundColor: "#F4F4F4" }} />
                </View>

                <View style={styles.inputTwo}>
                    <Text>Card Number</Text>
                    <TextInput placeholder="1234 1234 1234 1234" style={{
                        width: 343,
                        height: 48,
                        borderRadius: 8,
                        backgroundColor: "#F4F4F4"
                    }} />
                    <Icons name="credit-card"  size={25} style={{position: "absolute", left: 300, top: 30}} />
                </View>

            </View>


        </View>
    );
};


const styles = StyleSheet.create({
    walletManageContainer: {
        marginTop: 50
    },
    walletManageText: {
        flexDirection: "row",
        justifyContent: "space-between"

    },
    walletIcons: {
        backgroundColor: "rgba(87, 141, 222, 0.1)",
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        right: 25
    },
    walletBalance: {
        width: 343,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 200,
        backgroundColor: "#0D4AF1",
        borderRadius: 15.3,
        left: 19,
        top: 20
    },
    walletSecond: {
        backgroundColor: "#1D6DF2",
        position: "absolute",
        right: 1,
        top: 0,
        width: 105,
        height: 100,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 20
    },
    walletUser: {
        marginTop: 70
    },
    walletBoxex: {
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        left: 5
    },
    walletActivity: {
        marginTop: 17,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: 15,
        marginRight: 20
    },

    walletManageSmall: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "flex-end",
        marginRight: 25
    },
    walletManageCardName: {
        marginTop: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    inputTwo: {
        position: "relative"
    }
})

export default WalletManageCard;
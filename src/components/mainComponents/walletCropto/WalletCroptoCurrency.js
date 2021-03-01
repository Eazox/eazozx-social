import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Picker } from "native-base"
import Icons from "react-native-vector-icons/Feather"
import vi from "../../../images/vi.png"
import Bitcoin from "../../../images/Bitcoin.png"


class WalletCroptoCurrency extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "key1",
            calender: "week1"
        };
    }

    onValueChange(value) {
        this.setState({
            selected: value,
        });
    }
    ValueChange(value) {
        this.setState({
            calender: value
        });
    }


    render() {
        return (
            <View>
                <View style={styles.WalletCroptoCurrency}>
                    <Text style={{
                        left: 16,
                        fontWeight: "600",
                        fontSize: 24,
                        lineHeight: 29.4,
                        color: "#578DDE"
                    }}>Wallet</Text>
                    <View style={{
                        borderColor: "#578DDE",
                        borderWidth: 1,
                        width: 124,
                        backgroundColor: "rgba(87, 141, 222, 0.1)",
                        borderRadius: 40,
                        height: 34,
                        alignItems: "center",
                        justifyContent: "center",
                        right: 16
                    }}>

                        <Picker
                            note
                            mode="dropdown"
                            style={{ width: 124 }}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="BitCoin" value="key1" />
                            <Picker.Item label="Litcon" value="key0" />
                            <Picker.Item label="Dogecoin" value="key2" />
                            <Picker.Item label="Bitcash" value="key3" />
                            <Picker.Item label="Tron" value="key5" />
                            <Picker.Item label="Dash" value="key6" />
                            <Picker.Item label="Zash" value="key7" />
                            <Picker.Item label="BNB" value="key8" />
                            <Picker.Item label="XPP" value="key9" />
                        </Picker>
                    </View>
                </View>

                <View style={styles.WalletCroptoCurrencyText}>
                    <Text style={{ fontWeight: "600", fontSize: 18, color: "#3B485B" }}>NGN 370,530.20</Text>

                    <View style={styles.croptoCurrencyWeek}>
                        <View style={{
                            flexDirection: "row", padding: 10,
                            borderWidth: 1,
                            borderColor: "#CFF6E5",
                            marginTop: 15,
                            borderRadius: 40,
                            backgroundColor: "#CFF6E5"
                        }}>
                            <Text style={{ fontSize: 12, fontWeight: "400", fontStyle: 'normal', lineHeight: 16.8 }}>+3%</Text>
                            <Icons name="arrow-up" size={17} />

                        </View>
                        <Picker
                            note
                            mode="dropdown"
                            style={{ width: 120, top: 8 }}
                            selectedValue={this.state.calender}
                            onValueChange={this.ValueChange.bind(this)}
                        >
                            <Picker.Item label="This week" value="week1" />
                            <Picker.Item label="Last week" value="week2" />
                            <Picker.Item label="Last month" value="week3" />
                            <Picker.Item label="This Month" value="week4" />
                        </Picker>
                    </View>



                    <View style={styles.WalletCroptoStatic}>
                        <Image source={vi} />

                        <View style={styles.WalletMonth}>
                            <Text style={{fontWeight: "400", fontStyle: "normal", fontSize: 12, lineHeight: 14.4, color: "#3B485B"}}>Jan 1</Text>
                            <Text style={{fontWeight: "400", fontStyle: "normal", fontSize: 12, lineHeight: 14.4, color: "#3B485B"}}>Jan 7</Text>
                            <Text style={{fontWeight: "400", fontStyle: "normal", fontSize: 12, lineHeight: 14.4, color: "#3B485B"}}>Jan 14</Text>
                            <Text style={{fontWeight: "400", fontStyle: "normal", fontSize: 12, lineHeight: 14.4, color: "#3B485B"}}>Jan 21</Text>
                            <Text style={{fontWeight: "400", fontStyle: "normal", fontSize: 12, lineHeight: 14.4, color: "#3B485B"}}>Jan 28</Text>
                            <Text style={{fontWeight: "400", fontStyle: "normal", fontSize: 12, lineHeight: 14.4, color: "#3B485B"}}>Feb 1</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.WalletButton}>
                    <TouchableOpacity>
                        <View style={{ justifyContent: "center", alignItems: "center", height: 48, width: 48, backgroundColor: "#C7FFCC" }}>
                            <Icons name="align-justify" size={20} color="#43C780" />

                        </View>
                        <Text style={{ left: 10, fontWeight: "400",fontStyle: 'normal', fontSize: 14, lineHeight: 16.8, color: "#3B485B" }}>Buy</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ justifyContent: "center", alignItems: "center", height: 48, width: 48, backgroundColor: "#C9DFFF" }}>
                            <Icons name="corner-up-right" size={20} color="#5091F2" />

                        </View>
                        <Text style={{ left: 10, fontWeight: "400",fontStyle: 'normal', fontSize: 14, lineHeight: 16.8, color: "#3B485B" }} >Sell</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{
                            justifyContent: "center",
                            alignItems: "center",
                            height: 48, width: 48,
                            backgroundColor: "#FFDA93"
                        }}>
                            <Icons name="send" size={20} color="#F2AA1F" />

                        </View>
                        <Text style={{ left: 10,fontWeight: "400",fontStyle: 'normal', fontSize: 14, lineHeight: 16.8, color: "#3B485B" }}>Send</Text>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <View style={{
                            justifyContent: "center",
                            alignItems: "center",
                            height: 48,
                            width: 48,
                            backgroundColor: "#D0CDD1"
                        }}>
                            <Icons name="grid" size={20} color="#15243C" />
                        </View>
                        <Text style={{fontWeight: "400",fontStyle: 'normal', fontSize: 14, lineHeight: 16.8, color: "#3B485B"}}>Receive</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.walletActivitiesContainer}>
                    <View style={styles.walletActivities}>
                        <Text style={{fontWeight: "400", fontStyle: 'normal', fontSize: 14, lineHeight: 16.8, color: "rgba(59,72,91,1)"}}>Activities</Text>
                        <Text style={{fontWeight: "400", fontStyle: 'normal', fontSize: 14, lineHeight: 16.8, color: "rgba(59,72,91,1)"}}>Manage Card</Text>
                        <Text style={{fontWeight: "600", fontStyle: 'normal', fontSize: 14, lineHeight: 16.8, color: "#3B485B"}}>Cryptocurrency</Text>
                    </View>

                  <View style={styles.walletIndicator}>
                      <View style={{borderColor:"#578DDE", borderWidth: 3, width: 100, left: 240 }}></View>
                  </View>
                </View>

                <View style={styles.walletBitcoinContainer}>
                   <Image source={Bitcoin}  />
                   <Text style={{fontWeight: '600', fontStyle: "normal", fontSize: 16, marginTop: -20, color: "rgba(59, 72, 91, 1)"}}>Coming Soon!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    WalletCroptoCurrency: {
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    WalletCroptoCurrencyText: {
        alignItems: 'center',
        marginTop: 20,
    },
    croptoCurrencyWeek: {
        flexDirection: "row",
        width: 170,
        left: 10
    },
    WalletMonth: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    WalletButton: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    walletActivitiesContainer: {
        marginTop: 15
    },
    walletActivities: {
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    walletIndicator: {
        marginTop:5,
        height: 10,
        borderWidth: 3,
        width: 343,
        left: 20,
        borderColor: "#FAFAFA"
    },
    walletBitcoinContainer: {
      alignItems: "center",
      marginTop: -10
    }
})

export default WalletCroptoCurrency;
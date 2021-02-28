import React,{useState} from 'react';
import {Text, View, StyleSheet,} from 'react-native'
import Picker from "@react-native-picker/picker"

const WalletCroptoCurrency = () => {

    const [Currency, setCutrrncy] =useState([""])

    const Currencys = [
        {
          id: 1,  
          name: "Bitcoin"
        },
        {
          id: 2,  
          name: "Litcoin"
        },
        {
          id: 1,  
          name: "Bitcash"
        },
        {
          id: 1,  
          name: "Dogecoin"
        }
        
    ]

    const CroptoData = Currencys.map(currency => (
        
    ))


    return (
        <View>
            <View style={styles.walletCroptyHeader}>
            <Text>bticoin</Text> 
            </View>
           
        </View>
    );
};


const styles = StyleSheet.create({
    walletCroptyHeader: {
        marginTop: 50
    }
})

export default WalletCroptoCurrency;
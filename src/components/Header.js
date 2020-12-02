import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import logo from "../images/keyboard.png"

const Header = () => {
    return (
        <View style={styles.Header} >
            <TouchableOpacity>
            <View style={styles.logo}>
               <Image  source={logo}/>
            </View>
            </TouchableOpacity>         
              <View style={styles.textcontainer}>
                  <Text style={styles.headerText}>Login</Text>
              </View>
        </View>
    );
};

const styles = StyleSheet.create({
   Header : {
       marginTop: 50,
       flexDirection: 'row',

   },
   logo: {
    marginLeft: 30,
    marginTop: 3
   },

   textcontainer : {
      marginLeft: 100,
      justifyContent: 'center',
      alignItems: 'center'
   },

   headerText: {
       fontSize:24,
       lineHeight: 29,
       fontStyle: 'normal',
       color: '#578DDE',
       marginLeft:10 
       
   }

})

export default Header;

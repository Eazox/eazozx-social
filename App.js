import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import PasswordScreen from './src/Screens/PasswordScreen'



const App = () => {
  return (
    <SafeAreaView>
      <View>
      <PasswordScreen />
    </View>
  </SafeAreaView>
  );

 }


const Styles = StyleSheet.create({
   flex: 1
     
})



export default App


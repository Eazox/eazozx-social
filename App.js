import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import PasswordScreen from './src/Screens/PasswordScreen'
import ResetPassword from './src/Screens/ResetPassword'



const App = () => {
  return (
    <SafeAreaView>
      <View>
      <ResetPassword />
    </View>
  </SafeAreaView>
  );

 }


const Styles = StyleSheet.create({
   flex: 1
     
})




export default App


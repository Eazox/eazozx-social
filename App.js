import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import ForgotPassword from './src/components/mainComponents/forgotPassword/ForgotPassword'
import StoryHome from './src/components/mainComponents/home/StoryHome'
import LoginScreen from './src/components/mainComponents/login/LoginScreen'


const App = () => {

  return (
    <SafeAreaView >
        <StoryHome />
    </SafeAreaView>
  )




const Styles = StyleSheet.create({
   textColor: {
     color: "blue",
     alignItems: "center",
     justifyContent: "center",
     marginLeft: 50
     
   },
})


export default App

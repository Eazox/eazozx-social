import React from 'react'

import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import LoginScreen from './src/components/mainComponents/login/LoginScreen'




const App = () => {

  return (
    <SafeAreaView >
      <LoginScreen />
    </SafeAreaView>
  )

}

const Styles = StyleSheet.create({
   textColor: {
     color: "blue",
     alignItems: "center",
     justifyContent: "center",
     marginLeft: 50
     
   },
})



  

export default App

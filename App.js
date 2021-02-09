import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import MainScreen from './src/components/MainScreen/MainSearch'





const App = () => {

  return (
    <SafeAreaView >
        <MainScreen />
    </SafeAreaView>
  )

  }


const Styles = StyleSheet.create({
   textColor: {
     flex: 1,
     color: "blue",
     alignItems: "center",
     justifyContent: "center",
     marginLeft: 50
     
   },
})



export default App

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
   flex: 1
     
})


export default App

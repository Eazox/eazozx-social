import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import tailwind from 'tailwind-rn'
import SplashScreen from './src/components/splashScreen/SplashScreen'


const App = () => {
  return (
    <SafeAreaView style={tailwind('flex-1')}>
      <SplashScreen />
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


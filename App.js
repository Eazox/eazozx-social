import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import Onboard from './src/components/mainComponents/onboard/Onboard'



const App = () => {

  return (
    <SafeAreaView >
      <Onboard />
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

}

export default App

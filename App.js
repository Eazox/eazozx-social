import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import SideNav from './src/components/mainComponents/sideNav/SideNav'



const App = () => {

  return (
    <SafeAreaView >
      <SideNav />
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

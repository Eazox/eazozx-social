import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import ChatScreen from './src/components/mainComponents/chatScreen/ChatScreen'
import SideNav from './src/components/mainComponents/sideNav/SideNav'



const App = () => {

  return (
    <SafeAreaView >
      <ChatScreen />
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

import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import NewMessageList from './src/components/mainComponents/NewMessageList/NewMessageList'





const App = () => {

  return (
    <SafeAreaView >
        <NewMessageList />
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



// registerRootComponent(App)
export default App

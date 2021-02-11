import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import ProfileSetup from "./src/components/mainComponents/profileSet/ProfileSetup"





const App = () => {
  return (
    <View>
      <ProfileSetup />
  </View>
  );

 }


const Styles = StyleSheet.create({
   flex: 1
     
})


export default App

import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import StoryScreen from './src/components/mainComponents/story/StoryScreen'



const App = () => {
  return (

    <SafeAreaView>
      <View>
      <StoryScreen />
    </View>
  </SafeAreaView>
  );

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

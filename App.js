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
   flex: 1


})






export default App

import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import tailwind from 'tailwind-rn'
import Sample from './src/Sample'
import { Ionicons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'
import ProfileSetUp from "./src/Screens/ProfileSetupScreen"


const App = () => {
  return (
    <SafeAreaView>
      <View>
      <ProfileSetUp />
    </View>
  </SafeAreaView>
  );

 }


const Styles = StyleSheet.create({
   flex: 1
     
})


export default App


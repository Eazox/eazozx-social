import React from 'react'

import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import LoginScreen from './src/components/mainComponents/login/LoginScreen'
import tailwind from 'tailwind-rn'
import SplashScreen from './src/components/splashScreen/SplashScreen'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { Theme } from './src/Constants'
import DrawerNavigation from './src/navigations/DrawerNavigation'


const App = () => {

  return (
    <SafeAreaView >
      <LoginScreen />
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

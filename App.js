import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import Sample from './src/Sample'
import SplashScreen from './src/components/main components/SplashScreen'
// import Signup from './src/components/main components/Signup'
import Verification from './src/components/main components/Verification'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    Gilroy: require('./assets/fonts/Gilroy-Light.otf'),
    ...Ionicons.font
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <SafeAreaView style={tailwind('flex-1 items-center justify-center')}>
        {/* <SplashScreen /> */}
        {/* <Signup /> */}
        <Verification />
      </SafeAreaView>
    )
  }
}

export default App

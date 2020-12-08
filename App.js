import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { Ionicons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'

import mainComponents from './src/components/mainComponents'
import Navigations from './src/navigations/RootNavigation'
import * as Font from 'expo-font'

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
        {/* <mainComponents.SplashScreen /> */}
        <mainComponents.SignUp />
        {/* <Navigations /> */}
      </SafeAreaView>
    )
  }
}

export default App

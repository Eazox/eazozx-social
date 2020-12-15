import React from 'react'
import { SafeAreaView } from 'react-native'
import tailwind from 'tailwind-rn'
// import Sample from './src/Sample'
// import SplashScreen from './src/components/main components/SplashScreen'
// import Signup from './src/components/main components/Signup'
import verify from './src/components/mainComponents/verification'
// import * as Font from 'expo-font'
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

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <SafeAreaView style={tailwind('flex-1 items-center justify-center')}>
      {/* <SplashScreen /> */}
      {/* <Signup /> */}
      <verify.Verification />
    </SafeAreaView>
  )
}

export default App

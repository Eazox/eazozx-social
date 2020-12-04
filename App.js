import React from 'react'
import { SafeAreaView } from 'react-native'
import tailwind from 'tailwind-rn'
// import SplashScreen from './src/components/mainComponents/SplashScreen'
import Signup from './src/components/mainComponents/Signup'
// import Verification from './src/components/mainComponents/Verification'
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

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <SafeAreaView style={tailwind('flex-1 items-center justify-center')}>
        {/* <SplashScreen /> */}
        <Signup />
        {/* <Verification /> */}
      </SafeAreaView>
    )
  }
}

export default App

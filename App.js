import React from 'react'
// import { SafeAreaView } from 'react-native'
// import tailwind from 'tailwind-rn'
import { Ionicons, MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'
import HomePage from './src/components/mainComponents/homePage'

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    Gilroy: require('./assets/fonts/Gilroy-Light.otf'),
    Gilroy_bold: require('./assets/fonts/Gilroy-Bold.ttf'),
    Gilroy_heavy: require('./assets/fonts/Gilroy-Heavy.ttf'),
    Gilroy_medium: require('./assets/fonts/Gilroy-Medium.ttf'),
    Gilroy_regular: require('./assets/fonts/Gilroy-Regular.ttf'),
    Gilroy_semibold: require('./assets/fonts/Gilroy-SemiBold.ttf'),
    Gilroy_thin: require('./assets/fonts/Gilroy-Thin.ttf'),
    Gilroy_ultralight: require('./assets/fonts/Gilroy-UltraLight.ttf'),
    ...Ionicons.font,
    ...MaterialIcons.font,
    ...Entypo.font,
    ...MaterialCommunityIcons.font
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return <HomePage />
  }
}

export default App

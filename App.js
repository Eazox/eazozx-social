import React from 'react'
// import { SafeAreaView } from 'react-native'
// import tailwind from 'tailwind-rn'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'
import TabNavigation from './src/navigations/tabNavigation'

// import mainComponents from './src/components/mainComponents'
// import Navigations from './src/navigations/RootNavigation'
// import * as Font from 'expo-font'

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    Gilroy: require('./assets/fonts/Gilroy-Light.otf'),
    ...Ionicons.font,
    ...MaterialIcons.font
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      //   <SafeAreaView style={tailwind('flex-1 items-center justify-center')}>
      //     /* <mainComponents.SplashScreen /> */
      //     /* <mainComponents.SignUp /> */
      //     /* <Navigations /> */
      //   /* </SafeAreaView> */
      <TabNavigation />
    )
  }
}

export default App

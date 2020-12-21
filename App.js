import React from 'react'
// import { SafeAreaView } from 'react-native'
// import tailwind from 'tailwind-rn'
import { Ionicons, MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { Theme } from './src/Constants'
import CreatePassword from './src/components/mainComponents/createPassword'

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    Gilroy: require('./assets/fonts/Gilroy-Light.otf'),
    ...Ionicons.font,
    ...MaterialIcons.font,
    ...Entypo.font,
    ...MaterialCommunityIcons.font
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer theme={Theme}>
        <CreatePassword />
      </NavigationContainer>
    )
  }
}

export default App

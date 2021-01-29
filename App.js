import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import ForgotPassword from './src/components/mainComponents/forgotPassword/ForgotPassword'
import StoryHome from './src/components/mainComponents/home/StoryHome'
import LoginScreen from './src/components/mainComponents/login/LoginScreen'
import { Ionicons, MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'


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

  return (
    <SafeAreaView >
        <StoryHome />
    </SafeAreaView>
  )




const Styles = StyleSheet.create({
   textColor: {
     color: "blue",
     alignItems: "center",
     justifyContent: "center",
     marginLeft: 50
     
   },
})




export default App

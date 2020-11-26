import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import Sample from './src/Sample'
import SplashScreen from './src/components/SplashScreen'

const App = () => {
  return (
    <SafeAreaView style={tailwind('flex-1 items-center justify-center')}>
      <SplashScreen/>
    </SafeAreaView>
  )
}

export default App

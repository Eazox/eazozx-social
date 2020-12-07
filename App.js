import React from 'react'
import { SafeAreaView } from 'react-native'
import tailwind from 'tailwind-rn'
import SplashScreen from './src/components/splashScreen/SplashScreen'
import RootNavigation from './src/navigations/RootNavigation'

const App = () => {
  return (
    <SafeAreaView style={tailwind('flex-1')}>
      <RootNavigation />
    </SafeAreaView>
  )
}

export default App

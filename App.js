import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import tailwind from 'tailwind-rn'
import Sample from './src/Sample'
import LoginScreen from './src/Screens/LoginScreen'

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <LoginScreen />
      </View>
    </SafeAreaView>
  )
}
export default App

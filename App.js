import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import PasswordScreen from './src/Screens/PasswordScreen'
import ResetPassword from './src/Screens/ResetPassword'
import StoryScreen from './src/Screens/StoryScreen'

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <StoryScreen />
      </View>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  flex: 1
})

export default App

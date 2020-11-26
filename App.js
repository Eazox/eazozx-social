import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import Sample from './src/Sample'

const App = () => {
  return (
    <SafeAreaView style={tailwind('flex-1 items-center justify-center')}>
      <Sample />
      <View style={tailwind('bg-blue-500 px-5 py-3 rounded-full')}>
        <Text style={tailwind('text-white font-semibold text-lg')}> Here you go 👋</Text>
      </View>
    </SafeAreaView>
  )
}

export default App

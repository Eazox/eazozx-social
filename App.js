import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import Sample from './src/Sample'


const App = () => {
  return (
    <SafeAreaView style={tailwind('flex-1 items-center justify-center')}>
    <View style={tailwind('bg-blue-500 px-5 py-3 rounded-full')}>
      <Text style={tailwind('text-white font-semibold text-lg')}>
        Hello  collins welcome to react native 👋 
      </Text>  
        
      <Sample />
      <View style={tailwind('bg-blue-500 px-5 py-3 rounded-full')}>
        <Text style={tailwind('text-white font-semibold text-lg')}> Here you go 👋</Text>
      </View>
      
    </View>
  </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
   textColor: {
     color: "blue",
     alignItems: "center",
     justifyContent: "center",
     marginLeft: 50
     
   },
})



export default App


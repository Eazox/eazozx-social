import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import ResetPassword from './src/components/mainComponents/resetPassword'




const App = () => {
  return (
    <SafeAreaView>
      <View>
     <ResetPassword /> 
    </View>
  </SafeAreaView>
  );

 }


const Styles = StyleSheet.create({
   flex: 1
     
})





export default App

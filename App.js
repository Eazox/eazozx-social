import React from 'react';
import { SafeAreaView, Text, View,  StyleSheet} from 'react-native';
import tailwind from 'tailwind-rn';

const App = () => {
  return (
    <SafeAreaView style={tailwind('flex-1 items-center justify-center')}>
    <View style={tailwind('bg-blue-500 px-5 py-3 rounded-full')}>
      <Text style={tailwind('text-white font-semibold text-lg')}>
        Hello  collins welcome to react native 👋 
      </Text>  

        <Text style={Styles.textColor}>hello wellcome to react native</Text>
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


export default App;
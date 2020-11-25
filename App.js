import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

const App = () => {
  return (
    <SafeAreaView style={tailwind('flex-1 items-center justify-center')}>
    <View style={tailwind('bg-blue-500 px-5 py-3 rounded-full')}>
      <Text style={tailwind('text-white font-semibold text-lg')}>
        Hello Teams 👋
      </Text>
    </View>
  </SafeAreaView>
  );
}

export default App;
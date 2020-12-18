import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// TODOS
// On load, show animation screen and pass data as props {gotten from react context api via firebase}
// On animation screen, if user is logged in, route to home. else route to login
// Wrap navigation with context, pass user data via the context
// Get user data from firebase

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen how are you</Text>
    </View>
  )
}

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// Docs to setup theme [https://reactnavigation.org/docs/themes]

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(0, 0, 0)'
  }
}

export default App

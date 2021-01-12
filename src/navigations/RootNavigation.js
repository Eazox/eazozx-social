import * as React from 'react'
// import { View, Text } from 'react-native'
import Search from '../components/mainComponents/routePlaceholders/Search'
import { createStackNavigator } from '@react-navigation/stack'

// TODOS
// On load, show animation screen and pass data as props {gotten from react context api via firebase}
// On animation screen, if user is logged in, route to home. else route to login
// Wrap navigation with context, pass user data via the context
// Get user data from firebase

const Stack = createStackNavigator()

export default function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Search} />
      <Stack.Screen name='HomeEs' component={Search} />
    </Stack.Navigator>
  )
}

// Docs to setup theme [https://reactnavigation.org/docs/themes]
// App

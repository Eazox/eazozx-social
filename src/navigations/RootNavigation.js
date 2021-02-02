<<<<<<< HEAD
// import * as React from 'react'
// import { View, Text } from 'react-native'
// import {  DefaultTheme } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
=======
import * as React from 'react'
// import { View, Text } from 'react-native'
import Search from '../components/mainComponents/routePlaceholders/Search'
import { createStackNavigator } from '@react-navigation/stack'
>>>>>>> 14d8fba57f745f07f497762db7c383d54b138828

// // TODOS
// // On load, show animation screen and pass data as props {gotten from react context api via firebase}
// // On animation screen, if user is logged in, route to home. else route to login
// // Wrap navigation with context, pass user data via the context
// // Get user data from firebase

<<<<<<< HEAD
// // function HomeScreen() {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text>Home Screen how are you</Text>
// //     </View>
// //   )
// // }

// // Docs to setup theme [https://reactnavigation.org/docs/themes]

// const Theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'rgb(0, 0, 0)'
//   }
// }

// export default App
=======
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


>>>>>>> 14d8fba57f745f07f497762db7c383d54b138828

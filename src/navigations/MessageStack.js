import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// import Messages from '../components/mainComponents/routePlaceholders/Messages'
// import MessagePage from '../components/mainComponents/MessagePage'
// import MessageListTitle from '../components/subComponents/MessageListTitle'
import TabNavigation from './tabNavigation'
// import Thread from '../components/mainComponents/thread'

export const { Navigator, Screen } = createStackNavigator()

export default function RootNavigation() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name='Home' component={TabNavigation} />
    </Navigator>
  )
}

// Docs to setup theme [https://reactnavigation.org/docs/themes]
// App

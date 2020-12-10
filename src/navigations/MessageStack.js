import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Messages from '../components/mainComponents/routePlaceholders/Messages'
import MessagePage from '../components/mainComponents/routePlaceholders/MessagePage'
// import MessageListTitle from '../components/subComponents/MessageListTitle'

export const { Navigator, Screen } = createStackNavigator()

export default function RootNavigation() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name='MessageList' component={Messages} />
      <Screen name='Messages' component={MessagePage} />
    </Navigator>
  )
}

// Docs to setup theme [https://reactnavigation.org/docs/themes]
// App

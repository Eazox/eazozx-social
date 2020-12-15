import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MessageStack from './MessageStack'
import Profile from '../components/mainComponents/routePlaceholders/Profile'

const { Navigator, Screen } = createDrawerNavigator()

export default function DrawerNavigation() {
  return (
    <Navigator>
      <Screen name='Profile' component={Profile} />
      <Screen name='MainStack' component={MessageStack} options={{ title: 'Main' }} />
    </Navigator>
  )
}

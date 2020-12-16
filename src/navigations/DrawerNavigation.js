import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigation from './tabNavigation'
import Profile from '../components/mainComponents/routePlaceholders/Profile'

const { Navigator, Screen } = createDrawerNavigator()

export default function DrawerNavigation() {
  return (
    <Navigator>
      <Screen name='Profile' component={Profile} />
      <Screen name='TabNav' component={TabNavigation} />
    </Navigator>
  )
}

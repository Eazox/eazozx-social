import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Messages from '../components/mainComponents/routePlaceholders/Messages'
import NewPost from '../components/mainComponents/routePlaceholders/NewPost'
import Profile from '../components/mainComponents/routePlaceholders/Profile'
import Search from '../components/mainComponents/routePlaceholders/Search'
import RootStack from './RootNavigation'
import TabNavigator, { Screen } from '../components/subComponents/TabNavigatorLayout'
import { Theme } from '../Constants'

export default function TabNavigation() {
  return (
    <NavigationContainer theme={Theme}>
      <TabNavigator>
        <Screen name='Search' component={Search} />
        <Screen name='Home' component={RootStack} />
        <Screen name='New Post' component={NewPost} />
        <Screen name='Messages' component={Messages} />
        <Screen name='Profile' component={Profile} />
      </TabNavigator>
    </NavigationContainer>
  )
}

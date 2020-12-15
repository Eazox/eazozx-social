import React from 'react'
import Messages from '../components/mainComponents/routePlaceholders/Messages'
import NewPost from '../components/mainComponents/routePlaceholders/NewPost'
import Profile from '../components/mainComponents/routePlaceholders/Profile'
import Search from '../components/mainComponents/routePlaceholders/Search'
// import RootStack from './RootNavigation'
import TabNavigator, { Screen } from '../components/subComponents/TabNavigatorLayout'

export default function TabNavigation() {
  return (
    <TabNavigator>
      <Screen name='HomeStack' component={Search} options={{ title: 'Home' }} />
      <Screen name='Search' component={Search} />
      <Screen name='New Post' component={NewPost} />
      <Screen name='MessageStack' component={Messages} options={{ title: 'Messages' }} />
      <Screen name='Profile' component={Profile} />
    </TabNavigator>
  )
}

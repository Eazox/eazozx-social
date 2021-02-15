import React from 'react'
import Messages from '../components/mainComponents/Messages/Messages'
import NewPost from '../components/mainComponents/NewPost/NewPost'
import Profile from '../components/mainComponents/Profile/Profile'
import Home from '../components/mainComponents/homePage'
import Search from '../components/mainComponents/Search'
// import RootStack from './RootNavigation'
import TabNavigator, { Screen } from '../components/subComponents/TabNavigatorLayout'

export default function TabNavigation() {
  return (
    <TabNavigator>
      <Screen name='HomePage' component={Home} options={{ title: 'Home' }} />
      <Screen name='Search' component={Search} />
      <Screen name='New Post' component={NewPost} />
      <Screen name='MessageStack' component={Messages} options={{ title: 'Messages' }} />
      <Screen name='Profile' component={Profile} />
    </TabNavigator>
  )
}

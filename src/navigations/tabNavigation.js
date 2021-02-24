import React from 'react'
import Messages from '../components/mainComponents/Messages/Messages'
import NewPost from '../components/mainComponents/NewPost/NewPost'
import Profile from '../components/mainComponents/Profile/Profile'
import Search from '../components/mainComponents/Search'
import Home from '../components/mainComponents/homePage'
import TabNavigator, { Screen } from '../components/subComponents/TabNavigatorLayout'

// eslint-disable-next-line react/prop-types
export default function TabNavigation({ navigation }) {
  return (
    <TabNavigator>
      <Screen name='HomePage' options={{ title: 'Home' }}>
        {props => <Home {...props} drawerNavProp={navigation} />}
      </Screen>
      <Screen name='Search' component={Search} />
      <Screen name='New Post' component={NewPost} />
      <Screen name='MessageStack' component={Messages} options={{ title: 'Messages' }} />
      <Screen name='Profile'>{props => <Profile personal {...props} />}</Screen>
    </TabNavigator>
  )
}

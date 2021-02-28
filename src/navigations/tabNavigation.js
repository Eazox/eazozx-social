import React from 'react'
import Messages from '../components/mainComponents/Messages/Messages'
import NewPost from '../components/mainComponents/NewPost/NewPost'
import Search from '../components/mainComponents/Search'
import Home from '../components/mainComponents/homePage'
import Wallet from '../components/mainComponents/placeholderScreens/wallet'
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
      <Screen name='Wallet' component={Wallet} />
    </TabNavigator>
  )
}

import React from 'react'
import { Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNav from './tabNavigation'
import Profile from '../components/mainComponents/Profile'
import MessagePage from '../components/mainComponents/MessagePage'
import SideNav from '../components/mainComponents/sideNavBar'
import Thread from '../components/mainComponents/thread'
export default function DrawerNavigation() {
  const { Navigator, Screen } = createDrawerNavigator()
  const gesture = useSelector(state => state.setPageReducer)

  return (
    // <Navigator>
    //   <Screen name='MainStack' component={MessageStack} options={{ title: 'Main' }} />
    // </Navigator>
    <Navigator
      activeTintColor='#000000'
      activeBackgroundColor='#e6e6e6'
      drawerStyle={{
        width: Dimensions.get('window').width - 60,
        maxWidth: 350
      }}
      swipeEnabled={gesture === 'display'}
      drawerContent={props => <SideNav {...props} />}
    >
      <Screen name='HomeNav'>{props => <TabNav {...props} />}</Screen>
      <Screen
        name='Profile'
        component={Profile}
        title='Account Information'
        options={{
          swipeEnabled: false
        }}
      />
      <Screen
        name='Messages'
        options={{
          swipeEnabled: false
        }}
        component={MessagePage}
      />
      <Screen
        options={{
          swipeEnabled: false
        }}
        name='Thread'
      >
        {props => <Thread {...props} />}
      </Screen>
    </Navigator>
  )
}

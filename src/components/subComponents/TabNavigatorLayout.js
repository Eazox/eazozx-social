import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons as Icon } from '@expo/vector-icons'
import Proptypes from 'prop-types'
import usePortrait from '../customHooks/usePortrait'

export const { Navigator, Screen } = createBottomTabNavigator()

// Configuration for tab navigator
function TabNavigator({ children }) {
  const portrait = usePortrait()

  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName

          if (route.name === 'HomePage') {
            iconName = 'home'
            return (
              <Icon
                name={iconName}
                size={26}
                color={color}
                style={portrait ? iconStylePortrait : {}}
              />
            )
          } else if (route.name === 'MessageStack') {
            iconName = 'message'
            return (
              <Icon
                name={iconName}
                size={26}
                color={color}
                style={portrait ? iconStylePortrait : {}}
              />
            )
          } else if (route.name === 'New Post') {
            iconName = 'add-circle-outline'
            return (
              <Icon
                name={iconName}
                size={26}
                color={color}
                style={portrait ? iconStylePortrait : {}}
              />
            )
          } else if (route.name === 'Wallet') {
            iconName = 'account-balance-wallet'
            return (
              <Icon
                name={iconName}
                size={26}
                color={color}
                style={portrait ? iconStylePortrait : {}}
              />
            )
          } else if (route.name === 'Search') {
            iconName = 'search'
            return (
              <Icon
                name={iconName}
                size={26}
                color={color}
                style={portrait ? iconStylePortrait : {}}
              />
            )
          }
        }
      })}
      tabBarOptions={{
        activeTintColor: 'rgb(87, 141, 222)',
        inactiveTintColor: 'rgb(189, 189, 189)',
        style: { height: 58 },
        labelStyle: portrait ? labelStylePortrait : labelStyleLandscape
      }}
    >
      {children}
    </Navigator>
  )
}

TabNavigator.propTypes = {
  children: Proptypes.any
}

const labelStylePortrait = {
  paddingBottom: 7,
  fontSize: 12,
  fontWeight: '400',
  fontFamily: 'Gilroy'
}

const labelStyleLandscape = {
  fontSize: 12,
  fontWeight: '400',
  fontFamily: 'Gilroy'
}

const iconStylePortrait = {
  marginBottom: -5
}

export default TabNavigator

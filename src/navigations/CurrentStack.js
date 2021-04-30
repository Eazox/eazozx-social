/* eslint-disable react/display-name */
// import liraries
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../components/mainComponents/splashscreen'
import SignupStack from './SignupStack'
import LoginStack from './LoginStack'
import AppStack from './DrawerNavigation'
import OnBoardStack from '../components/mainComponents/onboard'
// import BSetup from '../components/mainComponents/businessSetup'
import { useSelector } from 'react-redux'

const { Navigator, Screen } = createStackNavigator()

// const LoginStack = () => (
//   <>
//     <Screen name='Login' component={Login} />
//     <Screen name='New Password' component={NewPassword} />
//   </>
// )

// create a component
const CurrentStack = () => {
  const currScreen = useSelector(state => state.stackReducer)
  let CurrStack = null

  if (currScreen === 'splashScreen') {
    CurrStack = () => <SplashScreen />
  } else if (currScreen === 'onBoardStack') {
    CurrStack = () => <OnBoardStack />
  } else if (currScreen === 'loginStack') {
    CurrStack = () => <LoginStack />
    // CurrStack = () => <BSetup />
  } else if (currScreen === 'signupStack') {
    CurrStack = () => <SignupStack />
  } else if (currScreen === 'appStack') {
    CurrStack = () => <AppStack />
  }

  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name={currScreen} component={CurrStack} />
    </Navigator>
  )
}

// make this component available to the app
export default CurrentStack

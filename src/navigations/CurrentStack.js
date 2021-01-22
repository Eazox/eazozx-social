/* eslint-disable react/display-name */
// import liraries
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../components/mainComponents/splashscreen'
import SignupStack from './SignupStack'
import LoginStack from './LoginStack'
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
  const currScreen = useSelector(state => state.setStackReducer)
  let CurrStack = null

  if (currScreen === 'splashScreen') {
    CurrStack = () => <SplashScreen />
  } else if (currScreen === 'loginStack') {
    CurrStack = LoginStack
  } else if (currScreen === 'signupStack') {
    CurrStack = () => <SignupStack />
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

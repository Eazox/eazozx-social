// import liraries
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Signup from '../components/mainComponents/signup'
// import VerifySignup from '../components/mainComponents/Verification'
import Profile from '../components/mainComponents/Profile'

// create a component
const SignupStack = () => {
  const { Navigator, Screen } = createStackNavigator()

  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name='Signup' component={Signup} />
      <Screen name='profile' component={Profile} />
    </Navigator>
  )
}
// make this component available to the app
export default SignupStack

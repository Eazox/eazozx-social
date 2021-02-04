// import liraries
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../components/mainComponents/login'
import ResetPassword from '../components/mainComponents/resetPassword'
// create a component
const LoginStack = () => {
  const { Navigator, Screen } = createStackNavigator()

  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name='signup' component={Login} />
      <Screen name='resetPassword' component={ResetPassword} />
    </Navigator>
  )
}
// make this component available to the app
export default LoginStack

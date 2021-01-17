// import liraries
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../components/mainComponents/login'
import NewPassword from '../components/mainComponents/resetPassword'
// import Signup from '../components/mainComponents/signup'
// import VerifySignup from '../components/mainComponents/Verification'
// import Profile from '../components/mainComponents/Profile'
// import { useDispatch, useSelector } from 'react-redux'
// import { setStack } from '../store/actions'

const { Navigator, Screen } = createStackNavigator()

// const LoginStack = (
//   <>
//     <Screen name='Login' component={Login} />
//     <Screen name='New Password' component={NewPassword} />
//   </>
// )

// const SignupStack = (
//   <>
//     <Screen name='Signup' component={Signup} />
//     <Screen name='Verify Signup' component={VerifySignup} />
//     <Screen name='profile' component={Profile} />
//   </>
// )

// create a component
const CurrentStack = () => {
  // const dispatch = useDispatch()
  // const currScreen = useSelector(state => state.setStackReducer)

  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <>
        <Screen name='Login' component={Login} />
        <Screen name='New Password' component={NewPassword} />
      </>
    </Navigator>
  )
}

// make this component available to the app
export default CurrentStack

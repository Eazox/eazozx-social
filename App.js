import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store/configureStore'
import { NavigationContainer } from '@react-navigation/native'
import { Theme } from './src/Constants'
import CurrentStack from './src/navigations/CurrentStack'

// const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={Theme}>
        <CurrentStack />
      </NavigationContainer>
    </Provider>
  )
}

// registerRootComponent(App)
export default App

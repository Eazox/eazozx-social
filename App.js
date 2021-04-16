import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './src/store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'
import { Theme } from './src/Constants'
import CurrentStack from './src/navigations/CurrentStack'
// import BSetup from './src/components/mainComponents/businessSetup'

// const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={Theme}>
          <CurrentStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

// registerRootComponent(App)
export default App

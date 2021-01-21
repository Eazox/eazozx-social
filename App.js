import React from 'react'
import { AppLoading } from 'expo'
import { Ionicons, MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux'
import store from './src/store/configureStore'
import { NavigationContainer } from '@react-navigation/native'
import { Theme } from './src/Constants'
// import TabNavigation from './src/navigations/tabNavigation'
// import DrawerNavigation from './src/navigations/DrawerNavigation'
import CurrentStack from './src/navigations/CurrentStack'

// const store = configureStore()

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    Gilroy: require('./assets/fonts/Gilroy-Light.otf'),
    ...Ionicons.font,
    ...MaterialIcons.font,
    ...Entypo.font,
    ...MaterialCommunityIcons.font
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer theme={Theme}>
          <CurrentStack />
        </NavigationContainer>
      </Provider>
    )
  }
}

// registerRootComponent(App)
export default App

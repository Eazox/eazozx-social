import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Logo from '../../images/logo.png'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    marginLeft: 12
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SplashScreen

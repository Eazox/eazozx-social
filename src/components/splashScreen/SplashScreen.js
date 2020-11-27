import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Logo from '../../images/Logo.png'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <Text style={styles.logotext}>EAZOX</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logotext: {
    fontFamily: 'IBM Plex Sans',
    fontWeight: '500',
    fontSize: 36,
    textAlign: 'center',
    lineHeight: 47,
    marginLeft: 10,
    color: '#15243C'
  },
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

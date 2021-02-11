import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import * as Progress from 'react-native-progress'
import Logo from '../../../images/Eazox-logo.png'

const { height, width } = Dimensions.get('window')

const SplashScreen = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    let count = 0
    if (count !== 1) {
      count++
      setTimeout(() => {
        setCounter(count + 0.1)
      }, 3000)
    }
  }, [])

  return (
    <View>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <Progress.Bar
        style={{ alignSelf: 'center', bottom: 20 }}
        progress={counter}
        animated
        height={10}
        borderColor='gray'
        color='rgba(87,141,222,1)'
        width={width - 5}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SplashScreen

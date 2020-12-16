// import liraries
import React, { Component } from 'react'
import { View, StyleSheet, Animated, Easing, Image } from 'react-native'
import Logo from '../../images/Eazox-logo.png'

// create a component
class SplashScreen extends Component {
  loadAnim = new Animated.Value(-250)

  componentDidMount() {
    Animated.timing(this.loadAnim, {
      toValue: 0,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true
    }).start()
  }

  render() {
    return (
      <>
        <Image source={Logo} />
        <View style={styles.loadingContainer}>
          <Animated.View
            style={[
              styles.loadingContent,
              {
                transform: [
                  {
                    translateX: this.loadAnim
                  }
                ]
              }
            ]}
          />
        </View>
      </>
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  loadingContainer: {
    height: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 30,
    width: 250,
    position: 'absolute',
    bottom: 0,
    borderWidth: 1,
    borderColor: 'gray'
  },
  loadingContent: {
    height: '100%',
    backgroundColor: '#578dde',
    position: 'absolute',
    width: '100%'
  }
})

// make this component available to the app
export default SplashScreen

// import liraries
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

// create a component
class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.loadingContainer}>
        <View style={styles.loadingContent} />
      </View>
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
    width: '80%',
    position: 'absolute',
    bottom: 0,
    borderWidth: 1,
    borderColor: 'gray'
  },
  loadingContent: {
    height: '100%',
    backgroundColor: '#578dde',
    position: 'absolute',
    right: '99%',
    width: '100%',
    zIndex: 2
  }
})

// make this component available to the app
export default SplashScreen

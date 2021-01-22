// import liraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Animated, Easing, Image } from 'react-native'
import Logo from '../../../images/Eazox-logo.png'
import { setStack } from '../../../store/actions'
import { connect } from 'react-redux'

// create a component
class SplashScreen extends Component {
  loadAnim = new Animated.Value(-250)

  componentDidMount() {
    Animated.timing(this.loadAnim, {
      toValue: 0,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => {
      // move to next screen
      setTimeout(() => this.props.setStack('loginStack', 1000))
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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

const mapDispatchtoProps = dispatch => {
  return {
    setStack: stack => dispatch(setStack(stack))
  }
}

SplashScreen.propTypes = {
  setStack: PropTypes.func
}

// make this component available to the app
export default connect(null, mapDispatchtoProps)(SplashScreen)
// export default SplashScreen

// import liraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Animated, Easing, Image } from 'react-native'
import Logo from '../../../images/Eazox-logo.png'
import { setStack, authSuccess } from '../../../store/actions'
import { connect } from 'react-redux'
import { Auth } from '../../../firebase'

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
      Auth.onAuthStateChanged(userLog => {
        if (userLog) {
          this.props.authSuccess(userLog)
          this.props.setStack('appStack')
        } else {
          this.props.setStack('loginStack')
        }
      })
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
    setStack: stack => dispatch(setStack(stack)),
    authSuccess: payload => dispatch(authSuccess(payload))
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer
  }
}

SplashScreen.propTypes = {
  setStack: PropTypes.func,
  authSuccess: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchtoProps)(SplashScreen)

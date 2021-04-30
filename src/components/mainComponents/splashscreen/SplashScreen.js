// import liraries
import React, { Component } from 'react'
import * as Font from 'expo-font'
import {
  Ionicons,
  AntDesign,
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons
} from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import Logo from '../../../images/Eazox-logo.png'
import { setStack, authSuccess } from '../../../store/actions'
import { connect } from 'react-redux'
import { Auth } from '../../../firebase'
import AsyncStorage from '@react-native-community/async-storage'

// create a component
class SplashScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: false
    }
    this.checkFirstTime = this.checkFirstTime.bind(this)
    this.checkUser = this.checkUser.bind(this)
  }

  async loadFonts() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Gilroy: require('../../../../assets/fonts/Gilroy-Light.otf'),
      Gilroy_bold: require('../../../../assets/fonts/Gilroy-Bold.ttf'),
      Gilroy_heavy: require('../../../../assets/fonts/Gilroy-Heavy.ttf'),
      Gilroy_medium: require('../../../../assets/fonts/Gilroy-Medium.ttf'),
      Gilroy_semibold: require('../../../../assets/fonts/Gilroy-SemiBold.ttf'),
      ...Ionicons.font,
      ...MaterialIcons.font,
      ...Entypo.font,
      ...MaterialCommunityIcons.font,
      ...AntDesign.font
    })
    this.setState({ fontsLoaded: true })
  }

  async checkFirstTime() {
    return AsyncStorage.getItem('@firstTime')
      .then(value => {
        return !value
      })
      .catch(e => console.log(e))
  }

  async checkUser() {
    // check first time opening app
    // const firstTime = await this.checkFirstTime()
    Auth.onAuthStateChanged(userLog => {
      if (userLog) {
        this.props.setStack('appStack')
      } else {
        // if (firstTime) {
        //   this.props.setStack('onBoardStack')
        // } else {
        this.props.setStack('loginStack')
        // }
      }
    })
  }

  componentDidMount() {
    this.loadFonts()
    this.checkUser()
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={Logo} />
      </View>
    )
  }
}

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
  setStack: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchtoProps)(SplashScreen)

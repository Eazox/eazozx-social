import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Login from '../../../../src/images/login.png'
import facebook from '../../../images/Facebook.png'
import googleLogo from '../../../images/Google.png'
import Header from '../../subComponents/Header'
import { connect } from 'react-redux'
import { setStack, login } from '../../../store/actions'

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      emailError: '',
      passwordError: '',
      password: '',
      showIconEye: true
    }
  }

  // Show icon toggle
  showIcon = () => {
    this.setState({
      showIconEye: !this.state.showIconEye
    })
  }

  emailValidator() {
    if (this.state.email === '') {
      this.setState({ emailError: 'Email Field Can not be Empty' })
    } else {
      this.setState({ emailError: '' })
    }
  }

  passwordValidator() {
    if (this.state.password === '') {
      this.setState({ passwordError: 'Password Field Can not be Empty' })
    } else {
      this.setState({ passwordError: '' })
    }
  }

  Submit() {
    console.warn(this.state)
  }

  render() {
    return (
      <View>
        <Header />
        <View style={styles.logoContainer}>
          <Image source={Login} />
          <Text
            style={{
              height: 24,
              fontSize: 19.66,
              fontWeight: '600',
              fontStyle: 'normal',
              color: '#414141'
            }}
          >
            EAZOX
          </Text>

          <Text style={styles.title}>shop easily everywhere</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.formText}>Email Address/Username</Text>
          <View style={styles.inputText}>
            <TextInput
              style={styles.input}
              placeholder='Enter Email/Username'
              autoCapitalize='none'
              keyboardType='email-address'
              onBlur={() => this.emailValidator()}
              onChangeText={text => {
                this.setState({ email: text })
              }}
            />
            <Text style={{ color: 'red', marginLeft: 20, fontSize: 10 }}>
              {this.state.emailError}
            </Text>
          </View>

          <View style={styles.textPassword}>
            <Text style={styles.passwordOne}>Password</Text>

            <TouchableOpacity>
              <Text style={styles.passwordTwo}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputPassword}>
            <TextInput
              style={styles.input}
              keyboardType='numeric'
              maxLength={8}
              onBlur={() => this.passwordValidator()}
              placeholder='Enter your password'
              onChangeText={password => {
                this.setState({ password: password })
              }}
            />
            <Icon name='eye' size={20} style={{ right: 35 }} color='#BDBDBD' />
          </View>
          <Text style={{ color: 'red', marginLeft: 20, fontSize: 10 }}>
            {this.state.passwordError}
          </Text>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              this.props.login(this.state.email, this.state.password)
            }}
          >
            <Text style={styles.buttonContent}>Log In</Text>
          </TouchableOpacity>

          <View style={styles.lineContainer}>
            <View
              style={{
                flex: 1,
                height: 1,
                width: 137,
                backgroundColor: 'rgba(21, 36, 60, 0.4)'
              }}
            />
            <View>
              <Text
                style={{
                  width: 50,
                  textAlign: 'center',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  color: '#15243C'
                }}
              >
                OR
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                height: 1,
                width: 137,
                backgroundColor: 'rgba(21, 36, 60, 0.4)'
              }}
            />
          </View>

          <View style={styles.googleContainer}>
            <TouchableOpacity style={styles.googleContent}>
              <Image source={googleLogo} style={{ marginTop: 10 }} />
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  fontSize: 18,
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  lineHeight: 22,
                  color: '#333333'
                }}
              >
                Continue with Google
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.facebookContainer}>
            <TouchableOpacity style={styles.facebookContent}>
              <Image source={facebook} style={{ marginTop: 10, marginLeft: 50 }} />
              <Text
                style={{
                  marginTop: 13,
                  textAlign: 'center',
                  marginLeft: 10,
                  color: '#FFFFFF',
                  fontWeight: 'normal',
                  fontStyle: 'normal',
                  fontSize: 18,
                  lineHeight: 22
                }}
              >
                Continue with Facebook
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              textAlign: 'center',
              flexDirection: 'row',
              marginTop: 10
            }}
          >
            <Text
              style={{
                fontWeight: '600',
                fontStyle: 'normal',
                fontSize: 16,
                lineHeight: 24,
                color: '#939090',
                marginLeft: 70
              }}
            >
              Don’t have an account?
            </Text>
            <TouchableOpacity
              style={{ justifyContent: 'center' }}
              onPress={() => this.props.setStack('signupStack')}
            >
              <Text
                style={{
                  fontWeight: '600',
                  fontStyle: 'normal',
                  fontSize: 16,
                  marginLeft: 5,
                  lineHeight: 24,
                  color: '#3B5998',
                  marginBottom: 30
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 20
  },
  logoContainer: {
    marginTop: 36.4,
    flex: 1,
    alignItems: 'center'
  },
  compText: {
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 19.66,
    lineHeight: 23.97,
    color: '#414141'
  },
  title: {
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 6,
    lineHeight: 7.31
  },
  formText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 140,
    marginLeft: 10,
    marginBottom: 8,
    color: 'rgba(21, 36, 60, 0.8)',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19
  },
  inputContainer: {
    marginTop: 10,
    marginLeft: 20
  },

  input: {
    height: 48,
    width: 343,
    paddingLeft: 16,
    backgroundColor: '#FAFAFA',
    borderRadius: 5
  },
  textPassword: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  passwordOne: {
    fontSize: 16,
    color: 'rgba(21, 36, 60, 0.8)',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 19.2
  },
  passwordTwo: {
    marginRight: 0,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#578DDE'
  },
  buttonContainer: {
    backgroundColor: '#939090',
    height: 48,
    marginLeft: 10,
    marginTop: 25,
    width: 343,
    borderRadius: 5
  },
  buttonContent: {
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    fontSize: 18,
    color: '#FFFFFF'
  },
  lineContainer: {
    marginTop: 20,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    color: 'red'
  },
  googleContainer: {
    marginTop: 32,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#FAFAFA',
    width: 343
  },

  googleContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FDFDFD',
    height: 48,
    width: 343
  },

  facebookContainer: {
    marginTop: 18,
    marginLeft: 10,
    borderColor: '#3B5998',
    width: 343,
    borderRadius: 5
  },

  facebookContent: {
    flexDirection: 'row',
    height: 48,
    width: 343,
    borderRadius: 3,
    backgroundColor: '#3B5998'
  },
  inputText: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 10
  },

  inputPassword: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30
  }
})
const mapDispatchtoProps = dispatch => {
  return {
    setStack: stack => dispatch(setStack(stack)),
    login: (email, password) => dispatch(login(email, password))
  }
}

LoginScreen.propTypes = {
  setStack: PropTypes.func,
  login: PropTypes.func
}

export default connect(null, mapDispatchtoProps)(LoginScreen)

import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import Login from '../images/login.png'
import facebook from '../images/Facebook.png'
import googleLogo from '../images/Google.png'
import Icon from 'react-native-vector-icons/AntDesign'

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      emailError: '',
      passwordError: '',
      password: ''
    }
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
      <View style={styles.container}>
        <Header />
        <View style={styles.logoContainer}>
          <Image source={Login} />
          <Text style={styles.compText}>EAZOX</Text>
          <Text style={styles.title}>shop easily everywhere</Text>
        </View>
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
          <Icon name='eye' size={20} style={{ right: 50 }} color='#BDBDBD' />
        </View>
        <Text style={{ color: 'red', marginLeft: 20, fontSize: 10 }}>
          {this.state.passwordError}
        </Text>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.Submit()
          }}
        >
          <Text style={styles.buttonContent}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.lineContainer}>
          <View style={{ flex: 1, height: 1, width: 343, backgroundColor: 'black' }} />
          <View>
            <Text style={{ width: 50, textAlign: 'center' }}>OR</Text>
          </View>
          <View style={{ flex: 1, height: 1, width: 343, backgroundColor: 'black' }} />
        </View>

        <View style={styles.googleContainer}>
          <TouchableOpacity style={styles.googleContent}>
            <Image source={googleLogo} style={{ marginTop: 10 }} />
            <Text style={{ marginLeft: 10, marginTop: 10 }}>Continue with Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.facebookContainer}>
          <TouchableOpacity style={styles.facebookContent}>
            <Image source={facebook} style={{ marginTop: 10, marginLeft: 50 }} />
            <Text
              style={{
                marginTop: 10,
                textAlign: 'center',
                marginLeft: 10,
                color: '#FFFFFF'
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
            marginLeft: 80,
            marginTop: 10
          }}
        >
          <Text
            style={{
              fontWeight: '600',
              fontStyle: 'normal',
              fontSize: 16,
              lineHeight: 24,
              color: '#939090'
            }}
          >
            Don’t have an account?
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: '600',
                fontStyle: 'normal',
                fontSize: 16,
                lineHeight: 24,
                color: '#3B5998',
                marginBottom: 30
              }}
            >
              {' '}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
    marginTop: 140,
    marginLeft: 20,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19.2
  },
  inputContainer: {
    marginTop: 10,
    marginLeft: 20
  },

  input: {
    marginLeft: 20,
    height: 48,
    width: 343,
    paddingLeft: 20,
    backgroundColor: '#FAFAFA',
    borderRadius: 5
  },
  textPassword: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  passwordOne: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 19.2
  },
  passwordTwo: {
    marginRight: 25,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#578DDE'
  },
  buttonContainer: {
    backgroundColor: '#939090',
    height: 48,
    marginTop: 25,
    width: 343,
    marginLeft: 20,
    borderRadius: 5
  },
  buttonContent: {
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    color: '#FFFFFF'
  },
  lineContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center'
  },
  googleContainer: {
    marginTop: 32,
    marginLeft: 20,
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
    marginTop: 25,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#3B5998',
    width: 343,
    borderRadius: 3
  },

  facebookContent: {
    flexDirection: 'row',
    height: 48,
    width: 343,
    backgroundColor: '#3B5998'
  },
  inputPassword: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 343,
    marginLeft: 20
  }
})

export default LoginScreen

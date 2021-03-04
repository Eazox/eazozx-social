import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Login from '../../../../src/images/login.png'
import facebook from '../../../images/Facebook.png'
import googleLogo from '../../../images/Google.png'
import ErrorModal from '../../subComponents/Modal'
import { connect } from 'react-redux'
import {
  CustomLabel,
  CustomError,
  CustomInput,
  CustomPassword,
  CustomText
} from '../../subComponents/CustomFontComponents'
import { GLOBALSTYLES } from '../../../Constants'
import {
  Container,
  Form,
  Item,
  Icon,
  Content,
  Header,
  Button,
  Left,
  Body,
  Title
} from 'native-base'
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
    this.changeFirstTime = this.changeFirstTime.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  async changeFirstTime() {
    try {
      await AsyncStorage.setItem('@firstTime', 'entered')
    } catch (e) {
      console.log(e)
    }
  }

  handleLogin() {
    this.changeFirstTime()
    this.props.login(this.state.email, this.state.password)
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
      <Container>
        <Header style={GLOBALSTYLES.header}>
          <Left style={GLOBALSTYLES.headerLeft}>
            <Button transparent>
              <Icon name='arrow-back' style={{ color: 'black', marginLeft: 8 }} />
            </Button>
          </Left>
          <Body style={GLOBALSTYLES.alignCenter}>
            <Title style={[GLOBALSTYLES.headerText, { fontFamily: 'Gilroy_medium' }]}>Login</Title>
          </Body>
        </Header>
        <Content>
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
          <Form style={GLOBALSTYLES.form}>
            <Item stackedLabel style={GLOBALSTYLES.noBorder}>
              <CustomLabel style={styles.mb8}>Email Address</CustomLabel>
              <CustomInput
                onChangeText={e =>
                  this.setState(prev => {
                    return { ...prev, email: e }
                  })
                }
                style={[
                  this.state.emailError ? styles.redBorder : styles.removeBorder,
                  styles.grayCover
                ]}
                keyboardType='email-address'
              />
              {!!this.state.emailError && <CustomError>{this.state.emailError}</CustomError>}
            </Item>

            <Item stackedLabel style={[GLOBALSTYLES.noBorder]}>
              <CustomLabel style={styles.mb8}>Password</CustomLabel>
              <CustomPassword
                onChangeText={e =>
                  this.setState(prev => {
                    return { ...prev, password: e }
                  })
                }
                style={[
                  this.state.passwordError ? styles.redBorder : styles.removeBorder,
                  styles.grayCover
                ]}
              />
              {!!this.state.passwordError && <CustomError>{this.state.passwordError}</CustomError>}
            </Item>

            <Button
              onPress={this.handleLogin}
              block
              info
              disabled={this.state.email === '' || this.state.password === ''}
              style={[{ borderRadius: 40, elevation: 0 }, GLOBALSTYLES.ml15, GLOBALSTYLES.mt15]}
            >
              <CustomText style={[GLOBALSTYLES.fontS18, GLOBALSTYLES.fontw5]}>Log In</CustomText>
            </Button>

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
              <TouchableOpacity
                style={[
                  styles.googleContent,
                  {
                    borderRadius: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#eeeeee',
                    elecvation: 0
                  }
                ]}
              >
                <Image source={googleLogo} />
                <CustomText
                  style={{
                    marginLeft: 10,
                    fontSize: 18,
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    lineHeight: 22,
                    color: '#333333'
                  }}
                >
                  Continue with Google
                </CustomText>
              </TouchableOpacity>
            </View>

            <View style={styles.facebookContainer}>
              <TouchableOpacity
                style={[
                  styles.facebookContent,
                  {
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 40,
                    backgroundColor: '#3b5998',
                    elecvation: 0
                  }
                ]}
              >
                <Image source={facebook} />
                <CustomText
                  style={{
                    textAlign: 'center',
                    marginLeft: 10,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    fontSize: 18,
                    lineHeight: 22,
                    color: 'white'
                  }}
                >
                  Continue with Facebook
                </CustomText>
              </TouchableOpacity>
            </View>

            <View
              style={{
                textAlign: 'center',
                flexDirection: 'row',
                marginTop: 16
              }}
            >
              <CustomText
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
              </CustomText>
              <TouchableOpacity
                style={{ justifyContent: 'center' }}
                onPress={() => this.props.setStack('signupStack')}
              >
                <CustomText
                  style={{
                    fontWeight: '600',
                    fontStyle: 'normal',
                    fontSize: 16,
                    marginLeft: 5,
                    lineHeight: 24,
                    color: '#3B5998',
                    marginBottom: 30,
                    fontFamily: 'Gilroy_medium'
                  }}
                >
                  Sign Up
                </CustomText>
              </TouchableOpacity>
            </View>
          </Form>
        </Content>
        <ErrorModal />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 20
  },
  grayCover: {
    backgroundColor: '#f1f1f1',
    height: 40,
    paddingLeft: 15
  },
  mb8: {
    marginBottom: 8
  },
  logoContainer: {
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

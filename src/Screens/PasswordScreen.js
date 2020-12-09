import React, { Component } from 'react'
import passArrow from '../images/keyboard.png'
import key from '../images/logo.png'
import { Form, Item, Input, Button } from 'native-base'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

class PasswordScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: ''
    }
  }

  onSubmit(e) {
    console.warn(this.state)
  }

  render() {
    return (
      <View style={styles.passwordContainer}>
        <View style={{ borderColor: '#FAFAFA', borderWidth: 1 }}>
          <View style={styles.passWordContent}>
            <TouchableOpacity>
              <View style={styles.passArrow}>
                <Image source={passArrow} />
              </View>
            </TouchableOpacity>
            <View style={styles.passText}>
              <Text
                style={{
                  color: '#578DDE',
                  fontWeight: '700',
                  fontSize: 17,
                  marginRight: 10
                }}
              >
                FORGOT PASSWORD
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.passLogo}>
          <Image source={key} />

          <Text
            style={{
              fontSize: 20,
              fontWeight: '100',
              marginTop: 10
            }}
          >
            {' '}
            Forget Your Password
          </Text>
          <Text>please input your email to recover your password</Text>
        </View>

        <View style={styles.passInput}>
          <Form>
            <Item stackedLabel>
              <Input
                placeholder='enter your email'
                autoCapitalize='none'
                keyboardType='email-address'
                onChangeText={text => {
                  this.setState({ email: text })
                }}
              />
            </Item>
          </Form>
        </View>

        <View style={styles.passButton}>
          <Button
            onPress={() => this.onSubmit()}
            block
            style={{
              backgroundColor: '#578DDE',
              width: 343,
              marginLeft: 20
            }}
          >
            <Text
              style={{
                color: '#FAFAFA',
                fontSize: 20,
                borderRadius: 5
              }}
            >
              Send
            </Text>
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  passwordContainer: {
    flex: 1,
    marginTop: 50
  },
  passWordContent: {
    flexDirection: 'row',
    marginTop: 20
  },
  passText: {
    marginLeft: 80
  },
  passArrow: {
    marginLeft: 10
  },
  passLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    backgroundColor: '#578DDE',
    borderRadius: 50
  },
  passInput: {
    marginTop: 150,
    width: 343,
    marginLeft: 20
  },
  passButtton: {
    marginTop: 200
  },
  passButton: {
    marginTop: 200
  }
})

export default PasswordScreen

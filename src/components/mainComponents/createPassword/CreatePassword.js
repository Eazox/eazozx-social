// import liraries
import React, { useState } from 'react'
import { StyleSheet, Modal, Image, View } from 'react-native'
import {
  Container,
  Header,
  Left,
  Button,
  Body,
  Form,
  Item,
  Title,
  Icon,
  Content
} from 'native-base'
import {
  CustomLabel,
  CustomPassword,
  CustomError,
  CustomText
} from '../../subComponents/CustomFontComponents'
import { GLOBALSTYLES } from '../../../Constants'
import Success from '../../../images/Success.png'
import usePasswordValidator from '../../customHooks/createPasswordValidator'

// create a component
const CreatePassword = () => {
  const { data, setDataHandler: setHandler } = usePasswordValidator()
  const [showErrors, setShowErrors] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const updateInput = (key, input) => {
    setShowErrors(true)
    setHandler(key, input)
    // setShowErrors(false)
  }

  const changePasswordHandler = () => {
    if (data.data.password.isValid.valid) {
      if (data.data.confirmPassword.isValid.valid) {
        setShowModal(true)
      } else {
        setShowErrors(true)
      }
    } else {
      setShowErrors(true)
    }
  }

  const loginHandler = () => {
    setShowModal(false)
  }

  return (
    <Container>
      <Header style={GLOBALSTYLES.header}>
        <Left style={[GLOBALSTYLES.headerLeft, styles.headerLeft]}>
          <Button transparent>
            <Icon name='arrow-back' style={styles.blackColor} />
          </Button>
        </Left>
        <Body style={GLOBALSTYLES.alignCenter}>
          <Title style={[GLOBALSTYLES.headerText]}>Create Password</Title>
        </Body>
      </Header>
      <Content>
        <Form style={GLOBALSTYLES.form}>
          <Item stackedLabel style={GLOBALSTYLES.noBorder}>
            <CustomLabel style={styles.mb8}>New Password</CustomLabel>
            <CustomPassword
              style={[
                showErrors && !data.data.password.isValid.valid
                  ? styles.redBorder
                  : styles.removeBorder,
                styles.grayCover
              ]}
              onChangeText={e => updateInput('password', e)}
            />
            {showErrors && !data.data.password.isValid.valid && (
              <CustomError style={styles.errorMessage}>
                {data.data.password.isValid.error}
              </CustomError>
            )}
          </Item>
          <Item stackedLabel style={[GLOBALSTYLES.noBorder]}>
            <CustomLabel style={[styles.mb8, GLOBALSTYLES.mt8]}>Confirm Password</CustomLabel>
            <CustomPassword
              style={[
                showErrors && !data.data.confirmPassword.isValid.valid
                  ? styles.redBorder
                  : styles.removeBorder,
                styles.grayCover
              ]}
              onChangeText={e => updateInput('confirmPassword', e)}
            />
            {showErrors && !data.data.confirmPassword.isValid.valid && (
              <CustomError style={styles.errorMessage}>
                {data.data.confirmPassword.isValid.error}
              </CustomError>
            )}
          </Item>
          <Button
            onPress={changePasswordHandler}
            block
            info
            disabled={
              data.data.password.isValid.valid === false ||
              data.data.confirmPassword.isValid.valid === false
            }
            style={[GLOBALSTYLES.ml15, GLOBALSTYLES.mt15]}
          >
            <CustomText style={[GLOBALSTYLES.fontS18, GLOBALSTYLES.fontw5]}>
              Create Account
            </CustomText>
          </Button>
        </Form>
      </Content>
      <Modal transparent animationType='slide' visible={showModal}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContainer}>
            <Image source={Success} style={[{ height: 94, width: 94 }, GLOBALSTYLES.mb8]} />
            <CustomText style={GLOBALSTYLES.mb8}>Password Successfully Created</CustomText>
            <Button onPress={loginHandler} info style={[styles.loginButton, GLOBALSTYLES.mt8]}>
              <CustomText style={[GLOBALSTYLES.fontS18, GLOBALSTYLES.fontw5]}>Login</CustomText>
            </Button>
          </View>
        </View>
      </Modal>
    </Container>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
  blackColor: {
    color: 'black'
  },
  mb8: {
    marginBottom: 8
  },
  redBorder: {
    borderColor: 'red',
    borderWidth: 0.5,
    borderBottomWidth: 0.5
  },
  removeBorder: {
    borderWidth: 0
  },
  grayCover: {
    backgroundColor: '#fafafa',
    height: 40,
    paddingLeft: 15
  },
  headerLeft: { marginLeft: 9.5 },
  errorMessage: { fontSize: 12, marginTop: 3 },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 7,
    width: '90%',
    alignItems: 'center',
    flexDirection: 'column',
    paddingVertical: 20
  },
  loginButton: {
    alignSelf: 'center',
    paddingHorizontal: 10
  }
})

// make this component available to the app
export default CreatePassword

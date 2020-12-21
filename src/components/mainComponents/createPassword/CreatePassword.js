// import liraries
import React, { useState } from 'react'
import { StyleSheet, Modal, Image } from 'react-native'
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
import { data, setHandler } from '../../customHooks/createPasswordValidator'

// create a component
const CreatePassword = () => {
  const [showErrors, setShowErrors] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const updateInput = (key, input) => {
    setHandler(key, input)
    setShowErrors(false)
  }

  const changePasswordHandler = () => {
    if (data.data.password.isValid.valid) {
      if (data.data.confirmPassword.isValid.valid) {
        console.log('success')
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
        <Left style={GLOBALSTYLES.headerLeft}>
          <Button transparent>
            <Icon name='arrow-back' style={styles.blackColor} />
          </Button>
        </Left>
        <Body style={GLOBALSTYLES.alignCenter}>
          <Title style={GLOBALSTYLES.headerText}>Create Password</Title>
        </Body>
      </Header>
      <Content>
        <Form>
          <Item stackedLabel style={[GLOBALSTYLES.noBorder]}>
            <CustomLabel style={styles.mb8}>Password</CustomLabel>
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
              <CustomError>{data.data.password.isValid.error}</CustomError>
            )}
          </Item>
          <Item stackedLabel style={[GLOBALSTYLES.noBorder]}>
            <CustomLabel style={styles.mb8}>Confirm Password</CustomLabel>
            <CustomPassword
              style={[
                showErrors && !data.data.password.isValid.valid
                  ? styles.redBorder
                  : styles.removeBorder,
                styles.grayCover
              ]}
              onChangeText={e => updateInput('confirmPassword', e)}
            />
            {showErrors && !data.data.password.isValid.valid && (
              <CustomError>{data.data.password.isValid.error}</CustomError>
            )}
          </Item>
          <Button
            onPress={changePasswordHandler}
            block
            info
            disabled={
              data.data.password.isValid.valid === false || data.data.number.isValid.valid === false
            }
            style={[GLOBALSTYLES.ml15, GLOBALSTYLES.mt15]}
          >
            <CustomText style={[GLOBALSTYLES.fontS18, GLOBALSTYLES.fontw5]}>
              Create Account
            </CustomText>
          </Button>
        </Form>
      </Content>
      <Modal
        style={{ paddingHorizontal: 10, borderRadius: 7 }}
        animationType='slide'
        transparent
        visible={showModal}
      >
        <Image source={Success} style={{ height: 90, width: 90 }} />
        <CustomText>Password Successfully Created</CustomText>
        <Button onPress={loginHandler} info style={[GLOBALSTYLES.ml15, GLOBALSTYLES.mt15]}>
          <CustomText style={[GLOBALSTYLES.fontS18, GLOBALSTYLES.fontw5]}>Login</CustomText>
        </Button>
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
  }
})

// make this component available to the app
export default CreatePassword

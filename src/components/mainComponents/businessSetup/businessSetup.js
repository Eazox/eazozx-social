// import liraries
import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native'
import { useDispatch } from 'react-redux'
import DateTimePicker from '@react-native-community/datetimepicker'
import { setStack } from '../../../store/actions'
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Icon,
  ListItem,
  Body,
  Button,
  Left,
  Title,
  CheckBox
} from 'native-base'
import {
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomText,
  CustomError
} from '../../subComponents/CustomFontComponents'
import ErrorModal from '../../subComponents/Modal'
import useFormValidation from '../../customHooks/businessSignupValidator'
import { GLOBALSTYLES } from '../../../Constants'

// create a component
const BusinessSetup = () => {
  const dispatch = useDispatch()
  // state to display errors in form
  const [showErrors, setShowErrors] = useState(false)
  const [showTimer, setShowTimer] = useState(false)
  //   const [showTimer2, setShowTimer2] = useState(false)
  // hook for form validation
  const { data, setHandler } = useFormValidation()

  // update form state handler
  const updateInput = (key, input) => {
    setHandler(key, input)
    setShowErrors(false)
  }

  //   showTimePicker1
  const showTimerFunc = () => {
    setShowTimer(true)
  }

  const changeTime = (e, param) => {
    let timeString = new Date(e.nativeEvent.timestamp).toLocaleTimeString().substring(0, 5)
    if (/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/.test(timeString)) {
      const H = timeString.substr(0, 2)
      const h = H % 12 || 12
      const ampm = H < 12 || H === 24 ? 'AM' : 'PM'
      timeString = h + timeString.substr(2, 3) + ampm
      setShowTimer(false)
      updateInput(param + 'Time', timeString)
    } else {
      setShowTimer(false)
    }
  }

  const createAccountHandler = () => {
    if (data.data.businessName.isValid.valid) {
      if (data.data.location.isValid.valid) {
        if (data.data.website.isValid.valid) {
          if (data.data.startTime.isValid.valid) {
            if (data.data.endTime.isValid.valid) {
              if (data.data.tags.isValid.valid) {
                if (data.data.agreedCheckbox.isValid.valid) {
                  dispatch(
                    // signup(
                    //   data.data.website.value,
                    //   data.data.password.value,
                    //   data.data.location.value,
                    //   data.data.businessName.value,
                    //   data.data.gender.value,
                    //   data.data.number.value
                    // )
                    Alert.alert('valid')
                  )
                } else {
                  setShowErrors(true)
                }
              } else {
                setShowErrors(true)
              }
            } else {
              setShowErrors(true)
            }
          } else {
            setShowErrors(true)
          }
        } else {
          setShowErrors(true)
        }
      } else {
        setShowErrors(true)
      }
    } else {
      setShowErrors(true)
    }
  }

  return (
    <>
      <Container style={GLOBALSTYLES.container}>
        <Header style={GLOBALSTYLES.header}>
          <Left style={GLOBALSTYLES.headerLeft}>
            <Button transparent>
              <Icon name='arrow-back' style={[styles.blackColor, { marginLeft: 8 }]} />
            </Button>
          </Left>
          <Body style={GLOBALSTYLES.alignCenter}>
            <Title style={[GLOBALSTYLES.headerText, { fontFamily: 'Gilroy_medium' }]}>
              Create an Account
            </Title>
          </Body>
        </Header>
        <Content scrollEnabled={false} nestedScrollEnabled>
          <Form style={GLOBALSTYLES.form}>
            <Item stackedLabel style={GLOBALSTYLES.noBorder}>
              <CustomLabel style={styles.mb8}>Business Name</CustomLabel>
              <CustomInput
                onChangeText={e => updateInput('businessName', e)}
                style={[
                  showErrors && !data.data.businessName.isValid.valid
                    ? styles.redBorder
                    : styles.removeBorder,
                  styles.grayCover
                ]}
              />
              {showErrors && !data.data.businessName.isValid.valid && (
                <CustomError>{data.data.businessName.isValid.error}</CustomError>
              )}
            </Item>
            <Item stackedLabel style={GLOBALSTYLES.noBorder}>
              <CustomLabel style={styles.mb8}>Location</CustomLabel>
              <CustomInput
                onChangeText={e => updateInput('location', e)}
                style={[
                  showErrors && !data.data.location.isValid.valid
                    ? styles.redBorder
                    : styles.removeBorder,
                  styles.grayCover
                ]}
              />
              {showErrors && !data.data.location.isValid.valid && (
                <CustomError>{data.data.location.isValid.error}</CustomError>
              )}
            </Item>

            <Item stackedLabel style={GLOBALSTYLES.noBorder}>
              <CustomLabel style={styles.mb8}>Business Website</CustomLabel>
              <CustomInput
                onChangeText={e => updateInput('website', e)}
                style={[
                  showErrors && !data.data.website.isValid.valid
                    ? styles.redBorder
                    : styles.removeBorder,
                  styles.grayCover
                ]}
              />
              {showErrors && !data.data.website.isValid.valid && (
                <CustomError>{data.data.website.isValid.error}</CustomError>
              )}
            </Item>

            <Item stackedLabel style={[GLOBALSTYLES.noBorder]}>
              <CustomLabel>Business Time</CustomLabel>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '50%', paddingRight: 4 }}>
                  <TouchableWithoutFeedback onPress={showTimerFunc}>
                    <View style={styles.numberContainer}>
                      <Icon
                        type='MaterialIcons'
                        name='timer'
                        style={{ fontSize: 20, color: '#bdbdbd', marginTop: 0 }}
                      />
                      <CustomText>{data.data.startTime.value || 'Start'}</CustomText>
                      {showTimer && (
                        <DateTimePicker
                          value={new Date()}
                          is24Hour={false}
                          mode='time'
                          display='default'
                          onChange={e => changeTime(e, 'start')}
                        />
                      )}
                    </View>
                  </TouchableWithoutFeedback>
                </View>
                <View style={{ width: '50%', paddingLeft: 4 }}>
                  <TouchableWithoutFeedback onPress={showTimerFunc}>
                    <View style={styles.numberContainer}>
                      <Icon
                        type='MaterialIcons'
                        name='timer'
                        style={{ fontSize: 20, color: '#bdbdbd', marginTop: 0 }}
                      />
                      <CustomText>{data.data.startTime.value || 'End'}</CustomText>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              {showErrors && !data.data.number.isValid.valid && (
                <CustomError>{data.data.number.isValid.error}</CustomError>
              )}
            </Item>

            <Item stackedLabel style={[GLOBALSTYLES.noBorder]}>
              <CustomLabel style={GLOBALSTYLES.mb8}>Business Tags</CustomLabel>
              <View
                style={{
                  width: '100%',
                  backgroundColor: '#f1f1f1',
                  height: 40,
                  paddingHorizontal: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 8
                }}
              >
                <CustomText>Phines, Eggs, baskets</CustomText>
              </View>
              <CustomSelect />
            </Item>
            <ListItem style={[GLOBALSTYLES.noBorder]}>
              <CheckBox
                checked={data.data.agreedCheckbox.value}
                style={[
                  showErrors && !data.data.agreedCheckbox.isValid.valid
                    ? styles.redBorder
                    : styles.removeBorder
                ]}
                onPress={() => updateInput('agreedCheckbox', !data.data.agreedCheckbox.value)}
              />
              <CustomText style={[GLOBALSTYLES.fontw5, GLOBALSTYLES.fontS14, { marginLeft: 8 }]}>
                I agree to the{' '}
                <CustomText
                  style={[GLOBALSTYLES.blueColor, GLOBALSTYLES.fontw5, GLOBALSTYLES.fontS14]}
                >
                  terms and conditions
                </CustomText>
              </CustomText>
            </ListItem>
            {showErrors && !data.data.agreedCheckbox.isValid.valid && (
              <CustomError>{data.data.agreedCheckbox.isValid.error}</CustomError>
            )}
            <Button
              onPress={createAccountHandler}
              block
              info
              disabled={
                data.data.businessName.value === '' ||
                data.data.location.value === '' ||
                data.data.website.value === '' ||
                data.data.tags.value === '' ||
                data.data.startTime.value === '' ||
                data.data.endTime.value === '' ||
                data.data.agreedCheckbox.value === false
              }
              style={[{ borderRadius: 40 }, GLOBALSTYLES.ml15, GLOBALSTYLES.mt15]}
            >
              <CustomText style={[GLOBALSTYLES.fontS18, GLOBALSTYLES.fontw5]}>
                Create Account
              </CustomText>
            </Button>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <CustomText style={[GLOBALSTYLES.mt15, GLOBALSTYLES.textCentered]}>
                Already have an account?
              </CustomText>

              <TouchableOpacity
                style={{ marginTop: 10, marginLeft: 4 }}
                onPress={() => dispatch(setStack('loginStack'))}
              >
                <CustomText
                  style={[GLOBALSTYLES.blueColor, { marginTop: 5, fontFamily: 'Gilroy_medium' }]}
                >
                  Log in
                </CustomText>
              </TouchableOpacity>
            </View>
          </Form>
        </Content>
      </Container>
      <ErrorModal />
    </>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  header: {
    height: 80,
    backgroundColor: 'white',
    elevation: 0
  },
  headerLeft: {
    position: 'absolute',
    left: 0
  },
  blackColor: {
    color: 'black'
  },
  redBorder: {
    borderColor: 'red',
    borderWidth: 0.5,
    borderBottomWidth: 0.5
  },
  removeBorder: {
    borderWidth: 0
  },
  inline: {
    flexDirection: 'row'
  },
  grayCover: {
    backgroundColor: '#f1f1f1',
    height: 40,
    paddingLeft: 15
  },
  headerText: {
    fontFamily: 'Gilroy',
    fontWeight: '600'
  },
  genderItem: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  genderContainer: {
    width: 150,
    marginLeft: 15,
    justifyContent: 'center'
  },
  genderPicker: {
    left: -15
  },
  numberContainer: {
    width: '100%',
    height: 40,
    backgroundColor: '#f1f1f1',
    paddingLeft: 16,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },

  mb8: {
    marginBottom: 8
  },
  mtm8: {
    marginTop: -8
  },

  alignCenter: {
    alignItems: 'center'
  }
})

// make this component available to the app
export default BusinessSetup

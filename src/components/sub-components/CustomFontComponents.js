// import liraries
import React, { useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Label, Input, Text, Icon } from 'native-base'
import PropTypes from 'prop-types'
import { GLOBALSTYLES } from '../../Constants'

// create a component
export const CustomLabel = props => {
  return (
    <Label {...props} style={[styles.font, props.style]}>
      {props.children}
    </Label>
  )
}

export const CustomText = props => {
  return (
    <Text {...props} style={[styles.font, props.style]}>
      {props.children}
    </Text>
  )
}

export const CustomError = props => {
  return (
    <Text {...props} style={[styles.font, props.style, styles.error]}>
      {props.children}
    </Text>
  )
}

export const CustomInput = props => {
  return (
    <Input {...props} style={[styles.font, props.style]}>
      {props.children}
    </Input>
  )
}

export const CustomPassword = props => {
  const [hide, setHide] = useState(true)
  return (
    <>
      <Input {...props} style={[styles.font, props.style]} secureTextEntry={hide} />
      <TouchableWithoutFeedback onPress={() => setHide(!hide)}>
        {hide ? (
          <Icon active name='md-eye' style={{ position: 'absolute', right: 5, top: 5 }} />
        ) : (
          <Icon active name='md-eye-off' style={{ position: 'absolute', right: 5, top: 5 }} />
        )}
      </TouchableWithoutFeedback>
    </>
  )
}

export const CustomVerifyInput = props => {
  return (
    <View style={styles.verifyInputView}>
      <Input
        {...props}
        style={[
          styles.font,
          props.style,
          styles.verifyInput,
          GLOBALSTYLES.textCentered,
          GLOBALSTYLES.fontw5
        ]}
        keyboardType='numeric'
      />
    </View>
  )
}

export const ProgressBeam = props => {
  return (
    <View
      style={[
        styles.loadingContainer,
        props.incomplete ? { backgroundColor: '#fafafa' } : { backgroundColor: '#578dde' }
      ]}
    />
  )
}

CustomLabel.propTypes = {
  children: PropTypes.object,
  style: PropTypes.object
}

CustomText.propTypes = {
  children: PropTypes.object,
  style: PropTypes.object
}

CustomError.propTypes = {
  children: PropTypes.object,
  style: PropTypes.object
}

CustomInput.propTypes = {
  children: PropTypes.object,
  style: PropTypes.object
}

CustomPassword.propTypes = {
  children: PropTypes.object,
  style: PropTypes.object
}

CustomVerifyInput.propTypes = {
  children: PropTypes.object,
  style: PropTypes.object
}

ProgressBeam.propTypes = {
  incomplete: PropTypes.bool
}

// define your styles
const styles = StyleSheet.create({
  font: {
    fontFamily: 'Gilroy',
    fontSize: 16
  },
  error: {
    color: 'red',
    width: '100%',
    textAlign: 'left'
  },
  verifyInput: {
    lineHeight: 19.41,
    borderBottomWidth: 1,
    borderColor: '#bdbdbd',
    paddingTop: 10
  },
  verifyInputView: {
    height: 48,
    width: 48,
    paddingHorizontal: 5,
    marginHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: '#f4f4f4'
  },
  loadingContainer: {
    height: 4,
    borderRadius: 2,
    marginHorizontal: 5,
    width: '30%',
    position: 'relative',
    backgroundColor: '#578dde'
  }
})

// make this component available to the app

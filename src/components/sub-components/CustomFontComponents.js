// import liraries
import React from 'react'
import { StyleSheet } from 'react-native'
import { Label, Input, Text, Icon } from 'native-base'

// create a component
export const CustomLabel = ({ children, style }) => {
  return <Label style={[styles.font, style]}>{children}</Label>
}

export const CustomText = ({ children, style }) => {
  return <Text style={[styles.font, style]}>{children}</Text>
}

export const CustomInput = ({ children, style, keyboardType }) => {
  return (
    <Input keyboardType={keyboardType} style={[styles.font, style]}>
      {children}
    </Input>
  )
}

export const CustomPassword = ({ children, style }) => {
  return (
    <>
      <Input style={[styles.font, style]} secureTextEntry />
      <Icon active name='md-eye' style={{ position: 'absolute', right: 5, top: 5 }} />
    </>
  )
}

// define your styles
const styles = StyleSheet.create({
  font: {
    fontFamily: 'Gilroy',
    fontSize: 16
  }
})

// make this component available to the app

// import liraries
import React from 'react'
import { StyleSheet } from 'react-native'
import { Label, Input, Text, Icon } from 'native-base'

// create a component
export const CustomLabel = (props) => {
  return <Label {...props} style={[styles.font, props.style]}>{props.children}</Label>
}

export const CustomText = (props) => {
  return <Text { ...props } style={[styles.font, props.style]}>{props.children}</Text>
}

export const CustomInput = (props) => {
  return (
    <Input { ...props } style={[styles.font, props.style]}>
      {props.children}
    </Input>
  )
}

export const CustomPassword = (props) => {
  return (
    <>
      <Input { ...props } style={[styles.font, props.style]} secureTextEntry />
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

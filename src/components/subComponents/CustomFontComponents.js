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
  return <Input {...props} style={[styles.font, props.style]} />
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

export const CustomSearchInput = props => {
  return (
    <>
      <Input {...props} style={[styles.font, props.style, styles.searchInput]} />
      <Icon type='MaterialIcons' name='search' style={styles.searchInputIcon} />
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

export const LineDivider = props => {
  return (
    <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
      <View style={{ backgroundColor: 'black', height: 0.5, flex: 1, alignSelf: 'center' }} />
      <CustomText
        style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 16, fontWeight: '400' }}
      >
        {props.text}
      </CustomText>
      <View style={{ backgroundColor: 'black', height: 0.5, flex: 1, alignSelf: 'center' }} />
    </View>
  )
}

CustomLabel.propTypes = {
  children: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

CustomText.propTypes = {
  children: PropTypes.any,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

CustomError.propTypes = {
  children: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

CustomInput.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

CustomSearchInput.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

CustomPassword.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

CustomVerifyInput.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

ProgressBeam.propTypes = {
  incomplete: PropTypes.bool
}

LineDivider.propTypes = {
  text: PropTypes.string
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
    borderRadius: 4,
    backgroundColor: '#f4f4f4'
  },
  loadingContainer: {
    height: 4,
    borderRadius: 2,
    marginHorizontal: 5,
    width: '30%',
    position: 'relative',
    backgroundColor: '#578dde'
  },
  searchInput: { paddingLeft: 56, borderRadius: 7, backgroundColor: 'rgb(250, 250, 250)' },
  searchInputIcon: {
    fontSize: 20,
    color: 'rgb(189, 189, 189)',
    position: 'absolute',
    left: 30,
    top: 15
  }
})

CustomLabel.propTypes = {
  children: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

CustomText.propTypes = {
  children: PropTypes.any,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

CustomError.propTypes = {
  children: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

CustomInput.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

CustomPassword.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

CustomVerifyInput.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

ProgressBeam.propTypes = {
  incomplete: PropTypes.bool
}

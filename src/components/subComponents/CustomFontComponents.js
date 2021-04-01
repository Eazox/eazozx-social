// import liraries
import React, { useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, FlatList } from 'react-native'
import { Label, Input, Text, Icon, Button } from 'native-base'
import PropTypes from 'prop-types'
import { GLOBALSTYLES } from '../../Constants'
import { AutoGrowingTextInput as GrowInput } from 'react-native-autogrow-textinput'
import { TouchableOpacity } from 'react-native-gesture-handler'

const data = [
  { id: 1, tag: 'phone' },
  { id: 2, tag: 'bags' },
  { id: 3, tag: 'wallets' },
  { id: 4, tag: 'Keys' },
  { id: 5, tag: 'bottles' }
]
// create a component
export const CustomLabel = props => {
  return (
    <Label {...props} style={[styles.font, props.style]}>
      {props.children}
    </Label>
  )
}

export const CustomSelect = props => {
  // eslint-disable-next-line react/prop-types
  const OptionComp = ({ name }) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        backgroundColor: 'red',
        justifyContent: 'space-between',
        height: 40,
        width: '100%'
      }}
    >
      <CustomText>{name}</CustomText>
      <Icon name='checkbox' style={{ fontSize: 20, color: '#578dde' }} />
    </TouchableOpacity>
  )
  return (
    <FlatList
      nestedScrollEnabled
      data={data}
      style={{ maxHeight: 120 }}
      renderItem={({ item }) => <OptionComp name={item.tag} />}
      keyExtractor={item => item.id.toString()}
    />
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

export const VerifiedSeller = ({ style }) => {
  return (
    <Button
      small
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 5,
          borderRadius: 30,
          backgroundColor: '#cff7e5',
          elevation: 0,
          marginLeft: 17,
          height: 25
          // width: 125,
        },
        { ...style }
      ]}
    >
      <CustomText style={{ color: '#06a45b', fontSize: 12 }}>Verified Seller</CustomText>
      <Icon
        type='AntDesign'
        name='checkcircleo'
        style={{ color: '#06a45b', fontSize: 18, marginLeft: -8 }}
      />
    </Button>
  )
}

export const VerifiedSellerGold = ({ style, verified, reviews }) => {
  return (
    <Button
      small
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'center',
          borderRadius: 30,
          backgroundColor: '#fff5de',
          elevation: 0,
          marginLeft: 12,
          height: 25
          // width: 125,
        },
        { ...style }
      ]}
    >
      <CustomText style={{ color: '#E9B121', fontSize: 12, marginLeft: -5 }}>
        {reviews > 1
          ? `${reviews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} reviews`
          : `${reviews} review`}
      </CustomText>
      {verified && (
        <Icon
          type='MaterialIcons'
          name='stars'
          style={{ color: '#E9B121', fontSize: 18, marginLeft: -8, marginRight: 12 }}
        />
      )}
    </Button>
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

export const CustomBuyNow = props => {
  return (
    <Button
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'center',
          borderRadius: 25,
          elevation: 0,
          paddingHorizontal: 10,
          backgroundColor: '#578dde'
        },
        props.style
      ]}
    >
      <CustomText style={[props.textStyle, { fontFamily: 'Gilroy_medium' }]}>Buy Now</CustomText>
      <Icon
        type='FontAwesome'
        name='shopping-bag'
        style={[{ fontSize: 18, color: 'white', marginLeft: 10 }, props.iconStyle]}
      />
    </Button>
  )
}

export const CustomGrowInput = props => {
  return <GrowInput {...props} style={[styles.font, props.style]} />
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
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  _ref: PropTypes.any
}

CustomBuyNow.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

CustomGrowInput.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  _ref: PropTypes.any
}

CustomSearchInput.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

VerifiedSeller.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

VerifiedSellerGold.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  verified: PropTypes.bool,
  reviews: PropTypes.number
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

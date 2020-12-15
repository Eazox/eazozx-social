// import liraries
import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { GLOBALSTYLES } from '../../../Constants'
import { Container, Header, Left, Button, Icon, Body, Title } from 'native-base'
import verificationIcon from '../../../images/verification-icon.png'
import { CustomText, ProgressBeam } from '../../subComponents/CustomFontComponents'

// create a component
const Verification = () => {
  // const input_1 = useRef(0)
  // const input_2 = useRef(0)
  // const input_3 = useRef(0)
  // const input_4 = useRef(0)

  // const inputHandler = () => {

  // }

  return (
    <Container style={GLOBALSTYLES.container}>
      <Header style={GLOBALSTYLES.header}>
        <Left style={GLOBALSTYLES.headerLeft}>
          <Button transparent>
            <Icon name='arrow-back' style={styles.blackColor} />
          </Button>
        </Left>
        <Body style={GLOBALSTYLES.alignCenter}>
          <Title style={[GLOBALSTYLES.headerText, { lineHeight: 29.44 }]}>Verification</Title>
        </Body>
      </Header>
      <View style={GLOBALSTYLES.progressBeam}>
        <ProgressBeam />
        <ProgressBeam />
        <ProgressBeam incomplete />
      </View>
      <View style={{ padding: 10 }}>
        <View style={GLOBALSTYLES.alignCenter}>
          <Image source={verificationIcon} />
        </View>
        <CustomText
          style={[
            styles.purpleColor,
            GLOBALSTYLES.fontw5,
            GLOBALSTYLES.fontS24,
            GLOBALSTYLES.mt15,
            { lineHeight: 29.11 }
          ]}
        >
          Check SMS for OTP
        </CustomText>
        <CustomText style={[GLOBALSTYLES.mt10, { lineHeight: 22.4 }]}>
          Please enter the verification code sent to your phone number +23490822317234
        </CustomText>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 50,
            marginBottom: 30
          }}
        >
          {/* <CustomVerifyInput ref={inputOne} />
          <CustomVerifyInput ref={inputTwo} />
          <CustomVerifyInput ref={inputThree} />
          <CustomVerifyInput ref={inputFour} /> */}
        </View>
        <Button
          // onPress={createAccountHandler}
          block
          info
          disabled
          style={[GLOBALSTYLES.mt15]}
        >
          <CustomText style={[GLOBALSTYLES.fontS18, GLOBALSTYLES.fontw5]}>Verify</CustomText>
        </Button>
        <CustomText style={[GLOBALSTYLES.mt15, GLOBALSTYLES.textCentered]}>
          Didn&apos;t get a code?
          <CustomText style={[GLOBALSTYLES.blueColor, { textDecorationLine: 'underline' }]}>
            Resend code
          </CustomText>
        </CustomText>
      </View>
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
  purpleColor: {
    color: 'rgba(38,29,128,0.8)'
  },
  grayCover: {
    backgroundColor: '#f4f4f4'
  }
})

// make this component available to the app
export default Verification

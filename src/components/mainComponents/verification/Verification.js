// import liraries
import React, { useState } from 'react'
import { StyleSheet, Image, View, TouchableWithoutFeedback } from 'react-native'
import { GLOBALSTYLES } from '../../Constants'
import {
  Container,
  Header,
  Left,
  Input,
  Button,
  Icon,
  Body,
  Content,
  Title,
  Toast
} from 'native-base'
import verificationIcon from '../../images/verification-icon.png'
import { CustomText, CustomVerifyInput, ProgressBeam } from '../sub-components/CustomFontComponents'

// create a component
const Verification = () => {
  // state value of OTP pin
  const [hiddenData, setHiddenData] = useState('')
  const hiddenString = hiddenData.toString()

  // ref to hidden textInput
  const inMain = React.useRef(null)

  // handle text input change
  const hiddenInputHandler = e => {
    setHiddenData(e)
  }

  return (
    <Container style={GLOBALSTYLES.container}>
      <Header style={GLOBALSTYLES.header}>
        <Left style={GLOBALSTYLES.headerLeft}>
          <Button transparent>
            <Icon name='arrow-back' style={styles.blackColor} />
          </Button>
        </Left>
        <Body style={GLOBALSTYLES.alignCenter}>
          <Title style={GLOBALSTYLES.headerText}>Verification</Title>
        </Body>
      </Header>
      <View style={GLOBALSTYLES.progressBeam}>
        <ProgressBeam />
        <ProgressBeam />
        <ProgressBeam incomplete />
      </View>
      <Content>
        <View style={{ padding: 10 }}>
          <View style={GLOBALSTYLES.alignCenter}>
            <Image source={verificationIcon} />
          </View>
          <CustomText
            style={[
              styles.purpleColor,
              GLOBALSTYLES.fontw5,
              GLOBALSTYLES.fontS24,
              GLOBALSTYLES.mt15
            ]}
          >
            Check SMS for OTP
          </CustomText>
          <CustomText style={GLOBALSTYLES.mt10}>
            Please enter the verification code sent to your phone number +23490822317234
          </CustomText>
          <TouchableWithoutFeedback onPress={() => inMain.current._root.focus()}>
            <View style={styles.hiddenInputContainer}>
              <CustomVerifyInput
                value={hiddenData ? hiddenString.charAt(0) : null}
                editable={false}
                viewStyle={[
                  {
                    borderColor: hiddenString.length === 0 ? 'rgb(87, 141, 222)' : 'transparent'
                  },
                  styles.bordered
                ]}
              />
              <CustomVerifyInput
                value={hiddenData ? hiddenString.charAt(1) : null}
                editable={false}
                viewStyle={[
                  {
                    borderColor: hiddenString.length === 1 ? 'rgb(87, 141, 222)' : 'transparent'
                  },
                  styles.bordered
                ]}
              />
              <CustomVerifyInput
                value={hiddenData ? hiddenString.charAt(2) : null}
                editable={false}
                viewStyle={[
                  {
                    borderColor: hiddenString.length === 2 ? 'rgb(87, 141, 222)' : 'transparent'
                  },
                  styles.bordered
                ]}
              />
              <CustomVerifyInput
                value={hiddenData ? hiddenString.charAt(3) : null}
                editable={false}
                viewStyle={[
                  {
                    borderColor: hiddenString.length === 3 ? 'rgb(87, 141, 222)' : 'transparent'
                  },
                  styles.bordered
                ]}
              />
            </View>
          </TouchableWithoutFeedback>
          <Input
            ref={inMain}
            caretHidden
            maxLength={4}
            keyboardType='phone-pad'
            style={styles.hiddenInput}
            autoFocus
            onChangeText={hiddenInputHandler}
          />
          <Button
            block
            info
            disabled={hiddenData ? hiddenString.length !== 4 : true}
            onPress={() =>
              Toast.show({
                text: 'Success',
                buttonText: 'Ok'
              })
            }
            style={[GLOBALSTYLES.mt15]}
          >
            <CustomText style={[GLOBALSTYLES.fontS18, GLOBALSTYLES.fontw5]}>Verify</CustomText>
          </Button>
          <CustomText style={[GLOBALSTYLES.mt15, GLOBALSTYLES.textCentered]}>
            Didn&#39;t get a code?{' '}
            <CustomText style={[GLOBALSTYLES.blueColor, { textDecorationLine: 'underline' }]}>
              Resend code
            </CustomText>
          </CustomText>
        </View>
      </Content>
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
  },
  hiddenInput: {
    height: 1,
    borderBottomWidth: 0
  },
  hiddenInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 30
  },
  bordered: {
    borderWidth: 3,
    borderRadius: 4
  }
})

// make this component available to the app
export default Verification

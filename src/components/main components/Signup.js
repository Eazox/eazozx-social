// import liraries
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Picker,
  Icon,
  ListItem,
  Body,
  Button,
  Left,
  Title,
  CheckBox
} from 'native-base'
import {
  CustomPassword,
  CustomLabel,
  CustomInput,
  CustomText
} from '../sub-components/CustomFontComponents'

// create a component
const Signup = () => {
  const [gender, setGender] = useState('key0')

  const onGenderChange = value => {
    setGender(value)
  }

  return (
    <Container style={[{ width: '100%' }]}>
      <Header style={{ height: 80, backgroundColor: 'white', elevation: 0 }}>
        <Left style={{ position: 'absolute', left: 0 }}>
          <Button transparent>
            <Icon name='arrow-back' style={{ color: 'black' }} />
          </Button>
        </Left>
        <Body style={{ alignItems: 'center' }}>
          <Title style={[{ fontSize: 24 }, styles.blueColor]}>Create an Account</Title>
        </Body>
      </Header>
      <Content>
        <Form style={{ padding: 10, paddingLeft: 0 }}>
          <Item stackedLabel style={styles.noBorder}>
            <CustomLabel style={styles.mb8}>Full Name</CustomLabel>
            <CustomInput style={styles.grayCover} />
          </Item>
          <Item stackedLabel style={styles.noBorder}>
            <CustomLabel style={styles.mb8}>Username</CustomLabel>
            <CustomInput style={styles.grayCover} />
          </Item>
          <Item
            picker
            style={[styles.noBorder, { flexDirection: 'column', alignItems: 'flex-start' }]}
          >
            <CustomLabel style={[styles.mb8, { marginLeft: 15, marginTop: 10 }]}>
              Gender
            </CustomLabel>
            <View
              style={[styles.grayCover, { width: 150, marginLeft: 15, justifyContent: 'center' }]}
            >
              <Picker
                mode='dropdown'
                // placeholder="Gender"
                iosHeader='Gender'
                headerBackButtonText='Go back'
                iosIcon={<Icon name='arrow-down' />}
                selectedValue={gender}
                onValueChange={onGenderChange}
                style={[{ left: -15 }, styles.fontS14, styles.fontw4]}
              >
                <Picker.Item label='Female' value='key0' />
                <Picker.Item label='Male' value='key1' />
              </Picker>
            </View>
          </Item>

          <Item stackedLabel style={styles.noBorder}>
            <CustomLabel style={styles.mb8}>Email Address</CustomLabel>
            <CustomInput style={styles.grayCover} keyboardType='email-address' />
          </Item>
          <Item stackedLabel style={styles.noBorder}>
            <CustomLabel style={styles.mb8}>Phone Number</CustomLabel>
            <View style={styles.inline}>
              <View
                style={[
                  {
                    width: 99,
                    height: 40,
                    marginRight: 10,
                    justifyContent: 'center',
                    backgroundColor: '#fafafa'
                  }
                ]}
              >
                <Picker
                  mode='dropdown'
                  iosHeader='Gender'
                  headerBackButtonText='Go back'
                  iosIcon={<Icon name='arrow-down' />}
                  selectedValue={gender}
                  onValueChange={onGenderChange}
                >
                  <Picker.Item label='+234' value='key0' />
                  <Picker.Item label='+01' value='key1' />
                </Picker>
              </View>
              <CustomInput
                keyboardType='phone-pad'
                style={[styles.grayCover, styles.noBorder, { flexGrow: 1 }]}
              />
            </View>
          </Item>
          <Item stackedLabel style={[styles.noBorder]}>
            <CustomLabel style={styles.mb8}>Password</CustomLabel>
            <CustomPassword style={styles.grayCover} />
            {/* <Icon active name="md-eye" style={{ position: 'absolute', right: 0}}></Icon> */}
          </Item>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <CheckBox checked />
            <Body>
              <CustomText style={[styles.fontw5, styles.fontS14]}>
                I agree to the
                <CustomText style={[styles.blueColor, styles.fontw5, styles.fontS14]}>
                  {' '}
                  terms and conditions
                </CustomText>
              </CustomText>
            </Body>
          </ListItem>
          <Button block disabled style={{ marginTop: 15, marginLeft: 15 }}>
            <CustomText style={[styles.fontS18, styles.fontw5]}>Create Account</CustomText>
          </Button>
          <CustomText style={{ textAlign: 'center', marginTop: 15 }}>
            Already have an account? <CustomText style={styles.blueColor}>Log in</CustomText>
          </CustomText>
        </Form>
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
  inline: {
    flexDirection: 'row'
  },
  grayCover: {
    backgroundColor: '#fafafa',
    height: 40,
    paddingLeft: 15
  },
  noBorder: {
    borderBottomWidth: 0
  },
  mb8: {
    marginBottom: 8
  },
  blueColor: {
    color: '#578DDE'
  },
  fontw4: {
    fontWeight: '400'
  },
  fontw5: {
    fontWeight: '500'
  },
  fontS14: {
    fontSize: 14
  },
  fontS18: {
    fontSize: 18
  }
})

// make this component available to the app
export default Signup

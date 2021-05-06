import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import PersonAccount from '../../../images/Personal.png'
import BusinessAccount from '../../../images/Business.png'
import { Card, CardItem, Body, CheckBox } from 'native-base'
import Icons from 'react-native-vector-icons/Feather'

const SelectPersonalAccount = () => {
  const [personalChecked, setPersonalChecked] = useState({ personalChecked: false })
  const [businessChecked, setBusinessChecked] = useState({ businessChecked: false })
  const onCheckedChange = () => {
    setPersonalChecked({
      personalChecked: !personalChecked.personalChecked
    })
  }

  const onBusinessChange = () => {
    setBusinessChecked({
      businessChecked: !businessChecked.businessChecked
    })
  }
  return (
    <View style={styles.selectPersonalAccount}>
      <View style={styles.selectPersonHeader}>
        <TouchableOpacity>
          <View style={{}}>
            <Icons name='arrow-left' size={27} color='#15243C' />
          </View>
        </TouchableOpacity>

        <View style={styles.selectPersonContent}>
          <Text
            style={{
              color: '#3B485B',
              fontWeight: '600',
              fontStyle: 'normal',
              lineHeight: 29.4,
              fontSize: 24
            }}
          >
            Select an Account
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontStyle: 'normal',
              fontSize: 14,
              lineHeight: 16.8,
              marginTop: 10,
              color: 'rgba(59,72,91,1)'
            }}
          >
            You can always switch over later on!
          </Text>
        </View>
      </View>

      <View style={styles.selectPersonalCard}>
        <View style={{ width: 160, height: 173 }}>
          <Card>
            <CheckBox
              checked={personalChecked.personalChecked}
              onPress={onCheckedChange}
              color='#578DDE'
              style={{ borderRadius: 20, marginTop: 10, left: 120 }}
            />
            <CardItem>
              <Body>
                <View>
                  <Image source={PersonAccount} />
                </View>

                <Text>Personal Account</Text>
              </Body>
            </CardItem>
          </Card>
        </View>
        <View style={{ width: 160, height: 173 }}>
          <Card>
            <CheckBox
              checked={businessChecked.businessChecked}
              onPress={onBusinessChange}
              color='#578DDE'
              style={{ borderRadius: 20, marginTop: 10, left: 120 }}
            />

            <CardItem>
              <Body>
                <View>
                  <Image source={BusinessAccount} />
                </View>
                <Text>Business Account</Text>
              </Body>
            </CardItem>
          </Card>
        </View>
      </View>

      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Text
          style={{
            fontWeight: '500',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 16.98,
            color: 'rgba(59,72,91,1)'
          }}
        >
          What’s in for you?
        </Text>
      </View>
      <View style={styles.personalBox}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#D0CDD1',
              width: 48,
              height: 48,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4
            }}
          >
            <Icons name='align-justify' size={20} color='#15243C' />
          </View>
          <Text
            style={{
              left: 10,
              fontWeight: '400',
              fontStyle: 'normal',
              fontSize: 14,
              lineHeight: 16.8
            }}
          >
            Post
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#C9DFFF',
              width: 48,
              height: 48,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4
            }}
          >
            <Icons name='gift' size={20} color='#5091F2' />
          </View>
          <Text
            style={{
              left: 10,
              fontWeight: '400',
              fontStyle: 'normal',
              fontSize: 14,
              lineHeight: 16.8
            }}
          >
            Earn
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#C7FFCC',
              width: 48,
              height: 48,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4
            }}
          >
            <Icons name='layout' size={20} color='#43C780' />
          </View>
          <Text
            style={{
              left: 10,
              fontWeight: '400',
              fontStyle: 'normal',
              fontSize: 14,
              lineHeight: 16.8
            }}
          >
            Buy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#FFDA93',
              width: 48,
              height: 48,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4
            }}
          >
            <Icons name='grid' size={25} />
          </View>
          <Text
            style={{
              left: 7,
              fontWeight: '400',
              fontStyle: 'normal',
              fontSize: 14,
              lineHeight: 16.8
            }}
          >
            Wallet
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.personalButton}>
        <TouchableOpacity
          style={{ backgroundColor: '#15243C', width: 343, height: 48, borderRadius: 48 }}
        >
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
              color: '#FFFFFF',
              fontWeight: '500',
              fontSize: 18
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  selectPersonalAccount: {
    marginTop: 50
  },
  selectPersonHeader: {
    marginLeft: 16
  },
  selectPersonContent: {
    marginTop: 20
  },
  selectPersonalCard: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  personalBox: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  personalButton: {
    marginTop: 50,
    alignItems: 'center'
  }
})

export default SelectPersonalAccount

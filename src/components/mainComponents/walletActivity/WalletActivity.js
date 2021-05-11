import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Icons from 'react-native-vector-icons/Feather'

const WalletActivity = () => {
  const [state, setState] = useState([])
  const posts = [
    {
      id: '0',
      name: 'Recent'
    },
    {
      id: '1',
      name: 'Today'
    },
    {
      id: '2',
      name: 'Weeks'
    }
  ]

  return (
    <>
      <View style={styles.walletContainer}>
        <View style={styles.walletTextContainer}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 24,
              fontStyle: 'normal',
              lineHeight: 29.4,
              left: 16,
              top: 5,
              color: '#578DDE'
            }}
          >
            Wallet
          </Text>

          <View style={styles.walletIcons}>
            <View style={{ backgroundColor: '#578DDE' }}>
              <Icons name='bar-chart' size={18} color='#ffffff' />
            </View>
          </View>
        </View>
        <View style={styles.walletBalance}>
          <View style={{ marginTop: 16, marginLeft: 16 }}>
            <Text
              style={{
                color: '#FFFFFF',
                opacity: 0.5,
                fontWeight: '500',
                fontSize: 14
              }}
            >
              Account Balance
            </Text>

            <Text
              style={{
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 20,
                color: '#FFFFFF'
              }}
            >
              $
            </Text>

            <Text
              style={{
                left: 15,
                top: -20,
                fontSize: 24,
                color: '#FFFFFF'
              }}
            >
              20,000
            </Text>

            <View style={styles.walletUser}>
              <Text
                style={{
                  fontWeight: '500',
                  fontStyle: 'normal',
                  fontSize: 14,
                  lineHeight: 16.98,
                  color: '#FFFFFF'
                }}
              >
                eazox.pay/manuelsnr
              </Text>
            </View>
          </View>

          <View style={{ position: 'relative' }}>
            <View style={styles.walletSecond}>
              <View
                style={{
                  backgroundColor: '#25AFFD',
                  top: 0,
                  height: 70,
                  width: 70,
                  right: -36,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomLeftRadius: 100,
                  borderTopRightRadius: 15
                }}
              >
                <Icons
                  name='eye-off'
                  size={18}
                  color='#FFFFFF'
                  style={{
                    top: -10,
                    left: 5
                  }}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.walletBoxex}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#C7FFCC',
                height: 48,
                width: 48,
                left: 10,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Icons name='upload' size={25} color='#43C780' />
            </View>
            <Text
              style={{
                color: '#3B485B',
                fontWeight: 'normal',
                fontSize: 14,
                left: 10,
                fontStyle: 'normal'
              }}
            >
              Deposit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#C9DFFF',
                height: 48,
                width: 48,
                right: 5,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Icons name='gift' size={25} color='#5091F2' />
            </View>

            <Text
              style={{
                color: '#3B485B',
                fontWeight: 'normal',
                fontSize: 14,
                right: 5,
                fontStyle: 'normal'
              }}
            >
              Reward
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#3B485B',
                height: 48,
                width: 48,
                right: 10,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Icons name='download' size={25} color='#15243C' />
            </View>
            <Text
              style={{
                color: '#3B485B',
                fontWeight: 'normal',
                right: 15,
                fontSize: 14,
                fontStyle: 'normal'
              }}
            >
              Withdraw
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.walletActivity}>
          <Text
            style={{
              color: '#3B485B',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 16.98
            }}
          >
            Activities
          </Text>
          <Text
            style={{
              color: '#3B485B',
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 16.8
            }}
          >
            Manage Card
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontStyle: 'normal',
              fontSize: 14,
              lineHeight: 16.8,
              color: '#3B485B'
            }}
          >
            Cryptocurrency
          </Text>
        </View>

        <View style={{ marginTop: 10, marginLeft: 10 }}>
          <View
            style={{
              borderWidth: 2,
              width: 343,
              left: 20,
              borderColor: '#FAFAFA'
            }}
          >
            <View
              style={{
                borderWidth: 2,
                height: 1,
                width: 60,
                borderColor: '#578DDE'
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20
          }}
        >
          <Text style={{ marginTop: 7, left: 20 }}>Most Recent</Text>
          <Picker
            mode='dropdown'
            style={{ width: 100, height: 32, borderWidth: 1, borderRadius: 4, right: 20 }}
            selectedValue={state}
            onValueChange={value => setState(value)}
          >
            {posts.map((item, index) => {
              return <Picker.Item key={index} label={item.name} value={item.name} />
            })}
          </Picker>
        </View>

        <View style={styles.walletMessage}>
          <View
            style={{
              backgroundColor: '#C7FFE1',
              height: 32,
              width: 32,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              left: 5
            }}
          >
            <Icons name='arrow-up-right' size={16} color='#43C780' />
          </View>
          <View>
            <Text
              style={{
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: 16,
                lineHeight: 22.4,
                color: '#3B485B'
              }}
            >
              You made a deposit of £32
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: 12,
                color: '#A1A8B1'
              }}
            >
              Thursday 24, 2020. 14:50
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: '#43C780',
                fontWeight: '600',
                fontStyle: 'normal',
                fontSize: 16,
                lineHeight: 19.6,
                left: 13
              }}
            >
              +£32
            </Text>
          </View>
        </View>

        <View style={styles.walletMessageTwo}>
          <View
            style={{
              backgroundColor: '#FFC7C7',
              height: 32,
              width: 32,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100
            }}
          >
            <Icons name='arrow-down-left' size={16} color='#FC6363' />
          </View>
          <View>
            <Text
              style={{
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: 16,
                lineHeight: 22.4,
                color: '#3B485B'
              }}
            >
              You made a withdrawal of £32
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: 12,
                lineHeight: 14.4,
                color: '#A1A8B1'
              }}
            >
              Thursday 24, 2020. 14:50
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: '#FC6363',
                right: 15,
                fontWeight: '600',
                fontStyle: 'normal',
                fontSize: 16,
                lineHeight: 19.6,
                left: 1
              }}
            >
              -£32
            </Text>
          </View>
        </View>
        <View style={styles.walletMessageThree}>
          <View
            style={{
              backgroundColor: '#D1E4FF',
              height: 32,
              width: 32,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100
            }}
          >
            <Icons name='arrow-up-right' size={16} color='#5091F2' />
          </View>
          <View>
            <Text
              style={{
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: 16,
                lineHeight: 22.4,
                left: 7,
                color: '#3B485B'
              }}
            >
              Your post got rewarded with £32
            </Text>
            <Text
              style={{
                left: 7,
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: 16,
                lineHeight: 22.4,
                color: '#3B485B'
              }}
            >
              by<Text style={{ color: '#578DDE' }}>@Manuelsnr</Text>{' '}
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: 12,
                lineHeight: 14.4,
                color: '#A1A8B1'
              }}
            >
              Thursday 24, 2020. 14:50
            </Text>
          </View>
          <View>
            <Text
              style={{
                left: 3,
                color: '#5091F2',
                fontWeight: '600',
                fontStyle: 'normal',
                fontSize: 16,
                lineHeight: 19.6
              }}
            >
              +£32
            </Text>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  walletContainer: {
    marginTop: 50
  },
  walletTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  walletIcons: {
    backgroundColor: 'rgba(87, 141, 222, 0.1)',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    right: 25
  },
  walletBalance: {
    width: 343,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200,
    backgroundColor: '#0D4AF1',
    borderRadius: 15.3,
    left: 19,
    top: 20
  },
  walletSecond: {
    backgroundColor: '#1D6DF2',
    position: 'absolute',
    right: 1,
    top: 0,
    width: 105,
    height: 100,
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 20
  },
  walletUser: {
    marginTop: 70
  },
  walletBoxex: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    left: 5
  },
  walletActivity: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20
  },
  walletMessage: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    right: 10
  },
  walletMessageTwo: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  walletMessageThree: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

export default WalletActivity

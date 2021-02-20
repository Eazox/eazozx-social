import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Icon, Header, Left, Body } from 'native-base'
import { TouchableOpacity, View, Image } from 'react-native'
import { ONLINEIMAGES } from '../../../Constants'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import usePortrait from '../../customHooks/usePortrait'
import DrawerItems from './drawerItem'
import { CustomText } from '../../subComponents/CustomFontComponents'

export default function SideNavBar({ navigation }) {
  const portrait = usePortrait()

  const close = () => {
    navigation.closeDrawer()
  }

  useEffect(() => {
    navigation.closeDrawer()
  }, [portrait])

  //   const { theme, user } = this.props
  //   const ripple = TouchableNativeFeedback.Ripple('#adacac', false)

  return (
    <>
      <View style={{ flex: 1, paddingTop: 0 }}>
        <DrawerContentScrollView contentContainerStyle={{ paddingTop: 0 }}>
          <Header
            style={{
              elevation: 0,
              height: 210,
              justifyContent: 'flex-start',
              backgroundColor: '#578dde',
              paddingTop: 0,
              position: 'relative'
            }}
          >
            <Left
              style={{ alignItems: 'flex-start', marginLeft: 8, position: 'absolute', top: 16 }}
            >
              <Icon
                onPress={close}
                name='arrow-back'
                type='MaterialIcons'
                style={{ color: 'white' }}
              />
            </Left>
            <Body style={{ width: '100%', alignItems: 'center', marginTop: 35 }}>
              <Image
                source={{ uri: ONLINEIMAGES.profileImage }}
                style={{
                  width: 85,
                  height: 85,
                  borderWidth: 1,
                  borderColor: 'white',
                  borderRadius: 42.5
                }}
              />
              <CustomText style={{ marginTop: 6, fontFamily: 'Gilroy_medium', color: 'white' }}>
                Mary Annabelle Nathan
              </CustomText>
              <CustomText
                style={{
                  marginTop: 6,
                  fontSize: 14,
                  fontFamily: 'Gilroy_medium',
                  color: 'white',
                  marginBottom: 8
                }}
              >
                @Mary_Nathan
              </CustomText>
            </Body>
          </Header>
          {/* <DrawerItem {...this.props} /> */}
          <DrawerItem
            label={() => <DrawerItems label='Account Information' name='person' type='Ionicons' />}
          />
          <DrawerItem
            label={() => <DrawerItems label='Refer A Friend' name='share' type='Entypo' />}
          />
          <DrawerItem
            label={() => <DrawerItems label='Settings' name='settings' type='Feather' />}
          />
          <DrawerItem
            label={() => (
              <DrawerItems
                label='Switch to Business Account'
                name='account-box-multiple'
                type='MaterialCommunityIcons'
              />
            )}
          />
          <DrawerItem
            label={() => <DrawerItems label='Help & Feedback' name='help' type='MaterialIcons' />}
          />
          <DrawerItem
            label={() => (
              <DrawerItems label='Privacy Policy' name='shield' type='MaterialCommunityIcons' />
            )}
          />
          <DrawerItem
            label={() => <DrawerItems label='About EAZOX' name='people' type='Ionicons' />}
          />
        </DrawerContentScrollView>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            paddingHorizontal: 12,
            paddingBottom: 20
          }}
        >
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              borderRadius: 26,
              width: '100%',
              backgroundColor: '#fafafa'
            }}
          >
            <MIcon name='logout' size={16} style={{ color: '#eb5757', paddingHorizontal: 5 }} />
            <CustomText
              style={{ color: '#eb5757', paddingHorizontal: 5, fontFamily: 'Gilroy_medium' }}
            >
              Logout
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

SideNavBar.propTypes = {
  navigation: PropTypes.any
}

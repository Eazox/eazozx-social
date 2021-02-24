import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Icon, Header, Left, Body } from 'native-base'
import { TouchableOpacity, View, Image } from 'react-native'
import { ONLINEIMAGES } from '../../../Constants'
import { Auth } from '../../../firebase'
import usePortrait from '../../customHooks/usePortrait'
import DrawerItems from './drawerItem'
import DrawerImage from './drawerImage'
import help from '../../../images/help.png'
import switchAcc from '../../../images/switch.png'
import privacy from '../../../images/privacy.png'
import refer from '../../../images/refer.png'
import { setStack, authSuccess } from '../../../store/actions/'
import { useDispatch } from 'react-redux'
import { CustomText } from '../../subComponents/CustomFontComponents'

export default function SideNavBar({ navigation }) {
  const portrait = usePortrait()
  const dispatch = useDispatch()

  const signOut = () => {
    Auth.signOut().then(() => {
      dispatch(authSuccess(null))
      dispatch(setStack('loginStack'))
    })
  }
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
              height: 228,
              justifyContent: 'flex-start',
              backgroundColor: '#578dde',
              paddingTop: 0,
              position: 'relative'
            }}
          >
            <Left
              style={{ alignItems: 'flex-start', marginLeft: 16, position: 'absolute', top: 16 }}
            >
              <Icon
                onPress={close}
                name='arrow-back'
                type='MaterialIcons'
                style={{ color: 'white' }}
              />
            </Left>
            <Body style={{ width: '100%', alignItems: 'center', marginTop: 35 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
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
              </TouchableOpacity>
              <CustomText
                style={{ marginTop: 6, fontFamily: 'Gilroy_medium', color: 'white', fontSize: 14 }}
              >
                Mary Annabelle Nathan
              </CustomText>
              <CustomText
                style={{
                  marginTop: 6,
                  fontSize: 14,
                  // fontFamily: 'Gilroy_medium',
                  color: 'white'
                }}
              >
                @Mary_Nathan
              </CustomText>
            </Body>
          </Header>
          {/* <DrawerItem {...this.props} /> */}
          <DrawerItem
            onPress={() => navigation.navigate('Profile')}
            label={() => <DrawerItems label='Account Information' name='person' type='Ionicons' />}
          />
          <DrawerItem label={() => <DrawerImage label='Refer A Friend' image={refer} />} />
          <DrawerItem
            label={() => <DrawerItems label='Settings' name='settings' type='Feather' />}
          />
          <DrawerItem
            label={() => <DrawerImage label='Switch to Business Account' image={switchAcc} />}
          />
          <DrawerItem label={() => <DrawerImage label='Help & Feedback' image={help} />} />
          <DrawerItem label={() => <DrawerImage label='Privacy Policy' image={privacy} />} />
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
            onPress={signOut}
            style={{
              paddingVertical: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              borderRadius: 26,
              width: '100%',
              backgroundColor: '#fafafa'
            }}
          >
            <CustomText style={{ color: '#eb5757', fontFamily: 'Gilroy_medium' }}>
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

import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { setPage } from '../../../store/actions/currPageAction'
import { useFocusEffect } from '@react-navigation/native'
import { Image, View } from 'react-native'
import { Container, Header, Left, Right, Body, Icon } from 'native-base'
import { GLOBALSTYLES } from '../../../Constants'
import { CustomText } from '../../subComponents/CustomFontComponents'
import BellImage from '../../../images/bell.png'
import CardList from './CardList'

export default function HomePage({ navigation, drawerNavProp }) {
  const dispatch = useDispatch()
  useFocusEffect(
    useCallback(() => {
      dispatch(setPage('display'))

      return () => dispatch(setPage('hide'))
    }, [])
  )

  const open = () => {
    drawerNavProp.openDrawer()
  }

  return (
    <Container>
      <Header style={[GLOBALSTYLES.header, { elevation: 2 }]}>
        <Left style={[GLOBALSTYLES.headerLeft, { marginLeft: 16 }]}>
          <Icon onPress={open} name='menu' type='Feather' style={{ fontSize: 25 }} />
        </Left>
        <Body style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <CustomText
            style={[
              {
                fontFamily: 'Gilroy_medium',
                fontSize: 24,
                color: '#567dde',
                textAlign: 'center',
                alignSelf: 'center'
              }
            ]}
          >
            Home
          </CustomText>
        </Body>
        <Right style={{ position: 'absolute', right: 16 }}>
          <View style={GLOBALSTYLES.bellContainer}>
            <Image source={BellImage} style={GLOBALSTYLES.bellImage} />
            <View style={GLOBALSTYLES.dot} />
          </View>
        </Right>
      </Header>
      <CardList nav={navigation} />
    </Container>
  )
}

HomePage.propTypes = {
  navigation: PropTypes.any,
  drawerNavProp: PropTypes.any
}

import React from 'react'
import { Image, View } from 'react-native'
import { Container, Header, Left, Right } from 'native-base'
import { GLOBALSTYLES } from '../../../Constants'
import { CustomText } from '../../subComponents/CustomFontComponents'
import BellImage from '../../../images/bell.png'
import CardList from './CardList'

export default function HomePage() {
  return (
    <Container>
      <Header style={[GLOBALSTYLES.header]}>
        <Left style={GLOBALSTYLES.headerLeft}>
          <CustomText
            style={[
              GLOBALSTYLES.headerText,
              GLOBALSTYLES.ml16,
              { fontWeight: '500', lineHeight: 29.11 }
            ]}
          >
            Home
          </CustomText>
        </Left>
        <Right>
          <View style={GLOBALSTYLES.bellContainer}>
            <Image source={BellImage} style={GLOBALSTYLES.bellImage} />
            <View style={GLOBALSTYLES.dot} />
          </View>
        </Right>
      </Header>
      {/* <Content style={{ padding: 8 }}> */}
      <CardList />
      {/* </Content> */}
    </Container>
  )
}

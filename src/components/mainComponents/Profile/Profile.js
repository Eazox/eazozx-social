// import liraries
import React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import {
  Container,
  Content,
  Header,
  Icon,
  Left,
  Button,
  Thumbnail,
  Body,
  Tabs,
  Tab
} from 'native-base'
import { CustomText, VerifiedSellerGold } from '../../subComponents/CustomFontComponents'
import { ONLINEIMAGES } from '../../../Constants'
import coverImage from '../../../images/coverImage.png'
import CardList from './CardList'
import Catalogue from './Catalogue'

// create a component
const Profile = ({ personal, navigation }) => {
  const goHome = () => {
    navigation.navigate('HomePage')
  }

  return (
    <Container>
      <Content>
        <Header
          span
          style={{
            height: 200,
            paddingRight: 0,
            paddingLeft: 0,
            position: 'relative',
            backgroundColor: 'transparent'
          }}
        >
          <Image
            source={coverImage}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute'
            }}
          />
          <Left>
            <View
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#1E242E',
                marginLeft: 8,
                marginTop: 8
              }}
            >
              <Icon
                onPress={goHome}
                name='arrowleft'
                type='AntDesign'
                style={{ padding: 8, fontSize: 20, color: 'white' }}
              />
            </View>
          </Left>
          <Body>
            <Thumbnail
              source={{ uri: ONLINEIMAGES.profileImage }}
              style={{
                position: 'absolute',
                bottom: -40,
                left: -90,
                borderColor: 'white',
                borderWidth: 1,
                width: 75,
                height: 75,
                zIndex: 2,
                borderRadius: 37.5
              }}
            />
          </Body>
        </Header>
        <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'flex-end'
              // height: 45
            }}
          >
            <VerifiedSellerGold
              reviews={1206}
              verified
              style={{ fontSize: 12, alignSelf: 'center' }}
            />
            <Button
              bordered
              style={{
                borderColor: '#578DDE',
                marginLeft: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                paddingVertical: 5,
                borderRadius: 30,
                elevation: 0,
                height: 25,
                alignSelf: 'center'
              }}
            >
              <CustomText style={{ fontSize: 12, marginLeft: -5, marginRight: -5 }}>
                {personal ? 'Edit Profile' : 'Send Message'}
              </CustomText>
            </Button>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <CustomText style={{ marginTop: 8, fontSize: 14 }}>Mary Nathan</CustomText>
            <Icon
              name='check-circle'
              type='MaterialIcons'
              style={{ fontSize: 16, marginLeft: 3, color: '#578dde' }}
            />
          </View>
          <CustomText note style={{ fontSize: 12, marginTop: 4 }}>
            @MaryNathan
          </CustomText>
          <View style={{ flexDirection: 'row', width: '100%', marginTop: 4 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name='location-pin' type='Entypo' style={{ fontSize: 12, marginRight: 2 }} />
              <CustomText style={{ fontSize: 12 }}>Lagos</CustomText>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon
                name='business-center'
                type='MaterialIcons'
                style={{ fontSize: 12, marginRight: 2, marginLeft: 10 }}
              />
              <CustomText style={{ fontSize: 12 }}>Business Account</CustomText>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
              <Icon name='link-2' type='Feather' style={{ fontSize: 12, marginRight: 2 }} />
              <CustomText style={{ color: '#578DDE', fontSize: 12 }}>
                https://manuelsnr.com
              </CustomText>
            </View>
          </View>
          <CustomText style={{ fontSize: 12, marginTop: 4 }}>
            I dont sell quality and affordable stuff.. dont buy from me
          </CustomText>
        </View>

        <Tabs
          tabBarUnderlineStyle={{ height: 0 }}
          tabContainerStyle={{
            marginHorizontal: 8,
            elevation: 0,
            backgroundColor: 'white',
            marginBottom: 16,
            height: 36
          }}
        >
          <Tab
            heading='My Activity'
            activeTabStyle={{
              backgroundColor: '#d5e6fb',

              borderTopLeftRadius: 40,
              borderBottomLeftRadius: 40
            }}
            activeTextStyle={{ color: '#034cbc', fontFamily: 'Gilroy' }}
            tabStyle={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#d5e6fb',
              borderTopLeftRadius: 40,
              borderBottomLeftRadius: 40
            }}
            textStyle={{ color: 'black', fontFamily: 'Gilroy' }}
          >
            <CardList viewImage={false} />
          </Tab>
          <Tab
            heading='Shared'
            activeTabStyle={[
              { backgroundColor: '#d5e6fb' },
              personal && { borderTopRightRadius: 40, borderBottomRightRadius: 40 }
            ]}
            activeTextStyle={{ color: '#034cbc', fontFamily: 'Gilroy' }}
            tabStyle={[
              {
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#d5e6fb'
              },
              personal && { borderTopRightRadius: 40, borderBottomRightRadius: 40 }
            ]}
            textStyle={{ color: 'black', fontFamily: 'Gilroy' }}
          >
            <CardList viewImage />
          </Tab>
          {!personal && (
            <Tab
              heading='Catalogue'
              activeTabStyle={{
                backgroundColor: '#d5e6fb',

                borderTopRightRadius: 40,
                borderBottomRightRadius: 40
              }}
              activeTextStyle={{ color: '#034cbc', fontFamily: 'Gilroy' }}
              tabStyle={{
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#d5e6fb',
                borderTopRightRadius: 40,
                borderBottomRightRadius: 40
              }}
              textStyle={{ color: 'black', fontFamily: 'Gilroy' }}
            >
              <Catalogue />
            </Tab>
          )}
        </Tabs>
      </Content>
    </Container>
  )
}

Profile.propTypes = {
  personal: PropTypes.bool,
  navigation: PropTypes.any
}

// make this component available to the app
export default Profile

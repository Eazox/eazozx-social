import React from 'react'
import PropTypes from 'prop-types'
import { Image, Alert, View } from 'react-native'
import { CustomText, CustomBuyNow } from '../../subComponents/CustomFontComponents'
import { Card, CardItem, Left, Thumbnail, Body, Button, Right, Icon } from 'native-base'
import PostButton from './PostButton'
import PostButtonHeart from './PostButtonHeart'
import { ONLINEIMAGES } from '../../../Constants'
// import PostButtonBookmark from './PostButtonBookmark'

export default function CardComponent({
  username,
  email,
  time,
  image,
  caption,
  profilePic,
  price,
  comments,
  drips,
  activityPage
}) {
  const commentButtonPress = () => {
    Alert.alert('commented')
  }

  const shareButtonPress = () => {
    Alert.alert('shared')
  }

  return (
    <Card
      noShadow
      style={{
        width: '100%',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0
      }}
    >
      <CardItem style={{ paddingBottom: 0 }}>
        <Left style={{ width: '75%' }}>
          <Thumbnail
            source={{ uri: profilePic }}
            style={{
              width: 35,
              height: 35,
              borderRadius: 17.5
            }}
          />
          <Body>
            <CustomText>{username}</CustomText>
            <CustomText style={{ marginRight: 0, fontSize: 12, marginTop: 4 }} note>
              {email}
            </CustomText>
          </Body>
        </Left>
        <Right style={{ width: '25%' }}>
          <Body style={{ justifyContent: 'center', width: '100%' }}>
            <View style={{ width: '100%', justifyContent: 'flex-end' }}>
              <CustomText
                note
                style={{
                  width: '100%',
                  textAlign: 'right',
                  fontSize: 12
                }}
              >
                {time}
              </CustomText>
              {activityPage && (
                <Button
                  small
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingVertical: 5,
                    marginTop: 3,
                    borderRadius: 30,
                    backgroundColor: '#cff7e5',
                    elevation: 0,
                    marginLeft: 17
                    // width: 125,
                  }}
                >
                  <CustomText style={{ color: '#06a45b', fontSize: 12 }}>
                    Verified Seller
                  </CustomText>
                  <Icon
                    type='AntDesign'
                    name='checkcircleo'
                    style={{ color: '#06a45b', fontSize: 18, marginLeft: -8 }}
                  />
                </Button>
              )}
            </View>
          </Body>
        </Right>
      </CardItem>
      <CardItem style={{ paddingBottom: 5 }}>
        <Body>
          <CustomText style={{ marginBottom: 15 }}>{caption}</CustomText>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ resizeMode: 'cover', width: '100%', height: 250 }}
            />
          )}
        </Body>
      </CardItem>
      {activityPage && (
        <CardItem style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <CustomText style={{ fontSize: 20 }}>$410</CustomText>
          <CustomBuyNow />
        </CardItem>
      )}
      <CardItem
        style={{
          paddingBottom: 0,
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <View style={{ flexDirection: 'row', marginRight: -20 }}>
          <Thumbnail
            source={{ uri: ONLINEIMAGES.profileImage }}
            style={{
              width: 25,
              height: 25,
              borderRadius: 12.5,
              borderWidth: 1,
              borderColor: 'white'
            }}
          />
          <Thumbnail
            source={{ uri: ONLINEIMAGES.profileImage }}
            style={{
              marginLeft: -10,
              width: 25,
              height: 25,
              borderRadius: 12.5,
              borderWidth: 1,

              borderColor: 'white'
            }}
          />
          <Thumbnail
            source={{ uri: ONLINEIMAGES.profileImage }}
            style={{
              marginLeft: -10,
              width: 25,
              height: 25,
              borderRadius: 12.5,
              borderWidth: 1,

              borderColor: 'white'
            }}
          />
        </View>
        <CustomText style={{ fontSize: 14 }}>{`${drips} Likes`}</CustomText>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            type='SimpleLineIcons'
            name='present'
            style={{ fontSize: 20, color: '#578DDE', marginRight: -5 }}
          />
          <CustomText style={{ fontSize: 14 }}>{`$${price}`}</CustomText>
        </View>
        <CustomText style={{ fontSize: 14 }}>{comments} Comments</CustomText>
      </CardItem>
      <CardItem
        style={{
          justifyContent: 'space-between',
          paddingTop: 0,
          paddingBottom: 0,
          marginTop: 5,
          position: 'relative',
          borderWidth: 1.5,
          borderColor: '#fafafa'
        }}
      >
        <PostButtonHeart prop='Likes' name='heart' type='AntDesign' onPress={commentButtonPress} />
        <PostButton
          prop='Comment'
          name='message-circle'
          type='Feather'
          onPress={commentButtonPress}
        />
        <PostButton right prop='Share' name='share' type='Entypo' onPress={shareButtonPress} />
      </CardItem>
    </Card>
  )
}

CardComponent.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  time: PropTypes.string,
  image: PropTypes.string,
  caption: PropTypes.string,
  profilePic: PropTypes.string,
  price: PropTypes.number,
  comments: PropTypes.number,
  drips: PropTypes.number,
  activityPage: PropTypes.bool
}

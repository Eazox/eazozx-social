import React from 'react'
import PropTypes from 'prop-types'
import { Image, Alert, View, TouchableOpacity } from 'react-native'
import { CustomText, CustomBuyNow, VerifiedSeller } from '../CustomFontComponents'
import { Card, CardItem, Left, Thumbnail, Body, Right, Icon } from 'native-base'
import PostButton from './PostButton'
import PostButtonHeart from './PostButtonHeart'
import { ONLINEIMAGES } from '../../../Constants'
// import PostButtonBookmark from './PostButtonBookmark'

export default function CardComponent({
  username = 'Mary Nathan',
  email = '@MaryNathan',
  time = '7 hours ago',
  image = ONLINEIMAGES.bag,
  caption = 'Some fire Gucci',
  profilePic = ONLINEIMAGES.profileImage,
  price = 3500,
  comments = 34,
  drips = 16,
  activityPage = false,
  navigate
}) {
  const commentButtonPress = () => {
    Alert.alert('commented')
  }

  const shareButtonPress = () => {
    Alert.alert('shared')
  }

  return (
    <View style={{ paddingHorizontal: 16, width: '100%', marginLeft: -2 }}>
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
        <View
          style={{
            borderWidth: 1.5,
            borderColor: '#fafafa'
          }}
        >
          <CardItem style={{ paddingBottom: 0, paddingLeft: 16, paddingRight: 16 }}>
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
                      fontSize: 12,
                      marginBottom: 5
                    }}
                  >
                    {time}
                  </CustomText>
                  {!activityPage && <VerifiedSeller style={{ right: 8 }} />}
                </View>
              </Body>
            </Right>
          </CardItem>
          <TouchableOpacity onPress={navigate}>
            <CardItem
              style={{
                paddingBottom: 0,
                paddingLeft: 16,
                paddingRight: 16
              }}
            >
              <Body>
                <CustomText style={{ marginBottom: 15 }}>{caption}</CustomText>
                {image && (
                  <Image
                    source={{ uri: image }}
                    style={{ resizeMode: 'cover', width: '100%', height: 144 }}
                  />
                )}
              </Body>
            </CardItem>
          </TouchableOpacity>
          {!activityPage && (
            <CardItem
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 16,
                paddingRight: 16
              }}
            >
              <CustomText style={{ fontSize: 20, color: '#578dde', fontFamily: 'Gilroy_medium' }}>
                $410
              </CustomText>
              <CustomBuyNow />
            </CardItem>
          )}
        </View>

        <CardItem
          style={{
            paddingBottom: 8,
            paddingTop: 8,
            alignItems: 'center',
            paddingLeft: 16,
            paddingRight: 16,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            borderColor: '#fafafa',
            borderWidth: 1.5
          }}
        >
          <View style={{ flexDirection: 'row', marginRight: -20 }}>
            <Thumbnail
              source={{ uri: ONLINEIMAGES.profileImage }}
              style={{
                width: 24,
                height: 24,
                borderRadius: 12.5,
                borderWidth: 1,
                borderColor: 'white'
              }}
            />
            <Thumbnail
              source={{ uri: ONLINEIMAGES.profileImage }}
              style={{
                marginLeft: -10,
                width: 24,
                height: 24,
                borderRadius: 12.5,
                borderWidth: 1,

                borderColor: 'white'
              }}
            />
            <Thumbnail
              source={{ uri: ONLINEIMAGES.profileImage }}
              style={{
                marginLeft: -10,
                width: 24,
                height: 24,
                borderRadius: 12.5,
                borderWidth: 1,

                borderColor: 'white'
              }}
            />
          </View>
          <CustomText style={{ fontSize: 12 }}>{`${drips} Likes`}</CustomText>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              type='SimpleLineIcons'
              name='present'
              style={{ fontSize: 20, color: '#578DDE', marginRight: -5 }}
            />
            <CustomText style={{ fontSize: 12 }}>{`$${price}`}</CustomText>
          </View>
          <CustomText style={{ fontSize: 12 }}>{comments} Comments</CustomText>
        </CardItem>
        <CardItem
          style={{
            justifyContent: 'space-between',
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 16,
            paddingRight: 16,
            position: 'relative',
            borderWidth: 1.5,
            borderColor: '#fafafa'
          }}
        >
          <PostButtonHeart
            prop='Likes'
            name='heart'
            type='AntDesign'
            onPress={commentButtonPress}
          />
          <PostButton
            prop='Comment'
            name='message-circle'
            type='Feather'
            onPress={commentButtonPress}
          />
          <PostButton right prop='Share' name='share' type='Entypo' onPress={shareButtonPress} />
        </CardItem>
      </Card>
    </View>
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
  activityPage: PropTypes.bool,
  navigate: PropTypes.func
}

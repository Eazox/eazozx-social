import React from 'react'
import PropTypes from 'prop-types'
import { Image, Alert } from 'react-native'
import { CustomText } from '../../subComponents/CustomFontComponents'
import { Card, CardItem, Left, Thumbnail, Body, Right } from 'native-base'
import PostButton from './PostButton'
import PostButtonImg from './PostButtonImg'
import PostButtonBookmark from './PostButtonBookmark'

export default function CardComponent({
  username,
  email,
  time,
  image,
  caption,
  profilePic,
  comments,
  shares,
  likes
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
          <Thumbnail source={{ uri: profilePic }} />
          <Body>
            <CustomText>{username}</CustomText>
            <CustomText style={{ marginRight: 0, fontSize: 12 }} note>
              {email}
            </CustomText>
          </Body>
        </Left>
        <Right style={{ width: '25%' }}>
          <Body style={{ justifyContent: 'center', width: '100%' }}>
            <CustomText note style={{ width: '100%', textAlign: 'right', fontSize: 12 }}>
              {time}
            </CustomText>
          </Body>
        </Right>
      </CardItem>
      <CardItem style={{ paddingBottom: 5 }}>
        <Body>
          <CustomText style={{ marginBottom: 15 }}>{caption}</CustomText>
          <Image
            source={{ uri: image }}
            style={{ resizeMode: 'cover', width: '100%', height: 250 }}
          />
        </Body>
      </CardItem>
      <CardItem style={{ justifyContent: 'space-between', marginHorizontal: 5, paddingTop: 0 }}>
        <PostButton
          prop={comments}
          name='comment-o'
          type='FontAwesome'
          onPress={commentButtonPress}
        />
        <PostButton
          prop={shares}
          name='ios-return-right'
          type='Ionicons'
          onPress={shareButtonPress}
        />
        <PostButtonImg likes={likes} />
        <PostButtonBookmark />
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
  comments: PropTypes.number,
  shares: PropTypes.number,
  likes: PropTypes.number
}

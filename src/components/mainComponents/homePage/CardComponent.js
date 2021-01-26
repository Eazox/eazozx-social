import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Image, Alert, View } from 'react-native'
import { CustomText } from '../../subComponents/CustomFontComponents'
import { Card, CardItem, Left, Thumbnail, Body, Button, Right, Icon } from 'native-base'
import PostButton from './PostButton'
import PostButtonImg from './PostButtonImg'
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
  drips
}) {
  const [display, setDisplay] = useState(false)

  const toggleDisplay = () => setDisplay(true)
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
            <View style={{ width: '100%', justifyContent: 'flex-end' }}>
              <CustomText
                note
                style={{
                  width: '100%',
                  marginBottom: 3,
                  textAlign: 'right',
                  fontSize: 12
                }}
              >
                {time}
              </CustomText>
              <Button
                small
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  paddingVertical: 5,
                  borderRadius: 30,
                  backgroundColor: '#cff7e5',
                  elevation: 0,
                  marginLeft: 17
                  // width: 125,
                }}
              >
                <CustomText style={{ color: '#06a45b', fontSize: 12 }}>Verified Seller</CustomText>
                <Icon
                  type='AntDesign'
                  name='checkcircleo'
                  style={{ color: '#06a45b', fontSize: 18, marginLeft: -8 }}
                />
              </Button>
            </View>
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
      <CardItem style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <CustomText style={{ fontSize: 20 }}>$410</CustomText>
        <Button
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: 25,
            elevation: 0,
            paddingHorizontal: 10,
            backgroundColor: '#578dde'
          }}
        >
          <CustomText>Buy Now</CustomText>
          <Icon
            type='FontAwesome'
            name='shopping-bag'
            style={{ fontSize: 18, color: 'white', marginLeft: 10 }}
          />
        </Button>
      </CardItem>
      {display && (
        <CardItem
          style={{
            paddingBottom: 0,
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <View style={{ flexDirection: 'row', marginRight: -10 }}>
            <Thumbnail
              source={{ uri: ONLINEIMAGES.profileImage }}
              style={{ width: 30, height: 30, borderRadius: 15 }}
            />
            <Thumbnail
              source={{ uri: ONLINEIMAGES.profileImage }}
              style={{
                marginLeft: -15,
                width: 30,
                height: 30,
                borderRadius: 15
              }}
            />
          </View>
          <CustomText style={{ fontSize: 14 }}>{`${drips} drips`}</CustomText>
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
      )}
      <CardItem style={{ justifyContent: 'space-between', paddingTop: 5 }}>
        <PostButtonImg likes='Drip' onLPress={toggleDisplay} />
        <PostButton
          prop='Comment'
          name='message'
          type='MaterialIcons'
          onPress={commentButtonPress}
        />
        <PostButton prop='Share' name='send' type='Feather' onPress={shareButtonPress} />
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
  drips: PropTypes.number
}

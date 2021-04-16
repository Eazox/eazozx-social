// import liraries
import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { ONLINEIMAGES } from '../../../Constants'
import { Icon, Button } from 'native-base'
import { CustomText } from '../CustomFontComponents'

// create a component
const Comment = () => {
  const [liked, setLiked] = useState(false)
  const [reshared, setReshared] = useState(false)

  const likeFunc = () => {
    setLiked(!liked)
  }

  const reshareFunc = () => {
    setReshared(!reshared)
  }

  return (
    <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
      <Image
        source={{ uri: ONLINEIMAGES.profileImage }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          marginRight: 8,
          alignSelf: 'flex-start',
          marginTop: 8
        }}
      />
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', width: '100%' }}>
          <CustomText style={{ fontSize: 14 }}>Mary Nathan</CustomText>
          <CustomText style={{ marginTop: 8, fontSize: 12, marginLeft: 6 }}>@MaryNathan</CustomText>
          <Icon
            name='check-circle'
            type='MaterialIcons'
            style={{ fontSize: 16, marginLeft: 3, color: '#578dde' }}
          />
          <View style={{ alignSelf: 'flex-end', flex: 1 }}>
            <CustomText
              style={{ fontSize: 12, textAlign: 'right', color: '#9197A1', width: '100%' }}
            >
              3 hours ago
            </CustomText>
          </View>
        </View>
        <CustomText style={{ fontSize: 14, marginTop: 6 }}>
          The post is worth every penny
        </CustomText>
        <View style={{ flexDirection: 'row' }}>
          <Button
            style={{
              flexDirection: 'row',
              elevation: 0,
              justifyContent: 'flex-start',
              paddingHorizontal: 0,
              backgroundColor: 'transparent'
            }}
            onPress={likeFunc}
          >
            <Icon
              name={liked ? 'heart' : 'hearto'}
              type='AntDesign'
              style={[
                { fontSize: 16, marginRight: 0, marginLeft: 0 },
                liked ? { color: '#eb5757' } : { color: '#9b9b9b' }
              ]}
            />
            <CustomText style={{ color: '#3B485B', marginLeft: -8, fontSize: 14 }}>35</CustomText>
          </Button>
          <Button
            style={{
              flexDirection: 'row',
              elevation: 0,
              paddingLeft: 0,
              justifyContent: 'flex-start',
              paddingHorizontal: 0,
              backgroundColor: 'transparent'
            }}
            onPress={reshareFunc}
          >
            <Icon
              name='share'
              type='MaterialCommunityIcons'
              style={[
                { fontSize: 16, marginRight: 0, marginLeft: 0 },
                reshared ? { color: '#578dde' } : { color: '#9b9b9b' }
              ]}
            />
            <CustomText style={{ color: '#3B485B', marginLeft: -8, fontSize: 14 }}>3</CustomText>
          </Button>
        </View>
      </View>
    </View>
  )
}

// make this component available to the app
export default Comment

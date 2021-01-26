import React, { useState } from 'react'
import { Image, Alert } from 'react-native'
import PropTypes from 'prop-types'
import { Button } from 'native-base'
import droplets from '../../../images/droplets.png'
import { CustomText } from '../../subComponents/CustomFontComponents'

export default function PostButtonImg({ likes, onLPress }) {
  const [pressed, setPressed] = useState(false)

  const pressHandler = () => {
    Alert.alert('Post liked')
    setPressed(!pressed)
  }

  return (
    <Button onLongPress={onLPress} transparent onPress={pressHandler}>
      <Image
        source={droplets}
        style={{
          marginRight: -8,
          marginLeft: 0,
          width: 20,
          height: 20,
          resizeMode: 'contain'
        }}
      />
      <CustomText style={pressed ? { color: '#578dde' } : { color: '#9b9b9b' }}>{likes}</CustomText>
    </Button>
  )
}

PostButtonImg.propTypes = {
  likes: PropTypes.string,
  onLPress: PropTypes.func
}

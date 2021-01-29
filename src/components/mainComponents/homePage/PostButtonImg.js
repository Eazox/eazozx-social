import React, { useState } from 'react'
import { Image, Alert } from 'react-native'
import PropTypes from 'prop-types'
import { Button, Icon } from 'native-base'
import droplets from '../../../images/droplets.png'
import { CustomText } from '../../subComponents/CustomFontComponents'

export default function PostButtonImg({ likes }) {
  const [pressed, setPressed] = useState(false)
  const [display, setDisplay] = useState(false)

  const toggleOn = () => setDisplay(false)
  const toggleOff = () => {
    setDisplay(true)
  }

  const pressHandler = () => {
    Alert.alert('Post liked')
    setPressed(!pressed)
  }

  return (
    <>
      <Button onLongPress={toggleOff} transparent onPress={pressHandler}>
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
        <CustomText style={pressed ? { color: '#578dde' } : { color: '#9b9b9b' }}>
          {likes}
        </CustomText>
      </Button>
      {display && (
        <Button
          onPress={toggleOn}
          small
          iconLeft
          style={{
            position: 'absolute',
            left: 10,
            elevation: 1,
            backgroundColor: 'white',
            paddingHorizontal: 0.4,
            paddingVertical: 0.6,
            zIndex: 1
          }}
        >
          <Icon
            name='card-giftcard'
            type='MaterialIcons'
            style={{ color: '#578DDE', marginLeft: 5, marginVertical: 10 }}
          />
          <CustomText style={{ color: '#578DDE', marginLeft: -5 }}>Reward</CustomText>
        </Button>
      )}
    </>
  )
}

PostButtonImg.propTypes = {
  likes: PropTypes.string
}

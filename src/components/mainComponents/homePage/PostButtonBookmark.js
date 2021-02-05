import React, { useState } from 'react'
import { Alert } from 'react-native'
import { Button, Icon } from 'native-base'

export default function PostButtonBookmark() {
  const [pressed, setPressed] = useState(false)
  const pressHandler = () => {
    Alert.alert('bookmarked')
    setPressed(!pressed)
  }
  return (
    <Button transparent onPress={pressHandler}>
      <Icon
        name={pressed ? 'bookmark' : 'bookmark-o'}
        type='FontAwesome'
        style={[
          { marginRight: 0, marginLeft: 0, fontSize: 22 },
          pressed ? { color: '#578dde' } : { color: '#9b9b9b' }
        ]}
      />
    </Button>
  )
}

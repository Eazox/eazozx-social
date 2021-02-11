import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'native-base'
import { CustomText } from '../../subComponents/CustomFontComponents'

export default function PostButton({ prop, name, type, onPress }) {
  const [pressed, setPressed] = useState(false)
  const pressHandler = () => {
    onPress()
    setPressed(!pressed)
  }
  return (
    <Button transparent onPress={pressHandler}>
      <Icon
        name={name}
        type={type}
        style={[
          { marginRight: -8, marginLeft: 0, fontSize: 22 },
          pressed ? { color: '#578dde' } : { color: '#9b9b9b' }
        ]}
      />
      {prop && (
        <CustomText style={pressed ? { color: '#578dde' } : { color: '#9b9b9b' }}>
          {prop}
        </CustomText>
      )}
    </Button>
  )
}

PostButton.propTypes = {
  prop: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onPress: PropTypes.func
}

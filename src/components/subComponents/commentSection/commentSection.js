// import liraries
import React from 'react'
import { View } from 'react-native'
import { CustomText } from '../CustomFontComponents'
import Comment from './comment'

// create a component
const CommentSection = () => {
  return (
    <View style={{ marginTop: 16, marginLeft: 2 }}>
      <CustomText
        style={{
          color: '#3B485B',
          fontSize: 18,
          fontFamily: 'Gilroy_medium'
        }}
      >
        Comments
      </CustomText>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </View>
  )
}

// define your styles
// make this component available to the app
export default CommentSection

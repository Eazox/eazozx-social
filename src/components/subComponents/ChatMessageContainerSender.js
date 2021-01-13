// import liraries
import React from 'react'
import { Thumbnail } from 'native-base'
import { View, StyleSheet } from 'react-native'
import { CustomText } from './CustomFontComponents'
import { ONLINEIMAGES } from '../../Constants'

// create a component
const ChatMessageContainerSender = () => {
  return (
    <View style={styles.container}>
      <Thumbnail source={{ uri: ONLINEIMAGES.profileImage }} style={styles.thumbNail} />
      <View style={styles.msgContainer}>
        <CustomText>
          I found a love for me. Darling just dive right in, follow my lead, i found a girl,
          beautiful and sweet,i could not give you up this time We were just kids when we fell in
          love fighting against all odds
        </CustomText>
        <CustomText style={styles.time}>5:34am</CustomText>
      </View>
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  msgContainer: {
    maxWidth: '68.5%',
    backgroundColor: '#fafafa',
    borderRadius: 7,
    flexDirection: 'column',
    borderTopLeftRadius: 0,
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 28,
    paddingBottom: 16
  },
  thumbNail: { width: 24, height: 24, marginLeft: -75, marginTop: -15, marginRight: 10 },
  time: {
    fontSize: 9,
    textAlign: 'right',
    marginTop: 5,
    marginBottom: -10,
    marginRight: -10
  }
})

// make this component available to the app
export default ChatMessageContainerSender

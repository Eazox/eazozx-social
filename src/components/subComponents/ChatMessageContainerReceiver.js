// import liraries
import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { CustomText } from './CustomFontComponents'
import messageSeen from '../../images/message_seen.png'
// create a component
const ChatMessageContainerReceiver = () => {
  return (
    <View style={styles.container}>
      <View style={styles.msgContainer}>
        <CustomText>I found a love for me.</CustomText>
        <View style={styles.timeContainer}>
          <CustomText style={styles.time}>5:34am</CustomText>
          <Image source={messageSeen} style={styles.msgSeen} />
        </View>
      </View>
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 8
  },
  msgContainer: {
    maxWidth: '68.5%',
    flexDirection: 'column',
    backgroundColor: 'rgba(87, 141, 222, 0.6)',
    borderRadius: 7,
    borderTopRightRadius: 0,
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 28,
    paddingBottom: 16
  },
  timeContainer: { flexDirection: 'row', justifyContent: 'flex-end', marginRight: -10 },
  time: { fontSize: 9, textAlign: 'right', marginTop: 5, marginBottom: -10 },
  msgSeen: { width: 16, height: 8, top: 5, left: 6 }
})

// make this component available to the app
export default ChatMessageContainerReceiver

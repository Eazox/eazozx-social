// import liraries
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// create a component
const MessageListTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Messages</Text>
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%'
  },
  text: {
    fontWeight: '500',
    fontSize: 24,
    fontFamily: 'Gilroy',
    color: 'rgb(87, 141, 222)'
  }
})

MessageListTitle.displayName = 'MessageListTitle'

// make this component available to the app
export default MessageListTitle

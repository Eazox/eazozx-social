// import liraries
import React, { useState } from 'react'
import { TouchableOpacity, Keyboard, StyleSheet } from 'react-native'
import { Item, Icon } from 'native-base'
// import EmojiBoard from 'react-native-emoji-board'

import { CustomGrowInput } from '../../subComponents/CustomFontComponents'

// to reduce rerenders on MessagePage Component
const KeyboardComponent = () => {
  const [showBoard, setShowBoard] = useState(false)
  const [text, setText] = useState('')

  const onChangeText = e => {
    setText(e)
  }

  const showBoardHandler = () => {
    setShowBoard(!showBoard)
    // input.current.focus()
    Keyboard.dismiss()
  }

  return (
    <>
      <Item style={styles.inputMainContainer}>
        <Item style={styles.inputSubContainer}>
          <Icon
            active
            name='emoticon-happy-outline'
            type='MaterialCommunityIcons'
            style={styles.iconHappy}
            onPress={showBoardHandler}
          />
          <CustomGrowInput
            placeholder='Type a message'
            style={styles.inputGrow}
            // enableScrollToCaret
            maxHeight={100}
            minHeight={50}
            value={text}
            onChangeText={onChangeText}
          />
          <Icon active name='attach-file' type='MaterialIcons' style={styles.iconFile} />
        </Item>
        <TouchableOpacity style={styles.sendContainer}>
          <Icon
            name='send'
            type='MaterialIcons'
            color='white'
            onPress={() => Keyboard.dismiss()}
            style={styles.iconSend}
          />
        </TouchableOpacity>
        {/* <EmojiBoard
          style={{ marginLeft: 0 }}
          showBoard={showBoard}
          onClick={e => onChangeText(text + `${e.code}`)}
          onRemove={() => setShowBoard(false)}
        /> */}
      </Item>
      {/* issue lies with onclick here, how to handle inputs if user places cursor somewhere else and
      adds an emoji */}
    </>
  )
}

// define your styles
const styles = StyleSheet.create({
  inputMainContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  inputSubContainer: {
    paddingBottom: 10,
    paddingTop: 10,
    flex: 1,
    marginRight: 10
  },
  iconHappy: {
    left: 0,
    padding: 15,
    paddingLeft: 12,
    paddingRight: 5,
    position: 'absolute',
    zIndex: 2,
    bottom: 7.3
  },
  inputGrow: {
    backgroundColor: 'rgb(250, 250, 250)',
    borderRadius: 7,
    paddingLeft: 50,
    paddingRight: 40,
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    overflow: 'scroll'
  },
  iconFile: {
    position: 'absolute',
    right: 0,
    bottom: 7.3,
    padding: 15,
    paddingLeft: 5
  },
  sendContainer: {
    borderRadius: 20,
    height: 40,
    width: 40,
    backgroundColor: '#578DDE',
    marginTop: -17,
    marginRight: 5,
    bottom: 15
  },
  iconSend: {
    fontSize: 24,
    marginLeft: 10,
    marginTop: 7.5,
    color: 'white'
  }
})

// make this component available to the app
export default KeyboardComponent

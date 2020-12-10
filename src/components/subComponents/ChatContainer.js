// import liraries
import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, Left, Body, Right, Thumbnail } from 'native-base'
import { StyleSheet } from 'react-native'
import { GLOBALSTYLES } from '../../Constants'
import { CustomText } from '../../components/subComponents/CustomFontComponents'

// create a component
const ChatContainer = ({ navigation }) => {
  return (
    // <TouchableOpacity>
    <ListItem avatar style={styles.ListItem} onPress={() => navigation.navigate('Messages')}>
      <Left>
        <Thumbnail
          source={{
            uri:
              'data:image/jpeg;base64,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'
          }}
          style={styles.thumbNail}
        />
      </Left>
      <Body style={GLOBALSTYLES.noBorder}>
        <CustomText
          numberOfLines={1}
          style={[GLOBALSTYLES.fontw5, GLOBALSTYLES.fontS16, styles.username]}
        >
          Kumar Pratik{' '}
          <CustomText style={[GLOBALSTYLES.fontS12, GLOBALSTYLES.fontw4, styles.email]}>
            @KumarPratik177
          </CustomText>
        </CustomText>

        <CustomText note numberOfLines={1} style={[GLOBALSTYLES.fontw5, GLOBALSTYLES.fontS14]}>
          Doing what you like will always keep you happy ...
        </CustomText>
      </Body>
      <Right style={GLOBALSTYLES.noBorder}>
        <CustomText style={[GLOBALSTYLES.fontS12, styles.time]} note>
          3:43 pm
        </CustomText>
      </Right>
    </ListItem>
    // </TouchableOpacity>
  )
}

// define your styles
const styles = StyleSheet.create({
  listItem: { marginHorizontal: 16, borderBottomWidth: 0.5, paddingBottom: 10 },
  thumbNail: { width: 48, height: 48 },
  username: { color: '#15243c', lineHeight: 19 },
  email: {
    justifyContent: 'center',
    color: 'rgba(21, 36, 60, 0.6)'
  },
  time: { marginTop: 4 }
})

ChatContainer.propTypes = {
  navigation: PropTypes.object
}

// make this component available to the app
export default ChatContainer

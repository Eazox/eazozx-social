// import liraries
import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, Left, Body, Right, Thumbnail } from 'native-base'
import { StyleSheet } from 'react-native'
import { GLOBALSTYLES, ONLINEIMAGES } from '../../Constants'
import { CustomText } from '../../components/subComponents/CustomFontComponents'

// create a component
const ChatContainer = ({ navigation }) => {
  return (
    // <TouchableOpacity>
    <ListItem avatar style={styles.ListItem} onPress={() => navigation.navigate('Messages')}>
      <Left>
        <Thumbnail
          source={{
            uri: ONLINEIMAGES.profileImage
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

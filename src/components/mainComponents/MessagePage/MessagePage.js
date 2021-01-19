// import liraries
import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Container,
  Header,
  Left,
  Right,
  Icon,
  ListItem,
  Body,
  Thumbnail,
  Button,
  Content
} from 'native-base'
import { GLOBALSTYLES, ONLINEIMAGES } from '../../../Constants'
import { CustomText, LineDivider } from '../../subComponents/CustomFontComponents'
import ChatMessageContainerSender from '../../subComponents/ChatMessageContainerSender'
import ChatMessageContainerReceiver from '../../subComponents/ChatMessageContainerReceiver'
import KeyboardComponent from './KeyboardComponent'

// create a component
const MessagePage = () => {
  return (
    <Container>
      <Header style={[GLOBALSTYLES.header]} noShadow>
        <Left style={GLOBALSTYLES.headerLeft}>
          <View style={styles.backButtonContainer}>
            <Button transparent style={styles.backButton}>
              <Icon type='MaterialIcons' name='keyboard-backspace' style={styles.blackColor} />
            </Button>
            <ListItem avatar style={[styles.ListItem]}>
              <Left>
                <Thumbnail
                  source={{
                    uri: ONLINEIMAGES.profileImage
                  }}
                  style={[styles.thumbNail]}
                />
              </Left>
              <Body style={[GLOBALSTYLES.noBorder]}>
                <CustomText style={[GLOBALSTYLES.fontw5, GLOBALSTYLES.fontS16, styles.username]}>
                  Kumar Pratik
                </CustomText>

                <CustomText note style={[GLOBALSTYLES.fontw5, GLOBALSTYLES.fontS14, styles.email]}>
                  @KumarPratik
                </CustomText>
              </Body>
            </ListItem>
          </View>
        </Left>
        <Right>
          <Icon type='Entypo' name='dots-three-vertical' style={GLOBALSTYLES.fontS16} />
        </Right>
      </Header>
      <Content style={styles.messageList}>
        <LineDivider text='14th September' />
        <ChatMessageContainerSender />
        <ChatMessageContainerSender />
        <ChatMessageContainerReceiver />
        <ChatMessageContainerReceiver />
        <ChatMessageContainerSender />
        <ChatMessageContainerReceiver />
      </Content>
      <KeyboardComponent />
    </Container>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
  thumbNail: { width: 48, height: 48, marginTop: -8.5 },
  username: { color: '#15243c', lineHeight: 19 },
  email: { color: 'rgba(21, 36, 60, 0.6)' },
  listItem: {
    marginHorizontal: 16,
    borderBottomWidth: 0.5,
    paddingBottom: 10
  },
  blackColor: {
    color: 'black'
  },
  backButton: { marginTop: 5, marginRight: -15 },
  backButtonContainer: { flexDirection: 'row', marginLeft: 10 },
  messageList: { marginHorizontal: 16, marginBottom: 15 }
})

// make this component available to the app
export default MessagePage

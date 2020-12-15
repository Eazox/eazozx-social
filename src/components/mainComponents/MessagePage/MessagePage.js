// import liraries
import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
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
  Item,
  Content
} from 'native-base'
import { GLOBALSTYLES, ONLINEIMAGES } from '../../../Constants'
import { CustomText, LineDivider, CustomInput } from '../../subComponents/CustomFontComponents'
import ChatMessageContainerSender from '../../subComponents/ChatMessageContainerSender'
import ChatMessageContainerReceiver from '../../subComponents/ChatMessageContainerReceiver'

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
      <Item
        style={{
          flexDirection: 'row',
          width: '100%',
          paddingHorizontal: 12,
          justifyContent: 'space-between'
        }}
      >
        <Item
          style={{
            paddingBottom: 15,
            flex: 1,
            marginRight: 10
            // width: '80%'
          }}
        >
          <Icon
            active
            name='emoticon-happy-outline'
            type='MaterialCommunityIcons'
            style={{ left: 12, position: 'absolute', zIndex: 2, top: 13.5 }}
          />
          <CustomInput
            placeholder='Type a message'
            style={{
              backgroundColor: 'rgb(250, 250, 250)',
              borderRadius: 7,
              paddingLeft: 50
              // flex: 1
            }}
          />
          <Icon
            active
            name='attach-file'
            type='MaterialIcons'
            style={{ position: 'absolute', right: 5, top: 13.5 }}
          />
        </Item>
        <TouchableOpacity
          style={{
            borderRadius: 20,
            height: 40,
            width: 40,
            backgroundColor: '#578DDE',
            marginTop: -17,
            marginRight: 5
          }}
        >
          <Icon
            name='send'
            type='MaterialIcons'
            color='white'
            style={{ fontSize: 24, marginLeft: 10, marginTop: 7.5, color: 'white' }}
          />
        </TouchableOpacity>
      </Item>
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
  listItem: { marginHorizontal: 16, borderBottomWidth: 0.5, paddingBottom: 10 },
  blackColor: {
    color: 'black'
  },
  backButton: { marginTop: 5, marginRight: -15 },
  backButtonContainer: { flexDirection: 'row', marginLeft: 10 },
  messageList: { marginHorizontal: 16, marginBottom: 15 }
})

// make this component available to the app
export default MessagePage

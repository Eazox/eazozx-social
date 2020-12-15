// import liraries
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { GLOBALSTYLES } from '../../../Constants'
import { Container, Content, List, Header, Left, Item, Right } from 'native-base'
import ChatContainer from '../../subComponents/ChatContainer'
import { CustomSearchInput, CustomText } from '../../subComponents/CustomFontComponents'
import BellImage from '../../../images/bell.png'

const list = [0, 1, 2, 3, 4]

// create a component
const Messages = ({ navigation }) => {
  return (
    <Container>
      <Header style={[GLOBALSTYLES.header]} noShadow>
        <Left style={GLOBALSTYLES.headerLeft}>
          <CustomText style={[GLOBALSTYLES.headerText, GLOBALSTYLES.ml16]}>Messages</CustomText>
        </Left>
        <Right>
          <View style={styles.bellContainer}>
            <Image source={BellImage} style={styles.bellImage} />
            <View style={styles.dot} />
          </View>
        </Right>
      </Header>
      <Item style={[GLOBALSTYLES.noBorder, styles.header]}>
        <CustomSearchInput style={styles.customSearchInput} placeholder='Search Messages' />
      </Item>
      <Content>
        <List>
          {list.map(e => (
            <ChatContainer key={e} navigation={navigation} />
          ))}
        </List>
      </Content>
    </Container>
  )
}

// define your styles
const styles = StyleSheet.create({
  header: {
    paddingBottom: 10
  },
  bellImage: {
    height: 19.5,
    width: 16
  },
  bellContainer: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: 6,
    backgroundColor: 'rgba(87,141,222,0.1)'
  },
  dot: {
    position: 'absolute',
    top: 5,
    right: 5,
    borderRadius: 5,
    width: 10,
    height: 10,
    backgroundColor: 'rgb(235, 87, 87)'
  },
  customSearchInput: { height: 48, marginHorizontal: 16 }
})

Messages.propTypes = {
  navigation: PropTypes.object
}

// make this component available to the app
export default Messages

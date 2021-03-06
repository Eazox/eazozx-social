// import liraries
import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import CommentSection from '../../subComponents/commentSection'
import DeliveryReturns from './deliveryReturns'
import { GLOBALSTYLES } from '../../../Constants'
import Card from '../../subComponents/cardComponent'
import InputOptions from './inputOption'
import KeyboardComp from '../MessagePage/KeyboardComponent'
import { Container, Content, Body, Header, Left, Button, Icon, Title } from 'native-base'

const options = [{ value: '32' }, { value: '34' }, { value: '36' }, { value: '48' }]
const colors = [{ value: 'red' }, { value: 'blue' }, { value: 'black' }, { value: 'yellow' }]
// create a component
const Thread = ({ navigation }) => {
  return (
    <Container>
      <Header style={GLOBALSTYLES.header}>
        <Left style={GLOBALSTYLES.headerLeft}>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name='arrow-back' style={[{ marginLeft: 8, color: 'black' }]} />
          </Button>
        </Left>
        <Body style={GLOBALSTYLES.alignCenter}>
          <Title style={[GLOBALSTYLES.headerText, { fontFamily: 'Gilroy_medium' }]}>Thread</Title>
        </Body>
      </Header>
      <Content>
        <Card />
        <View style={{ paddingHorizontal: 16, width: '100%' }}>
          <InputOptions style={{ marginTop: 8 }} text='Sizes' options={options} />
          <InputOptions text='Colors' colors options={colors} />
          <DeliveryReturns />
          <CommentSection />
        </View>
      </Content>
      <KeyboardComp />
    </Container>
  )
}
Thread.propTypes = {
  navigation: PropTypes.any
}

// make this component available to the app
export default Thread

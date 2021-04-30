import React from 'react'
import PropTypes from 'prop-types'
import { VirtualizedList } from 'react-native'
import CardComponent from '../../subComponents/cardComponent'
import { cardsArray } from './constants'

const getItem = (data, index) => {
  return cardsArray[index]
}

const getItemCount = _ => {
  return cardsArray.length
}

export default function CardList({ nav }) {
  const goToThread = () => {
    nav.navigate('Thread')
  }

  return (
    <VirtualizedList
      data={cardsArray}
      initialNumToRender={4}
      renderItem={({ item }) => (
        <CardComponent
          username={item.username}
          email={item.email}
          caption={item.caption}
          time={item.time}
          image={item.image}
          price={item.price}
          comments={item.comments}
          drips={item.drips}
          profilePic={item.profilePic}
          navigate={goToThread}
        />
      )}
      keyExtractor={item => item.key}
      getItemCount={getItemCount}
      getItem={getItem}
    />
  )
}
CardList.propTypes = {
  nav: PropTypes.any
}

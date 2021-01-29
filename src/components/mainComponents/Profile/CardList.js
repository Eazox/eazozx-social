import React from 'react'
import { VirtualizedList } from 'react-native'
import CardComponent from '../homePage/CardComponent'
import { cardsArray } from './constants'
import PropTypes from 'prop-types'

const getItem = (data, index) => {
  return cardsArray[index]
}

const getItemCount = _ => {
  return cardsArray.length
}

export default function CardList({ viewImage }) {
  return (
    <VirtualizedList
      data={cardsArray}
      initialNumToRender={2}
      renderItem={({ item }) => (
        <CardComponent
          username={item.username}
          email={item.email}
          caption={item.caption}
          time={item.time}
          viewImage={viewImage}
          image={item.image}
          price={item.price}
          comments={item.comments}
          drips={item.drips}
          profilePic={item.profilePic}
        />
      )}
      keyExtractor={item => item.key}
      getItemCount={getItemCount}
      getItem={getItem}
    />
  )
}

CardList.propTypes = {
  viewImage: PropTypes.bool
}

import React from 'react'
import { VirtualizedList } from 'react-native'
import CardComponent from './CardComponent'
import { cardsArray } from './constants'

const getItem = (data, index) => {
  return cardsArray[index]
}

const getItemCount = data => {
  return cardsArray.length
}

export default function CardList() {
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
        />
      )}
      keyExtractor={item => item.key}
      getItemCount={getItemCount}
      getItem={getItem}
    />
  )
}

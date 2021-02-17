// import liraries
import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, View } from 'react-native'
import { catalogueArray } from './constants'
import CatalogueItem from './CatalogueItem'

export default function CardList({ grid }) {
  return (
    <View
      style={[
        grid ? { flexWrap: 'wrap' } : { flexWrap: 'nowrap' },
        { flexDirection: 'row', width: '100%' }
      ]}
    >
      {grid ? (
        <FlatList
          key='#'
          data={catalogueArray}
          renderItem={({ item }) => <CatalogueItem grid={grid} />}
          numColumns={2}
          initialNumToRender={4}
          keyExtractor={item => `${item.key}_#`}
        />
      ) : (
        <FlatList
          key='*'
          data={catalogueArray}
          renderItem={({ item }) => <CatalogueItem grid={grid} />}
          numColumns={1}
          initialNumToRender={4}
          keyExtractor={item => `${item.key}_*`}
        />
      )}
    </View>
  )
}

CardList.propTypes = {
  grid: PropTypes.bool
}

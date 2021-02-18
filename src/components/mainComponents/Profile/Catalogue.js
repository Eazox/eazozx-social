// import liraries
import React, { useState } from 'react'
import { View } from 'react-native'
import { Icon } from 'native-base'
import CatalogueList from './CatalogueList'
// create a component
const Catalogue = () => {
  const [grid, setGrid] = useState(true)

  return (
    <View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginLeft: -8
        }}
      >
        <Icon
          onPress={() => setGrid(true)}
          type='Feather'
          style={[
            grid ? { color: 'white', backgroundColor: '#576dde' } : { color: 'black' },
            { fontSize: 18, padding: 5, borderRadius: 5, marginRight: 16 }
          ]}
          name='grid'
        />

        <Icon
          onPress={() => setGrid(false)}
          type='Feather'
          style={[
            !grid ? { color: 'white', backgroundColor: '#576dde' } : { color: 'black' },
            { fontSize: 18, padding: 5, borderRadius: 5 }
          ]}
          name='list'
        />
      </View>
      <CatalogueList grid={grid} />
    </View>
  )
}

// make this component available to the app
export default Catalogue

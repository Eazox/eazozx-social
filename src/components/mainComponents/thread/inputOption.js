// import liraries
import React from 'react'
import PropTypes from 'prop-types'
import { CustomText } from '../../subComponents/CustomFontComponents'
import { TouchableOpacity, View, FlatList } from 'react-native'

const InputOptions = ({ text, options, colors, style }) => {
  return (
    <View
      style={{
        width: '100%',
        paddingLeft: 8,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        flexDirection: 'row',
        marginTop: 16,
        ...style
      }}
    >
      <View style={{ marginHorizontal: 6 }}>
        <CustomText style={{ marginVertical: 12 }}>{`Available ${text}:`}</CustomText>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <FlatList
          horizontal
          data={options}
          keyExtractor={item => item.value}
          renderItem={({ item }) => (
            <TouchableOpacity key={item.value} style={{ marginHorizontal: 6 }}>
              <View
                style={[
                  { padding: 4, backgroundColor: 'white' },
                  colors && {
                    borderRadius: 12,
                    width: 24,
                    height: 24,
                    backgroundColor: item.value
                  }
                ]}
              >
                {!colors && <CustomText>{item.value}</CustomText>}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}
InputOptions.propTypes = {
  text: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  colors: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

// make this component available to the app
export default InputOptions

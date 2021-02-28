import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Image } from 'react-native'
import { CustomText } from '../../subComponents/CustomFontComponents'
// create a component
const DrawerItemComponent = ({ label, image, style }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: 20 }}>
        <Image
          source={image}
          resizeMode='contain'
          style={[{ width: 16, height: 16 }, { ...style }]}
        />
      </View>
      <CustomText style={{ marginLeft: 20 }}>{label}</CustomText>
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 0,
    alignItems: 'center'
  }
})

DrawerItemComponent.propTypes = {
  image: PropTypes.any,
  style: PropTypes.any,
  label: PropTypes.string
}

export default DrawerItemComponent

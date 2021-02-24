import React from 'react'
import { Icon } from 'native-base'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { CustomText } from '../../subComponents/CustomFontComponents'
// create a component
const DrawerItemComponent = ({ label, type, name }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: 20 }}>
        <Icon name={name} iconType={type} style={{ fontSize: 20, color: 'rgb(189, 189, 189)' }} />
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
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string
}

export default DrawerItemComponent

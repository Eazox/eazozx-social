// import liraries
import React from 'react'
import { View, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { authError } from '../../store/actions'
import { CustomText } from './CustomFontComponents'

// create a component
const MyComponent = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.authReducer.error)

  const closeModal = () => {
    dispatch(authError(null))
  }

  return (
    <Modal visible={!!show} animationType='fade' transparent>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 8,
            width: '80%',
            maxWidth: 360,
            marginBottom: 8
          }}
        >
          <CustomText style={{ textAlign: 'center', marginTop: 8 }}>{show}</CustomText>
          <TouchableOpacity
            onPress={closeModal}
            style={{
              paddingVertical: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              borderRadius: 26,
              width: '100%',
              marginTop: 16,
              backgroundColor: '#bababa'
            }}
          >
            <CustomText style={{ color: '#eb5757', fontFamily: 'Gilroy_medium' }}>Ok</CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#rgba(0, 0, 0, 0.7)'
  }
})

// make this component available to the app
export default MyComponent

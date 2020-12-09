import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import ArrowLeft from '../../images/keyboard.png'

const Header = () => {
  return (
    <View style={styles.setupContainer}>
      <View style={styles.SetupContent}>
        <View style={styles.ArrowIcon}>
          <TouchableOpacity>
            <Image source={ArrowLeft} />
          </TouchableOpacity>
        </View>

        <View style={styles.ProfileSetupText}>
          <Text
            style={{
              color: '#578DDE',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 24,
              lineHeight: 29
            }}
          >
            Profile Setup
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  setupContainer: {
    flex: 1,
    marginTop: 60
  },
  SetupContent: {
    flexDirection: 'row'
  },

  ProfileSetupText: {
    marginLeft: 80
  },

  ArrowIcon: {
    marginLeft: 30,
    backgroundColor: '#578DDE'
  }
})

export default Header

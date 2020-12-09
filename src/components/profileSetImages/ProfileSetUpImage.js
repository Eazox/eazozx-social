import React, { Component } from 'react'
import profileImage from '../../images/photo.png'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'

class ProfileSetUpImage extends Component {
  render() {
    return (
      <View style={styles.profileImageContainer}>
        <View style={styles.profileImageContent}>
          <TouchableOpacity style={{ backgroundColor: '#FAFAFA' }}>
            <Image source={profileImage} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={{ marginTop: 30 }}>Add Image</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  profileImageContainer: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center'
  },
  profileImageContent: {
    borderRadius: 50,
    backgroundColor: '#FAFAFA'
  }
})

export default ProfileSetUpImage

import React from 'react'
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { Footer, FooterTab, Button, Icon } from 'native-base'
import storyImage from '../../src/images/background-img.jpeg'
import proImg from '../images/pro-img.jpeg'
import StoryArrowImage from '../images/Vector.png'
import eyesImg from '../images/eyes.png'

const StoryScreen = () => {
  return (
    <View style={styles.storyContainer}>
      <ImageBackground source={storyImage} style={styles.storyBackground}>
        <View style={styles.storyHeader}>
          <TouchableOpacity>
            <View style={styles.StoryArrow}>
              <Image source={StoryArrowImage} />
            </View>
          </TouchableOpacity>

          <View style={styles.storyProfile}>
            <Image
              source={proImg}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                borderColor: 'white',
                borderWidth: 1
              }}
            />
          </View>

          <View style={styles.storyText}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                fontStyle: 'normal',
                lineHeight: 16.98,
                color: '#FFFFFF'
              }}
            >
              Aishatu Rahemaat
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                fontStyle: 'normal',
                lineHeight: 16.98,
                color: '#FFFFFF'
              }}
            >
              Today, 9:30am
            </Text>
          </View>

          <View style={styles.ViewContainer}>
            <Image source={eyesImg} style={{ left: 20 }} />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                fontStyle: 'normal',
                lineHeight: 16.98,
                color: '#FFFFFF',
                marginTop: 2
              }}
            >
              320 Views
            </Text>
          </View>
        </View>

        <View style={styles.storyProgContainer}>
          <View style={styles.storyProgContent}>
            <View style={styles.storyProgressOne} />
            <View style={styles.storyProgressTwo} />
            <View style={styles.storyProgressThree} />
            <View style={styles.storyProgressFour} />
          </View>
        </View>
      </ImageBackground>

      <View style={styles.storyFooter}>
        <Footer>
          <FooterTab style={{ backgroundColor: '#FFFFFF' }}>
            <Button vertical>
              <Icon name='home' style={{ color: '#578DDE' }} />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name='search' style={{ color: '#BDBDBD' }} />
              <Text>Search</Text>
            </Button>
            <Button vertical>
              <Icon name='add-circle' style={{ color: '#BDBDBD' }} />
              <Text>New Post</Text>
            </Button>
            <Button vertical>
              <Icon active name='mail' style={{ color: '#BDBDBD' }} />
              <Text>massege</Text>
            </Button>
            <Button vertical>
              <Icon name='person' style={{ color: '#BDBDBD' }} />
              <Text>profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  storyContainer: {
    flex: 1,
    marginTop: 30
  },
  storyBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 670,
    marginTop: 10
  },
  storyHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20
  },
  StoryArrow: {
    marginTop: 10
  },
  ViewContainer: {
    right: 0
  },
  storyProgContainer: {
    flex: 2,
    justifyContent: 'center',
    top: 635
  },
  storyProgContent: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  storyProgressOne: {
    borderColor: '#578DDE',
    borderWidth: 1,
    width: 64,
    height: 8,
    left: 15,
    backgroundColor: '#578DDE',
    borderRadius: 2
  },
  storyProgressTwo: {
    borderColor: '#578DDE',
    borderWidth: 1,
    width: 64,
    height: 8,
    backgroundColor: '#578DDE',
    borderRadius: 2
  },
  storyProgressThree: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    width: 64,
    height: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 2
  },
  storyProgressFour: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    width: 64,
    right: 15,
    height: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 2
  },
  storyFooter: {
    flex: 1,
    marginTop: 670
  },
  storyText: {
    right: 30
  },
  storyProfile: {
    right: 5
  }
})

export default StoryScreen

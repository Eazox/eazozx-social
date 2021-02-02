import React from 'react'
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions
} from 'react-native'
import storyImage from '../../../images/background-img.jpeg'
import storyImageTwo from '../../../images/back-img.jpg'
import storyImageThree from '../../../images/back-img-2.jpg'
import proImg from '../../../images/pro-img.jpeg'
import StoryArrowImage from '../../../images/Vector.png'
import eyesImg from '../../../images/eyes.png'

const StoryScreen = () => {
  return (
    <ScrollView horizontal pagingEnabled style={styles.storyContainer}>
      <ImageBackground source={storyImageThree} style={styles.storyBackground}>
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
            <TouchableOpacity>
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
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      <ImageBackground source={storyImageTwo} style={styles.storyBackground}>
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
            <TouchableOpacity>
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
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
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
            <TouchableOpacity>
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
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  storyContainer: {
    marginTop: 24
  },
  storyBackground: {
    resizeMode: 'cover',
    justifyContent: 'center',
    marginTop: 8,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
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

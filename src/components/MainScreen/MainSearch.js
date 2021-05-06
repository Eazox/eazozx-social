import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Icons from 'react-native-vector-icons/Feather'
import UserPhone from '../../images/userfour.jpeg'
import belt from '../../images/belt.jpeg'
class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reward: 'Most Rewards'
    }
  }

  render() {
    return (
      <ScrollView style={styles.MainScreen}>
        <View style={styles.MainHeader}>
          <Image
            source={UserPhone}
            style={{
              width: 40,
              height: 40,
              borderRadius: 100,
              left: 15
            }}
          />

          <View style={styles.MainSearch}>
            <TouchableOpacity>
              <Icons
                name='search'
                size={19}
                style={{
                  position: 'absolute',
                  top: 10,
                  left: 40,
                  color: '#BDBDBD'
                }}
              />
            </TouchableOpacity>

            <TextInput
              placeholder='Search EAZOX'
              style={{
                width: 287,
                borderWidth: 1.5,
                borderColor: '#FAFAFA',
                height: 40,
                paddingLeft: 50,
                marginLeft: 25,
                borderRadius: 40
              }}
            />
          </View>
        </View>

        <View style={styles.MainTrend}>
          <Text
            style={{
              fontWeight: '500',
              top: 8,
              right: 12,
              fontSize: 18,
              fontStyle: 'normal',
              lineHeight: 21.83,
              color: '#15243C'
            }}
          >
            Trends in Nigeria.
          </Text>
          <Picker
            selectedValue={this.state.reward}
            style={{
              height: 32,
              width: 135,
              borderWidth: 1,
              left: 7,
              borderColor: '#FAFAFA'
            }}
            onValueChange={(itemValue, itemIndex) => this.setState({ reward: itemValue })}
          >
            <Picker.Item label='Most Reward' value='Most Rewards' />
            <Picker.Item label='weekly Trend' value='weekly Trend' />
          </Picker>
        </View>

        <View style={{ width: '100%', borderColor: '#BDBDBD', borderWidth: 1, marginTop: 20 }} />

        <View style={styles.ShowMore}>
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 18,
                lineHeight: 21.6,
                fontStyle: 'normal',
                color: '#578DDE'
              }}
            >
              Show more
            </Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 50, fontWeight: '500', fontSize: 18, color: '#15243C' }}>
            Did you miss these?
          </Text>

          <View
            style={{ borderWidth: 1, borderColor: '#BDBDBD', alignItems: 'center', marginTop: 10 }}
          />
        </View>

        <View style={styles.FirstUserContainer}>
          <View
            style={{
              borderWidth: 1,
              flexDirection: 'row',
              padding: 20,
              borderColor: '#FAFAFA',
              justifyContent: 'space-between'
            }}
          >
            <Image
              source={UserPhone}
              style={{
                width: 40,
                height: 40,
                borderRadius: 100
              }}
            />
            <View style={{ right: 50 }}>
              <Text style={{ color: '#15243C' }}>Mary Nathan</Text>
              <Text style={{ marginTop: 2, color: 'rgba(10, 26, 50, 0.6)' }}>@marathan</Text>
            </View>
            <Text style={{ marginTop: 10, color: 'rgba(10, 26, 50, 0.6)' }}>2 hours ago</Text>
          </View>

          <View style={{ padding: 20, borderColor: '#FAFAFA', borderWidth: 1 }}>
            <Text
              style={{
                color: 'rgba(10, 26, 50, 0.8)',
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 19.2
              }}
            >
              The new{' '}
              <Text
                style={{
                  color: '#578DDE',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 19.2
                }}
              >
                #BelganBelt
              </Text>
              looks so good on me. Y’all should try it out.{' '}
            </Text>
            <View style={styles.UserList}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={UserPhone} style={{ width: 24, height: 24, borderRadius: 100 }} />
                <Image
                  source={UserPhone}
                  style={{ width: 24, height: 24, borderRadius: 100, right: 16 }}
                />
                <Image
                  source={UserPhone}
                  style={{ width: 24, height: 24, borderRadius: 100, right: 30 }}
                />
              </View>
              <Text
                style={{
                  right: 35,
                  color: '#5B6576',
                  fontWeight: '400',
                  fontStyle: 'normal',
                  fontSize: 12,
                  lineHeight: 16
                }}
              >
                13k Drips
              </Text>

              <View style={{ flexDirection: 'row', right: 20 }}>
                <Icons name='gift' size={20} color='#578DDE' style={{ right: 10 }} />
                <Text
                  style={{
                    color: '#5B6576',
                    fontWeight: '400',
                    fontStyle: 'normal',
                    fontSize: 12,
                    lineHeight: 16
                  }}
                >
                  $9900
                </Text>
              </View>

              <Text
                style={{
                  color: '#5B6576',
                  fontWeight: '400',
                  fontStyle: 'normal',
                  fontSize: 12,
                  lineHeight: 16
                }}
              >
                72 Comments
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
              borderWidth: 1,
              borderColor: '#FAFAFA'
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Icons name='heart' size={18} color='#BDBDBD' />
              </TouchableOpacity>
              <Text
                style={{
                  left: 10,
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18.8,
                  color: '#445063'
                }}
              >
                Drip
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Icons name='message-circle' size={18} color='#BDBDBD' />
              </TouchableOpacity>
              <Text
                style={{
                  left: 10,
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18.8,
                  color: '#445063'
                }}
              >
                Comment
              </Text>
            </View>
            <View style={{ flexDirection: 'row', right: 25 }}>
              <TouchableOpacity>
                <Icons name='share-2' size={18} color='#BDBDBD' />
              </TouchableOpacity>
              <Text
                style={{
                  left: 10,
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18.8,
                  color: '#445063'
                }}
              >
                Share
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.secondUserContainer}>
          <View
            style={{
              borderWidth: 1,
              flexDirection: 'row',
              padding: 20,
              borderColor: '#FAFAFA',
              justifyContent: 'space-between'
            }}
          >
            <Image
              source={UserPhone}
              style={{
                width: 40,
                height: 40,
                borderRadius: 100
              }}
            />
            <View style={{ right: 50 }}>
              <Text style={{ color: '#15243C' }}>Mary Nathan</Text>
              <Text style={{ marginTop: 2, color: 'rgba(10, 26, 50, 0.6)' }}>@marathan</Text>
            </View>
            <Text style={{ marginTop: 10, color: 'rgba(10, 26, 50, 0.6)' }}>2 hours ago</Text>
          </View>

          <View style={{ padding: 20, borderColor: '#FAFAFA', borderWidth: 1 }}>
            <Text
              style={{
                color: 'rgba(10, 26, 50, 0.8)',
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: '400'
              }}
            >
              The new{' '}
              <Text
                style={{
                  color: '#578DDE',
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: '400'
                }}
              >
                #BelganBelt
              </Text>
              looks so good on me. Y’all should try it out.{' '}
            </Text>
            <View style={styles.UserList}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={UserPhone} style={{ width: 24, height: 24, borderRadius: 100 }} />
                <Image
                  source={UserPhone}
                  style={{ width: 24, height: 24, borderRadius: 100, right: 16 }}
                />
                <Image
                  source={UserPhone}
                  style={{ width: 24, height: 24, borderRadius: 100, right: 30 }}
                />
              </View>
              <Text
                style={{
                  right: 35,
                  color: '#5B6576',
                  fontWeight: '400',
                  fontStyle: 'normal',
                  fontSize: 12,
                  lineHeight: 16
                }}
              >
                13k Drips
              </Text>

              <View style={{ flexDirection: 'row', right: 20 }}>
                <Icons name='gift' size={20} color='#578DDE' style={{ right: 10 }} />
                <Text
                  style={{
                    color: '#5B6576',
                    fontWeight: '400',
                    fontStyle: 'normal',
                    fontSize: 12,
                    lineHeight: 16
                  }}
                >
                  $9900
                </Text>
              </View>

              <Text
                style={{
                  color: '#5B6576',
                  fontWeight: '400',
                  fontStyle: 'normal',
                  fontSize: 12,
                  lineHeight: 16
                }}
              >
                72 Comments
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
              borderWidth: 1,
              borderColor: '#FAFAFA'
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Icons name='heart' size={18} color='#BDBDBD' />
              </TouchableOpacity>
              <Text
                style={{
                  left: 10,
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18.8,
                  color: '#445063'
                }}
              >
                Drip
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Icons name='message-circle' size={18} color='#BDBDBD' />
              </TouchableOpacity>
              <Text
                style={{
                  left: 10,
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18.8,
                  color: '#445063'
                }}
              >
                Comment
              </Text>
            </View>
            <View style={{ flexDirection: 'row', right: 25 }}>
              <TouchableOpacity>
                <Icons name='share-2' size={18} color='#BDBDBD' />
              </TouchableOpacity>
              <Text
                style={{
                  left: 10,
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18.8,
                  color: '#445063'
                }}
              >
                Share
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.thrirdUserContainer}>
          <View
            style={{
              borderWidth: 1,
              flexDirection: 'row',
              padding: 20,
              borderColor: '#FAFAFA',
              justifyContent: 'space-between'
            }}
          >
            <Image
              source={UserPhone}
              style={{
                width: 40,
                height: 40,
                borderRadius: 100
              }}
            />
            <View style={{ right: 50 }}>
              <Text style={{ color: '#15243C' }}>Mary Nathan</Text>
              <Text style={{ marginTop: 2, color: 'rgba(10, 26, 50, 0.6)' }}>@marathan</Text>
            </View>
            <Text style={{ marginTop: 10, color: 'rgba(10, 26, 50, 0.6)' }}>2 hours ago</Text>
          </View>

          <View style={{ padding: 20, borderColor: '#FAFAFA', borderWidth: 1 }}>
            <Text style={{ color: 'rgba(10, 26, 50, 0.8)' }}>
              The new <Text style={{ color: '#578DDE' }}>#BelganBelt</Text> looks so good on me.
              Y’all should try it out.{' '}
            </Text>
            <View style={styles.UserList}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={UserPhone} style={{ width: 24, height: 24, borderRadius: 100 }} />
                <Image
                  source={UserPhone}
                  style={{ width: 24, height: 24, borderRadius: 100, right: 16 }}
                />
                <Image
                  source={UserPhone}
                  style={{ width: 24, height: 24, borderRadius: 100, right: 30 }}
                />
              </View>
              <Text
                style={{
                  right: 35,
                  color: '#5B6576',
                  fontWeight: '400',
                  fontStyle: 'normal',
                  fontSize: 12,
                  lineHeight: 16
                }}
              >
                13k Drips
              </Text>

              <View style={{ flexDirection: 'row', right: 20 }}>
                <Icons name='gift' size={20} color='#578DDE' style={{ right: 10 }} />
                <Text
                  style={{
                    color: '#5B6576',
                    fontWeight: '400',
                    fontStyle: 'normal',
                    fontSize: 12,
                    lineHeight: 16
                  }}
                >
                  $9900
                </Text>
              </View>

              <Text
                style={{
                  color: '#5B6576',
                  fontWeight: '400',
                  fontStyle: 'normal',
                  fontSize: 12,
                  lineHeight: 16
                }}
              >
                72 Comments
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
              borderWidth: 1,
              borderColor: '#FAFAFA'
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Icons name='heart' size={18} color='#BDBDBD' />
              </TouchableOpacity>
              <Text
                style={{
                  left: 10,
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18.8,
                  color: '#445063'
                }}
              >
                Drip
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Icons name='message-circle' size={18} color='#BDBDBD' />
              </TouchableOpacity>
              <Text
                style={{
                  left: 10,
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18.8,
                  color: '#445063'
                }}
              >
                Comment
              </Text>
            </View>
            <View style={{ flexDirection: 'row', right: 25 }}>
              <TouchableOpacity>
                <Icons name='share-2' size={18} color='#BDBDBD' />
              </TouchableOpacity>
              <Text
                style={{
                  left: 10,
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18.8,
                  color: '#445063'
                }}
              >
                Share
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.FouthUserContainer}>
          <View
            style={{
              borderWidth: 1,
              flexDirection: 'row',
              padding: 20,
              borderColor: '#FAFAFA',
              justifyContent: 'space-between'
            }}
          >
            <Image
              source={UserPhone}
              style={{
                width: 40,
                height: 40,
                borderRadius: 100
              }}
            />
            <View style={{ right: 50 }}>
              <Text style={{ color: '#15243C' }}>Mary Nathan</Text>
              <Text style={{ marginTop: 2, color: 'rgba(10, 26, 50, 0.6)' }}>@marathan</Text>
            </View>
            <Text style={{ marginTop: 10, color: 'rgba(10, 26, 50, 0.6)' }}>2 hours ago</Text>
          </View>

          <View style={{ padding: 20, borderColor: '#FAFAFA', borderWidth: 1 }}>
            <Text style={{ color: 'rgba(10, 26, 50, 0.8)' }}>
              The new <Text style={{ color: '#578DDE' }}>#BelganBelt</Text>
              looks so good on me. Y’all should try it out.{' '}
            </Text>

            <View style={{ borderColor: '#EAEAEA', borderWidth: 0.5, marginTop: 24 }}>
              <Image source={belt} style={{ width: 310, height: 144 }} />
            </View>
            <View style={styles.UserList}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={UserPhone} style={{ width: 24, height: 24, borderRadius: 100 }} />
                <Image
                  source={UserPhone}
                  style={{ width: 24, height: 24, borderRadius: 100, right: 16 }}
                />
                <Image
                  source={UserPhone}
                  style={{ width: 24, height: 24, borderRadius: 100, right: 30 }}
                />
              </View>
              <Text
                style={{
                  right: 35,
                  color: '#5B6576',
                  fontWeight: '400',
                  fontStyle: 'normal',
                  fontSize: 12,
                  lineHeight: 16
                }}
              >
                13k Drips
              </Text>

              <View style={{ flexDirection: 'row', right: 20 }}>
                <Icons name='gift' size={20} color='#578DDE' style={{ right: 10 }} />
                <Text
                  style={{
                    color: '#5B6576',
                    fontWeight: '400',
                    fontStyle: 'normal',
                    fontSize: 12,
                    lineHeight: 16
                  }}
                >
                  $9900
                </Text>
              </View>

              <Text
                style={{
                  color: '#5B6576',
                  fontWeight: '400',
                  fontStyle: 'normal',
                  fontSize: 12,
                  lineHeight: 16
                }}
              >
                72 Comments
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
              borderWidth: 1,
              borderColor: '#FAFAFA'
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Icons name='heart' size={18} color='#BDBDBD' />
              </TouchableOpacity>
              <Text
                style={{
                  left: 10,
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18.8,
                  color: '#445063'
                }}
              >
                Drip
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Icons name='message-circle' size={18} color='#BDBDBD' />
              </TouchableOpacity>
              <Text
                style={{
                  left: 10,
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18.8,
                  color: '#445063'
                }}
              >
                Comment
              </Text>
            </View>
            <View style={{ flexDirection: 'row', right: 25 }}>
              <TouchableOpacity>
                <Icons name='share-2' size={18} color='#BDBDBD' />
              </TouchableOpacity>
              <Text
                style={{
                  left: 10,
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18.8,
                  color: '#445063'
                }}
              >
                Share
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  MainScreen: {
    marginTop: 50
  },
  MainHeader: {
    flexDirection: 'row'
  },
  MainSearch: {
    position: 'relative'
  },
  MainTrend: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  ShowMore: {
    flex: 1,
    marginTop: 500,
    marginLeft: 20,
    marginRight: 20
  },
  FirstUserContainer: {
    marginTop: 30,
    padding: 10
  },
  secondUserContainer: {
    marginTop: 3,
    padding: 10
  },

  thrirdUserContainer: {
    marginTop: 3,
    padding: 10
  },
  FouthUserContainer: {
    marginTop: 3,
    padding: 10
  },
  UserList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30
  }
})

export default MainScreen

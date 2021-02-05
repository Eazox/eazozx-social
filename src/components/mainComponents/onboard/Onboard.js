import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import firstScreen from '../../../images/screen1.png'
import secondScreen from '../../../images/screen2.png'
import thirdScreen from '../../../images/screen3.png'
import onboard from '../../../images/onboard1.jpeg'

export default class Onboard extends Component {
    render() {
        return (

            <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
                <StatusBar />
                <TouchableOpacity>
                    <View style={{ marginTop: 10, left: 330, flex: 1, fontWeight: 500, fontsize: 18, lineHeight: 21.83 }}>
                        <Text>Skip</Text>
                    </View>
                </TouchableOpacity>

                <View>
                    <View style={styles.ContainerOne}>
                        <View style={styles.ContentOne}>
                            <Image source={firstScreen} />
                            <Text style={{
                                fontWeight: "600",
                                fontStyle: 'normal',
                                fontSize: 24,
                                lineHeight: 29.4,
                                top: 29.14,
                                bottom: 16,
                                color: '#D74631'
                            }}>Stay Trendy</Text>
                            <Text style={{
                                color: '#D74631', top: 40,
                                fontSize: 16,
                                fontWeight: '400',
                                fontStyle: 'normal',
                                lineHeight: 22.4
                            }}>Stay updated with the latest fashion </Text>
                            <Text style={{ color: '#D74631', top: 40 }} >wears on the street.</Text>
                        </View>

                        <View style={styles.containeOneDot}>
                            <View style={{ backgroundColor: "#D74631", height: 16, width: 16, borderWidth: 1, borderColor: '#D74631', right: 30, borderRadius: 50 }}></View>
                            <View style={{ color: "white", height: 16, width: 16, borderWidth: 1, borderColor: 'white', backgroundColor: 'white', borderRadius: 50 }}></View>
                            <View style={{ color: "white", height: 16, width: 16, borderWidth: 1, borderColor: 'white', backgroundColor: 'white', left: 30, borderRadius: 50 }} ></View>
                        </View>


                    </View>

                    <TouchableOpacity
                        style={styles.button}

                    >
                        <Text style={{
                            fontWeight: '500',
                            fontSize: 18,
                            fontStyle: "normal",
                            lineHeight: 21.83,
                            color: "#FFFFFF"
                        }}>Next</Text>
                    </TouchableOpacity>
                </View>



                <View>
                    <TouchableOpacity
                        style={{ left: 345, fontWeight: 500, fontsize: 18, lineHeight: 21.83, marginTop: 10 }}
                    >
                        <Text>Skip</Text>
                    </TouchableOpacity>
                    <View style={styles.ContainerTwo}>
                        <View style={styles.ContentOne}>
                            <Image source={secondScreen} />
                            <Text style={{
                                fontWeight: "600",
                                fontStyle: 'normal',
                                fontSize: 24,
                                lineHeight: 29.4,
                                top: 29.14,
                                bottom: 16,
                                color: '#1B61CA'
                            }}>Sell Your Product</Text>
                            <Text style={{
                                color: '#1B61CA', top: 40,
                                fontSize: 16,
                                fontWeight: '400',
                                fontStyle: 'normal',
                                lineHeight: 22.4
                            }}>Create your own mini store and take your </Text>
                            <Text style={{ color: '#1B61CA', top: 40 }} > business to the next level.</Text>
                        </View>

                        <View style={styles.containeOneDot}>
                            <View style={{ backgroundColor: "white", height: 16, width: 16, borderWidth: 1, borderColor: 'white', right: 30, borderRadius: 50 }}></View>
                            <View style={{ height: 16, width: 16, borderWidth: 1, borderColor: '#1B61CA', backgroundColor: '#1B61CA', borderRadius: 50 }}></View>
                            <View style={{ color: "white", height: 16, width: 16, borderWidth: 1, borderColor: 'white', backgroundColor: 'white', left: 30, borderRadius: 50 }} ></View>
                        </View>
                    </View>


                    <View style={styles.nextOne}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "rgba(87, 141, 222, 0.2)",
                                marginTop: 20,
                                padding: 10,
                                borderRadius: 40,
                                width: 117,
                                alignItems: 'center',
                                right: 10


                            }}
                        >
                            <Text style={{ color: "#2C68C0", fontSize: 18 }}>Previous</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                marginTop: 20,
                                padding: 10,
                                borderRadius: 40,
                                width: 117,
                                alignItems: 'center',
                                backgroundColor: "#578DDE",
                                left: 25
                            }}
                        >
                            <Text style={{ color: "white", fontWeight: '500', fontSize: 18 }}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>




                <View>
                    <View style={styles.ContainerThree}>
                        <View style={styles.ContentOne}>
                            <Image source={thirdScreen} />
                            <Text style={{
                                fontWeight: "600",
                                fontStyle: 'normal',
                                fontSize: 24,
                                lineHeight: 29.4,
                                top: 29.14,
                                bottom: 16,
                                color: '#19AC42'
                            }}>Get Rewards On Posts</Text>
                            <Text style={{
                                color: '#19AC42',
                                top: 40,
                                fontSize: 16,
                                fontWeight: '600',
                                fontStyle: 'normal',
                                lineHeight: 22.4
                            }}>Get real cash rewards on posts by the  </Text>
                            <Text style={{ color: '#19AC42', top: 40 }} >community. Post and Earn!</Text>
                        </View>

                        <View style={styles.containeOnethree}>
                            <View style={{ backgroundColor: "white", height: 16, width: 16, borderWidth: 1, borderColor: 'white', right: 30, borderRadius: 50 }}></View>
                            <View style={{ height: 16, width: 16, borderWidth: 1, borderColor: 'white', backgroundColor: 'white', borderRadius: 50 }}></View>
                            <View style={{ height: 16, width: 16, borderWidth: 1, borderColor: '#19AC42', backgroundColor: '#19AC42', left: 30, borderRadius: 50 }} ></View>
                        </View>
                    </View>

                    <View style={styles.nextOne}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "rgba(87, 141, 222, 0.2)",
                                marginTop: 20,
                                padding: 10,
                                borderRadius: 40,
                                width: 117,
                                alignItems: 'center',
                                right: 10


                            }}
                        >
                            <Text style={{ color: "#2C68C0", fontSize: 18 }}>Previous</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                marginTop: 20,
                                padding: 10,
                                borderRadius: 40,
                                width: 117,
                                alignItems: 'center',
                                backgroundColor: "#578DDE",
                                left: 25
                            }}
                        >
                            <Text style={{ color: "white", fontWeight: '500', fontSize: 18 }}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>




                <View style={styles.onboardContainer}>
                    <Image source={onboard}
                        style={styles.onboardScreen}
                    />

                    <View style={{
                        marginTop: 10,
                        alignItems: "center",
                        borderRadius: 20
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontStyle: "normal",
                            lineHeight: 21.82,
                            color: "#578DDE"
                        }}>A wonderful experience awaits you!!</Text>
                        
                        <Text
                            style={{
                                fontSize: 18,
                                fontStyle: "normal",
                                lineHeight: 21.82,
                                color: "#578DDE"
                            }}
                        >Launch</Text>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        marginTop: 20,
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity 
                          style={{width: 343,
                           backgroundColor: '#578DDE',
                           height: 48,
                           borderRadius: 48,
                           alignItems: 'center',
                        }}
                        >
                            <Text
                              style={{              
                               justifyContent: 'center', 
                               padding: 13,
                               fontSize: 18,
                               color: '#FFFFFF'
                            }}
                            >Log In</Text>
                        </TouchableOpacity>
                    </View>



                    <View style={{
                        justifyContent: 'center',
                        marginTop: 20,
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity 
                          style={{width: 343,
                           backgroundColor: '#15243C',
                           height: 48,
                           borderRadius: 48,
                           alignItems: 'center',
                        }}
                        >
                            <Text
                              style={{              
                               justifyContent: 'center', 
                               padding: 13,
                               fontSize: 18,
                               color: '#FFFFFF'
                            }}
                            >Create Account</Text>
                        </TouchableOpacity>
                    </View>



                </View>

            </ScrollView>



        );
    }
}

const styles = StyleSheet.create({
  container: {},
  ContentOne: {
    flex: 1,
    alignItems: 'center'
  },
  ContainerOne: {
    marginTop: 50,
    backgroundColor: '#FFCFC8',
    alignItems: 'center',
    right: 7,
    justifyContent: 'center',
    borderRadius: 20,
    height: 590,
    width: 343
  },
  ContainerTwo: {
    marginTop: 20,
    backgroundColor: '#AECFFF',
    alignItems: 'center',
    marginLeft: 34,
    marginRight: 10,
    justifyContent: 'center',
    borderRadius: 20,
    height: 590,
    width: 343
  },
  ContainerThree: {
    marginTop: 50,
    backgroundColor: '#BFF3CE',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 20,
    borderRadius: 20,
    height: 590,
    width: 343
  },
  containeOneDot: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 500,
    justifyContent: 'space-around'
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#578DDE',
    padding: 10,
    left: '64%',
    marginTop: 20,
    width: 117,
    height: 46,
    borderRadius: 40
  },
  nextOne: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  nextTwo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  containeOnethree: {
    flex: 1,
    top: 5,
    flexDirection: 'row',
    marginTop: 500,
    justifyContent: 'space-around'
  },
  onboardContainer: {
    marginLeft: 1
  },
  onboardScreen: {
    width: Dimensions.get('window').width,
    height: 500
  }
})

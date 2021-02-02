import React,{useState} from 'react';
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Icons from 'react-native-vector-icons/Feather'
import { Data } from '../../mainComponents/sideNav/SideData'


const infoData = Data.map(side => (
    <View key={side.name}>
        <Image source={side.imageUrl}
            style={{
                width: 80,
                height: 80,
                borderRadius: 100,
                left: 50,
                borderWidth: 2,
                borderColor: "#FFF"
            }}

        />
        <Text style={{
            fontSize: 18,
            fontWeight: "500",
            fontStyle: 'normal',
            lineHeight: 22,
            color: '#FFFFFF',
            textAlign: 'center',
            top: 3

        }}>{side.name}</Text>
        <Text style={{
            fontStyle: 'normal',
            fontWeight: "normal",
            fontSize: 16,
            lineHeight: 18,
            color: '#FFFFFF',
            top: 5,
            textAlign: 'center'

        }}>{side.username}</Text>
    </View>

))

const SideNav = () => {

     const [toggleIcon, setToggleIcon] = useState(false)

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.SideNav}>
                <TouchableOpacity>
                    <Icons name='arrow-left'
                        style={{ left: 10, marginTop: 15 }}
                        size={25}
                        color="white" />

                </TouchableOpacity>

                <View style={styles.infoContainer}>
                    {infoData}
                </View>
            </View>


            <View style={styles.AccountContainer}>
                <Icons name='user' size={20} color="#BDBDBD" style={{
                    left: 20
                }} />

                <TouchableOpacity>
                <Text style={{
                    fontSize: 16,
                    fontWeight: "400",
                    lineHeight: 19.2,
                    right: 80,
                    color: '#3B485B',
                }}>Account Information</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.AccountContainer}>
                <Icons name='sun' size={20} color="#BDBDBD" style={{
                    left: 20
                }} />

                <TouchableOpacity>
                <Text style={{
                    fontSize: 16,
                    fontWeight: "400",
                    lineHeight: 19.2,
                    right: 125,
                    color: '#3B485B',
                    alignItems: 'center',
                }}>Refer A Friend</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.AccountContainer}>
                <Icons name='moon' size={20} color="#BDBDBD" style={{
                    left: 20
                }} />

                <TouchableOpacity>
                <Text style={{
                    fontSize: 16,
                    fontWeight: "400",
                    lineHeight: 19.2,
                    right: 40 ,
                    color: '#3B485B',
                }}>Dark Mode</Text>
                </TouchableOpacity>

                <TouchableWithoutFeedback onPress={() =>setToggleIcon(!toggleIcon)}>
                 {toggleIcon ? (
                     <Icons name='toggle-left' size={20} color="#BDBDBD" style={{ right: 20, backgroundColor:'#578DDE', borderRadius: 40, width: 30}} />
                 ):(
                    <Icons name='toggle-left' size={20} color="#BDBDBD" style={{ right: 20, backgroundColor: 'white', borderRadius: 40, width: 30  }} />  
                 )}
                </TouchableWithoutFeedback>
                 
            </View>


            <View style={styles.AccountContainer}>
                <Icons name='settings' size={20} color="#BDBDBD" style={{
                    left: 20
                }} />


                <TouchableOpacity>
                <Text style={{
                    fontSize: 16,
                    fontWeight: "400",
                    lineHeight: 19.2,
                    right: 165,
                    color: '#3B485B',
                }}>Settings</Text>

                </TouchableOpacity>
            </View>

            <View style={{borderWidth: 1,width: 295, marginTop: 30, borderColor: '#F4F4F4' }}></View>

            <View style={styles.AccountContainer}>
                <Icons name='help-circle' size={20} color="#BDBDBD" style={{
                    left: 20
                }} />


                <TouchableOpacity>
                <Text style={{
                    fontSize: 16,
                    fontWeight: "400",
                    lineHeight: 19.2,
                    right: 80,
                    color: '#3B485B',
                }}>Help and Feedbacks</Text>

                </TouchableOpacity>
            </View>

            <View style={styles.AccountContainer}>
                <Icons name='shield' size={20} color="#BDBDBD" style={{
                    left: 20
                }} />


                <TouchableOpacity>
                <Text style={{
                    fontSize: 16,
                    fontWeight: "400",
                    lineHeight: 19.2,
                    right: 130,
                    color: '#3B485B',
                }}>Privacy Policy</Text>

                </TouchableOpacity>
            </View>

            <View style={styles.AccountContainer}>
                <Icons name='users' size={20} color="#BDBDBD" style={{
                    left: 20
                }} />


                <TouchableOpacity>
                <Text style={{
                    fontSize: 16,
                    fontWeight: "400",
                    lineHeight: 19.2,
                    right: 165,
                    color: '#3B485B',
                }}>About Us</Text>

                </TouchableOpacity>
            </View>
        

            <TouchableOpacity
              style={{
                  marginTop: 45,
                  backgroundColor: '#FAFAFA',
                  width: 263,
                  height: 48,
                  margin: 15,
                  borderRadius: 40
              }}
            >
                <View style={styles.BottonContainer}>
                  <Icons  name='log-out' size={20} color="#EB5757" style={{
                     top: 12,
                     right: 12 
                  }}/>
                  <Text style={{
                      top: 12,
                      left: 10,
                      color: "#EB5757"
                  }}>Logout</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: 295,
        height: "100%",
        borderColor: '#F4F4F4'
    },
    SideNav: {
        width: 295,
        height: 226,
        backgroundColor: '#578DDE'
    },
    infoContainer: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: "center"
    },
    AccountContainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 295,
    },
    AccountConTwo: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 295,
    },
    BottonContainer: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center'
    }

})

export default SideNav;
import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import ArrowDown from '../../../images/arrow_drop_down.png'
import DatePicker from 'react-native-datepicker'
import { Picker } from '@react-native-picker/picker'
import Icons from "react-native-vector-icons/Feather"

class ProfileSetup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: "2016-01-01",
      location: "Abia",
      profile: "Only Me"
    }

  }



  render() {


    return (
      <View>
        <View style={styles.profileHeader}>
          <TouchableOpacity>
            <View style={{ right: 40, top: 3 }}>
              <Icons name="arrow-left" size={25} />
            </View>

          </TouchableOpacity>

          <Text style={{
            right: 70, fontSize: 24,
            color: "#578DDE",
            fontWeight: "500",
            fontStyle: "normal",
            lineHeight: 29.11
          }}>Profile Setup</Text>
        </View>

        <View style={styles.profileIndicator}>
          <View style={{ borderWidth: 1.5, borderColor: "#578DDE", width: 110, left: 10 }}></View>
          <View style={{ borderWidth: 1.5, borderColor: "#578DDE", width: 110 }}></View>
          <View style={{ borderWidth: 1.5, borderColor: "#578DDE", width: 110, right: 10 }}></View>
        </View>

        <View style={styles.profileImageContainer}>

          <View>
            <Icons name="image" color="#578DDE" size={25} />
          </View>

        </View>

        <View styles={styles.FormConatiner}>
          <View style={styles.FormContent}>
            <Text
              style={{
                marginLeft: 20,
                marginBottom: 5,
                fontWeight: '400',
                fontSize: 16,
                fontStyle: 'normal',
                lineHeight: 19.2,
              }}

            >
              Bio
            </Text>

            <TextInput style={styles.profileInput}
              numberOfLines={50}
              multiline={true}
              placeholder="This would be displayed on your profile"

            />

            <View style={styles.formLocation}>
              <Text
                style={{
                  marginLeft: 20,
                  marginBottom: 10,
                  fontWeight: '400',
                  fontStyle: 'normal',
                  fontSize: 16,
                  color: '#15243C'
                }}
              >
                Location
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Picker
                  selectedValue={this.state.location}
                  style={{
                    height: 46,
                    width: 343,
                    backgroundColor: '#FAFAFA',
                    marginLeft: 20,
                    borderRadius: 5
                  }}
                  onValueChange={(itemValue, itemIndex) => this.setState({ location: itemValue })}
                >
                  <Picker.Item label='Abia' value='Abia' />
                  <Picker.Item label='Lagos' value='Lagos' />
                  <Picker.Item label='FCT' value='FCT' />
                </Picker>

                <Image source={ArrowDown} style={{ marginTop: 12, right: 30 }} />
              </View>
            </View>

            <View style={styles.formDate}>
              <Text
                style={{
                  marginLeft: 20,
                  marginBottom: 10,
                  marginTop: 10,
                  fontWeight: '400',
                  fontStyle: 'normal',
                  fontSize: 16,
                  color: '#15243C'
                }}
              >
                Date of Birth
              </Text>

              <View style={{flexDirection: "row"}}>

              <DatePicker
                style={{ width: 146 }}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-01-01"
                maxDate="2030-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 16,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 17
                  }

                }}
                onDateChange={(date) => { this.setState({ date: date }) }}
              />
              
              <Picker
                  selectedValue={this.state.profile}
                  style={{
                    height: 45,
                    width: 200,
                    top: -2,
                    backgroundColor: '#FAFAFA',
                    marginLeft: 20,
                    borderRadius: 5
                  }}
                  onValueChange={(itemValue, itemIndex) => this.setState({ profile: itemValue })}
                >
                  <Picker.Item label='Only Me' value='Only Me' />
                  <Picker.Item label='every one' value='every one' />
                </Picker>


              </View>

            </View>
            

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonContent}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 12,
                    color: '#FFFFFF',
                    fontWeight: "500",
                    fontSize: 18,
                    fontStyle: "normal",
                    lineHeight: 21.83
                  }}
                >
                  Complete Setup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.profileSkip}>
          <TouchableOpacity>
            <Text style={{
              color: "#3B485B",
              fontWeight: "500",
              fontSize: 18,
              lineHeight: 22,
              fontStyle: 'normal',
            }}>Skip</Text>
          </TouchableOpacity>
        </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  profileHeader: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: 'space-around'
  },
  FormContent: {
    marginTop: 5
  },
  profileInput: {
    width: 343,
    marginLeft: 20,
    height: 78,
    paddingLeft: 10,
    backgroundColor: '#FAFAFA',
    borderRadius: 5
  },
  formLocation: {
    marginTop: 20,
    
  },
  buttonContent: {
    backgroundColor: '#578DDE',
    width: 343,
    height: 48,
    marginLeft: 20,
    borderRadius: 40
  },
  buttonContainer: {
    marginTop: 50,
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 21.83
  },
  profileIndicator: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  profileImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    left: 125,
    marginTop: 25,
    width: 120,
    height: 120,
    backgroundColor: "#FAFAFA",
    borderRadius: 100
  },
  profileSkip: {
    alignItems: "center",
    marginTop: 30
  },
  formDate: {
    
  }
})

export default ProfileSetup

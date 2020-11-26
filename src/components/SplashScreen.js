// import liraries
import React, { Component } from 'react'
// import { StyleSheet} from 'react-native'
import ProgressBar from 'react-native-progress/Bar'

// create a component
class SplashScreen extends Component {
  render() {
    return <ProgressBar progress={0.3} animated borderColor='gray' color='578dde' width='200' />
  }
}

// define your styles
// const styles = StyleSheet.create({
//   loadingContainer: {
//     height: 10,
//     justifyContent: 'center',
//     flexDirection: 'column',
//     borderRadius: 25,
//     overflow: 'hidden',
//     marginBottom: 30,
//     width: 250,
//     position: 'absolute',
//     bottom: 0,
//     borderWidth: 1,
//     borderColor: 'gray'
//   },
//   loadingContent: {
//     height: '100%',
//     backgroundColor: '#578dde',
//     position: 'absolute',
//     width: '100%'
//   }
// })

// make this component available to the app
export default SplashScreen

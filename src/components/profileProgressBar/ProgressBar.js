import React, { Component } from 'react';
import {View, StyleSheet} from "react-native"

class ProgressBar extends Component {
	render() {
		return (
			<View style={styles.progressContainer}>
				  <View style={styles.progressContent}>
                      <View style={styles.progressOne}></View>  
                      <View style={styles.progressTwo}></View>  
                      <View style={styles.progressThree}></View>  
				  </View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	progressContainer: {
		marginTop: 60,
		
		
	},
	progressContent: {
		flexDirection: 'row',
		justifyContent: 'space-around'
		
	},
	progressOne: {
		borderColor: "#578DDE",
		borderWidth: 1,
		width: 110,
		height:4,
		backgroundColor:"#578DDE",
		borderRadius:2
	},

	progressTwo: {
		borderColor: "#578DDE",
		borderWidth: 1,
		width: 110,
		height:4,
		backgroundColor:"#578DDE",
		borderRadius:2
	},
	progressThree:{
		borderColor: "#578DDE",
		borderWidth: 1,
		width: 110,
		height:4,
		backgroundColor:"#578DDE",
		borderRadius:2
	}
	

})

export default ProgressBar;
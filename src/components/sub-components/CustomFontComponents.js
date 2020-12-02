// import liraries
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Label, Input, Text, Icon } from 'native-base';

// create a component
export const CustomLabel = (props) => {
	return (
		<Label {...props} style={[styles.font, props.style]}>
			{props.children}
		</Label>
	);
};

export const CustomText = (props) => {
	return (
		<Text {...props} style={[styles.font, props.style]}>
			{props.children}
		</Text>
	);
};

export const CustomError = (props) => {
	return (
		<Text {...props} style={[styles.font, props.style, styles.error]}>
			{props.children}
		</Text>
	);
};

export const CustomInput = (props) => {
	return (
		<Input {...props} style={[styles.font, props.style]}>
			{props.children}
		</Input>
	);
};

export const CustomPassword = (props) => {
  const [ hide, setHide ] = useState(true)
	return (
		<>
			<Input {...props} style={[styles.font, props.style]} secureTextEntry={hide} />
			<TouchableOpacity style={{ position: 'absolute', right: 5, top: 5 }} onPress={() => setHide(!hide)}>
				{hide ? <Icon active name="md-eye"/> : <Icon active name="md-eye-off"/>}
			</TouchableOpacity>
		</>
	);
};

// define your styles
const styles = StyleSheet.create({
	font: {
		fontFamily: 'Gilroy',
		fontSize: 16,
	},
	error: {
		color: 'red',
		width: '100%',
		textAlign: 'left',
	},
});

// make this component available to the app

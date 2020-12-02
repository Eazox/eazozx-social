// import liraries
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet } from 'react-native';
import {
	Container,
	Header,
	Content,
	Form,
	Item,
	Picker,
	Icon,
	ListItem,
	Body,
	Button,
	Left,
	Title,
	CheckBox,
} from 'native-base';
import {
	CustomPassword,
	CustomLabel,
	CustomInput,
	CustomText,
	CustomError,
} from '../sub-components/CustomFontComponents';
import useFormValidation from './signupValidator';

// create a component
const Signup = () => {
	const [showErrors, setShowErrors] = useState(false);
	// enable 'create account' button when all is not empty
	// showErrors when button clicked
	//remember to handle the default value of signupvalidator to
	// accomodate isValid
	//comment your functions

	const { data, setHandler } = useFormValidation();

	const updateInput = (key, input) => {
		setHandler(key, input);
		setShowErrors(false);
	};

	const createAccountHandler = () => {
		if (data.data.fullname.isValid.valid) {
			if (data.data.username.isValid.valid) {
				if (data.data.email.isValid.valid) {
					if (data.data.number.isValid.valid) {
						if (data.data.password.isValid.valid) {
							if (data.data.agreedCheckbox.isValid.valid) {
								alert('success');
							} else {
								setShowErrors(true);
							}
						} else {
							setShowErrors(true);
						}
					} else {
						setShowErrors(true);
					}
				} else {
					setShowErrors(true);
				}
			} else {
				setShowErrors(true);
			}
		} else {
			setShowErrors(true);
		}
	};

	return (
		<Container style={styles.container}>
			<Header style={styles.header}>
				<Left style={styles.headerLeft}>
					<Button transparent>
						<Icon name="arrow-back" style={styles.blackColor} />
					</Button>
				</Left>
				<Body style={styles.alignCenter}>
					<Title style={[styles.fontS24, styles.blueColor]}>Create an Account</Title>
				</Body>
			</Header>
			<Content>
				<Form style={styles.form}>
					<Item stackedLabel style={styles.noBorder}>
						<CustomLabel style={styles.mb8}>Full Name</CustomLabel>
						<CustomInput
							onChangeText={(e) => updateInput('fullname', e)}
							style={[
								showErrors && !data.data.fullname.isValid.valid
									? styles.redBorder
									: styles.removeBorder,
								styles.grayCover,
							]}
						/>
						{showErrors && !data.data.fullname.isValid.valid && (
							<CustomError>{data.data.fullname.isValid.error}</CustomError>
						)}
					</Item>
					<Item stackedLabel style={styles.noBorder}>
						<CustomLabel style={styles.mb8}>Username</CustomLabel>
						<CustomInput
							onChangeText={(e) => updateInput('username', e)}
							style={[
								showErrors && !data.data.username.isValid.valid
									? styles.redBorder
									: styles.removeBorder,
								styles.grayCover,
							]}
						/>
						{showErrors && !data.data.username.isValid.valid && (
							<CustomError>{data.data.username.isValid.error}</CustomError>
						)}
					</Item>
					<Item picker style={[styles.noBorder, styles.genderItem]}>
						<CustomLabel style={[styles.mb8, styles.ml15, styles.mt10]}>Gender</CustomLabel>
						<View style={[styles.grayCover, styles.genderContainer]}>
							<Picker
								mode="dropdown"
								// placeholder="Gender"
								iosHeader="Gender"
								headerBackButtonText="Go back"
								iosIcon={<Icon name="arrow-down" />}
								selectedValue={data.data.gender.value}
								onValueChange={(e) => updateInput('gender', e)}
								style={[styles.genderPicker, styles.fontS14, styles.fontw4]}
							>
								<Picker.Item label="Female" value="key0" />
								<Picker.Item label="Male" value="key1" />
							</Picker>
						</View>
					</Item>

					<Item stackedLabel style={styles.noBorder}>
						<CustomLabel style={styles.mb8}>Email Address</CustomLabel>
						<CustomInput
							onChangeText={(e) => updateInput('email', e)}
							style={[
								showErrors && !data.data.email.isValid.valid
									? styles.redBorder
									: styles.removeBorder,
								styles.grayCover,
							]}
							keyboardType="email-address"
						/>
						{showErrors && !data.data.email.isValid.valid && (
							<CustomError>{data.data.email.isValid.error}</CustomError>
						)}
					</Item>
					<Item stackedLabel style={styles.noBorder}>
						<CustomLabel style={styles.mb8}>Phone Number</CustomLabel>
						<View style={styles.inline}>
							<View style={styles.numberContainer}>
								<Picker
									mode="dropdown"
									iosHeader="Number Header"
									headerBackButtonText="Go back"
									iosIcon={<Icon name="arrow-down" />}
									selectedValue={data.data.numberHeader.value}
									onValueChange={(e) => updateInput('numberHeader', e)}
								>
									<Picker.Item label="+234" value="key0" />
									<Picker.Item label="+01" value="key1" />
								</Picker>
							</View>
							<CustomInput
								keyboardType="phone-pad"
								style={[
									styles.noBorder,
									showErrors && !data.data.number.isValid.valid
										? styles.redBorder
										: styles.removeBorder,
									styles.grayCover,
								]}
								onChangeText={(e) => updateInput('number', e)}
							/>
						</View>
						{showErrors && !data.data.number.isValid.valid && (
							<CustomError>{data.data.number.isValid.error}</CustomError>
						)}
					</Item>
					<Item stackedLabel style={[styles.noBorder]}>
						<CustomLabel style={styles.mb8}>Password</CustomLabel>
						<CustomPassword
							style={[
								showErrors && !data.data.password.isValid.valid
									? styles.redBorder
									: styles.removeBorder,
								styles.grayCover,
							]}
							onChangeText={(e) => updateInput('password', e)}
						/>
						{showErrors && !data.data.password.isValid.valid && (
							<CustomError>{data.data.password.isValid.error}</CustomError>
						)}
					</Item>
					<ListItem style={styles.noBorder}>
						<CheckBox
							checked={data.data.agreedCheckbox.value}
							style={[
								showErrors && !data.data.agreedCheckbox.isValid.valid
									? styles.redBorder
									: styles.removeBorder,
							]}
							onPress={() => updateInput('agreedCheckbox', !data.data.agreedCheckbox.value)}
						/>
						<Body>
							<CustomText style={[styles.fontw5, styles.fontS14]}>
								I agree to the{' '}
								<CustomText style={[styles.blueColor, styles.fontw5, styles.fontS14]}>
									terms and conditions
								</CustomText>
							</CustomText>
						</Body>
					</ListItem>
					{showErrors && !data.data.agreedCheckbox.isValid.valid && (
						<CustomError>{data.data.agreedCheckbox.isValid.error}</CustomError>
					)}
					<Button
						onPress={createAccountHandler}
						block
						info
						disabled={
							data.data.fullname.value === '' ||
							data.data.username.value === '' ||
							data.data.email.value === '' ||
							data.data.password.value === '' ||
							data.data.number.value === '' ||
							data.data.agreedCheckbox.value === false
						}
						style={[styles.ml15, styles.mt15]}
					>
						<CustomText style={[styles.fontS18, styles.fontw5]}>Create Account</CustomText>
					</Button>
					<CustomText style={[styles.mt15, styles.textCentered]}>
						Already have an account? <CustomText style={styles.blueColor}>Log in</CustomText>
					</CustomText>
				</Form>
			</Content>
		</Container>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	header: {
		height: 80,
		backgroundColor: 'white',
		elevation: 0,
	},
	headerLeft: {
		position: 'absolute',
		left: 0,
	},
	blackColor: {
		color: 'black',
	},
	redBorder: {
		borderColor: 'red',
		borderWidth: 0.5,
		borderBottomWidth: 0.5,
	},
	removeBorder: {
		borderWidth: 0,
	},
	inline: {
		flexDirection: 'row',
	},
	grayCover: {
		backgroundColor: '#fafafa',
		height: 40,
		paddingLeft: 15,
	},
	form: {
		padding: 10,
		paddingLeft: 0,
	},
	genderItem: {
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	genderContainer: {
		width: 150,
		marginLeft: 15,
		justifyContent: 'center',
	},
	genderPicker: {
		left: -15,
	},
	numberContainer: {
		width: 99,
		height: 40,
		marginRight: 10,
		justifyContent: 'center',
		backgroundColor: '#fafafa',
	},
	noBorder: {
		borderBottomWidth: 0,
	},
	mb8: {
		marginBottom: 8,
	},
	mtm8: {
		marginTop: -8,
	},
	blueColor: {
		color: '#578DDE',
	},
	fontw4: {
		fontWeight: '400',
	},
	fontw5: {
		fontWeight: '500',
	},
	fontS14: {
		fontSize: 14,
	},
	fontS18: {
		fontSize: 18,
	},
	fontS24: {
		fontSize: 24,
	},
	ml15: {
		marginLeft: 15,
	},
	mt10: {
		marginTop: 10,
	},
	mt15: {
		marginTop: 15,
	},
	textCentered: {
		textAlign: 'center',
	},
	alignCenter: {
		alignItems: 'center',
	},
});

// make this component available to the app
export default Signup;

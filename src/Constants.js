import { StyleSheet } from 'react-native';

export const GLOBALSTYLES = StyleSheet.create({
	header: {
		height: 80,
		backgroundColor: 'white',
		elevation: 0,
	},
	container: {
		width: '100%',
	},
	headerLeft: {
		position: 'absolute',
		left: 0,
	},
	headerText: {
		fontFamily: 'Gilroy',
		fontWeight: '600',
		fontSize: 24,
		color: '#578dde',
	},
	alignCenter: {
		alignItems: 'center',
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
	fontw6: {
		fontWeight: '600',
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
	noBorder: {
		borderBottomWidth: 0,
	},
	progressBeam: { justifyContent: 'center', flexDirection: 'row', paddingHorizontal: 10, marginBottom: 30 },
});

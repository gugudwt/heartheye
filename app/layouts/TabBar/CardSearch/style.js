import {StyleSheet} from 'react-native';
import {VH, VW} from "../../../config/constants";
import {regularBlue} from "../../../config/styles";

export default StyleSheet.create({
	listSeparator: {
		height: 1,
		backgroundColor: regularBlue,
		marginLeft: 20,
		marginRight: 20
	},
	listItem: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 10
	},
	cardImageContainer: {
		width: 0.35 * VW,
		alignItems: 'center'
	},
	cardImage: {
		width: 278/3,
		height: 422/3,
		transform: [{ rotate: '-3deg'}],
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 2},
		shadowRadius: 4,
		shadowOpacity: 0.5
	},
	cardInfoContainer: {

	},
	cardInfoColumnsContainer: {
		flexDirection: 'row'
	},
	cardInfoLeftColumn: {
		marginRight: 20
	},
	cardInfoTitle: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 10
	},
	cardInfoTextContainer: {
		flexDirection: 'row'
	},
	cardInfoTextLabel: {
		color: '#849CBE',
		fontWeight: 'bold',
		fontSize: 12
	},
	cardInfoTextValue: {
		color: 'white',
		fontSize: 12
	},
	cardStatisticsContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: 20
	},
	cardStatisticContainer: {
		flexDirection: 'row',
		marginLeft: 10,
		marginRight: 10
	},
	cardStatisticText: {
		color: 'white'
	}
});
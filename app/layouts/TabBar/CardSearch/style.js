import {StyleSheet} from 'react-native';
import {VH, VW} from "../../../config/constants";

export default StyleSheet.create({
	listItem: {
		flexDirection: 'row'
	},
	imageContainer: {
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
	}
});
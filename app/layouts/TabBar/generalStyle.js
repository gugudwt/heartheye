import {StyleSheet} from 'react-native';
import {darkBlue, regularBlue} from "../../config/styles";

export default StyleSheet.create({
	headerStyle: {
		backgroundColor: darkBlue,
		borderBottomWidth: 1,
		borderBottomColor: regularBlue
	},
	headerTitleStyle: {
		color: 'white'
	},
	tabBarStyle: {
		backgroundColor: darkBlue,
		borderTopWidth: 1,
		borderTopColor: regularBlue
	}
});
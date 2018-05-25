import React from "react";
import {darkBlue} from "../../../config/styles";
import {SafeAreaView, Text, View} from "react-native";

export default class DeckSearch extends React.Component {
	render() {
		return (
			<View>
				<SafeAreaView style={{backgroundColor: darkBlue}}/>
				<View>
					<Text>Prova Deck Search</Text>
				</View>
			</View>
		)
	}
}
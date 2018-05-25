import React from "react";
import {darkBlue} from "../../../config/styles";
import {ImageBackground, SafeAreaView, Text, View} from "react-native";
import images from "../../../../assets/img/images";
import {VW, VH} from '../../../config/constants';

export default class DeckSearch extends React.Component {
	render() {
		return (
			<View>
				<SafeAreaView style={{backgroundColor: darkBlue}}/>
				<ImageBackground style={{width: VW, height: VH}} source={images.bgIphoneX}>
					<Text>Prova Deck Search</Text>
				</ImageBackground>
			</View>
		)
	}
}
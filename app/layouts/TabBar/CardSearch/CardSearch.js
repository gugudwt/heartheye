import React from "react";
import {darkBlue} from "../../../config/styles";
import {Dimensions, ImageBackground, SafeAreaView, Text, View} from "react-native";
import images from './../../../../assets/img/images';
import {VH, VW} from "../../../config/constants";

export default class CardSearch extends React.Component {
	render() {
		return (
			<View>
				<SafeAreaView style={{backgroundColor: darkBlue}}/>
				<ImageBackground style={{width: VW, height: VH}} source={images.bgIphoneX}>
					<Text>Prova Card Search</Text>
				</ImageBackground>
			</View>
		)
	}
}
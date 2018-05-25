import React from "react";
import {darkBlue} from "../../../config/styles";
import {ImageBackground, SafeAreaView, Text, View} from "react-native";
import images from './../../../../assets/img/images';
import {VH, VW} from "../../../config/constants";
import {createStructuredSelector} from "reselect";
import {getCards} from "../../../reducer/actions";
import {connect} from "react-redux";
import {makeSelectCards} from "../../../reducer/selectors";

class CardSearch extends React.Component {

	componentWillMount(){
		this.props.onGetCards();
	}
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

const mapStateToProps = createStructuredSelector({
	cards: makeSelectCards()
});

export function mapDispatchToProps(dispatch) {
	return {
		onGetCards: () => {
			dispatch(getCards());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CardSearch);


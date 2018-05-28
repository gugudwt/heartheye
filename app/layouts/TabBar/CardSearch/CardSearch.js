import React from "react";
import {darkBlue} from "../../../config/styles";
import {ImageBackground, ListView, SafeAreaView, Text, View} from "react-native";
import images from './../../../../assets/img/images';
import {VH, VW} from "../../../config/constants";
import {createStructuredSelector} from "reselect";
import {getCards} from "../../../reducer/actions";
import {connect} from "react-redux";
import {makeSelectCards} from "../../../reducer/selectors";

class CardSearch extends React.Component {
	constructor(props) {
		super(props);
		let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			ds: ds
		}
	}

	componentWillMount() {
		this.props.onGetCards();
	}

	componentWillReceiveProps(newProps) {
		this.props = newProps;
		this.getCardsList();
	}

	getCardsList() {
		let cards = this.props.cards;
		this.setState({
			ds: this.state.ds.cloneWithRows(cards)
		})
	}

	_renderRow = function (card: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
		return (
			<Text>prova</Text>
		)
	}

	render() {
		return (
			<View>
				<SafeAreaView style={{backgroundColor: darkBlue}}/>
				<ImageBackground style={{width: VW, height: VH}} source={images.bgIphoneX}>
					<ListView
						dataSource={this.state.ds}
						renderRow={this._renderRow.bind(this)}
					/>
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


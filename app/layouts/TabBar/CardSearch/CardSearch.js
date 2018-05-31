import React from "react";
import {darkBlue, regularBlue} from "../../../config/styles";
import {Image, ImageBackground, ListView, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import _ from 'underscore';
import images from './../../../../assets/img/images';
import {VH, VW} from "../../../config/constants";
import {createStructuredSelector} from "reselect";
import {getCards} from "../../../reducer/actions";
import {connect} from "react-redux";
import {makeSelectCards} from "../../../reducer/selectors";
import styles from "./style";

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

	_renderRow(card) {
		let race = _.isUndefined(card.race) ? 'No race' : card.race;
		return (
			<TouchableOpacity style={styles.listItem}>
				<View style={styles.cardImageContainer}>
					<Image source={{uri: card.img}} style={styles.cardImage}/>
				</View>
				<View style={styles.cardInfoContainer}>
					<Text style={styles.cardInfoTitle}>{card.name}</Text>
					<View style={styles.cardInfoColumnsContainer}>
						<View style={styles.cardInfoLeftColumn}>
							<View style={styles.cardInfoTextContainer}>
								<Text style={styles.cardInfoTextLabel}>Type: </Text>
								<Text style={styles.cardInfoTextValue}>{card.type}</Text>
							</View>
							<View style={styles.cardInfoTextContainer}>
								<Text style={styles.cardInfoTextLabel}>Race: </Text>
								<Text style={styles.cardInfoTextValue}>{race}</Text>
							</View>
						</View>
						<View style={styles.cardInfoRightColumn}>
							<View style={styles.cardInfoTextContainer}>
								<Text style={styles.cardInfoTextLabel}>Rarity: </Text>
								<Text style={styles.cardInfoTextValue}>{card.rarity}</Text>
							</View>
							<View style={styles.cardInfoTextContainer}>
								<Text style={styles.cardInfoTextLabel}>Class: </Text>
								<Text style={styles.cardInfoTextValue}>{card.playerClass}</Text>
							</View>
						</View>
					</View>
					<View>
						<View style={styles.cardInfoTextContainer}>
							<Text style={styles.cardInfoTextLabel}>Set: </Text>
							<Text style={styles.cardInfoTextValue}>{card.cardSet}</Text>
						</View>
					</View>
					<View style={styles.cardStatisticsContainer}>
						<View style={styles.cardStatisticContainer}>
							<Text style={styles.cardStatisticText}>{card.cost}</Text>
						</View>
						<View style={styles.cardStatisticContainer}>
							<Text style={styles.cardStatisticText}>{card.attack}</Text>
						</View>
						<View style={styles.cardStatisticContainer}>
							<Text style={styles.cardStatisticText}>{card.health}</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		)
	}

	_renderSeparator = function (sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
		return (
			<View
				key={`${sectionID}-${rowID}`}
				style={styles.listSeparator}
			/>
		);
	};

	render() {
		return (
			<View>
				<SafeAreaView style={{backgroundColor: darkBlue}}/>
				<ImageBackground style={{width: VW, height: VH}} source={images.bgIphoneX}>
					<ListView
						dataSource={this.state.ds}
						renderRow={this._renderRow.bind(this)}
						renderSeparator={this._renderSeparator.bind(this)}
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


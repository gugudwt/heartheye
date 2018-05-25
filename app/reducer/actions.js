import {GET_CARDS, GET_CARDS_SUCCESS} from "./constants";

export function getCards() {
	return {
		type: GET_CARDS,
	};
}

export function getCardsSuccess(cards) {
	return {
		type: GET_CARDS_SUCCESS,
		cards
	};
}
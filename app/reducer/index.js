import {fromJS} from 'immutable';
import {GET_CARDS, GET_CARDS_SUCCESS} from "./constants";

export const initialState = fromJS({
	cards: []
});

function reducer(state = initialState, action) {
	switch(action.type){
		case GET_CARDS:
			return state
				.setIn(['cards'], fromJS([]));
		case GET_CARDS_SUCCESS:
			return state
				.setIn(['cards'], action.cards);
		default:
			return state;
	}
}

export default reducer;
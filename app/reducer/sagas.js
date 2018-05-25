import {call, put, takeLatest, select,fork,all, takeEvery,take,cancel} from 'redux-saga/effects';
import {getCardsSuccess} from "./actions";
import {GET_CARDS} from "./constants";
import {Routes} from './../routes/routes';

export function* getCards() {
	let cards = yield call(Routes.getCards);
	yield put(getCardsSuccess(cards));
}

export function* watchGetCards(){
	yield takeLatest(GET_CARDS, getCards);
}

export default function* root() {
	yield all([
		fork(watchGetCards)
	]);
}

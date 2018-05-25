import { createSelector } from 'reselect';

const selectHome = (state) => state;

const makeSelectCards = () => createSelector(
	selectHome,
	(homeState) => homeState.get("cards")
);

export {
	makeSelectCards
};
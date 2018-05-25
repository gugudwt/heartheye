import React, {Component} from 'react';
import createSagaMiddleware from 'redux-saga';
import TabBar from "./layouts/TabBar";
// import reducer, {initialState} from '../app/reducer';
// import {createStore, applyMiddleware} from 'redux';
// import {Provider} from 'react-redux';
// import sagas from '../app/reducer/sagas';
// import SplashScreen from 'react-native-splash-screen'
import {SafeAreaView, Text, View} from 'react-native';
import {darkBlue} from "./config/styles";

const sagaMiddleware = createSagaMiddleware();


/*const store = createStore(
	reducer,
	initialState,
	applyMiddleware(sagaMiddleware)
);*/


// sagaMiddleware.run(sagas);

export default class Index extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// SplashScreen.hide();
	}

	render() {
		return (
			<TabBar
				onNavigationStateChange={null}
			/>
		);
	}
}

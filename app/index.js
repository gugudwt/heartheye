import React, {Component} from 'react';
import createSagaMiddleware from 'redux-saga';
// import TabBar from "./layouts/TabBar";
// import reducer, {initialState} from '../app/reducer';
// import {createStore, applyMiddleware} from 'redux';
// import {Provider} from 'react-redux';
// import sagas from '../app/reducer/sagas';
// import SplashScreen from 'react-native-splash-screen'
import {SafeAreaView, Text} from 'react-native';

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
				<SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
					{/*<TabBar
						onNavigationStateChange={null}
					/>*/}
					<Text>Prova</Text>
				</SafeAreaView>

		);
	}
}

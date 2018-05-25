import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import {Icon} from "react-native-elements";
import {darkBlue, mainColor} from "../../config/styles";
import DeckSearch from './DeckSearch';
import CardSearch from './CardSearch';
import generalStyle from "./generalStyle";

const CardSearchStack = createStackNavigator({
	CardSearch: {
		screen: CardSearch,
		navigationOptions: ({ navigation }) => ({
			title: 'Card Search',
			headerStyle: generalStyle.headerStyle,
			headerTitleStyle: generalStyle.headerTitleStyle
		})
	}
});

const DeckSearchStack = createStackNavigator({
	DeckSearch: {
		screen: DeckSearch,
		navigationOptions: ({ navigation }) => ({
			title: 'Deck Search',
			headerStyle: generalStyle.headerStyle,
			headerTitleStyle: generalStyle.headerTitleStyle
		})
	}
});

export default createBottomTabNavigator({
	CardSearch: {screen: CardSearchStack},
	DeckSearch: {screen: DeckSearchStack}
}, {
	navigationOptions: ({navigation}) => ({
		tabBarIcon: ({focused, tintColor}) => {
			const {routeName} = navigation.state;
			let iconName;
			if (routeName === 'CardSearch') {
				iconName = 'user';
			} else if (routeName === 'DeckSearch') {
				iconName = 'info';
			}
			return <Icon name={iconName} type={'font-awesome'} size={25} color={tintColor}/>;
		},
	}),
	tabBarOptions: {
		activeTintColor: mainColor,
		inactiveTintColor: 'white',
		style: generalStyle.tabBarStyle,
		showLabel: false
	},
});

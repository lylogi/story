import React from 'react';
import {StackNavigator} from 'react-navigation';
import Category from './component/Category';
import Home from './component/Home';
import styles from './style/style';


export const HomeStack = StackNavigator(
	{
		Home: {
			screen: Home
		},
		Cate: {
			screen: Category
		}
		
	},
	{
		initialRouterName: 'Home',
	}

)
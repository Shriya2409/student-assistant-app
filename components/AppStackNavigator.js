import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import HomeworkScreen  from '../screens/HomeworkScreen';




export const AppStackNavigator = createStackNavigator({
  Home : {
    screen : HomeScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  Homework : {
    screen : HomeworkScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'subjects'
  }
);

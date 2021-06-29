import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import HomeScreen from '../screens/HomeScreen';
import HomeworkScreen from '../screens/HomeworkScreen';


export const AppTabNavigator = createBottomTabNavigator({

    Home: {
        screen: HomeScreen,
        navigationOptions :{
          tabBarIcon : <Image source={require("../assets/book.png")} style={{width:20, height:20}}/>,
          tabBarLabel : "subjects",
        }
      },

  Homework : {
    screen: HomeworkScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/books.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "homework",
    }
  },
  
});

import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import Recipe from '../screens/Recipe';
import Login from 'C:\\Users\\kiran\\IdeaProjects\\FinalProject2_0\\screens\\Login.js';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Login: {
    screen: Login,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Login" />,
      };
    },
  },
};

const LoginStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#eee',
      height: 60,
    },
  },
});

export default LoginStack;


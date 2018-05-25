/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {
  createStackNavigator
} from 'react-navigation'
import MainScreen from './Views/MainScreen';
import FullDetailView from './Views/CatalogScreen';
import BrandScreen from './Views/BrandScreen';


export default class App extends Component {
  render() {
    return (
      <MainStack/>
    );
  }
}

const MainStack = createStackNavigator(
  {
    Home: BrandScreen,
    Newslist: MainScreen,
    DetailModal: FullDetailView
  },
  {
    initialRouteName: 'Home',
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

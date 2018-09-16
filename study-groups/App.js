import * as React from 'react';
import { Text, View, StyleSheet, NavigatorIOS } from 'react-native';
import { Constants } from 'expo';
import { navigationOptions } from 'react-navigation';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

// You can import from local files
//import AssetExample from './components/AssetExample';

import HomeScreen from './components/HomeScreen';
import MyGroupScreen from './components/MyGroupScreen';
import StudyProfile from './components/StudyProfile';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

const index = createStackNavigator({
  Home: {screen : HomeScreen } ,
  MyGroup: { screen: MyGroupScreen} ,
  StudyProfile:{screen:StudyProfile},
}, {
  initialRouteName: 'StudyProfile',
});

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  niceTitle: {
    backgroundColor: 'skyblue',

    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',

    alignItems: 'center',
    alignSelf: 'stretch',
  },
});
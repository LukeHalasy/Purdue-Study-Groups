import * as React from 'react';
import { Text, View, StyleSheet, NavigatorIOS
 } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './AssetExample';
import Title from './Title';
import Icon from './Icon';
import AllGroups from './AllGroups';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.19.1

export default class FindGroupScreen extends React.Component {
  //static navigationOptions = {
  //  title:'MyGroups Screen',
  //};
  render() {
    return (
      //<Text style={styles.niceTitle}>MyGroups Screen</Text>
      <View style={styles.container}>
        <Title title='Study Groups'/>
        <AllGroups/>
      </View>
    );
  }
}

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

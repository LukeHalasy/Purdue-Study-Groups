import React from 'React';
import Button from 'react-native';
import { View, Text } from 'react-native';
import createStackNavigator from 'react-navigation';

class App extends React.Component {
  render() {
    return <Text>HELLO</Text>;
  }
}

export default createStackNavigator({
  Home: {
    screen: App,
  },
});

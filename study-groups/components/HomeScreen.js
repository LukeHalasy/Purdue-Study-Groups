import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  NavigatorIOS,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Constants } from 'expo';
import { withNavigation } from 'react-navigation';
import AddStudyGroup from './AddStudyGroup/AddStudyGroup';

// You can import from local files
import Title from './Title';
import Icon from './Icon';

import PropTypes from 'prop-types';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.19.1

class HomeScreen extends React.Component {
  onPressFindGroups = () => {
    this.props.navigation.push('FindGroup');
  };
  onLongPressFindGroups = () => {
    Alert.alert('Choose Concepts...');
  };
  onPressMakeGroups = () => {
    this.props.navigation.push('MakeGroup', {
      email: this.props.navigation.getParam('email', 'N/A')
    });
  };
  onPressMyGroups = () => {
    this.props.navigation.push('MyGroups');
  };

  render() {
    console.log('HS:', this.props.email);
    console.log('HSNAv:', this.props.navigation.getParam('email', 'N/A'));
    return (
      <View style={styles.container}>
        <Title title="Study Groups" />
        <View style={styles.buttonContainer}>
          <View style={styles.space}> </View>
          <TouchableOpacity
            onPress={this.onPressFindGroups}
            style={styles.button}
          >
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonText}> Find Groups </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.space} />
          <TouchableOpacity
            onPress={this.onPressMakeGroups}
            style={styles.button}
          >
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonText}> Make Groups </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.space} />
          <TouchableOpacity
            onPress={this.onPressMyGroups}
            style={styles.button}
          >
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonText}> My Groups </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.space} />
        </View>
      </View>
    );
  }
}

export default withNavigation(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e'
  },
  niceTitle: {
    backgroundColor: 'skyblue',

    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',

    alignItems: 'center',
    alignSelf: 'stretch'
  },
  space: {
    flex: 3,
    flexDirection: 'column'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 35
    //backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    //backgroundColor: '#841584',
    //backgroundColor:'#00BCD4',
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 0,
    flex: 5
  },
  buttonTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 45
  }
});

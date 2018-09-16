import * as React from 'react';
import { Text, View, StyleSheet, NavigatorIOS
 } from 'react-native';
import { Constants } from 'expo';
import { List, ListItem } from 'react-native-elements'
import { withNavigation } from 'react-navigation';

// You can import from local files
import AssetExample from './AssetExample';
import Title from './Title';
import Choose from './Choose';
import Icon from './Icon';
import CardHolder from './CardHolder';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.19.1



const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

export default class StudyProfile extends React.Component {

  render() {
    const test = this.props.navigation.getParam('users', 'RIP NOT RETURNED')[0];
    console.log(test);
    return (
        <View style={styles.container}>
          <Title title={this.props.navigation.getParam('title', 'Concept_Here')}/>
          <Text style={styles.description}>
          {this.props.navigation.getParam('startTime', 'Start_Time')} - {this.props.navigation.getParam('endTime', 'End_Time')}</Text>
          <Text style={styles.description}>
          Location - {this.props.navigation.getParam('location', 'N/A')}</Text>
          <Text style={styles.description}>Members</Text>
          <List containerStyle={styles.member}>
          {
            list.map((l) => (
              <ListItem
                roundAvatar
                avatar={{uri:l.avatar_url}}
                key={l.name}
                title={l.name}
              />
            ))}
          }
         </List>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  member: {
      marginBottom: 20,
      flex:'stretch',
  },
  container: {
    alignItems: 'stretch',
    //justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    flex:'stretch',
  },
  description: {
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

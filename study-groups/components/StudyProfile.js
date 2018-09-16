import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  NavigatorIOSm,
  ActivityIndicator
} from 'react-native';
import { Constants } from 'expo';
import { ScrollView } from 'react-native'
import { List, ListItem } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import firebase from 'firebase';
// You can import from local files

import Title from './Title';
import Icon from './Icon';
import CardHolder from './CardHolder';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.19.1

var avatarList = [
  {
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
  },
  {
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
  },
  {
    avatar_url:
      'https://cdn.pixabay.com/photo/2015/02/28/09/32/beautiful-653317_1280.jpg'
  },
  {
    avatar_url:
      'https://cdn.pixabay.com/photo/2016/11/08/16/03/manager-1808728_1280.jpg'
  },
  {
    avatar_url:
      'https://cdn.pixabay.com/photo/2015/10/18/16/40/taxation-994707_1280.jpg'
  },
  {
    avatar_url:
      'https://cdn.pixabay.com/photo/2016/07/27/08/00/female-model-1544783_1280.jpg'
  },
  {
    avatar_url:
      'https://cdn.pixabay.com/photo/2016/07/27/07/57/male-1544775_1280.jpg'
  }
];

export default class StudyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: [] };
  }
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyB2cxEKpYdG9HMSmk3dpf0FIfFnUYog8sg',
      authDomain: 'purdueplanner-22f3f.firebaseapp.com',
      databaseURL: 'https://purdueplanner-22f3f.firebaseio.com',
      projectId: 'purdueplanner-22f3f',
      storageBucket: 'purdueplanner-22f3f.appspot.com',
      messagingSenderId: '358266043933'
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    database = firebase.database();
    let retrnValue = firebase
      .database()
      .ref('Users/')
      .once('value')
      .then(snapshot => {
        let rawvalue = snapshot.val();
        var resultValue = [];

        for (var i in rawvalue) {
          rawvalue[i]['key'] = i;
          resultValue.push(rawvalue[i]);
        }

        this.setState({
          isLoading: false,
          dataSource: resultValue
        });
      });

    return;
  }

  render() {
    const test = this.props.navigation.getParam('users', 'RIP NOT RETURNED')[0];
    console.log(test);
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Title
            title={this.props.navigation.getParam('title', 'Concept_Here')}
          />
          <Text style={styles.description}>
            {this.props.navigation.getParam('startTime', 'Start_Time')} -{' '}
            {this.props.navigation.getParam('endTime', 'End_Time')}
          </Text>
          <Text style={styles.description}>
            Location - {this.props.navigation.getParam('location', 'N/A')}
          </Text>
          <Text style={styles.description}>Members</Text>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Title
            title={this.props.navigation.getParam('title', 'Concept_Here')}
          />
          <Text style={styles.description}>
            {this.props.navigation.getParam('startTime', 'Start_Time')} -{' '}
            {this.props.navigation.getParam('endTime', 'End_Time')}
          </Text>
          <Text style={styles.description}>
            Location - {this.props.navigation.getParam('location', 'N/A')}
          </Text>
          <Text style={styles.description}>Members</Text>
          <ScrollView>
            {this.state.dataSource.map(l => (
              <ListItem
                roundAvatar
                avatar={{
                  uri: avatarList[Math.floor(Math.random() * 7)].avatar_url
                }}
                key={l.name}
                title={l.name}
              />
            ))}
            }
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  peopleScroll:{
    flexDirection:'column',
    flex:1,

  },
  member: {
    marginBottom: 20
    //flex:'stretch',
  },
  container: {
    alignItems: 'stretch',
    //justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
    //flex:'stretch',
  },
  description: {
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
  }
});

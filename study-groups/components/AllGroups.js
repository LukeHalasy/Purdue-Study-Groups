import * as React from 'react';

import { Text, View, StyleSheet, Image, Button, TouchableOpacity, ScrollView, Alert, ActivityIndicator} from 'react-native';
import { Constants } from 'expo';
import firebase from "firebase";
import { StackNavigator, navigationOptions } from "react-navigation";

//import styles from 'App.js';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.19.1
import MyGroupScreen from './MyGroupScreen';
import GroupCard from './GroupCard';
import { withNavigation } from 'react-navigation';

const users = [
  {
    name: 'Chitoge Kirisaki',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

class AllGroups extends React.Component {


  constructor(props){
      super(props);
      this.state ={ isLoading: true, dataSource: []};
  }

  componentWillMount(){

        var course = "MA 16500"
        var startTime = "3:00"
        var endTime = "9:00"

        var config = {
          apiKey: "AIzaSyB2cxEKpYdG9HMSmk3dpf0FIfFnUYog8sg",
          authDomain: "purdueplanner-22f3f.firebaseapp.com",
          databaseURL: "https://purdueplanner-22f3f.firebaseio.com",
          projectId: "purdueplanner-22f3f",
          storageBucket: "purdueplanner-22f3f.appspot.com",
          messagingSenderId: "358266043933"
        };
        if (!firebase.apps.length) {
        firebase.initializeApp(config);}
        database = firebase.database();
        let retrnValue = firebase
        .database()
        .ref('studyGroups/')
        .once('value')
        .then((snapshot) => {
          let rawvalue = snapshot.val();
          var resultValue = [];

          for (var i in rawvalue){
            rawvalue[i]["key"] = i;
            resultValue.push(rawvalue[i]);
          }

          this.setState({
            isLoading: false,
            dataSource: resultValue,
          });
        });
        return;
  }

/*
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
      {this.state.dataSource.map((item, index) => {
        return (

            //<GroupCard title={item.course} startTime={item.timeStart} endTime={item.timeEnd} course={item.course} location={item.location} description={item.description}/>
        )
      }*/

      render() {
        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator/>
            </View>
          )
        }
        //const { navigation } = this.props;
        //console.log("Props:",this.props);
        console.log(this.state.dataSource);
        return (
          /*

          */
          <View style={styles.buttonContainer}>
          <ScrollView>
          {this.state.dataSource.map((item, index) => {
            return (
                <GroupCard title={item.course} startTime={item.timeStart} endTime={item.timeEnd} course={item.course} location={item.location} description={item.description}/>
            )
          })}
          </ScrollView>
          </View>
        );
      }


}
export default withNavigation(AllGroups);

const styles = StyleSheet.create({
  space: {
    flex:3,
    flexDirection:'column',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 35,
    //backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    //backgroundColor: '#841584',
    //backgroundColor:'#00BCD4',
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    borderRadius:20,
    padding: 0,
    flex:5
  },
  buttonTextContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  },
  buttonText: {
    textAlign:'center',
    color:'#fff',
    fontSize:45,
    //deleted sanfrancisco
  },
});

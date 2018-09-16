import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, ScrollView, Alert} from 'react-native';
import { Constants } from 'expo';
import { StackNavigator, navigationOptions } from "react-navigation";

//import styles from 'App.js';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.19.1
import MyGroupScreen from './MyGroupScreen';
import GroupCard from './GroupCard';

const buttons = [
  //{ name: 'Monster Truck Rally',description: 'VROOM', attendees: [users.daniel, users.chris]},
];

export default class CardHolder extends React.Component {
  
  render() {
    //const { navigation } = this.props;
    //console.log("Props:",this.props);
    return (
      /*
      
      */
      <View style={styles.buttonContainer}>
      <ScrollView>
        <GroupCard title='I <3 ReactNative' startTime='1:00AM' endTime='2:00AM' course='' location='' description=''/>
        <GroupCard title='Python is Life' startTime='3:00AM' endTime='4:00AM'/>
        <GroupCard title='Python is Life' startTime='3:00AM' endTime='4:00AM'/>
        <GroupCard title='Python is Life' startTime='3:00AM' endTime='4:00AM'/>
        <GroupCard title='Python is Life' startTime='3:00AM' endTime='4:00AM'/>
      </ScrollView>
      </View>
    );
  }
}

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
    justifyContent: 'column',
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
    fontFamily:'San Francisco',
  },
});


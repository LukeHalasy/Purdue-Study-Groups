import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, Alert} from 'react-native';
import { Constants } from 'expo';
import { StackNavigator, navigationOptions } from "react-navigation";

//import styles from 'App.js';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.19.1
//import MyGroupScreen from './MyGroupScreen';

const buttons = [
  //{ name: 'Monster Truck Rally',description: 'VROOM', attendees: [users.daniel, users.chris]},
];

export default class OutScreen extends React.Component {
  
  onJoinPress = () => {
    this.props.navigation.push('Home');
  }
  render() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onJoinPress}
        >
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}> {this.props.title} </Text>
          </View>
        </TouchableOpacity>
       <Button 
       onPress={this.onJoinPress}
       title={this.props.title}
       />

       <Button
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='JOIN GROUP' />
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


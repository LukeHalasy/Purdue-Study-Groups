import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, Alert} from 'react-native';
import { Constants } from 'expo';
import { StackNavigator, navigationOptions } from "react-navigation";

//import styles from 'App.js';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.19.1
import MyGroupScreen from './MyGroupScreen';

const buttons = [
  //{ name: 'Monster Truck Rally',description: 'VROOM', attendees: [users.daniel, users.chris]},
];

export default class GroupCard extends React.Component {
  onJoinPress = () => {
    Alert.alert('Joining Group...');
    this.props.navigation.navigate(
    'StudyProfile',
    { user },
    );
  }

  render() {
    //const { navigation } = this.props;
    //console.log("Props:",this.props);
    return (
      <Card 
        title={this.props.title}
        titleStyle={styles.conceptText}
        >
        <Text style={styles.cardText}>
          {this.props.startTime} - {this.props.endTime}
        </Text>
        <Button
          onPress = onJoinPress
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='JOIN GROUP' />
      </Card>
    //  </View>
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
  conceptText:{
    textAlign:'center',
    //color:'#fff',
    fontSize:30,
    fontFamily:'San Francisco',
    //marginBottom: 10,
  },

  cardText: {
    textAlign:'center',
    //color:'#fff',
    fontSize:20,
    fontFamily:'San Francisco',
  },
});


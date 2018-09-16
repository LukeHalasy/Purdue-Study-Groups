import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, Alert} from 'react-native';
import { Constants } from 'expo';

//import styles from 'App.js';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.19.1

// You can import from local files
import AssetExample from './AssetExample';

export default class Choose extends React.Component {
  onPressFindGroups = () => {
    Alert.alert('Finding Groups...');
  }
  onLongPressFindGroups = () => {
    Alert.alert('Choose Concepts...');
  }
  onPressMakeGroups = () => {
    Alert.alert('Making Groups...');
  }
  onPressMyGroups = () => {
    Alert.alert('Opening Groups...');
  }
  render() {
    return (
      /*
      <Card title="Find Groups">
        <Text style={styles.paragraph}>
          New Groups!
        </Text>
      </Card>
      */
      <View style={styles.buttonContainer}>
       <View style={styles.space}></View>
        
        <TouchableOpacity
          onPress={this.onPressFindGroups}
          onLongPress={this.onLongPressFindGroups}
          style={styles.button}
        >
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}> Find Groups              </Text>
          </View>
        </TouchableOpacity>
        
        <View style={styles.space}></View>
        <TouchableOpacity
          onPress={this.onPressMakeGroups}
          style={styles.button}
        >
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}> Make Groups              </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.space}></View>
        <TouchableOpacity
          onPress={this.onPressMyGroups}
          style={styles.button}
        >
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}> My Groups              </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.space}></View>
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


import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';
import Icon from './Icon';

export default class Title extends React.Component {
  render() {
    return (
      <View style={styles.header}>

        //left icon
        <View style={styles.sideIconContainerLeft}>
          <Icon/>
        </View>

        //center title
        <View>
          <Text style={styles.niceTitle}>
            {this.props.title}
          </Text>
        </View>

        //right icon
        <View style={styles.sideIconContainerRight}>
          <Icon/>
        </View>

      </View>
    );
  }
}
const iconMargin = 15;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
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
  sideIconContainerLeft: {
    flex:1,
    flexDirection:'center',
    alignItems:'center',
    backgroundColor:'D1BCE3',
    marginRight:iconMargin,
  },
  sideIconContainerRight: {
    flex:1,
    flexDirection:'center',
    alignItems:'center',
    backgroundColor:'D1BCE3',
    marginLeft:iconMargin,
  },
  titleContainer:{
    alignItems:'center',
    flex:2,
  },
  header: {
    //25 good for iphone8+
    paddingTop: 25,
    padding: 20,
    backgroundColor: 'skyblue',
    flexDirection:'row',
  },
  niceTitle: {
    textAlign: 'center',

    color:'#fff',
    fontSize: 35,
    fontWeight: 'bold',

    alignItems: 'center',
    alignSelf: 'stretch',
  },
});


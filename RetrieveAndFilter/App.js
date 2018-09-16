import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert,FlatList, ActivityIndicator, } from 'react-native';
import firebase from "firebase";
export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: '',lap: 'sid'};
  }
  render() {
  let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };


    function readData() {
      return firebase
      .database()
      .ref('studyGroups/')
      .once('value')
      .then(function(snapshot) {
      console.log(snapshot.val());
    });
}

    return (
      <View  style={{flex: 1, flexDirection: 'column',justifyContent: 'space-between',}}>
        <Text style={{flex: 1, backgroundColor: 'powderblue'}}>Opene up App.js to start working on your app!</Text>
        <Image source={pic} style={{width: 193, height: 110}} />
        <Hail  />
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({lap:text})}
        />
        <Button
            onPress={() => {
            Alert.alert();
            }}
            title="点我！"
             color="#841584"
        />
        <BlinkPurdue text = {this.state.lap}/>
      </View>
    );
  }
}

class Hail extends React.Component{
    render() {
        return(
          <Text>Hail</Text>);
    }
 }


class BlinkPurdue extends React.Component{
    constructor(props) {
        super(props);
        this.state = {showText:true};
        setInterval(() => {
        this.setState(previousState => {
        return{showText:!previousState.showText };})

        }, 1000)
    }
    render(){
    let display = this.state.showText ?this.props.text : '';
    return(
    <Text style={{flex: 1, backgroundColor: 'powderblue'}}>{display}</Text>);}


}



export default class TableView extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true};
  }

  componentDidMount(){
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
    firebase.initializeApp(config);
    database = firebase.database();
    let retrnValue = firebase
    .database()
    .ref('studyGroups/')
    .once('value')
    .then((snapshot) => {
      let rawvalue = snapshot.val();
      var resultValue = [];
      for (var i in rawvalue){
        console.log(rawvalue[i]);
        rawvalue[i]["key"] = i;
        resultValue.push(rawvalue[i]);
      }
      console.log("**********************");
      console.log(resultValue);
      for (var i = resultValue.length - 1; i >= 0; --i) {
          if (!(resultValue[i].course === course)){
            resultValue.splice(i,1)
          }
      }

      this.setState({
        isLoading: false,
        dataSource: resultValue,
      });
    });
    return;
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    else{
      return(
        <View style={styles.container}>

        <FlatList
        data= {this.state.dataSource}
        renderItem={this.renderCells}
      />
        </View>
      );
    }
  }

  renderCells({ item }) {
  return (
    <View style={styles.cellContainer}>
      <Text style={styles.title}>{item.course}</Text>
      <View style={styles.smallerContainer}>
        <Text style={styles.content}>Starts:{item.timeStart}</Text>
        <Text style={styles.content}>Ends:{item.timeEnd}</Text>
        <Text style={styles.content}>Location:{item.location}</Text>
      </View>
      <View style={styles.smallerContainer}>
        <Text style={styles.content}>Description:{item.description}</Text>
      </View>
    </View>
  );
}

}


var styles = StyleSheet.create({
  cellContainer: {
    height: 80,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "powderblue"
  },
  smallerContainer: {
    height: 40,
    flex: 3,
    flexDirection: "row"
  },
  title: {
    flex: 1,
    fontSize: 20,
    marginBottom: 8,
    textAlign: "center"
  },
  content: {
    flex: 1,
    textAlign: "center"
  },
  list: {
    paddingTop: 20,
    backgroundColor: "#F5FCFF"
  }
});

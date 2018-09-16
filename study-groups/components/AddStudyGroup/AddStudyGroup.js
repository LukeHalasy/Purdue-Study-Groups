import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import t from 'tcomb-form-native';
import { importInputToDatabase } from './importInputToDatabase';

const Form = t.form.Form;

const addGroup = t.struct({
  timeStart: t.String,
  timeEnd: t.String,
  course: t.String,
  location: t.String,
  description: t.String
});

export default class AddStudyGroup extends Component {
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value

    importInputToDatabase(
      value,
      this.props.navigation.getParam('email', 'N/A')
    );

    this.props.navigation.navigate('MyGroups');
  };

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref={c => (this._form = c)} // assign a ref
          type={addGroup}
        />
        <Button title="Save" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff'
  }
});

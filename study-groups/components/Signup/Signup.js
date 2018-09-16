import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import t from 'tcomb-form-native';
import { importUserToDatabase } from './importUserToDatabase';

const Form = t.form.Form;

const addUser = t.struct({
  email: t.String,
  name: t.String,
  password: t.String,
  phone: t.String
});

var options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    }
  }
};

export default class Signup extends React.Component {
  handleSubmit = () => {
    const value = this._form.getValue();

    importUserToDatabase(value);
  };

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref={c => (this._form = c)} // assign a ref
          type={addUser}
          options={options}
        />
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

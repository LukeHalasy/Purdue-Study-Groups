import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import t from 'tcomb-form-native';
import { authenticate, getUniqueID } from './authenticateLogin';

const Form = t.form.Form;

const userLogin = t.struct({
  email: t.String,
  password: t.String
});

var options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    }
  }
};

export default class Login extends React.Component {
  handleSubmit = () => {
    const value = this._form.getValue();

    if (authenticate(value)) {
      //Log the user in by passing their email to the next Component
      //value.email
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref={c => (this._form = c)} // assign a ref
          type={userLogin}
          options={options}
        />
        <Button title="Submit" onPress={this.handleSubmit} />
        <Button title="Sign Up" onPress={this.handleSubmit} />
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

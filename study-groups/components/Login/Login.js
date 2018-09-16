import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import t from 'tcomb-form-native';
import { authenticate, getUniqueID } from './authenticateLogin';
import { withNavigation } from 'react-navigation';

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
      this.props.navigation.push('Home', { email: value.email });
    }
  };

  handleSignUpSubmit = () => {
    this.props.navigation.push('Signup');
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
        <Button title="Sign Up" onPress={this.handleSignUpSubmit} />
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

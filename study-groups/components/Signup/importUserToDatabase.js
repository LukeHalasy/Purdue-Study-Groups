import '../../database/database';
import firebase from 'firebase';

database = firebase.database();

export function importUserToDatabase(value) {
  console.log(value);

  var pushKey = database.ref('Users/').push().key;
  var updates = {};

  updates['Users/' + pushKey] = {
    email: value.email,
    name: value.name,
    password: value.password,
    phone: value.phone
  };

  return database.ref().update(updates);
}

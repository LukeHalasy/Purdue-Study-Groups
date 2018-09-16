import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyB2cxEKpYdG9HMSmk3dpf0FIfFnUYog8sg',
  authDomain: 'purdueplanner-22f3f.firebaseapp.com',
  databaseURL: 'https://purdueplanner-22f3f.firebaseio.com',
  projectId: 'purdueplanner-22f3f',
  storageBucket: 'purdueplanner-22f3f.appspot.com',
  messagingSenderId: '358266043933'
};

firebase.initializeApp(config);
database = firebase.database();

export function importUserToDatabase(value) {
  console.log(value);

  var pushKey = database.ref('Users/').push().key;
  var updates = {};

  updates['Users/' + pushKey] = {
    email: value.email,
    name: value.name,
    password: value.password,
    phone: value.phone,
    groups: []
  };

  return database.ref().update(updates);
}

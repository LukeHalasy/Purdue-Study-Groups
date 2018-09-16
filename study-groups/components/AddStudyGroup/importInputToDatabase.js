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

export function importInputToDatabase(value) {
  console.log(value);

  var pushKey = database.ref('studyGroups/').push().key;
  var updates = {};

  updates['studyGroups/' + pushKey] = {
    id: key,
    timeStart: value.timeStart,
    timeEnd: value.timeEnd,
    course: value.course,
    location: value.location,
    description: value.description
  };

  return database.ref().update(updates);  
}

export function deleteInputInDatabase(id) {
  console.log(id);
  database.ref('studyGroups/' + id).remove();
}


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

// todo: wire this function to a React component
export function deleteInputInDatabase(id) {
  console.log(id);
  database.ref('studyGroups/' + id).remove();
}

// search for groups based on starting time
// returns an array of objects
export function searchTimeStart(timeStart) {
  console.log('time start is ' + timeStart);

  var result = [];

  database.ref('studyGroups/')
          .once('value')
          .then(snapshot => {
            var data = snapshot.val();

            for (var k in data) {
              if (data[k].timeStart == timeStart) {
                result.push(data[k]);
              } 
            }
          });

  return result;
}

// search for groups based on ending time
// returns an array of objects
export function searchTimeEnd(timeEnd) {
  console.log('time end is ' + timeEnd);

  var result = [];

  database.ref('studyGroups/')
          .once('value')
          .then(snapshot => {
            var data = snapshot.val();

            for (var k in data) {
              if (data[k].timeEnd == timeEnd) {
                result.push(data[k]);
              } 
            }
          });

  return result;
}

// search for groups based on course
// returns an array of objects
export function searchCourse(course) {
  console.log('course is ' + course);

  var result = [];

  database.ref('studyGroups/')
          .once('value')
          .then(snapshot => {
            var data = snapshot.val();

            for (var k in data) {
              if (data[k].course == course) {
                result.push(data[k]);
              } 
            }
          });

  return result;
}

// automatically delete expired groups based on ending time
export function deleteExpiredGroups() {
  database.ref('studyGroups/')
          .once('value')
          .then(snapshot => {
            var data = snapshot.val();
            var currentTime = 10000000;

            for (var k in data) {
              // todo: compare time
              if (data[k].timeEnd > currentTime) {
                database.ref('studyGroup/' + data[k].id).remove();
              }
            }
          });
}
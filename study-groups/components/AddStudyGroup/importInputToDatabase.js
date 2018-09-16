import '../../database/database';
import firebase from 'firebase';

database = firebase.database();

database = firebase.database();

export function importInputToDatabase(value, email) {
  console.log('emailimport:', email);

  var pushKey = database.ref('studyGroups/').push().key;
  var updates = {};

  updates['studyGroups/' + pushKey] = {
    id: pushKey,
    timeStart: value.timeStart,
    timeEnd: value.timeEnd,
    course: value.course,
    location: value.location,
    users: [],
    description: value.description,
    members: [email]
  };

  return database.ref().update(updates);
}

// add user to group
export function addUserToGroup(user, group) {
  console.log('add ' + user.email + ' to ' + group.id);

  var updates = {};
  updates['studyGroups/' + group.id].users.push(user.email);
  updates['Users/' + user.email].groups.push(group.id);

  database.ref().update(updates);
}

// todo: wire this function to a React component
export function deleteGroupInDatabase(group) {
  console.log(group);
  database.ref('studyGroups/' + group.id).remove();
}

// search all
export function searchAll() {
  database
    .ref('studyGroups/')
    .once('value')
    .then(snapshot => {
      return snapshot.val();
    });
}

// search for groups based on starting time
// returns an array of objects
export function searchTimeStart(timeStart) {
  console.log('time start is ' + timeStart.toString());

  var result = [];

  database
    .ref('studyGroups/')
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

  database
    .ref('studyGroups/')
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

  database
    .ref('studyGroups/')
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
  database.ref('studyGroups/').on('value'),
    snapshot => {
      var data = snapshot.val();
      var currentTime = new Date();

      for (var k in data) {
        if (data[k].timeEnd > currentTime.getTime()) {
          database.ref('studyGroup/' + data[k].id).remove();
        }
      }
    };
}

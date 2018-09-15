var submitButton;
var database;

function setup() {
  submitButton = createButton('submit');
  submitButton.mousePressed(submitScore);

  var config = {
    apiKey: 'AIzaSyDL6Q2GnXaUaUSu2xtBZxAqD8IpDXioBmo',
    authDomain: 'playground-cc2e1.firebaseapp.com',
    databaseURL: 'https://playground-cc2e1.firebaseio.com',
    projectId: 'playground-cc2e1',
    storageBucket: 'playground-cc2e1.appspot.com',
    messagingSenderId: '139741855732'
  };

  firebase.initializeApp(config);
  database = firebase.database();
}

function submitScore() {
  database.ref('studyGroups/').push({
    name: 'The dudes of Purdue',
    startTime: '3:15',
    endTime: '4:00',
    members: JSON.stringify(['Prakrit', 'Luke', 'Some Dude']),
    courseName: 'CS18000',
    details: 'Were gonna meme boys'
  });
}

function readData() {
  return firebase
    .database()
    .ref('studyGroups/')
    .once('value')
    .then(function(snapshot) {
      console.log(snapshot.val());
      // ...
    });
}

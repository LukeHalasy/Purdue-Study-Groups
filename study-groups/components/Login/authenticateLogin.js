import '../../database/database';
import firebase from 'firebase';

database = firebase.database();

export async function authenticate(value) {
  let authenticated = await database
    .ref('Users/')
    .once('value')
    .then(function(snapshot) {
      users = snapshot.val();
      emailPasswordCombos = {};
      for (var i in users) {
        emailPasswordCombos[users[i].email] = users[i].password;
      }

      if (value.email in emailPasswordCombos) {
        if (value.password === emailPasswordCombos[value.email]) {
          Promise.resolve(true);
        }
      }
      Promise.resolve(false);
    });

  return authenticated;
}

export async function getUniqueID(value) {
  let userID = await database
    .ref('Users/')
    .once('value')
    .then(function(snapshot) {
      users = snapshot.val();
      userID = 0;
      for (var i in users) {
        if (value.email === users[i].email) {
          console.log(users[i]);
          userID = users[i];
        }
      }

      Promise.resolve(userID);
    });

  return userID;
}

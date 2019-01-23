import firebase from 'firebase';
require('firebase/firestore')

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA9KUdRiQNwvpeK1VZ2f0ExbP-FlpeK3z8",
    authDomain: "simple-app-firebase.firebaseapp.com",
    databaseURL: "https://simple-app-firebase.firebaseio.com",
    projectId: "simple-app-firebase",
    storageBucket: "simple-app-firebase.appspot.com",
    messagingSenderId: "13139245550"
  };
  firebase.initializeApp(config);

  export const db = firebase.firestore();
import firebase from "firebase";
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyDJbLc7vgu03YdYWvN9FbMJyTxGuGDFiGQ",
    authDomain: "student-assistant-7d566.firebaseapp.com",
    projectId: "student-assistant-7d566",
    storageBucket: "student-assistant-7d566.appspot.com",
    messagingSenderId: "542509192371",
    appId: "1:542509192371:web:2aea5760fe69a4200c0cc6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
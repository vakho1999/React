import firebase from "firebase/app"
import "firebase/auth";

 const database = firebase.initializeApp({
    apiKey: "AIzaSyDjDEyeOoJFHeTi_X10UdZxTdutcTnM3lM",
    authDomain: "davaleba3.firebaseapp.com",
    projectId: "davaleba3",
    storageBucket: "davaleba3.appspot.com",
    messagingSenderId: "163301506841",
    appId: "1:163301506841:web:e077c6ff3d046f5b8c4f88",
    measurementId: "G-T9B738VVXM"
});

export default database;
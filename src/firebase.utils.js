import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBkOHXnvowuTeQYSCqXXn2irWS3rknYSGo",
    authDomain: "imessage-cloned-b8e28.firebaseapp.com",
    databaseURL: "https://imessage-cloned-b8e28-default-rtdb.firebaseio.com",
    projectId: "imessage-cloned-b8e28",
    storageBucket: "imessage-cloned-b8e28.appspot.com",
    messagingSenderId: "5803393794",
    appId: "1:5803393794:web:a33f2b4eb7b6a87b9e381b",
    measurementId: "G-F2LNXYYFP5"
  };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();

    export { auth, provider };
    export default db;
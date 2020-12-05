import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBkOHXnvowuTeQYSCqXXn2irWS3rknYSGo",
    authDomain: "imessage-cloned-b8e28.firebaseapp.com",
    projectId: "imessage-cloned-b8e28",
    storageBucket: "imessage-cloned-b8e28.appspot.com",
    messagingSenderId: "5803393794",
    appId: "1:5803393794:web:86e661d7c9d0ffe29e381b",
    measurementId: "G-L457G5F66V"
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();

    export { auth, provider };
    export default db;
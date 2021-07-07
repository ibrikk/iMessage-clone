import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDgJj5S2-1ry7CDswALK1D8dwxDniqFn8Y",
    authDomain: "imessage-clone-da35b.firebaseapp.com",
    projectId: "imessage-clone-da35b",
    storageBucket: "imessage-clone-da35b.appspot.com",
    messagingSenderId: "130994279856",
    appId: "1:130994279856:web:744e9c7bc19e6141f57275",
    measurementId: "G-99PYXQE1YR"
  };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();

    export { auth, provider };
    export default db;
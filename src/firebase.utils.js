import firebase from 'firebase';

const firebaseConfig = {
        apiKey: "AIzaSyCJUGYTve5WJr3sQU9iVCm6XAibbHEqYZc",
        authDomain: "imessage-clone-cc9a4.firebaseapp.com",
        databaseURL: "https://imessage-clone-cc9a4.firebaseio.com",
        projectId: "imessage-clone-cc9a4",
        storageBucket: "imessage-clone-cc9a4.appspot.com",
        messagingSenderId: "36089156298",
        appId: "1:36089156298:web:345ad4be61973528ef5a33",
        measurementId: "G-D5E9ZRMT9B"
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();

    export { auth, provider };
    export default db;
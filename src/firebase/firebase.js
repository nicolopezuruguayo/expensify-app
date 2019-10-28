import * as firebase from 'firebase';

// Your web app's Firebase configuration
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

// const config = {
//     apiKey: "AIzaSyBFnoHFREGuqzrnfqHIis3tfJsIZKLLhWM",
//     authDomain: "expensify-test-4ff2f.firebaseapp.com",
//     databaseURL: "https://expensify-test-4ff2f.firebaseio.com",
//     projectId: "expensify-test-4ff2f",
//     storageBucket: "expensify-test-4ff2f.appspot.com",
//     messagingSenderId: "641913712552",
//     appId: "1:641913712552:web:f419180c7bb7baba66379d"
// };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

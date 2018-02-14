import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAiI-_bFdLjQ927fBFtiUnQmiXB_fZCa-k",
    authDomain: "lunch-rush-9a62c.firebaseapp.com",
    databaseURL: "https://lunch-rush-9a62c.firebaseio.com",
    projectId: "lunch-rush-9a62c",
    storageBucket: "lunch-rush-9a62c.appspot.com",
    messagingSenderId: "125452616350"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// Firebase console > auth > sign in method > enable (in this case only google), then import auth and google auth in components
// The signin in will return a promise to use .then and do something with it. Firebase also fires an event every time the state of their authentification changes

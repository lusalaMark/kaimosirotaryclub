import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4zK-PkdzzuqR43Kmchoihf779RPHiXQg",
  authDomain: "kaimosirotaryclub-d3c4c.firebaseapp.com",
  projectId: "kaimosirotaryclub-d3c4c",
  storageBucket: "kaimosirotaryclub-d3c4c.appspot.com",
  messagingSenderId: "498998919508",
  appId: "1:498998919508:web:c579c70c53a531d69508c1",
  measurementId: "G-6QKCHCC23T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

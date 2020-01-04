import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDWUbUTRRmaOfyDv6J38R6dacq9TT9sqiQ",
  authDomain: "crown-db-efa2e.firebaseapp.com",
  databaseURL: "https://crown-db-efa2e.firebaseio.com",
  projectId: "crown-db-efa2e",
  storageBucket: "crown-db-efa2e.appspot.com",
  messagingSenderId: "871969322058",
  appId: "1:871969322058:web:20063c641f5387aefa62b3",
  measurementId: "G-BP5FGYK6GE"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
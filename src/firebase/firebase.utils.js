import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA-nn-6qsu9OCOCkyBTES4kPmYfsgaruZM",
  authDomain: "crown-db-f1cf4.firebaseapp.com",
  databaseURL: "https://crown-db-f1cf4.firebaseio.com",
  projectId: "crown-db-f1cf4",
  storageBucket: "crown-db-f1cf4.appspot.com",
  messagingSenderId: "778530578623",
  appId: "1:778530578623:web:5deb04415c2baa13eea60a",
  measurementId: "G-N9E7N044CL",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const obj = {
      displayName,
      email,
      createdAt,
      ...additionalData,
    };
    try {
      await userRef.set(obj);
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }

  return userRef;
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accum, collection) => {
    accum[collection.title.toLowerCase()] = collection;
    return accum
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBMgMR3Z-TMZ1a9BzANB0GTMs5IPA58WsI",
  authDomain: "crown-db-14b7b.firebaseapp.com",
  projectId: "crown-db-14b7b",
  storageBucket: "crown-db-14b7b.appspot.com",
  messagingSenderId: "447182712576",
  appId: "1:447182712576:web:d7eb6da5ccec15204ccde5",
  measurementId: "G-LKL844TFG3",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

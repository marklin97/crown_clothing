import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBFsKsLNMRqN7C73Hos17XmHL6LqcvL6No",
  authDomain: "crown-clothing-d20c3.firebaseapp.com",
  projectId: "crown-clothing-d20c3",
  storageBucket: "crown-clothing-d20c3.appspot.com",
  messagingSenderId: "957413813925",
  appId: "1:957413813925:web:ed41d6ecdadc267c7da74c",
});

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  console.log("clicked");
  firebase.auth().signInWithPopup(provider);
};
export const createUserProfileDocument = async (userAuth, additionalData?) => {
  if (!userAuth) return;
  const userRef = firebase
    .firestore()
    .collection("users")
    .doc(`${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
    return userRef;
  }
};
export const auth = firebase.auth();

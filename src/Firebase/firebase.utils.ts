import firebase from "firebase/app";
import "firebase/auth";

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
export const auth = firebase.auth();

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4reJl1OsixY8_6OsBwd7IbMy0ilAzxdI",
  authDomain: "wenergieapp-792a9.firebaseapp.com",
  projectId: "wenergieapp-792a9",
  storageBucket: "wenergieapp-792a9.appspot.com",
  messagingSenderId: "854764043064",
  appId: "1:854764043064:web:3063eb449af51426631fcd",
  measurementId: "G-Q2NWR03TZT"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

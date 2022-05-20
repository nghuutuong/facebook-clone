import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyD3faWLQ8OkK8PF5bgS6CIwLW8WmPZ2YxM",
    authDomain: "facebook-clone-20a26.firebaseapp.com",
    projectId: "facebook-clone-20a26",
    storageBucket: "facebook-clone-20a26.appspot.com",
    messagingSenderId: "503121814107",
    appId: "1:503121814107:web:4fec014b0fad9707f8d57e",
    measurementId: "G-QEQ8TMKW61"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default database;
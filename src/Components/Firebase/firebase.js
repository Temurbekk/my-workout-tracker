import app from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf6rCpZy59bl9L1uJ3hVeohQj27w4R60g",
  authDomain: "my-workout-tracker-8763c.firebaseapp.com",
  databaseURL: "https://my-workout-tracker-8763c.firebaseio.com",
  projectId: "my-workout-tracker-8763c",
  storageBucket: "my-workout-tracker-8763c.appspot.com",
  messagingSenderId: "64284197756",
  appId: "1:64284197756:web:64e68a0a0754b2ab2a9af9",
  measurementId: "G-8S95KVBRYT",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    // this.db = app.database(); Later add database
  }

  /*** Authentication  ***/
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);
}

export default Firebase;

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

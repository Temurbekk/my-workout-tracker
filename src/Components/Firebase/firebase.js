import app from "firebase/app";
import "firebase/auth";
import 'firebase/database';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};



class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.database();
  }

  // Authentication from firebase
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  users = () => this.db.ref('users');
  user = uid => this.db.ref(`users/${uid}`);
  

  addActivity = (uid, activity) => {
    const ref = this.db.ref().child(`users/${uid}/activities`);
    ref.push(activity);
  };

  updateActivity = (uid, activity, activityKey) => {
    const ref = this.db.ref().child(`users/${uid}/activities/${activityKey}`);
    ref.update(activity);
  }


}

export default Firebase;



import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDy3by49PqrUItm57TleelkKf9rFswI03A",
  authDomain: "login-authentication-df431.firebaseapp.com",
  projectId: "login-authentication-df431",
  storageBucket: "login-authentication-df431.appspot.com",
  messagingSenderId: "148918830842",
  appId: "1:148918830842:web:caa89fc78429f4dde42b43"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

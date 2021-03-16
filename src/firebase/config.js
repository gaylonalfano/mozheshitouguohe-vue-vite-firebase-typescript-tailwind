import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/functions";

// TODO Change this for each project!
const firebaseConfig = {
  apiKey: "AIzaSyC3ksWIG8USY6TCNR4H-dYul2Nyasvu2Wk",
  authDomain: "mozheshitouguohe-dev.firebaseapp.com",
  projectId: "mozheshitouguohe-dev",
  storageBucket: "mozheshitouguohe-dev.appspot.com",
  messagingSenderId: "313354922497",
  appId: "1:313354922497:web:defdc3ea73c9c4d4efee00",
};

// === Init Firebase App connection to backend
const fb = firebase.initializeApp(firebaseConfig);

// === Init Services
// Initialize Authentication Service
const auth = firebase.auth(); // Or, projectAuth

// Initialize Firestore Service
// NOTE It's this that allows us to interact with our Firestore
// to add documents, retrieve collections, etc.
const db = firebase.firestore(fb); // Or, projectFirestore

// Initialize Firebase Storage Service
const storage = firebase.storage();

// Initialize Functions Service
const functions = firebase.functions();

// === Timestamp
// Let's add a timestamp FieldValue to export to other files.
// NOTE We are storing a FUNCTION REFERENCE in timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// Export it so we can import/use Firebase into other files/components
export { fb, auth, db, storage, functions, timestamp };

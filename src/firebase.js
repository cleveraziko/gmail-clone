import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-JjqR-nbODmXTDQhXSNkMCX65jd1RnB4",
  authDomain: "clone-c495d.firebaseapp.com",
  projectId: "clone-c495d",
  storageBucket: "clone-c495d.appspot.com",
  messagingSenderId: "288584189341",
  appId: "1:288584189341:web:2eee24c2d3b264ecd71b74",
  measurementId: "G-8Z4KPK7QDJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

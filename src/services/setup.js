import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';

const config = {
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER,
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
}

initFirebase();

const db = firebase.firestore();
const fn = firebase.functions();
const { FieldValue } = firebase.firestore;

// For development we recommend building a firebase emulator with the server code
// const develop = process.env.NODE_ENV === 'development';
/*
if (develop) {
  console.log('=>=>=>=>=>=>=>=>=>=>=> Corriendo en DEV =>=>=>=>=>=>=>=>=>=>=>');

  db.settings({
    host: 'localhost:8080',
    ssl: false,
  });
  fn.useEmulator('localhost', '5001');
} */
export { db, fn, FieldValue };

export default initFirebase;

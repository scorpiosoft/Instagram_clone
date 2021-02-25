// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config =
{
  apiKey: "AIzaSyDFYdcmmmPpBwFO4ZVFPL4hxTuNm69mFGY",
  authDomain: "scrimba-ic.firebaseapp.com",
  projectId: "scrimba-ic",
  storageBucket: "scrimba-ic.appspot.com",
  messagingSenderId: "899104784300",
  appId: "1:899104784300:web:09e7689e1589b52fa94409",
  measurementId: "G-Y8YEMZLPR0"
};
const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;
export { firebase, FieldValue };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL-12_fZ2r4ejHpoaWV-gmxUCxTrMV3OM",
  authDomain: "ingreso-juan-gatica.firebaseapp.com",
  projectId: "ingreso-juan-gatica",
  storageBucket: "ingreso-juan-gatica.appspot.com",
  messagingSenderId: "345010058648",
  appId: "1:345010058648:web:032ee290e701ac082da7ed",
  measurementId: "G-1PM1DJG6VL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

module.exports = { auth, db };
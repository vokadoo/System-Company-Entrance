// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAL-12_fZ2r4ejHpoaWV-gmxUCxTrMV3OM",
  authDomain: "ingreso-juan-gatica.firebaseapp.com",
  projectId: "ingreso-juan-gatica",
  storageBucket: "ingreso-juan-gatica.appspot.com",
  messagingSenderId: "345010058648",
  appId: "1:345010058648:web:032ee290e701ac082da7ed",
  measurementId: "G-1PM1DJG6VL"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firebase Authentication y obtener una referencia al servicio
const auth = getAuth(app);

// Inicializar Cloud Firestore y obtener una referencia al servicio
const db = getFirestore(app);

export { auth, db };


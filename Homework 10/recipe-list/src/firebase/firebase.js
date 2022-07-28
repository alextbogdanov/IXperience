import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5IBiJHhtMEzePHdR3FzV3gjQ2fT-J40g",
  authDomain: "recipe-list-6cfce.firebaseapp.com",
  projectId: "recipe-list-6cfce",
  storageBucket: "recipe-list-6cfce.appspot.com",
  messagingSenderId: "217076790992",
  appId: "1:217076790992:web:97fc614924b26dc51710d5",
  measurementId: "G-XPN5PNHY69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth
};
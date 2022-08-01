// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCs0I8Zr-iT90wqxTNtETk7D_0YQv6J_ik",
  authDomain: "todo-list-beb6f.firebaseapp.com",
  projectId: "todo-list-beb6f",
  storageBucket: "todo-list-beb6f.appspot.com",
  messagingSenderId: "328802051501",
  appId: "1:328802051501:web:5699a5b19bccf098e22d24",
  measurementId: "G-JR81SFX0BD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth
};
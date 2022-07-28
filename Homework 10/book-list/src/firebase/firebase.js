// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7c3hkr4lRBfKVJZzjLv_eiPniTcO7ncM",
  authDomain: "book-list-35b06.firebaseapp.com",
  projectId: "book-list-35b06",
  storageBucket: "book-list-35b06.appspot.com",
  messagingSenderId: "807279931268",
  appId: "1:807279931268:web:c775dbae53b512d0ad77d1",
  measurementId: "G-RQ11DDB2XP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {
    firestore
};
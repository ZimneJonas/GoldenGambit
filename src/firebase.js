import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, connectAuthEmulator, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously  } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFFdA1S3JcsXLBGQR7cIZAjxdtmSpYwso",
  authDomain: "gold-gambit.firebaseapp.com",
  databaseURL: "https://gold-gambit-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gold-gambit",
  storageBucket: "gold-gambit.appspot.com",
  messagingSenderId: "78132391319",
  appId: "1:78132391319:web:fbfb24d548223b889628d2",
  measurementId: "G-28551FJ1CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Connect to the emulated Firebase Auth service when running locally
if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, 'http://localhost:9099'); 
}

// Initialize Firebase Analytics
const analytics = getAnalytics(app); 

export { auth, analytics, signInAnonymously, createUserWithEmailAndPassword, signInWithEmailAndPassword };
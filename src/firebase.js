import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// If you're also using Analytics, import it as well
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

// Initialize Firebase Auth and Analytics
const auth = getAuth(app);
const analytics = getAnalytics(app);  // Only if you're using Analytics

export { auth, analytics };  // Export for use in other parts of your app

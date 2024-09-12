// src/services/firebase.js

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3FrPHDQA2r8tzlQSCI7jlKmluMzeIUMA",
  authDomain: "test-application-cae17.firebaseapp.com",
  projectId: "test-application-cae17",
  storageBucket: "test-application-cae17.appspot.com",
  messagingSenderId: "107663732548",
  appId: "1:107663732548:web:a5c83a222954a457e3b111",
  measurementId: "G-K4T4EGXGKN",
};

// Initialize Firebase only if it hasn't been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const firestore = getFirestore(app);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Export Auth and Firestore instances for use in other parts of the app
export { auth, firestore };

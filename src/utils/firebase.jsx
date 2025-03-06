// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "namastenetflix-bb6e7.firebaseapp.com",
  projectId: "namastenetflix-bb6e7",
  storageBucket: "namastenetflix-bb6e7.firebasestorage.app",
  messagingSenderId: "132257556175",
  appId: "1:132257556175:web:66ecd0256b353f3dca79ba",
  measurementId: "G-7NXDT430N8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);   

export const auth  = getAuth()

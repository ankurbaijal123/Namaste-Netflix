// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoljJCkraC7CaspxavGi_SdB2CC2Uefvc",
  authDomain: "netflixgpt-e398b.firebaseapp.com",
  projectId: "netflixgpt-e398b",
  storageBucket: "netflixgpt-e398b.firebasestorage.app",
  messagingSenderId: "1025952159582",
  appId: "1:1025952159582:web:76caa4848d5433ba8aa1cf",
  measurementId: "G-BGYNBPEHBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth  = getAuth()
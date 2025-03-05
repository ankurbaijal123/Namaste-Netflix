// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "nmastenetflix.firebaseapp.com",
  projectId: "nmastenetflix",
  storageBucket: "nmastenetflix.firebasestorage.app",
  messagingSenderId: "204618542393",
  appId: "1:204618542393:web:dca320e1595e1b47714ce8",
  measurementId: "G-0VKNETYPGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

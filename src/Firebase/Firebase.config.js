// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRm4LmX8Fz4SUeqJ7Nv5rTMH9Xsm1DIVc",
  authDomain: "mkproject-24388.firebaseapp.com",
  projectId: "mkproject-24388",
  storageBucket: "mkproject-24388.appspot.com",
  messagingSenderId: "353651175040",
  appId: "1:353651175040:web:07e41fb4acf3344c4b4065",
  measurementId: "G-Z4CVTL54RQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app
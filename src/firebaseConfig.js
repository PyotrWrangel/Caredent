// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// import database
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAM6jhGr5qUjU4UWJiqZ2Vf99K_bTbQQiw",
  authDomain: "caredent-342cb.firebaseapp.com",
  projectId: "caredent-342cb",
  storageBucket: "caredent-342cb.firebasestorage.app",
  messagingSenderId: "74994942775",
  appId: "1:74994942775:web:9c05678fdf6e15b5c490b2",
  measurementId: "G-E8MV11NVLS"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
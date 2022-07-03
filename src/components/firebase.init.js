// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBriOB54I1p3s1EArKXxkBnZShzYivk0zY",
  authDomain: "sea-basket-68514.firebaseapp.com",
  projectId: "sea-basket-68514",
  storageBucket: "sea-basket-68514.appspot.com",
  messagingSenderId: "892180971252",
  appId: "1:892180971252:web:79411451c9dc9908e628a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);


export default auth;
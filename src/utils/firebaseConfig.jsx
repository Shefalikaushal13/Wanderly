// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZO13-75umbb6DeZHImEQuz81_uj8Uv50",
  authDomain: "wanderly-67eff.firebaseapp.com",
  projectId: "wanderly-67eff",
  storageBucket: "wanderly-67eff.appspot.com",
  messagingSenderId: "866535208643",
  appId: "1:866535208643:web:7ab1b0b38ad30d2f519476",
  measurementId: "G-JWV5W4EVN3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
//const analytics = getAnalytics(app);
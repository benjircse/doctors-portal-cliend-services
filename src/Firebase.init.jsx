// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDufemqnHd4p2OcJnEgH___yf1Rff5MmAY",
  authDomain: "doctors-portal-efc18.firebaseapp.com",
  projectId: "doctors-portal-efc18",
  storageBucket: "doctors-portal-efc18.appspot.com",
  messagingSenderId: "53424696186",
  appId: "1:53424696186:web:3071ebb9d83a4fbb9084c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;
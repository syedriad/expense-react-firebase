// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmSfhSEs8s4FC5yaPXgd8CXm4y2qIqm10",
  authDomain: "expensereact-8cc4b.firebaseapp.com",
  projectId: "expensereact-8cc4b",
  storageBucket: "expensereact-8cc4b.appspot.com",
  messagingSenderId: "679579660932",
  appId: "1:679579660932:web:31aec5dac4dd24225848d1"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
// firebase login
// firebase init
// firebase deploy
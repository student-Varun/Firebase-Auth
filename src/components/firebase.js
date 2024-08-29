// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmvuzLAIaIUgJgdglt4R2Q24FjqD85fgo",
  authDomain: "login-auth-f43a9.firebaseapp.com",
  projectId: "login-auth-f43a9",
  storageBucket: "login-auth-f43a9.appspot.com",
  messagingSenderId: "942353816780",
  appId: "1:942353816780:web:4e47e5cfda1ecdcf2d7669"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;
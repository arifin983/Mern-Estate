// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1bb54.firebaseapp.com",
  projectId: "mern-estate-1bb54",
  storageBucket: "mern-estate-1bb54.appspot.com",
  messagingSenderId: "617886886515",
  appId: "1:617886886515:web:f5aadfd4c74261bbb95806"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
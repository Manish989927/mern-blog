// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VITE_FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-bb793.firebaseapp.com",
  projectId: "mern-blog-bb793",
  storageBucket: "mern-blog-bb793.appspot.com",
  messagingSenderId: "493414077638",
  appId: "1:493414077638:web:f189afe20f2384246873c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


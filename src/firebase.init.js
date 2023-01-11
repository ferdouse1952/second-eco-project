// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGihgNgwBywIT-DR2JJHj9EbxMaUwhI-8",
  authDomain: "second-eco-project.firebaseapp.com",
  projectId: "second-eco-project",
  storageBucket: "second-eco-project.appspot.com",
  messagingSenderId: "1012268031938",
  appId: "1:1012268031938:web:0b049d748b6d381afd005b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
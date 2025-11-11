// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJHZUq8wBRxf6ZAQieSDkFfP4sI6wOQPw",
  authDomain: "estatewise-563e3.firebaseapp.com",
  projectId: "estatewise-563e3",
  storageBucket: "estatewise-563e3.firebasestorage.app",
  messagingSenderId: "582070934437",
  appId: "1:582070934437:web:61a5e51f69438a7b03664c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

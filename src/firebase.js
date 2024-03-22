// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxvEI-4X8XF3eiYfRoZYIttMXr-92zcfs",
  authDomain: "repliq-auth.firebaseapp.com",
  projectId: "repliq-auth",
  storageBucket: "repliq-auth.appspot.com",
  messagingSenderId: "1754903802",
  appId: "1:1754903802:web:3b946f1c7e0244db408543",
  measurementId: "G-CY1Q2DM5VN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
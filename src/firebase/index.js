
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG9UPcIhDIp_H_kakoG9bB7OMB8SHnXiE",
  authDomain: "hopeful-buckeye-305316.firebaseapp.com",
  projectId: "hopeful-buckeye-305316",
  storageBucket: "hopeful-buckeye-305316.appspot.com",
  messagingSenderId: "359641153284",
  appId: "1:359641153284:web:6dc90ca5422e12d8945a51",
  measurementId: "G-GX7JSSZ8YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
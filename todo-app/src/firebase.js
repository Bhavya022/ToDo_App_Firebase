// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKg2g8o1T10wv6M1RdqPCRlBlo9bEeMkY",
  authDomain: "puppy-app-a8ce5.firebaseapp.com",
  databaseURL: "https://puppy-app-a8ce5-default-rtdb.firebaseio.com",
  projectId: "puppy-app-a8ce5",
  storageBucket: "puppy-app-a8ce5.appspot.com",
  messagingSenderId: "817032188178",
  appId: "1:817032188178:web:d14bea14499262cba723cb",
  measurementId: "G-33XFLB23W5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
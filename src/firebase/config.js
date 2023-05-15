// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// import { getEnvironments } from "../helpers";

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
  VITE_MEASUREMENTID,
} = import.meta.env;
// } = getEnvironments();
// console.log(env);

//Production
// const firebaseConfig = {
//   apiKey: "AIzaSyBvfGfHNLbne3SuSy35GS6rWy3zoijZa4I",
//   authDomain: "quintero-journal-react.firebaseapp.com",
//   projectId: "quintero-journal-react",
//   storageBucket: "quintero-journal-react.appspot.com",
//   messagingSenderId: "104941994153",
//   appId: "1:104941994153:web:3c1719fd9c0f53b9dee9b8",
//   measurementId: "G-17DD7VBBWS",
// };
//testing
// const firebaseConfig = {
//   apiKey: "AIzaSyB-dSK2mxjsQvyZL0Y-eyyIGorYU-W8Az8",
//   authDomain: "quintero-journal-react-testing.firebaseapp.com",
//   projectId: "quintero-journal-react-testing",
//   storageBucket: "quintero-journal-react-testing.appspot.com",
//   messagingSenderId: "157541735903",
//   appId: "1:157541735903:web:b3371053ae6a1f062ef86a",
//   measurementId: "G-5CTMBYLHVD",
// };
const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
  measurementId: VITE_MEASUREMENTID,
};
// console.log(firebaseConfig);

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

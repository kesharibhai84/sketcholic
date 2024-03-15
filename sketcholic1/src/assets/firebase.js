// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import {getfirestore} from "@firebase/firestore" ;
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC29mZZ5webPhy42sFF7Ywx-pF2BVegpHc",
  authDomain: "sketcholic-89e0d.firebaseapp.com",
  projectId: "sketcholic-89e0d",
  storageBucket: "sketcholic-89e0d.appspot.com",
  messagingSenderId: "191998203972",
  appId: "1:191998203972:web:3bca6226010343d3fe4411",
  measurementId: "G-506887486G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const firestore =getfirestore(app);
const auth =getAuth();
 

export { app, auth };

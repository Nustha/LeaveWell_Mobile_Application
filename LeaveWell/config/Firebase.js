// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// import { getAnalytics } from "firebase/analytics";
// import Constants from "expo";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
// import 'firebase/storage';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAy9gawK-Axb9pkiA3yUJkTSYFtMM9rhAs",
    authDomain: "leavewell-a3b8d.firebaseapp.com",
    projectId: "leavewell-a3b8d",
    storageBucket: "leavewell-a3b8d.appspot.com",
    messagingSenderId: "509780726002",
    appId: "1:509780726002:web:77c41444a1a741e83c806b",
    measurementId: "G-4H1TB0XL5E"
};


// Initialize Firebase
// if (!firebase.apps.length) {
//     initializeApp(firebaseConfig);
// }
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
const auth = getAuth(app);
// module.exports=auth;
export const db = getFirestore(app);

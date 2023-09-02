import firebase from 'firebase/app';
import 'firebase/auth';
import Constants from 'expo-constants';

// Initialize Firebase
const firebaseConfig = {
    apiKey: Constants.manifest.extra.apiKey,
    authDomain: Constants.manifest.extra.authDomain,
    projectId: Constants.manifest.extra.projectId,
    storageBucket: Constants.manifest.extra.storageBucket,
    messagingSenderId: Constants.manifest.extra.messagingSenderId,
    appId: Constants.manifest.extra.appId
};

let Firebase;

if (firebase.apps.length === 0) {
    Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import Constants from "expo";


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAy9gawK-Axb9pkiA3yUJkTSYFtMM9rhAs",
//     authDomain: "leavewell-a3b8d.firebaseapp.com",
//     projectId: "leavewell-a3b8d",
//     storageBucket: "leavewell-a3b8d.appspot.com",
//     messagingSenderId: "509780726002",
//     appId: "1:509780726002:web:77c41444a1a741e83c806b",
//     measurementId: "G-4H1TB0XL5E"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
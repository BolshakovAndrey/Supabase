import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_kG-1uJSklIufZqg3Z962-1hibAzivJU",
    authDomain: "testconcept-82432.firebaseapp.com",
    projectId: "testconcept-82432",
    storageBucket: "testconcept-82432.appspot.com",
    messagingSenderId: "1070490335189",
    appId: "1:1070490335189:web:6d204d47b2aeaea5e72f5c",
    measurementId: "G-DZ0XC8DQ19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

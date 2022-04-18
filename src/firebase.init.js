// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBX2LilgwWIjjREpb2oTsU1UP-C-C_z1PE",
    authDomain: "ema-john-simple-authenti-5c01d.firebaseapp.com",
    projectId: "ema-john-simple-authenti-5c01d",
    storageBucket: "ema-john-simple-authenti-5c01d.appspot.com",
    messagingSenderId: "337758270463",
    appId: "1:337758270463:web:57752a19e82bd896aa2dca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
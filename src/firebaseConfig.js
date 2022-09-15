// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getfirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1pBATDyZSUNVIsigQM4BrprVk0BgjQf0",
  authDomain: "bicicletas-898cc.firebaseapp.com",
  projectId: "bicicletas-898cc",
  storageBucket: "bicicletas-898cc.appspot.com",
  messagingSenderId: "935382928782",
  appId: "1:935382928782:web:449b30d125ac85df46a8df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getfirestore(app);
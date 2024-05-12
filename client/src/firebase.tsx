// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj2IVD5mnk3Gq5HMAvztsVEZNJ7lW16Ao",
  authDomain: "ecobosnia-c291a.firebaseapp.com",
  projectId: "ecobosnia-c291a",
  storageBucket: "ecobosnia-c291a.appspot.com",
  messagingSenderId: "837598193699",
  appId: "1:837598193699:web:32b8b3cd047a06e1f46996"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);

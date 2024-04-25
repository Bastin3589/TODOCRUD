// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxGAR4W5Qc4aIXGRbnVtN5GCu0VlA1K6E",
  authDomain: "vue-todo-crud-9be17.firebaseapp.com",
  projectId: "vue-todo-crud-9be17",
  storageBucket: "vue-todo-crud-9be17.appspot.com",
  messagingSenderId: "865275618448",
  appId: "1:865275618448:web:b559c0c69aff2d30472415",
  measurementId: "G-0R60ND7Y6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
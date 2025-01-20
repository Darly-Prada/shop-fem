import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBUoGKQRdHmH0sqmh2I4s3X4lPEL6KdOTo",
  authDomain: "ecommerce-shopfem.firebaseapp.com",
  projectId: "ecommerce-shopfem",
  storageBucket: "ecommerce-shopfem.firebasestorage.app",
  messagingSenderId: "972676552320",
  appId: "1:972676552320:web:034c416c3e1966db27f865"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;

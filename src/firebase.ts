import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {  
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,  
  authDomain: "hwitter-reloaded-8b74b.firebaseapp.com",
  projectId: "hwitter-reloaded-8b74b",
  storageBucket: "hwitter-reloaded-8b74b.firebasestorage.app",
  messagingSenderId: "11116758234",
  appId: "1:11116758234:web:6c92511c31914d4de0d1e3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
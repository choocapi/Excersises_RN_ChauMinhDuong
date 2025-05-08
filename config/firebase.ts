// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw9AEHPM90G2YJtHmKB5GnUxK3N7UbuMw",
  authDomain: "fir-rnexcersise.firebaseapp.com",
  projectId: "fir-rnexcersise",
  storageBucket: "fir-rnexcersise.firebasestorage.app",
  messagingSenderId: "824495956175",
  appId: "1:824495956175:web:c10f6329167edae07917ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);

// Firestore
const firestore = getFirestore(app);

// Storage
const storage = getStorage(app);

export { auth, firestore, storage };


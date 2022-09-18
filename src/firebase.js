import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  deleteUser,
} from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBML7CYvnJ8Q_XeJAG3LAAZMq16CR2BT8c",

  authDomain: "disneyplus-clone-f0dfa.firebaseapp.com",

  projectId: "disneyplus-clone-f0dfa",

  storageBucket: "disneyplus-clone-f0dfa.appspot.com",

  messagingSenderId: "629955768108",

  appId: "1:629955768108:web:0ed16bd9df37f0800c0689",

  measurementId: "G-SFVZHJ6BRM",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

const storage = getStorage();

export {
  storage,
  auth,
  provider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  deleteUser
};
export default db;

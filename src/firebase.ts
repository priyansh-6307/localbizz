// apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "locbizz.firebasestorage.app",
//   messagingSenderId: "319323610198",
//   appId: "",
//   measurementId: "G-8NMQQVRPGQ"


import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD69ASrBKCFFbgfUGMZtrbgFC2TNhq3oSY",
  authDomain: "locbizz.firebaseapp.com",
  projectId: "locbizz",
  appId: "1:319323610198:web:64966c9abcf6d57b20eff7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
/**
 * Sign in user with Google account
 * @returns {Promise<import("firebase/auth").UserCredential>}
 */

const signInWithGoogle = () => signInWithPopup(auth, provider);

export { auth, signInWithGoogle };

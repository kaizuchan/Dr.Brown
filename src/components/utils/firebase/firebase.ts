import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsnDlOO3J32rajwSbTdahkHSaKOBxoRFA",
  authDomain: "dr-brown-7e306.firebaseapp.com",
  projectId: "dr-brown-7e306",
  storageBucket: "dr-brown-7e306.appspot.com",
  messagingSenderId: "784290603762",
  appId: "1:784290603762:web:54b1e1a51518da5373266b"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export {auth, provider}
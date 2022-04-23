import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCG_MWHOaZeKtqVFNI1-4QKC5rhagszWiU",
  authDomain: "todoapp-be499.firebaseapp.com",
  projectId: "todoapp-be499",
  storageBucket: "todoapp-be499.appspot.com",
  messagingSenderId: "547663306273",
  appId: "1:547663306273:web:d0d9d9cbfaffb440e04d60"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db};

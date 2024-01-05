import firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from 'firebase/app';




const firebaseConfig = {
  apiKey: "AIzaSyDBAxgze4OyJZ6DoSQ2tlhiV-mUan_W_Bk",
  authDomain: "auth-system-stream-7e29a.firebaseapp.com",
  projectId: "auth-system-stream-7e29a",
  storageBucket: "auth-system-stream-7e29a.appspot.com",
  messagingSenderId: "843178325843",
  appId: "1:843178325843:web:9ed61bf9f03f7aabdc53a6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();




export { auth, googleProvider };

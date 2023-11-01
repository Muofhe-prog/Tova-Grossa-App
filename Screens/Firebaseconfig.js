
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaBIK844HKdNtRoxqRtLjrnctdLXv5xi4",
  authDomain: "grocery-store-952a0.firebaseapp.com",
  projectId: "grocery-store-952a0",
  storageBucket: "grocery-store-952a0.appspot.com",
  messagingSenderId: "687836461216",
  appId: "1:687836461216:web:c1c521b4b68e7bb58571c5"
};


const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)
export const database = getFirestore();
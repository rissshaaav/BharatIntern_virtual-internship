// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPo3-w1rmutP2bvsAR8tF3EvSrymg0e0s",
  authDomain: "trial-438a3.firebaseapp.com",
  projectId: "trial-438a3",
  storageBucket: "trial-438a3.appspot.com",
  messagingSenderId: "270151490085",
  appId: "1:270151490085:web:999c64b93b408d1325bdcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage};
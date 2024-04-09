// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaoHjRdvzRoRFSBKPp1ugdUsuqay8A4os",
  authDomain: "king-s-portal-web.firebaseapp.com",
  projectId: "king-s-portal-web",
  storageBucket: "king-s-portal-web.appspot.com",
  messagingSenderId: "882093763532",
  appId: "1:882093763532:web:07a41c61528d1b126d8b69",
  measurementId: "G-0KS31J6CFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
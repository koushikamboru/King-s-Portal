
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAaoHjRdvzRoRFSBKPp1ugdUsuqay8A4os",
  authDomain: "king-s-portal-web.firebaseapp.com",
  projectId: "king-s-portal-web",
  storageBucket: "king-s-portal-web.appspot.com",
  messagingSenderId: "882093763532",
  appId: "1:882093763532:web:07a41c61528d1b126d8b69",
  measurementId: "G-0KS31J6CFZ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export default auth;
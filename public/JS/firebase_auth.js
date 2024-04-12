import { initializeApp } from "firebase/app";
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, linkWithCredential, reauthenticateWithCredential, signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const actionCodeSettings = {
  url: 'https://www.example.com/finishSignUp?cartId=1234',
  handleCodeInApp: true,
  iOS: { bundleId: 'com.example.ios' },
  android: { packageName: 'com.example.android', installApp: true, minimumVersion: '12' },
  dynamicLinkDomain: 'example.page.link'
};

sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => { window.localStorage.setItem('emailForSignIn', email); })
  .catch((error) => { /* Handle error */ });

if (isSignInWithEmailLink(auth, window.location.href)) {
  let email = window.localStorage.getItem('emailForSignIn');
  if (!email) email = window.prompt('Please provide your email for confirmation');
  signInWithEmailLink(auth, email, window.location.href)
    .then((result) => { window.localStorage.removeItem('emailForSignIn'); })
    .catch((error) => { /* Handle error */ });
}

const credential = EmailAuthProvider.credentialWithLink(email, window.location.href);
linkWithCredential(auth.currentUser, credential)
  .then((usercred) => { /* Success */ })
  .catch((error) => { /* Handle error */ });

reauthenticateWithCredential(auth.currentUser, credential)
  .then((usercred) => { /* Success */ })
  .catch((error) => { /* Handle error */ });

const googleProvider = new GoogleAuthProvider();
signInWithPopup(auth, googleProvider)
  .then((result) => { /* Success */ })
  .catch((error) => { /* Handle error */ });

signInWithRedirect(auth, googleProvider);

getRedirectResult(auth)
  .then((result) => { /* Success */ })
  .catch((error) => { /* Handle error */ });

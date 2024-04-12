import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "./firebase-config";

// Sign up with email and password
export function signUpWithEmailAndPassword(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Sign in with email and password
export function signInWithEmailAndPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Sign out
export function signOutUser() {
  return signOut(auth);
}

import { signUpWithEmailAndPassword, signInWithEmailAndPassword } from "./auth";

document.getElementById("signUpBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signUpWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Handle sign-up success
    })
    .catch((error) => {
      // Handle sign-up error
    });
});

document.getElementById("signInBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Handle sign-in success
    })
    .catch((error) => {
      // Handle sign-in error
    });
});

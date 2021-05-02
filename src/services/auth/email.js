import firebase from 'firebase/app';
import initFirebase from '../setup';
import 'firebase/auth';

initFirebase();

const auth = firebase.auth();

export const signUpWithEmail = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const signInWithEmail = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const sendEmailVerification = (user) => user.sendEmailVerification();

export const resetPassword = (email) => auth.sendPasswordResetEmail(email);

export const logout = () => auth.signOut();

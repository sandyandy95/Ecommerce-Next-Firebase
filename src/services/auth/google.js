import firebase from 'firebase/app';
import 'firebase/auth';
import initFirebase from '../setup';

initFirebase();

const auth = firebase.auth();
const fbProvider = new firebase.auth.FacebookAuthProvider();
fbProvider.addScope('email');
fbProvider.addScope('user_birthday');
fbProvider.addScope('user_friends'); // --> Debes pasar por un proceso de verificación

export const signInWithFacebook = async () => {
  const authRecord = await auth.signInWithPopup(fbProvider);
  if (!authRecord.user.emailVerified) {
    await authRecord.user.sendEmailVerification();
  }
  return authRecord;
};

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.addScope('profile');
googleProvider.addScope('email');

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

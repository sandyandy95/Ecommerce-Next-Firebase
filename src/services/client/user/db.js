import { db } from '../../setup';

const userRef = db.collection('users');

const getUserById = async ({
  uid,
  email,
  emailVerified: isEmailVerified,
  displayName,
  photoURL,
}) => {
  if (!isEmailVerified) {
    throw new Error('Email no verificado');
  }
  const snap = await userRef.doc(uid).get();
  if (snap.exists) {
    const data = snap.data();
    return data;
  }
  await userRef.doc(uid).set({
    uid,
    email,
    isEmailVerified,
    displayName,
    photoURL,
  });
  return {
    uid,
    email,
    isEmailVerified,
    displayName,
    photoURL,
  };
};

export default getUserById;

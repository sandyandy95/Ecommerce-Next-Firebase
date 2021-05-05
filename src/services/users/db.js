import { db } from '../setup';

const userRef = db.collection('users');

const getUserById = async ({
  uid,
  email,
  emailVerified: isEmailVerified,
  displayName,
  photoURL,
}) => {
  // if (providerData[0].providerId === 'google.com' ||   providerData[0].providerId === 'facebook.com' )
  // revision
  // si no existe en la base --> le agregamos en la base con registerComplete = false
  if (!isEmailVerified) {
    throw new Error('Email no verificado');
  }
  const snap = await userRef.doc(uid).get();

  if (snap.exists) {
    const data = snap.data();
    // si el registro esta completo --> devuelve la info del usuario
    return data;
    // si es que no
    // --> throw new Error( 'registro incompleto')
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

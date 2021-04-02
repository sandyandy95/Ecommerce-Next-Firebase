import { db } from '../../admin.setup';

const usersRef = db.collection('users');

// eslint-disable-next-line import/prefer-default-export
export const getUserById = async (uid) => {
  const snap = await usersRef.doc(uid).get();
  if (!snap.exists) {
    throw new Error('Redirect');
  }
  return snap.data();
};

import { db } from '../../admin.setup';

const usersRef = db.collection('users');
const productsRef = db.collection('products');

// eslint-disable-next-line import/prefer-default-export
export const getUserById = async (uid) => {
  const snap = await usersRef.doc(uid).get();
  if (!snap.exists) {
    throw new Error('Redirect');
  }
  return snap.data();
};

export const transactionUpdateUserById = async (user) =>
  db.runTransaction(async (tns) => {
    const { docs: docsProducts } = await tns.get(productsRef.where('seller.uid', '==', user.uid));
    const productsToUpdateRef = docsProducts.map((doc) => doc.ref);
    productsToUpdateRef.forEach((ref) => tns.update(ref, { seller: { ...user } }));
    tns.update(usersRef.doc(user.uid), user);
  });

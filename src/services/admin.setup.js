import * as admin from 'firebase-admin';

const firebasePrivateKeyBase64 = Buffer.from(process.env.FIREBASE_PRIVATE_KEY_BASE64, 'base64');
const firebasePrivateKey = firebasePrivateKeyBase64.toString('utf8');

const config = {
  credential: admin.credential.cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
  }),
  databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
};
const loadFirebaseAdmin = () => {
  if (!admin.apps.length) {
    admin.initializeApp(config);
  }
};
loadFirebaseAdmin();
const db = admin.firestore();

const auth = admin.auth();

const { FieldValue } = admin.firestore;

export { auth, db, FieldValue };

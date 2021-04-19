import firebase from 'firebase/app';
import initFirebase from './setup';
import 'firebase/storage';

initFirebase();

const storage = firebase.storage();

export const uploadFile = async ({ node = '/', path, file }) => {
  const ref = storage.ref(node).child(path);
  await ref.put(file);
  const url = await ref.getDownloadURL();
  return url;
};

export const deleteFile = (path) => storage.ref(path).delete();

import firebase from 'firebase/app';
import initFirebase from '../setup';
import 'firebase/storage';

initFirebase();

const storage = firebase.storage();

export const uploadFile = ({ node = '/', path, file, setProgress, callback }) => {
  const ref = storage.ref(node).child(path).put(file);
  ref.on(
    'state_changed',
    (snapshot) => {
      if (typeof setProgress === 'function') {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      }
    },
    (error) => {
      throw new Error(error);
    },
    async () => {
      if (typeof callback === 'function') {
        const url = await ref.snapshot.ref.getDownloadURL();
        callback(url);
      }
    }
  );
};

export const deleteFile = (path) => storage.ref(path).delete();

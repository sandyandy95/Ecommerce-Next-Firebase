import firebase from 'firebase/app';
import 'firebase/auth';

const auth = firebase.auth();

const getCurrentUser = () => auth.currentUser;

export default getCurrentUser;

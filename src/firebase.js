import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBlKfdbtugROg04TSPIxSb2_G-D_U5Kfp0',
  authDomain: 'accounts-410da.firebaseapp.com',
  projectId: 'accounts-410da',
  storageBucket: 'accounts-410da.appspot.com',
  messagingSenderId: '225777921385',
  appId: '1:225777921385:web:dd496399aa9bfd33a421f8',
  measurementId: 'G-CEK2H38N7E',
};

firebase.initializeApp(config);
export const db = firebase.firestore();

export default firebase;

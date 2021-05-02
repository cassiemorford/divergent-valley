import firebase from 'firebase';
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyD-_KYq3A32mOia2XT4t_H5NSUWYAybBwY',
  authDomain: 'divergent-valley.firebaseapp.com',
  projectId: 'divergent-valley',
  storageBucket: 'divergent-valley.appspot.com',
  messagingSenderId: '171697188010',
  appId: '1:171697188010:web:111ccac10a21973a03f4d3',
  measurementId: 'G-5JHX9Z2XW2',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;

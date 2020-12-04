import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBujB3PrXqMjvABKWfUd5Qe9zvZDVFiVgk',
  authDomain: 'trade-template.firebaseapp.com',
  projectId: 'trade-template',
  storageBucket: 'trade-template.appspot.com',
  messagingSenderId: '463070333962',
  appId: '1:463070333962:web:fe01cdead56d996e70a3f3',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };

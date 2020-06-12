import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyC4e25LcqHiAVkn48K7LI1awrnTybkii5k',
  authDomain: 'kentotakeuchi.firebaseapp.com',
  databaseURL: 'https://kentotakeuchi.firebaseio.com',
  projectId: 'kentotakeuchi',
  storageBucket: 'kentotakeuchi.appspot.com',
  messagingSenderId: '1032301935662',
  appId: '1:1032301935662:web:55afaf52f364055a6973bf',
};
firebase.initializeApp(firebaseConfig);
export default firebase;

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD2KOj1CnKdG5jjjkfwY-lmi1dE8fr9Pdg',
  authDomain: 'crwn-db-f8088.firebaseapp.com',
  databaseURL: 'https://crwn-db-f8088.firebaseio.com',
  projectId: 'crwn-db-f8088',
  storageBucket: '',
  messagingSenderId: '56982253233',
  appId: '1:56982253233:web:4208bb35b4eff7dcb1bc90',
  measurementId: 'G-J0MNMTBPJX'
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, data) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data
      });
    } catch (error) {
      console.log('error creating user', error.messasge);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

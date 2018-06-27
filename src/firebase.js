import * as firebase from 'firebase';
import { firebaseConfig } from 'app/configs/dev';

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const albumsRef = databaseRef.child('albums');

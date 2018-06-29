import * as firebase from 'firebase';
import { firebaseConfig } from 'app/configs/dev';

firebase.initializeApp(firebaseConfig);
export const database = firebase.database();

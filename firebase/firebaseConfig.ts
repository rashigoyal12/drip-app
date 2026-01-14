import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChploHacIQbHNaBnHb6mjRPX3NvV7dvY0",
  authDomain: "sway-fd97e.firebaseapp.com",
  projectId: "sway-fd97e",
  storageBucket: "sway-fd97e.appspot.com",
  messagingSenderId: "193523931916",
  appId: "1:193523931916:web:28a695f9721b8ea2534729",
};

const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

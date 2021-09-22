import { initializeApp } from "firebase/app";
import {
  getFirestore,
  // collection,
  // query,
  // where,
  // getDocs,
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// https://stackoverflow.com/questions/68946446/how-do-i-fix-a-firebase-9-0-import-error-attempted-import-error-firebase-app

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  // const userRef = app.getDocs(`users/${userAuth.uid}`);
  // const snapShot = await userRef.get();

  // console.log(snapShot);
};

export const auth = getAuth();
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = async () =>
  await signInWithPopup(auth, provider);

export default app;

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
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
export const auth = getAuth();
export const firestore = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  console.log("userAuth.uid", `${userAuth.uid}`);
  const userRef = doc(firestore, "users", `${userAuth.uid}`);
  // const userRef = doc(firestore, "users", "z96H7HhXJo5TQvs5Ii5g");
  const userShot = await getDoc(userRef);
  if (!userShot.exists()) {
    // 在 firestore 沒找到, 新增一筆
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log(displayName, email);
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  console.log("userShot", userShot);
  return userRef;
};

// 登入/註冊 跳出google帳號選擇
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = async () =>
  await signInWithPopup(auth, provider);

export default app;

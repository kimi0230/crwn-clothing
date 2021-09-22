import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firestore = firebase.firestore();
firestore
  .collection("users")
  .doc("z96H7HhXJo5TQvs5Ii5g")
  .collection("cartItems")
  .doc("QqBcP4sYwXlKXnmvs1yB");

firestore.doc("users/z96H7HhXJo5TQvs5Ii5g/cartItems/QqBcP4sYwXlKXnmvs1yB");
firestore.collection("users/z96H7HhXJo5TQvs5Ii5g/cartItems");

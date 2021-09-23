import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./views/homepage/homepage";
import ShopPage from "./views/shop/shop";
import SignInSignUpPage from "./views/signin_signup/signin_signup";
import Header from "./components/header/header.component.js";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // 帳號登入後, 狀態會產生變化
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // https://firebase.google.com/docs/firestore/query-data/listen#web-version-9
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (doc) => {
          // console.log("Snapshot data: ", doc.data());
          // console.log("Snapshot id: ", doc.id);
          this.setState(
            {
              currentUser: {
                id: doc.id,
                ...doc.data(),
              },
            },
            () => {
              // console.log("currentUser: ", this.state);
            }
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    // Whenever we call the onAuthStateChanged() or onSnapshot() methods from our auth  library or referenceObject, we get back a function that lets us unsubscribe from the listener we just instantiated. Which lifecycle method should we use to call that unsubscribe method in?
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInSignUpPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

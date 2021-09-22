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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // https://firebase.google.com/docs/firestore/query-data/listen#web-version-9
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (doc) => {
          console.log("Current data: ", doc.data());
          this.setState({
            currentUser: {
              id: doc.id,
              ...doc.data(),
            },
          });
        });

        console.log("[NEW] this.state : ", this.state);
      }

      // console.log("this.state : ", this.state);
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
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

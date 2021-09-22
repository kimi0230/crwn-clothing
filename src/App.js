import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./views/homepage/homepage";
import ShopPage from "./views/shop/shop";
import SignInSignUpPage from "./views/signin_signup/signin_signup";
import Header from "./components/header/header.component.js";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
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
        createUserProfileDocument(userAuth);
        console.log("this.state : ", this.state);
      }

      this.setState({ currentUser: userAuth });
    });

    // auth.onAuthStateChanged((user) => {
    //   this.setState({ currentUser: user }, console.log(user));
    // });
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

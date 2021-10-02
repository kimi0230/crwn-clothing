import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import Header from "./components/header/header.component";
import HomePage from "./views/homepage/homepage";
import ShopPage from "./views/shop/shop";
import CheckoutPage from "./views/checkout/checkout";
import SignInSignUpPage from "./views/signin_signup/signin_signup";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";

import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // 帳號登入後, 狀態會產生變化
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // https://firebase.google.com/docs/firestore/query-data/listen#web-version-9
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (doc) => {
          // console.log("Snapshot id: ", doc.id);
          setCurrentUser({
            id: doc.id,
            ...doc.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    // Whenever we call the onAuthStateChanged() or onSnapshot() methods from our auth  library or referenceObject, we get back a function that lets us unsubscribe from the listener we just instantiated. Which lifecycle method should we use to call that unsubscribe method in?
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header />
          <Switch>
            {/* exact控制匹配到/路徑時不會再繼續向下匹配 */}
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInSignUpPage />
                )
              }
            />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

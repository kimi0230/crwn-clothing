import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser, checkUserSession } from "./redux/user/user.actions";

import Header from "./components/header/header.component";
import HomePage from "./views/homepage/homepage";
import ShopPage from "./views/shop/shop";
import CheckoutPage from "./views/checkout/checkout";
import SignInSignUpPage from "./views/signin_signup/signin_signup";

import "./App.css";

const App = () => {
  const currentUser = useSelector(setCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]); // 這樣寫 dispatch只會執行一次

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
              currentUser ? (
                // 登入後跳轉至首頁
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
};

export default App;

import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser, checkUserSession } from "./redux/user/user.actions";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
// import { default as HeaderGQL } from "./components/header/header.container_gql";

// import "./App.css";
import { GlobalStyle } from "./global.styles";
import SignInSignUpPage from "./views/signin_signup/signin_signup";

const HomePage = lazy(() => import("./views/homepage/homepage"));
const ShopPage = lazy(() => import("./views/shop/shop"));
const ShopPageGQL = lazy(() => import("./views/shop/shop_gql"));
const CheckoutPage = lazy(() => import("./views/checkout/checkout"));
// const SignInSignUpPage = lazy(() =>
//   import("./views/signin_signup/signin_signup")
// );

const App = () => {
  const currentUser = useSelector(setCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]); // 這樣寫 dispatch只會執行一次

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <GlobalStyle />
        <Header />
        {/* <HeaderGQL /> */}
        <Switch>
          <Suspense fallback={<Spinner />}>
            {/* exact控制匹配到/路徑時不會再繼續向下匹配 */}
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/shopGQL" component={ShopPageGQL} />
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
          </Suspense>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

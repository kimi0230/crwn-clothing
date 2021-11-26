import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
// import { default as HeaderGQL } from "./components/header/header.container_gql";

// import "./App.css";
import { GlobalStyle } from "./global.styles";

import ErrorBoundary from "./components/error_boundary/error-boundary.component";

const HomePage = lazy(() => import("./views/homepage/homepage"));
const ShopPage = lazy(() => import("./views/shop/shop"));
const ShopPageGQL = lazy(() => import("./views/shop/shop_gql"));
const CheckoutPage = lazy(() => import("./views/checkout/checkout"));
const SignInSignUpPage = lazy(() =>
  import("./views/signin_signup/signin_signup")
);

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <GlobalStyle />
        <Header />
        {/* <HeaderGQL /> */}
        <Switch>
          <ErrorBoundary>
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
          </ErrorBoundary>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

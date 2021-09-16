import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./views/homepage/homepage";
import ShopPage from "./views/shop/shop";
import SignInSignUpPage from "./views/signin_signup/signin_signup";
import Header from "./components/header/header.component.js";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

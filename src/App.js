import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./views/homepage/homepage";
import ShopPage from "./views/shop/shop";
import Header from "./components/header/header.component.js";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

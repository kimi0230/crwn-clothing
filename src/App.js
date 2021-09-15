import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./views/homepage/homepage";
import ShopPage from "./views/shop/shop";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={ShopPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

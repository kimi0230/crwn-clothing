import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping_bag.svg";
import "./cart_icon.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ToggleCartHidden } from "../../graphql/schema";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ itemCount }) => (
  <div className="cart-icon" onClick={ToggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);

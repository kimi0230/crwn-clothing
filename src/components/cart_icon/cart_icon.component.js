import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping_bag.svg";
import "./cart_icon.styles.scss";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity,
    0
  ),
});

const mapDispatchToProps = (dispatch) => ({
  // toggleCartHidden: () 帶入到 const CartIcon = ({ toggleCartHidden }) => (
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

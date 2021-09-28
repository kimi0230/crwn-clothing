import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom_button/custom_button.component";
import CartItem from "../cart_item/cart_item.componemt";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cart_dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

// function mapStateToProps(state, ownProps?)
// 將 redux的 state 給 componet的 props
// https://react-redux.js.org/using-react-redux/connect-mapstate
// ({ cart: { cartItems } })} 的 cart 是 root_reducer.js 的 cart
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);

import React from "react";
import CustomButton from "../custom_button/custom_button.component";

import "./cart_dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;

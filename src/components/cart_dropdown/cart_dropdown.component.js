import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom_button/custom_button.component";
import CartItem from "../cart_item/cart_item.componemt";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";

import "./cart_dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

// function mapStateToProps(state, ownProps?)
// 將 redux的 state 給 componet的 props
// https://react-redux.js.org/using-react-redux/connect-mapstate
// ({ cart: { cartItems } })} 的 cart 是 root_reducer.js 的 cart
// const mapStateToProps = (state) => ({
//   cartItems: selectCartItems(state),
// });

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// withRouter：一個HOC，可以把match、location、history當成props傳入component中
// withRouter 將在每次使用與渲染相同的道具改變路線時重新渲染其組件props: { match, location, history }
export default withRouter(connect(mapStateToProps)(CartDropdown));

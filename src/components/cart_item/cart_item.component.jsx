import React from "react";
import "./cart_item.styles.scss";

const cartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item"></img>
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        ${price} x {quantity}
      </span>
    </div>
  </div>
);

export default React.memo(cartItem);

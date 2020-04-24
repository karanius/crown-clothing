import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
      {console.log(cartItems)}
        {cartItems.map((cartItem,index) => (
          <CartItem key={index} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
const mapStateToProp = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProp)(CartDropdown);

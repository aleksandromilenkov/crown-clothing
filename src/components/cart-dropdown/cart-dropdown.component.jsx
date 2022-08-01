import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = (props) => {
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown" style={{}}>
      <div className="cart-items">
        {props.cartItems.length !== 0 ? (
          props.cartItems.map((val, idx) => {
            return <CartItem key={idx} item={val} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty.</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          props.dispatch(toggleCartHidden());
          navigate("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);

import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem, clearItem } from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt="item" />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItem.bind(null, cartItem)}>
          {" "}
          &#10094;{" "}
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={addItem.bind(null, cartItem)}>
          {" "}
          &#10095;{" "}
        </div>
      </span>
      <span className="price">${cartItem.price}</span>
      <div className="remove-button" onClick={clearItem.bind(null, cartItem)}>
        ❌
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

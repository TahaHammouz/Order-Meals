import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemsToCartHandler = (item) => {};
  const removeItemsfromCartHandler = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemsToCartHandler,
    removeItem: removeItemsfromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

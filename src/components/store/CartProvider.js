// import React from "react";
// import CartContext from "./cart-context";
// import { useReducer } from "react";

// const defaultState = {
//   items: [],
//   totalAmount: 0,
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD":
//       const updateitems = state.items.concat(action.items);
//       const updateAmount =
//         state.totalAmount + action.item.price * action.item.amount;
//       return {
//         items: updateitems,
//         totalAmount: updateAmount,
//       };
//       default:
//         return defaultState;
//   }

// };
// const CartProvider = (props) => {
//   const [CartState, CartDispatch] = useReducer(reducer, defaultState);
//   const addItemsToCartHandler = (item) => {
//     CartDispatch({ type: "ADD", item: item });
//   };
//   const removeItemsfromCartHandler = (id) => {
//     CartDispatch({ type: "REMOVE", id: id });
//   };
//   const cartContext = {
//     items: CartState.items,
//     totalAmount: CartState.totalAmount,
//     addItem: addItemsToCartHandler,
//     removeItem: removeItemsfromCartHandler,
//   };
//   return (
//     <CartContext.Provider value={cartContext}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;
import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,     
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

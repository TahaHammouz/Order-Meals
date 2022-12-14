import React, { useState } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

  const RemoveitemHandler = (id) => {
    ctx.removeItem(id);
  };

  const AdditemHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const cartlist = (
    <ul className={styles["cart-items"]}>
      {ctx.items.map((item, key) => (
        <CartItem
          key={key.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={RemoveitemHandler.bind(null, item.id)}
          onAdd={AdditemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const orderbutton = ctx.items.length > 0;
  return (
    <Modal HiddenOverlay={props.HiddenOverlay}>
      {cartlist}
      <div>
        <span className={styles.total}> Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        {orderbutton && (
          <button className={styles["button--alt"]}>Order</button>
        )}
        <button className={styles.button} onClick={props.HiddenOverlay}>
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default Cart;

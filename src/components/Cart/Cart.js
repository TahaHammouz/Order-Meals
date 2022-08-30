import React, { useState } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const cartlist = (
    <ul className={styles["cart-items"]}>
      {ctx.items.map((item, key) => (
        <li key={key}>{item.name}</li>
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

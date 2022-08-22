import React, { useState } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
const Cart = (props) => {
  const cartlist = (
    <ul className={styles["cart-items"]}>
      {[{ id: "1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal HiddenOverlay={props.HiddenOverlay}>
      {cartlist}
      <div>
        <span className={styles.total}> Total Amount</span>
        <span>35.22</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Order</button>
        <button className={styles.button} onClick={props.HiddenOverlay}>
          Cancel
        </button>
      </div>
      </Modal>
  );
};

export default Cart;

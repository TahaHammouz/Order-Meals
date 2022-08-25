import React from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCardButton.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";
const HeaderCardButton = (props) => {
  const ctx = useContext(CartContext);
  const Cartitemsnumber = ctx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.isShow}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{Cartitemsnumber}</span>
    </button>
  );
};

export default HeaderCardButton;

import React from "react";
import styles from "./MealItems.module.css";
import MealitemsForm from "./MealitemsForm";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const MealItems = (props) => {
  const Ctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const onAddHandler = (amount) => {
    Ctx.addItem({
      id: props.id,
      price: props.price,
      amount: amount,
      name: props.name,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealitemsForm id={props.id} onAddHandler={onAddHandler} />
      </div>
    </li>
  );
};
export default MealItems;

import React from "react";
import styles from "./MealItems.module.css";
import MealitemsForm from "./MealitemsForm";

const MealItems = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealitemsForm />
      </div>
    </li>
  );
};

export default MealItems;

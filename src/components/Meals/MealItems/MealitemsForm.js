import Input from "../../UI/Input";
import React from "react";
import styles from "./MealitemsForm.module.css";

const MealitemsForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          defaultValue: "1",
          type: "number",
          steps: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealitemsForm;

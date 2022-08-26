import Input from "../../UI/Input";
import React, { useRef } from "react";
import styles from "./MealitemsForm.module.css";

const MealitemsForm = (props) => {
  const AmountinputRef = useRef();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(AmountinputRef.current.value);
  };
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <Input
        ref={AmountinputRef}
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

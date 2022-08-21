import React, { Fragment } from "react";
import styles from "./Header.module.css";
import image from "../../assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton/>
      </header>
      <div className={styles["main-image"]}>
        <img src={image} alt="table of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;

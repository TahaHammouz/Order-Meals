import React, { Fragment } from "react";
import styles from "./Header.module.css";
import image from "../../assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton isShow={props.OverlayisShow}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={image} alt="table of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;

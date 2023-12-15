import React, { ReactElement } from "react";
import styles from "./notFound.module.scss";
import { NavLink } from "react-router-dom";

const NotFound = (): ReactElement => {
  return (
    <article className={styles.container}>
      <section className={styles.text}>
        <p className={styles.notFound}>We were told there was nothing here 😞</p>
        <p>But you can always go back to the tablet or look at Ethereum</p>
      </section>
      <section className={styles.buttons}>
        <NavLink className={styles.button} to="/">
          Home
        </NavLink>
        <NavLink className={styles.button} to="/coin/ethereum">
          Ethereum
        </NavLink>
      </section>
    </article>
  );
};

export default NotFound;

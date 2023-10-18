import React, { ReactElement } from "react";
import styles from "./notFound.module.scss";
import { NavLink } from "react-router-dom";

const NotFound = (): ReactElement => {
  return (
    <main className={styles.container}>
      <section className={styles.text}>
        <p className={styles.notFound}>Мы ничего не нашли 😞</p>
        <p>
          Но вы всегда можете вернуться к табличке или посмотреть на Ethereum
        </p>
      </section>
      <section className={styles.buttons}>
        <NavLink className={styles.button} to="/">
          Home
        </NavLink>
        <NavLink className={styles.button} to="/coin/ethereum">
          Ethereum
        </NavLink>
      </section>
    </main>
  );
};

export default NotFound;

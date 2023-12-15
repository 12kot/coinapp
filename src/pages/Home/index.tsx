import React from "react";
import styles from "./home.module.scss";
import TableLayout from "layouts/Table";

const Main = () => {
  return (
    <article className={styles.container}>
      <header>
        <h1>LOGO - the best information about coins</h1>
        <p>Millions choose us!</p>
      </header>
      <section className={styles.table}>
        <TableLayout />
      </section>
    </article>
  );
};

export default Main;

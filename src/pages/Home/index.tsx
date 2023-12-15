import React from "react";
import styles from "./home.module.scss";
import TableContainer from "containers/Table/TableContainer";

const Main = () => {
  return (
    <article className={styles.container}>
      <header>
        <h1>LOGO - the best information about coins</h1>
        <p>Millions choose us!</p>
      </header>
      <section className={styles.table}>
        <TableContainer />
      </section>
    </article>
  );
};

export default Main;

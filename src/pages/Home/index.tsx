import React from "react";
import styles from "./home.module.scss";
import TableLayout from "layouts/Table";

const Main = () => {
  return (
    <main className={styles.container}>
      <header>
        <h1>LOGO - the best information about coins</h1>
        <p>Millions choose us!</p>
      </header>
      <section className={styles.table}>
        <TableLayout />
      </section>
    </main>
  );
};

export default Main;

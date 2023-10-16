import React from "react";
import styles from "./home.module.scss";
import Table from "components/Table";

const Main = () => {
  return (
    <main className={styles.container}>
      <header>
        <h1>LOGO - the best information about coins</h1>
        <p>Millions choose us!</p>
      </header>
      <section className={styles.table}>
        <Table />
      </section>
    </main>
  );
};

export default Main;

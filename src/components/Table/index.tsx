import React, { ReactElement } from "react";
import styles from "./table.module.scss";
import Thead from "./Thead";
import Tbody from "./Tbody";

const Table = (): ReactElement => {
  return (
    <table className={styles.container}>
      <Thead />
      <Tbody />
    </table>
  );
};

export default Table;

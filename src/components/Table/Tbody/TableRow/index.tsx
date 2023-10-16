import React from "react";
import styles from "./tableRow.module.scss";

const TableRow = () => {
  return (
    <tr className={styles.item}>
      <td>Add</td>
      <td>#</td>
      <td>Name</td>
      <td>Price</td>
      <td>Volume</td>
      <td>24h %</td>
    </tr>
  );
};

export default TableRow;

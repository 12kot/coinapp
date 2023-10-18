import React from "react";
import styles from "./tableRow.module.scss";
import { TCoin } from "types/coin";
import { NavLink } from "react-router-dom";

interface Props {
  coin: TCoin;
}

const TableRow = ({ coin }: Props) => {
  return (
    <NavLink to={`/coin/${coin.id}`} className={styles.item}>
      <span className={styles.rowItem}>+</span>
      <span className={styles.rowItem}>{coin.rank}</span>
      <div className={styles.rowItem}>
        {coin.name}
        <p className={styles.symbol}>{coin.symbol}</p>
      </div>
      <div className={styles.rowItem}>${(+coin.priceUsd).toFixed(2)}</div>
      <div className={styles.rowItem}>{(+coin.volumeUsd24Hr).toFixed(2)}</div>
      <div
        className={` ${styles.rowItem} ${
          +coin.changePercent24Hr > 0 ? styles.green : styles.red
        }`}
      >
        {(+coin.changePercent24Hr).toFixed(2)}%
      </div>
    </NavLink>
  );
};

export default TableRow;
